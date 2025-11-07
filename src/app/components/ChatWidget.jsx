'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Viv — Your Virtual Sommelier (VinoPairings)
 * - Streams from /api/ai/stream (SSE), falls back to /api/ai
 * - Ultra-high z-index; collapse/minimize support
 * - Safe keyboard shortcuts (Alt+M) and ignores keystrokes while typing
 * - Listens for a custom window event: window.dispatchEvent(new CustomEvent('viv-open'))
 */

const SOMM_SYSTEM = [
  'You are a professional female sommelier and wine educator named “Viv” who works for VinoPairings.com.',
  'Your tone is warm, elegant, and confident—never robotic. Keep answers concise and conversational.',
  'Explain pairing rationale in natural language (aroma, texture, acidity, body, sweetness, tannin).',
  'Prioritize practical, affordable bottles; optionally offer one premium alternative.',
  'If asked about non-wine topics, reply briefly and gracefully steer back to wine.',
  'Avoid exaggerated gendered stereotypes; remain professional and welcoming.'
].join(' ');

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

  // Auto-scroll when not collapsed
  useEffect(() => {
    if (!collapsed && panelRef.current) {
      panelRef.current.scrollTop = panelRef.current.scrollHeight;
    }
  }, [streamText, isLoading, open, collapsed]);

  // Helper: ignore shortcuts when user is typing
  const isEditableTarget = (el) => {
    if (!el) return false;
    const tag = el.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
    // contentEditable
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (el.isContentEditable) return true;
    return false;
  };

  // Keyboard shortcuts: Alt+M to collapse/expand; Esc to close
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (isEditableTarget(e.target)) return; // don’t interfere while typing

      // Use Alt+M instead of plain "m" to avoid collisions with normal typing
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
    const onOpen = () => setOpen(true); // idempotent
    window.addEventListener('viv-open', onOpen);
    return () => window.removeEventListener('viv-open', onOpen);
  }, []);

  async function send(q) {
    if (!q || q.trim().length < 2 || isLoading) return;

    setIsLoading(true);
    setStreamText('');
    setErrorText('');
    track('ai_widget_send', { q_preview: q.slice(0, 80) });

    let gotAnyText = false;

    try {
      if (abortRef.current) abortRef.current.abort();
      const ac = new AbortController();
      abortRef.current = ac;

      // 1) Streaming
      const res = await fetch('/api/ai/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: ac.signal,
        body: JSON.stringify({
          query: q,
          system: system ?? SOMM_SYSTEM,
          temperature: 0.7,
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error((await res.text()) || 'Streaming request failed');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');

      const timeout = setTimeout(() => {
        if (!gotAnyText) {
          try { ac.abort(); } catch {}
        }
      }, 3000);

      let buffer = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

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
              throw new Error(parsed?.error || 'Streaming error');
            } catch {
              throw new Error('Streaming error');
            }
          }

          try {
            const parsed = JSON.parse(dataStr);

            if (eventName.includes('output_text.delta') && typeof parsed?.delta === 'string') {
              gotAnyText = true;
              setStreamText((t) => t + parsed.delta);
              continue;
            }
            if (eventName.includes('message.delta') && parsed?.delta?.content?.length) {
              for (const c of parsed.delta.content) {
                if (c?.type === 'output_text' && typeof c?.text === 'string') {
                  gotAnyText = true;
                  setStreamText((t) => t + c.text);
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
                setStreamText((t) => t + finalText);
              }
              continue;
            }
          } catch {
            // ignore keepalives / non-JSON
          }
        }
      }

      clearTimeout(timeout);

      if (!gotAnyText && !streamText) {
        throw new Error('No stream chunks parsed');
      }

      track('ai_widget_done');
    } catch (err) {
      // 2) Fallback (non-stream)
      try {
        const res = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: q,
            system: system ?? SOMM_SYSTEM,
            temperature: 0.7,
          }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || 'Non-streaming request failed');
        setStreamText(json?.answer || 'Sorry, I could not generate a reply.');
        track('ai_widget_done_fallback');
      } catch (fallbackErr) {
        setErrorText(fallbackErr.message || 'Something went wrong.');
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
            transition: 'max-height 180ms ease',
            maxHeight: collapsed ? 64 : '50vh',
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
              <div
                ref={panelRef}
                style={{
                  padding: 12,
                  fontSize: 14,
                  color: '#374151',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.6,
                  maxHeight: 'calc(50vh - 64px)',
                  overflow: 'auto',
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

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = input.trim();
                  if (q.length >= 2) {
                    send(q);
                    setInput('');
                  }
                }}
                style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid #E8DFD3' }}
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

              <div style={{ padding: '6px 12px', fontSize: 11, color: '#6b7280', textAlign: 'center' }}>
                AI suggestions may be imperfect. Verify availability/prices locally.
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
