// app/api/ai/stream/route.js

import { NextResponse } from "next/server";

export const runtime = "edge";

const MAX_QUERY_CHARS = 500;
const MAX_HISTORY_MSGS = 6;
const MAX_MSG_CHARS = 1000;
const MAX_OUTPUT_TOKENS = 400;

const SOMM_SYSTEM = [
  "You are a professional female sommelier and wine educator named Viv who works for VinoPairings.com.",
  "Your tone is warm, elegant, confident, approachable, and never robotic.",
  "Keep answers concise and conversational.",
  "Explain wine pairing rationale in natural language, including aroma, texture, acidity, body, sweetness, and tannin when useful.",
  "Prioritize practical and reasonably priced wine suggestions.",
  "You may optionally offer one premium alternative when it is genuinely useful.",
  "Avoid presenting wine pairings as objectively perfect because personal taste varies.",
  "If asked about non-wine topics, reply briefly and gracefully steer the conversation back toward wine, food pairing, entertaining, or wine education.",
  "Do not provide medical advice related to alcohol consumption.",
  "Encourage responsible wine enjoyment when relevant.",
  "Avoid exaggerated gendered stereotypes.",
  "Remain professional, welcoming, and beginner-friendly.",
].join(" ");

function createSseHeaders() {
  return new Headers({
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
  });
}

function sseEvent(event, data) {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

export async function POST(req) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error(
        "Viv configuration error: OPENAI_API_KEY is missing."
      );

      return NextResponse.json(
        {
          error:
            "Viv is temporarily unavailable. Please try again later.",
          code: "service_unavailable",
        },
        { status: 503 }
      );
    }

    let body;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          error: "Invalid request.",
          code: "invalid_json",
        },
        { status: 400 }
      );
    }

    const {
      query = "",
      history = [],
    } = body || {};

    const q = String(query || "").trim();

    if (!q) {
      return NextResponse.json(
        {
          error: "Please ask Viv a wine question.",
          code: "empty_query",
        },
        { status: 400 }
      );
    }

    if (q.length > MAX_QUERY_CHARS) {
      return NextResponse.json(
        {
          error:
            "That’s quite a long note 🍷 — could you shorten your question a bit? Viv works best with messages under 500 characters.",
          code: "query_too_long",
        },
        { status: 400 }
      );
    }

    const safeHistory = Array.isArray(history)
      ? history
          .filter(
            (message) =>
              message &&
              typeof message === "object"
          )
          .map((message) => ({
            role:
              message.role === "assistant"
                ? "assistant"
                : "user",
            content: String(
              message.content ?? ""
            )
              .trim()
              .slice(0, MAX_MSG_CHARS),
          }))
          .filter(
            (message) =>
              message.content.length > 0
          )
          .slice(-MAX_HISTORY_MSGS)
      : [];

    const upstream = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",

          input: [
            {
              role: "system",
              content: SOMM_SYSTEM,
            },
            ...safeHistory,
            {
              role: "user",
              content: q,
            },
          ],

          temperature: 0.7,
          top_p: 1,

          max_output_tokens:
            MAX_OUTPUT_TOKENS,

          store: false,

          stream: true,
        }),
      }
    );

    if (!upstream.ok || !upstream.body) {
      const upstreamError =
        await upstream.text().catch(() => "");

      console.error(
        "Viv OpenAI streaming error:",
        {
          status: upstream.status,
          detail: upstreamError.slice(0, 500),
        }
      );

      const headers =
        createSseHeaders();

      return new Response(
        sseEvent("error", {
          error:
            "Viv is having trouble answering right now. Please try again.",
        }),
        {
          status: 200,
          headers,
        }
      );
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader =
          upstream.body.getReader();

        let buffer = "";

        try {
          while (true) {
            const {
              value,
              done,
            } = await reader.read();

            if (done) break;

            buffer += decoder.decode(
              value,
              {
                stream: true,
              }
            );

            buffer =
              buffer.replace(
                /\r\n/g,
                "\n"
              );

            const events =
              buffer.split("\n\n");

            buffer =
              events.pop() || "";

            for (const eventBlock of events) {
              let eventName =
                "message";

              let dataString = "";

              for (
                const line of
                eventBlock.split("\n")
              ) {
                const colonIndex =
                  line.indexOf(":");

                if (
                  colonIndex === -1
                ) {
                  continue;
                }

                const key =
                  line
                    .slice(
                      0,
                      colonIndex
                    )
                    .trim();

                const value =
                  line
                    .slice(
                      colonIndex + 1
                    )
                    .trim();

                if (
                  key === "event"
                ) {
                  eventName = value;
                }

                if (
                  key === "data"
                ) {
                  dataString +=
                    (dataString
                      ? "\n"
                      : "") + value;
                }
              }

              if (!dataString) {
                continue;
              }

              let parsed;

              try {
                parsed =
                  JSON.parse(
                    dataString
                  );
              } catch {
                continue;
              }

              if (
                eventName ===
                  "response.output_text.delta" &&
                typeof parsed?.delta ===
                  "string"
              ) {
                controller.enqueue(
                  encoder.encode(
                    sseEvent(
                      "delta",
                      {
                        text:
                          parsed.delta,
                      }
                    )
                  )
                );

                continue;
              }

              if (
                eventName ===
                "response.completed"
              ) {
                controller.enqueue(
                  encoder.encode(
                    sseEvent(
                      "done",
                      {}
                    )
                  )
                );

                continue;
              }

              if (
                eventName ===
                  "error" ||
                eventName ===
                  "response.failed"
              ) {
                console.error(
                  "Viv OpenAI stream event error:",
                  {
                    event:
                      eventName,
                  }
                );

                controller.enqueue(
                  encoder.encode(
                    sseEvent(
                      "error",
                      {
                        error:
                          "Viv is having trouble answering right now. Please try again.",
                      }
                    )
                  )
                );
              }
            }
          }
        } catch (error) {
          console.error(
            "Viv stream processing error:",
            error
          );

          try {
            controller.enqueue(
              encoder.encode(
                sseEvent(
                  "error",
                  {
                    error:
                      "Viv is temporarily unavailable. Please try again.",
                  }
                )
              )
            );
          } catch {
            // Stream may already be closed.
          }
        } finally {
          try {
            reader.releaseLock();
          } catch {
            // Ignore release errors.
          }

          try {
            controller.close();
          } catch {
            // Stream may already be closed.
          }
        }
      },

      cancel() {
        try {
          upstream.body?.cancel();
        } catch {
          // Ignore cancellation errors.
        }
      },
    });

    return new Response(
      stream,
      {
        status: 200,
        headers:
          createSseHeaders(),
      }
    );
  } catch (error) {
    console.error(
      "Viv API route error:",
      error
    );

    const headers =
      createSseHeaders();

    return new Response(
      sseEvent("error", {
        error:
          "Viv is temporarily unavailable. Please try again.",
      }),
      {
        status: 200,
        headers,
      }
    );
  }
}