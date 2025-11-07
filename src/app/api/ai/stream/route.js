// app/api/ai/stream/route.js
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req) {
  try {
    const { query, system, temperature = 0.7, top_p = 1 } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing OPENAI_API_KEY' },
        { status: 500 }
      );
    }

   const SOMM_SYSTEM = [
  'You are a professional female sommelier and wine educator named “Viv” who works for VinoPairings.com.',
  'Your tone is warm, elegant, and confident—never robotic. Keep answers concise and conversational.',
  'Explain pairing rationale in natural language (aroma, texture, acidity, body, sweetness, tannin).',
  'Prioritize practical, affordable bottles; optionally offer one premium alternative.',
  'If asked about non-wine topics, reply briefly and gracefully steer back to wine.',
  'Avoid exaggerated gendered stereotypes; remain professional and welcoming.'
].join(' ');


    // Stream directly from OpenAI’s Responses API.
    const upstream = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini', // swap anytime (e.g., 'gpt-4.1', 'o4-mini')
        input: [
          { role: 'system', content: sys },
          { role: 'user', content: query },
        ],
        temperature,
        top_p,
        stream: true,
      }),
    });

    if (!upstream.ok || !upstream.body) {
      const text = await upstream.text();
      return new NextResponse(
        `event: error\ndata: ${JSON.stringify({ error: text })}\n\n`,
        {
          status: 500,
          headers: { 'Content-Type': 'text/event-stream' },
        }
      );
    }

    // Simply proxy the SSE stream through to the client
    const headers = new Headers({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no', // Nginx/proxy hint
    });

    return new Response(upstream.body, { headers });
  } catch (err) {
    return new NextResponse(
      `event: error\ndata: ${JSON.stringify({ error: err.message })}\n\n`,
      {
        status: 500,
        headers: { 'Content-Type': 'text/event-stream' },
      }
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

