// src/app/api/ai/route.js
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req) {
  try {
    const { query, system, temperature = 0.7, top_p = 1 } = await req.json();

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
