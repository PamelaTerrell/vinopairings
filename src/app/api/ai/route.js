// app/api/ai/route.js
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const MAX_QUERY_CHARS = 500;
const MAX_HISTORY_MSGS = 6;
const MAX_MSG_CHARS = 1000;

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
      return NextResponse.json({ error: 'Missing OPENAI_API_KEY' }, { status: 500 });
    }

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

    const q = String(query || '').trim();
    if (!q) return NextResponse.json({ error: 'Empty query' }, { status: 400 });

    // ✅ Usage guard: query length
    if (q.length > MAX_QUERY_CHARS) {
  return NextResponse.json(
    {
      error:
        "That’s quite a long note 🍷 — could you shorten your question a bit? Viv works best with messages under 500 characters.",
      code: 'query_too_long',
    },
    { status: 400 }
  );
}

    // ✅ Usage guard: sanitize + clamp history
    const safeHistory = Array.isArray(history)
      ? history
          .filter((m) => m && typeof m === 'object')
          .map((m) => ({
            role: m.role === 'assistant' ? 'assistant' : 'user',
            content: String(m.content ?? '').slice(0, MAX_MSG_CHARS),
          }))
          .slice(-MAX_HISTORY_MSGS)
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
        max_output_tokens: 400,
      }),
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      return NextResponse.json(
        { error: data?.error || data || 'Upstream error' },
        { status: upstream.status }
      );
    }

    const text =
      data?.output_text ||
      (Array.isArray(data?.output)
        ? data.output
            .flatMap((o) => o?.content || [])
            .map((c) => c?.text)
            .filter(Boolean)
            .join('')
        : null) ||
      'Sorry, I could not generate a reply.';

    return NextResponse.json({ answer: text });
  } catch (e) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}