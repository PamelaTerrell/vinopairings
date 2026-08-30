'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Viv — Your Virtual Sommelier
 *
 * - Uses only /api/ai/stream
 * - Viv's instructions and model settings stay server-side
 * - No automatic second paid OpenAI request
 * - Uses simple application-owned SSE events
 * - Explicit retry after failures
 * - 500-character client-side question limit
 * - Stores up to 6 completed conversation messages locally
 * - Does not send question text to analytics
 * - Supports collapse, close, Alt/Option+M, Esc, and viv-open
 */

const HISTORY_KEY = 'vp_viv_history_v1';
const COLLAPSED_KEY = 'vp_viv_collapsed';

const MAX_HISTORY_MSGS = 6;
const MAX_QUERY_CHARS = 500;
const MAX_STORED_MSG_CHARS = 1000;

const LONG_MSG =
  'That’s quite a long note 🍷 — could you shorten your question a bit? Viv works best with messages under 500 characters.';

const GENERIC_ERROR =
  'Viv is having trouble answering right now. Please try again.';

const RATE_LIMIT_ERROR =
  'Viv has received several questions from you recently. Please wait a moment and try again. 🍷';

const TIMEOUT_ERROR =
  'Viv took a little too long to answer. Please try again.';

export default function ChatWidget({
  title = 'Viv, Your Virtual Sommelier',
  subtitle = 'Ask about pairings, tasting notes, regions, or budgets',
  placeholder = 'Ask Viv… e.g., “Pinot Noir with salmon or duck?”',
}) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [input, setInput] = useState('');
  const [streamText, setStreamText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [lastFailedQuery, setLastFailedQuery] = useState('');
  const [history, setHistory] = useState([]);

  const abortRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);

  // ------------------------------------
  // ANALYTICS
  // ------------------------------------

  // We deliberately do NOT send the visitor's
  // question or response text to analytics.
  const track = (action, params = {}) => {
    if (
      typeof window !== 'undefined' &&
      typeof window.gtag === 'function'
    ) {
      window.gtag('event', action, {
        event_category: 'ai_widget',
        ...params,
      });
    }
  };

  // ------------------------------------
  // COLLAPSED STATE
  // ------------------------------------

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COLLAPSED_KEY);

      if (saved != null) {
        setCollapsed(saved === '1');
      }
    } catch {
      // localStorage may be unavailable.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        COLLAPSED_KEY,
        collapsed ? '1' : '0'
      );
    } catch {
      // localStorage may be unavailable.
    }
  }, [collapsed]);

  // ------------------------------------
  // CONVERSATION HISTORY
  // ------------------------------------

  useEffect(() => {
    try {
      const saved = localStorage.getItem(HISTORY_KEY);

      if (!saved) return;

      const parsed = JSON.parse(saved);

      if (!Array.isArray(parsed)) return;

      const safeHistory = parsed
        .filter(
          (message) =>
            message &&
            typeof message === 'object' &&
            (message.role === 'user' ||
              message.role === 'assistant') &&
            typeof message.content === 'string'
        )
        .map((message) => ({
          role: message.role,
          content: message.content
            .trim()
            .slice(0, MAX_STORED_MSG_CHARS),
        }))
        .filter((message) => message.content.length > 0)
        .slice(-MAX_HISTORY_MSGS);

      setHistory(safeHistory);
    } catch {
      // Ignore malformed/unavailable history.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history)
      );
    } catch {
      // localStorage may be unavailable.
    }
  }, [history]);

  const trimHistory = (messages) =>
    messages.slice(-MAX_HISTORY_MSGS);

  // ------------------------------------
  // KEYBOARD
  // ------------------------------------

  const isEditableTarget = (element) => {
    if (!element) return false;

    const tag = element.tagName?.toLowerCase();

    if (
      tag === 'input' ||
      tag === 'textarea' ||
      tag === 'select'
    ) {
      return true;
    }

    return Boolean(element.isContentEditable);
  };

  useEffect(() => {
    const onKey = (event) => {
      if (!open) return;
      if (isEditableTarget(event.target)) return;

      if (
        (event.key === 'm' || event.key === 'M') &&
        (event.altKey || event.metaKey)
      ) {
        event.preventDefault();

        setCollapsed((current) => !current);

        track('ai_widget_collapse_toggle', {
          via: 'alt+m',
        });

        return;
      }

      if (event.key === 'Escape') {
        closeViv('esc');
      }
    };

    window.addEventListener('keydown', onKey);

    return () =>
      window.removeEventListener('keydown', onKey);
  }, [open]);

  // ------------------------------------
  // EXTERNAL OPEN EVENT
  // ------------------------------------

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setCollapsed(false);
    };

    window.addEventListener('viv-open', onOpen);

    return () =>
      window.removeEventListener('viv-open', onOpen);
  }, []);

  // ------------------------------------
  // FOCUS
  // ------------------------------------

  useEffect(() => {
    if (!open || collapsed) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 180);

    return () => clearTimeout(timer);
  }, [open, collapsed]);

  // ------------------------------------
  // AUTO-SCROLL
  // ------------------------------------

  useEffect(() => {
    if (!open || collapsed) return;

    const element = panelRef.current;

    if (!element) return;

    const raf = requestAnimationFrame(() => {
      element.scrollTop = element.scrollHeight;
    });

    return () => cancelAnimationFrame(raf);
  }, [
    streamText,
    errorText,
    isLoading,
    open,
    collapsed,
  ]);

  // ------------------------------------
  // SEND
  // ------------------------------------

  async function send(rawQuery) {
    const cleanQ = String(rawQuery || '').trim();

    if (cleanQ.length < 2 || isLoading) {
      return;
    }

    if (cleanQ.length > MAX_QUERY_CHARS) {
      setErrorText(LONG_MSG);
      return;
    }

    setIsLoading(true);
    setStreamText('');
    setErrorText('');
    setLastFailedQuery('');

    /*
     * Only PREVIOUS completed messages are sent.
     *
     * The current question is NOT inserted into history
     * before the request because the server adds it
     * separately.
     */
    const historyForRequest = trimHistory(history);

    track('ai_widget_send');

    let gotAnyText = false;
    let full = '';
    let timeout = null;

    try {
      if (abortRef.current) {
        abortRef.current.abort();
      }

      const controller = new AbortController();
      abortRef.current = controller;

      const response = await fetch('/api/ai/stream', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        signal: controller.signal,

        body: JSON.stringify({
          query: cleanQ,
          history: historyForRequest,
        }),
      });

      // Vercel Firewall rate limit.
      if (response.status === 429) {
        throw new Error(RATE_LIMIT_ERROR);
      }

      if (!response.ok || !response.body) {
        throw new Error(GENERIC_ERROR);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      /*
       * If no response begins within 12 seconds,
       * abort this request.
       *
       * We do NOT silently start a second OpenAI request.
       */
      timeout = setTimeout(() => {
        if (!gotAnyText) {
          controller.abort();
        }
      }, 12000);

      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        buffer += decoder.decode(value, {
          stream: true,
        });

        buffer = buffer.replace(/\r\n/g, '\n');

        const events = buffer.split('\n\n');

        buffer = events.pop() || '';

        for (const eventBlock of events) {
          let eventName = 'message';
          let dataString = '';

          for (const line of eventBlock.split('\n')) {
            const colonIndex = line.indexOf(':');

            if (colonIndex === -1) continue;

            const key = line
              .slice(0, colonIndex)
              .trim();

            const value = line
              .slice(colonIndex + 1)
              .trim();

            if (key === 'event') {
              eventName = value;
            }

            if (key === 'data') {
              dataString +=
                (dataString ? '\n' : '') + value;
            }
          }

          if (!dataString) continue;

          let parsed;

          try {
            parsed = JSON.parse(dataString);
          } catch {
            continue;
          }

          // --------------------------------
          // VINO PAIRINGS SSE EVENTS
          // --------------------------------

          if (
            eventName === 'delta' &&
            typeof parsed?.text === 'string'
          ) {
            gotAnyText = true;

            full += parsed.text;

            setStreamText(full);

            continue;
          }

          if (eventName === 'done') {
            continue;
          }

          if (eventName === 'error') {
            const message =
              typeof parsed?.error === 'string'
                ? parsed.error
                : GENERIC_ERROR;

            throw new Error(message);
          }
        }
      }

      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      if (!gotAnyText) {
        throw new Error(GENERIC_ERROR);
      }

      /*
       * Store the completed turn only after Viv
       * successfully answers.
       */
      setHistory((current) =>
        trimHistory([
          ...current,
          {
            role: 'user',
            content: cleanQ,
          },
          {
            role: 'assistant',
            content: full,
          },
        ])
      );

      track('ai_widget_done');
    } catch (error) {
      if (timeout) {
        clearTimeout(timeout);
      }

      const wasAborted =
        error?.name === 'AbortError';

      setErrorText(
        wasAborted
          ? TIMEOUT_ERROR
          : error?.message || GENERIC_ERROR
      );

      setLastFailedQuery(cleanQ);

      track('ai_widget_error');
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }

  // ------------------------------------
  // RETRY
  // ------------------------------------

  function retryLastQuestion() {
    if (!lastFailedQuery || isLoading) {
      return;
    }

    send(lastFailedQuery);
  }

  // ------------------------------------
  // CLOSE
  // ------------------------------------

  function closeViv(via) {
    if (abortRef.current) {
      abortRef.current.abort();
    }

    setOpen(false);

    track('ai_widget_toggle', {
      open: false,
      via,
    });
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        title="Chat with Viv"
        aria-label="Chat with Viv"
        aria-expanded={open}
        aria-controls="viv-chat-panel"
        data-open={open ? 'true' : 'false'}
        onClick={() => {
          const next = !open;

          if (!next && abortRef.current) {
            abortRef.current.abort();
          }

          setOpen(next);

          if (next) {
            setCollapsed(false);
          }

          track('ai_widget_toggle', {
            open: next,
          });
        }}
        style={{
          position: 'fixed',
          right: 16,
          bottom: 16,
          zIndex: 2147483647,
          width: 70,
          height: 70,
          borderRadius: '50%',
          border: 'none',
          background:
            'linear-gradient(135deg, #7B1E3F, #C59B5F)',
          color: '#fff',
          fontSize: 36,
          lineHeight: 1,
          boxShadow:
            '0 10px 25px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition:
            'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(event) => {
          event.currentTarget.style.transform =
            'scale(1.05)';
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.transform =
            'scale(1)';
        }}
      >
        🍷
      </button>

      {/* Slide-up Panel */}
      <div
        id="viv-chat-panel"
        role="dialog"
        aria-label="Viv virtual sommelier"
        aria-hidden={!open}
        style={{
          position: 'fixed',
          right: 16,
          bottom: open ? 96 : 80,
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',
          transform: `translateY(${open ? 0 : 6}px)`,
          transition:
            'opacity 160ms ease, transform 160ms ease, visibility 160ms ease',
          zIndex: 2147483647,
          width: 'min(92vw, 380px)',
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid #D8CFC4',
            borderRadius: 16,
            boxShadow:
              '0 20px 40px rgba(0,0,0,.25)',
            transition: 'height 180ms ease',
            height: collapsed ? 64 : '50vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            onDoubleClick={() => {
              setCollapsed((current) => !current);

              track('ai_widget_collapse_toggle', {
                via: 'dblclick',
              });
            }}
            style={{
              padding: '10px 12px',
              background: '#f7efe4',
              borderBottom: '1px solid #E8DFD3',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              userSelect: 'none',
              flex: '0 0 auto',
            }}
          >
            <button
              type="button"
              aria-label={
                collapsed ? 'Expand Viv' : 'Collapse Viv'
              }
              title={
                collapsed ? 'Expand' : 'Collapse'
              }
              onClick={(event) => {
                event.stopPropagation();

                setCollapsed((current) => !current);

                track('ai_widget_collapse_toggle', {
                  via: 'button',
                });
              }}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: 16,
                lineHeight: 1,
                transform: `rotate(${
                  collapsed ? 180 : 0
                }deg)`,
                transition: 'transform 160ms ease',
              }}
            >
              ▾
            </button>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#7B1E3F',
                }}
              >
                {title}
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: '#6b7280',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {subtitle}
              </div>
            </div>

            <button
              type="button"
              aria-label="Close Viv"
              title="Close"
              onClick={() => closeViv('close_btn')}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: 16,
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {!collapsed && (
            <>
              {/* Messages */}
              <div
                ref={panelRef}
                role="status"
                aria-live="polite"
                aria-atomic="false"
                style={{
                  padding: '12px 12px 18px',
                  fontSize: 14,
                  color: '#374151',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.6,
                  overflow: 'auto',
                  flex: 1,
                }}
              >
                {!streamText &&
                  !isLoading &&
                  !errorText && (
                    <em style={{ color: '#6b7280' }}>
                      Bonjour! 🍷 I’m{' '}
                      <strong>Viv</strong>, your
                      sommelier. Ask me about pairings,
                      wine styles, or what to serve
                      tonight — I’ll help you find a
                      delicious match.
                    </em>
                  )}

                {!!streamText && (
                  <div>{streamText}</div>
                )}

                {isLoading && (
                  <div style={{ color: '#6b7280' }}>
                    Viv is thinking…
                  </div>
                )}

                {!!errorText && (
                  <div>
                    <div style={{ color: '#b91c1c' }}>
                      {errorText}
                    </div>

                    {!!lastFailedQuery &&
                      !isLoading && (
                        <button
                          type="button"
                          onClick={retryLastQuestion}
                          style={{
                            marginTop: 10,
                            border:
                              '1px solid #C59B5F',
                            borderRadius: 10,
                            padding: '6px 10px',
                            background: '#fff',
                            color: '#7B1E3F',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          Try Again
                        </button>
                      )}
                  </div>
                )}
              </div>

              {/* Input */}
              <form
                onSubmit={(event) => {
                  event.preventDefault();

                  const q = input.trim();

                  if (q.length >= 2) {
                    send(q);
                    setInput('');
                  }
                }}
                style={{
                  display: 'flex',
                  gap: 8,
                  padding: 12,
                  borderTop: '1px solid #E8DFD3',
                  flex: '0 0 auto',
                  background: '#fff',
                }}
              >
                <label
                  htmlFor="viv-question"
                  style={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  }}
                >
                  Ask Viv a wine question
                </label>

                <input
                  ref={inputRef}
                  id="viv-question"
                  type="text"
                  value={input}
                  maxLength={MAX_QUERY_CHARS}
                  autoComplete="off"
                  onChange={(event) => {
                    setInput(event.target.value);

                    if (errorText) {
                      setErrorText('');
                    }
                  }}
                  placeholder={placeholder}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    border: '1px solid #D8CFC4',
                    borderRadius: 12,
                    padding: '8px 10px',
                    outline: 'none',
                  }}
                />

                <button
                  type="submit"
                  disabled={
                    isLoading ||
                    input.trim().length < 2
                  }
                  style={{
                    border: 'none',
                    borderRadius: 12,
                    padding: '8px 14px',
                    fontWeight: 700,
                    color: '#fff',
                    background: '#C59B5F',
                    opacity:
                      isLoading ||
                      input.trim().length < 2
                        ? 0.6
                        : 1,
                    cursor:
                      isLoading ||
                      input.trim().length < 2
                        ? 'not-allowed'
                        : 'pointer',
                  }}
                >
                  Send
                </button>
              </form>

              <div
                style={{
                  padding: '6px 12px',
                  fontSize: 11,
                  color: '#6b7280',
                  textAlign: 'center',
                  flex: '0 0 auto',
                  background: '#fff',
                }}
              >
                AI suggestions may be imperfect. Verify
                availability and prices locally.
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}