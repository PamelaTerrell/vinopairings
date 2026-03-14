// app/about/page.js
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About • Vino Pairings",
  description:
    "Learn about Pamela Terrell, creator of Vino Pairings — where thoughtful wine pairings elevate everyday meals.",
};

export default function AboutPage() {
  const brand = {
    cream: "#f9f6ef",
    parchment: "#fdfaf3",
    cocoa: "#4b3f2f",
    gold: "#a37c58",
    line: "#d8cfc4",
    burgundy: "#6e2a2a",
    muted: "#7a6b57",
  };

  const values = [
    {
      title: "Approachable",
      desc: "Wine should feel welcoming and intuitive — something to enjoy without overthinking.",
    },
    {
      title: "Connected",
      desc: "Great pairings do more than complement a dish. They create space for conversation and shared moments.",
    },
    {
      title: "Authentic",
      desc: "Every pairing shared here grows from genuine curiosity and a love of gathering well.",
    },
    {
      title: "Beautiful",
      desc: "A thoughtfully chosen wine can elevate even a simple meal into something memorable.",
    },
  ];

  const serif = {
    fontFamily: "var(--font-playfair), Georgia, serif",
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: brand.cream, color: brand.cocoa }}
    >
      {/* background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, rgba(163,124,88,0.14), transparent 70%)",
        }}
      />

      <main className="mx-auto max-w-5xl px-6 py-12">

        {/* HERO */}
        <section
          className="rounded-[30px] border px-8 py-12 text-center shadow-sm"
          style={{
            background: "linear-gradient(#fdfaf3, #f9f6ef)",
            borderColor: brand.line,
          }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.32em]"
            style={{ color: brand.gold }}
          >
            About the Creator
          </p>

          <div className="relative mx-auto mt-8 w-fit">
            <div
              className="absolute inset-0 blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(163,124,88,0.25), transparent 70%)",
              }}
            />

            <div
              className="relative overflow-hidden border bg-[#f6f1e8]"
              style={{
                borderColor: "#ece2d5",
                borderRadius: "999px 999px 28px 28px",
              }}
            >
              <Image
                src="/Me.jpg"
                alt="Pamela Terrell"
                width={320}
                height={480}
                priority
                className="h-[420px] w-[280px] object-cover object-top"
              />
            </div>
          </div>

          <h1
            className="mt-8 text-[38px] font-semibold"
            style={{ ...serif }}
          >
            Pamela Terrell
          </h1>

          <p
            className="mt-2 text-[11px] uppercase tracking-[0.24em]"
            style={{ color: brand.muted }}
          >
            Founder of Vino Pairings
          </p>

          <p
            className="mx-auto mt-5 max-w-xl text-[22px] italic leading-[1.6]"
            style={{ ...serif, color: brand.muted }}
          >
            Where thoughtful wine pairings turn everyday meals into memorable moments.
          </p>

          <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[1.85]">
            Vino Pairings was created to make wine feel welcoming, elegant,
            and easy to enjoy. It is a place for discovering pairings that
            elevate everyday meals and inspire gatherings around the table.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/"
              className="rounded-full px-6 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: brand.gold }}
            >
              Explore Pairings
            </Link>

            <Link
              href="/sunday"
              className="rounded-full border px-6 py-2 text-sm font-semibold"
              style={{ borderColor: brand.line }}
            >
              Sunday Gallery
            </Link>
          </div>
        </section>

        {/* INTRO */}
        <section className="mt-10">
          <div
            className="rounded-[26px] border px-8 py-7 text-center"
            style={{
              borderColor: brand.line,
              background: "rgba(255,255,255,0.7)",
            }}
          >
            <p
              className="mx-auto max-w-2xl text-[20px] leading-[1.7]"
              style={{ ...serif }}
            >
              At its heart, Vino Pairings is about making wine feel less
              intimidating and more personal — thoughtful enough to elevate
              a meal, yet approachable enough to enjoy any day of the week.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="mt-12">
          <div
            className="rounded-[30px] border px-8 py-10"
            style={{
              backgroundColor: brand.parchment,
              borderColor: brand.line,
            }}
          >
            <p
              className="text-center text-[11px] uppercase tracking-[0.32em]"
              style={{ color: brand.gold }}
            >
              My Story
            </p>

            <h2
              className="mt-3 text-center text-[32px]"
              style={{ ...serif }}
            >
              Pairing flavor with feeling
            </h2>

            <div className="mx-auto mt-6 max-w-[620px] text-[16px] leading-[1.85]">
              <p>
                My interest in wine pairing grew from a love of meals that
                linger a little longer — where conversation flows naturally
                and the smallest details make the evening feel special.
              </p>

              <p className="mt-5">
                Over time, I became fascinated by the way a well-chosen wine
                can transform a dish. The right pairing brings balance,
                harmony, and a sense of completeness to the table.
              </p>

              <p className="mt-5">
                Vino Pairings was created to share that experience —
                helping others discover combinations that feel both
                beautiful and memorable.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="mt-12">
          <div className="text-center">
            <p
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{ color: brand.gold }}
            >
              What Guides This Space
            </p>

            <h2
              className="mt-3 text-[32px]"
              style={{ ...serif }}
            >
              The values behind Vino Pairings
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border p-6"
                style={{
                  borderColor: brand.line,
                  background:
                    "linear-gradient(180deg,#ffffff,#fdfaf3)",
                }}
              >
                <h3
                  className="text-[22px]"
                  style={{ ...serif, color: brand.gold }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-[15px] leading-[1.8]"
                  style={{ color: brand.muted }}
                >
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mt-12">
          <div
            className="rounded-[26px] border px-8 py-9 text-center"
            style={{
              borderColor: brand.line,
              background:
                "linear-gradient(#ffffff,#f9f6ef)",
            }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{ color: brand.gold }}
            >
              Contact
            </p>

            <h3
              className="mt-3 text-[32px]"
              style={{ ...serif }}
            >
              I'd love to hear what is bringing beauty to your table
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.85]">
              Food and wine have a way of bringing people together.
              If you have discovered a pairing you love, I would
              truly enjoy hearing about it.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-block text-sm font-semibold underline"
              style={{ color: brand.burgundy }}
            >
              Reach out and say hello
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}