'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Viv — Your Virtual Sommelier (VinoPairings)
 * - Streams from /api/ai/stream (SSE), falls back to /api/ai
 * - Ultra-high z-index; collapse/minimize support
 * - Safe keyboard shortcuts (Alt+M) and ignores keystrokes while typing
 * - Listens for a custom window event: window.dispatchEvent(new CustomEvent('viv-open'))
 * - Conversational memory (last N messages) + localStorage persistence
 * - FIX: robust scrolling + flex layout so input never disappears
 */

const SOMM_SYSTEM = [
  'You are a professional female sommelier and wine educator named “Viv” who works for VinoPairings.com.',
  'Your tone is warm, elegant, and confident—never robotic. Keep answers concise and conversational.',
  'Explain pairing rationale in natural language (aroma, texture, acidity, body, sweetness, tannin).',
  'Prioritize practical, affordable bottles; optionally offer one premium alternative.',
  'If asked about non-wine topics, reply briefly and gracefully steer back to wine.',
  'Avoid exaggerated gendered stereotypes; remain professional and welcoming.'
].join(' ');

const HISTORY_KEY = 'vp_viv_history_v1';
const MAX_HISTORY_MSGS = 6; // last 6 messages total (user+assistant entries)

export default function ChatWidget({
  title = 'Viv, Your Virtual Sommelier',
  subtitle = 'Ask about pairings, tasting notes, regions, or budgets',
  placeholder = 'Ask Viv… e.g., “Pinot Noir with salmon or duck?”',
  system, // optional override for system prompt
}) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [input, setInput] = useState('');
  const [streamText, setStreamText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Conversational memory
  const [history, setHistory] = useState([]);

  const abortRef = useRef(null);
  const panelRef = useRef(null);

  const Z = 2147483647;

  const track = (action, params = {}) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, { event_category: 'ai_widget', ...params });
    }
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: action, event_category: 'ai_widget', ...params });
    }
  };

  // Restore/save collapsed
  useEffect(() => {
    try {
      const saved = localStorage.getItem('vp_viv_collapsed');
      if (saved != null) setCollapsed(saved === '1');
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem('vp_viv_collapsed', collapsed ? '1' : '0');
    } catch {}
  }, [collapsed]);

  // Restore/save history
  useEffect(() => {
    try {
      const saved = localStorage.getItem(HISTORY_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setHistory(parsed);
      }
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch {}
  }, [history]);

  // Helper: ignore shortcuts when user is typing
  const isEditableTarget = (el) => {
    if (!el) return false;
    const tag = el.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
    if (el.isContentEditable) return true;
    return false;
  };

  // Keyboard shortcuts: Alt+M to collapse/expand; Esc to close
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (isEditableTarget(e.target)) return;

      if ((e.key === 'm' || e.key === 'M') && (e.altKey || e.metaKey)) {
        e.preventDefault();
        setCollapsed((c) => !c);
        track('ai_widget_collapse_toggle', { via: 'alt+m' });
        return;
      }
      if (e.key === 'Escape') {
        setOpen(false);
        track('ai_widget_toggle', { open: false, via: 'esc' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Listen for a page-level event to open the widget without toggling
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('viv-open', onOpen);
    return () => window.removeEventListener('viv-open', onOpen);
  }, []);

  const trimHistory = (arr) => arr.slice(-MAX_HISTORY_MSGS);

  // FIX: robust auto-scroll AFTER DOM paints, so the input never "falls below" visible area
  useEffect(() => {
    if (!open || collapsed) return;
    const el = panelRef.current;
    if (!el) return;

    const raf = requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });

    return () => cancelAnimationFrame(raf);
  }, [streamText, isLoading, open, collapsed]);

  async function send(q) {
    if (!q || q.trim().length < 2 || isLoading) return;

    setIsLoading(true);
    setStreamText('');
    setErrorText('');

    const cleanQ = q.trim();

    // history we send this turn (include user msg)
    const nextHistory = trimHistory([...history, { role: 'user', content: cleanQ }]);
    setHistory(nextHistory);

    track('ai_widget_send', { q_preview: cleanQ.slice(0, 80) });

    let gotAnyText = false;
    let full = '';

    try {
      if (abortRef.current) abortRef.current.abort();
      const ac = new AbortController();
      abortRef.current = ac;

      const res = await fetch('/api/ai/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: ac.signal,
        body: JSON.stringify({
          query: cleanQ,
          history: nextHistory,
          system: system ?? SOMM_SYSTEM,
          temperature: 0.7,
        }),
      });

      if (!res.ok || !res.body) {
        const txt = await res.text().catch(() => '');
        throw new Error(txt || 'Streaming request failed');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');

      // Allow cold starts / first-token delay
      const timeout = setTimeout(() => {
        if (!gotAnyText) {
          try { ac.abort(); } catch {}
        }
      }, 12000);

      let buffer = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        buffer = buffer.replace(/\r\n/g, '\n');
        const events = buffer.split('\n\n');
        buffer = events.pop() || '';

        for (const evt of events) {
          let eventName = 'message';
          let dataStr = '';

          for (const line of evt.split('\n')) {
            const i = line.indexOf(':');
            if (i === -1) continue;
            const key = line.slice(0, i).trim();
            const val = line.slice(i + 1).trim();
            if (key === 'event') eventName = val;
            if (key === 'data') dataStr += (dataStr ? '\n' : '') + val;
          }
          if (!dataStr) continue;

          if (eventName === 'error') {
            try {
              const parsed = JSON.parse(dataStr);
              const msg = parsed?.error?.message || parsed?.error || 'Streaming error';
              const code = parsed?.error?.code || parsed?.code;
              const nice =
                code === 'insufficient_quota'
                  ? 'Viv is taking a short break 🍷 — AI credits are exhausted. Please try again later.'
                  : msg;
              throw new Error(nice);
            } catch {
              throw new Error('Streaming error');
            }
          }

          try {
            const parsed = JSON.parse(dataStr);

            if (eventName.includes('output_text.delta') && typeof parsed?.delta === 'string') {
              gotAnyText = true;
              full += parsed.delta;
              setStreamText(full);
              continue;
            }

            if (eventName.includes('message.delta') && parsed?.delta?.content?.length) {
              for (const c of parsed.delta.content) {
                if (c?.type === 'output_text' && typeof c?.text === 'string') {
                  gotAnyText = true;
                  full += c.text;
                  setStreamText(full);
                }
              }
              continue;
            }

            if (eventName.includes('response.completed')) {
              const finalText =
                parsed?.output_text ||
                parsed?.response?.output_text ||
                '';
              if (finalText) {
                gotAnyText = true;
                full += finalText;
                setStreamText(full);
              }
              continue;
            }
          } catch {
            // ignore keepalives / non-JSON
          }
        }
      }

      clearTimeout(timeout);

      if (!gotAnyText) throw new Error('No stream chunks parsed');

      setHistory((h) => trimHistory([...h, { role: 'assistant', content: full || '...' }]));
      track('ai_widget_done');
    } catch (err) {
      // Fallback (non-stream)
      try {
        const res = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: cleanQ,
            history: nextHistory,
            system: system ?? SOMM_SYSTEM,
            temperature: 0.7,
          }),
        });

        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
          const code = json?.error?.code || json?.code;
          if (code === 'insufficient_quota' || String(json?.error || '').includes('insufficient_quota')) {
            throw new Error('Viv is taking a short break 🍷 — AI credits are exhausted. Please try again later.');
          }
          throw new Error(json?.error?.message || json?.error || 'Non-streaming request failed');
        }

        const answer = json?.answer || 'Sorry, I could not generate a reply.';
        setStreamText(answer);
        setHistory((h) => trimHistory([...h, { role: 'assistant', content: answer }]));
        track('ai_widget_done_fallback');
      } catch (fallbackErr) {
        setErrorText(fallbackErr?.message || 'Something went wrong.');
        track('ai_widget_error', { message: String(fallbackErr?.message || fallbackErr) });
      }
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        title="Chat with Viv"
        aria-label="Chat with Viv"
        aria-pressed={open}
        data-open={open ? 'true' : 'false'}
        onClick={() => {
          const next = !open;
          setOpen(next);
          track('ai_widget_toggle', { open: next });
        }}
        style={{
          position: 'fixed',
          right: 16,
          bottom: 16,
          zIndex: Z,
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7B1E3F, #C59B5F)',
          color: '#fff',
          fontSize: 36,
          lineHeight: 1,
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
      >
        🍷
      </button>

      {/* Slide-up Panel */}
      <div
        style={{
          position: 'fixed',
          right: 16,
          bottom: open ? 96 : 80,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: `translateY(${open ? 0 : 6}px)`,
          transition: 'all 160ms ease',
          zIndex: Z,
          width: 'min(92vw, 380px)',
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid #D8CFC4',
            borderRadius: 16,
            boxShadow: '0 20px 40px rgba(0,0,0,.25)',
            transition: 'height 180ms ease',
            height: collapsed ? 64 : '50vh', // FIX: use flex layout height instead of maxHeight math
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            onDoubleClick={() => {
              setCollapsed((c) => !c);
              track('ai_widget_collapse_toggle', { via: 'dblclick' });
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
              aria-label={collapsed ? 'Expand Viv' : 'Collapse Viv'}
              onClick={(e) => {
                e.stopPropagation();
                setCollapsed((c) => !c);
                track('ai_widget_collapse_toggle', { via: 'button' });
              }}
              title={collapsed ? 'Expand' : 'Collapse'}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: 16,
                lineHeight: 1,
                transform: `rotate(${collapsed ? 180 : 0}deg)`,
                transition: 'transform 160ms ease',
              }}
            >
              ▾
            </button>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#7B1E3F' }}>{title}</div>
              <div style={{ fontSize: 11, color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {subtitle}
              </div>
            </div>

            <button
              type="button"
              aria-label="Close Viv"
              title="Close"
              onClick={() => {
                setOpen(false);
                track('ai_widget_toggle', { open: false, via: 'close_btn' });
              }}
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

          {/* Collapsible Content */}
          {!collapsed && (
            <>
              {/* Messages */}
              <div
                ref={panelRef}
                style={{
                  padding: '12px 12px 18px', // FIX: extra bottom padding keeps last line visible
                  fontSize: 14,
                  color: '#374151',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.6,
                  overflow: 'auto',
                  flex: 1, // FIX: flex makes messages the scroll region
                }}
              >
                {!streamText && !isLoading && !errorText && (
                  <em style={{ color: '#6b7280' }}>
                    Bonjour! 🍷 I’m <strong>Viv</strong>, your sommelier. Ask me about pairings, wine styles, or what to serve tonight—
                    I’ll pour a perfect suggestion.
                  </em>
                )}
                {!!streamText && <div>{streamText}</div>}
                {isLoading && <div style={{ color: '#6b7280' }}>thinking…</div>}
                {!!errorText && <div style={{ color: '#b91c1c' }}>{errorText}</div>}
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
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
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={placeholder}
                  style={{
                    flex: 1,
                    border: '1px solid #D8CFC4',
                    borderRadius: 12,
                    padding: '8px 10px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  disabled={isLoading || input.trim().length < 2}
                  style={{
                    borderRadius: 12,
                    padding: '8px 14px',
                    fontWeight: 700,
                    color: '#fff',
                    background: '#C59B5F',
                    opacity: isLoading || input.trim().length < 2 ? 0.6 : 1,
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
                AI suggestions may be imperfect. Verify availability/prices locally.
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}