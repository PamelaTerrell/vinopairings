// app/api/ai/stream/route.js
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req) {
  try {
    const {
      query = '',
      history = [],
      system,
      temperature = 0.7,
      top_p = 1,
    } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      // For streaming endpoint, we can still return JSON since client checks res.ok first.
      return NextResponse.json({ error: 'Missing OPENAI_API_KEY' }, { status: 500 });
    }

    const q = String(query || '').trim();
    if (!q) return NextResponse.json({ error: 'Empty query' }, { status: 400 });

    // Default Viv prompt (can be overridden by "system" in the request)
    const SOMM_SYSTEM = [
      'You are a professional female sommelier and wine educator named “Viv” who works for VinoPairings.com.',
      'Your tone is warm, elegant, and confident—never robotic. Keep answers concise and conversational.',
      'Explain pairing rationale in natural language (aroma, texture, acidity, body, sweetness, tannin).',
      'Prioritize practical, affordable bottles; optionally offer one premium alternative.',
      'If asked about non-wine topics, reply briefly and gracefully steer back to wine.',
      'Avoid exaggerated gendered stereotypes; remain professional and welcoming.'
    ].join(' ');

    const systemPrompt =
      (Array.isArray(system) ? system.join(' ') : system) || SOMM_SYSTEM;

    // Basic sanitization: accept only {role, content} pairs
    const safeHistory = Array.isArray(history)
      ? history
          .filter((m) => m && typeof m === 'object')
          .map((m) => ({
            role: m.role === 'assistant' ? 'assistant' : 'user',
            content: String(m.content ?? '').slice(0, 2000),
          }))
          .slice(-6)
      : [];

    const upstream = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        input: [
          { role: 'system', content: systemPrompt },
          ...safeHistory,
          { role: 'user', content: q },
        ],
        temperature,
        top_p,
        stream: true,
      }),
    });

    const headers = new Headers({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    });

    if (!upstream.ok || !upstream.body) {
      const text = await upstream.text().catch(() => '');
      // IMPORTANT: return 200 so the client can read the SSE "error" event.
      return new Response(
        `event: error\ndata: ${JSON.stringify({ error: text || 'Upstream error' })}\n\n`,
        { status: 200, headers }
      );
    }

    // Pass the SSE stream through to the client
    return new Response(upstream.body, { headers });
  } catch (err) {
    const headers = new Headers({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    });

    return new Response(
      `event: error\ndata: ${JSON.stringify({ error: err?.message || 'Server error' })}\n\n`,
      { status: 200, headers }
    );
  }
}

export async function GET() {
  const ok = !!process.env.OPENAI_API_KEY;
  return new Response(JSON.stringify({ hasKey: ok }), {
    status: ok ? 200 : 500,
    headers: { 'Content-Type': 'application/json' },
  });
}