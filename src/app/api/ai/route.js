// src/app/api/ai/route.js
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req) {
  try {
    const { query, system, temperature = 0.7, top_p = 1 } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'Missing OPENAI_API_KEY' }, { status: 500 });
    }

    const sys =
      system ??
      'You are the friendly sommelier for VinoPairings.com. Be concise and practical. Offer 1–3 alternatives when helpful.';

    const upstream = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        input: [
          { role: 'system', content: sys },
          { role: 'user', content: String(query || '') },
        ],
        temperature,
        top_p,
        max_output_tokens: 400,
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return NextResponse.json({ error: text || 'Upstream error' }, { status: 500 });
    }

    const data = await upstream.json();
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
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
