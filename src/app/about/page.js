// app/about/page.js
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Pamela Terrell | Vino Pairings",
  description:
    "Learn about Pamela Terrell, creator of Vino Pairings — an elegant wine pairing, wine tips, and entertaining inspiration site.",
  alternates: { canonical: "/about" },
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
      desc: "Every guide and recommendation is shaped by genuine curiosity, usefulness, and a love of gathering well.",
    },
    {
      title: "Beautiful",
      desc: "A thoughtfully chosen wine, glass, or table detail can elevate even a simple meal into something memorable.",
    },
  ];

  const guides = [
    {
      title: "Best Corkscrews",
      href: "/best-corkscrews",
      desc: "Tools for opening wine with confidence.",
    },
    {
      title: "Best Wine Glasses",
      href: "/best-wine-glasses",
      desc: "Glassware guidance for everyday elegance.",
    },
    {
      title: "Wine Gifts Under $50",
      href: "/wine-gifts-under-50",
      desc: "Thoughtful gift ideas for wine lovers.",
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
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, rgba(163,124,88,0.14), transparent 70%)",
        }}
      />

      <main className="mx-auto max-w-5xl px-6 py-12">
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
                alt="Pamela Terrell, creator of Vino Pairings"
                width={320}
                height={480}
                priority
                className="h-[420px] w-[280px] object-cover object-top"
              />
            </div>
          </div>

          <h1 className="mt-8 text-[38px] font-semibold" style={serif}>
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
            Where thoughtful wine pairings turn everyday meals into memorable
            moments.
          </p>

          <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-[1.85]">
            Vino Pairings was created to make wine feel welcoming, elegant, and
            easy to enjoy. It is a place for discovering food and wine pairings,
            wine tips, printable guides, and thoughtfully selected wine
            essentials for everyday meals and beautiful gatherings.
          </p>

          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-[#7a6b57]">
            Vino Pairings is part of the Stabile USA family of digital brands.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full px-6 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: brand.gold }}
            >
              Explore Pairings
            </Link>

            <Link
              href="/printable-guides"
              className="rounded-full border px-6 py-2 text-sm font-semibold"
              style={{ borderColor: brand.line }}
            >
              Printable Guides
            </Link>

            <Link
              href="/sunday"
              className="rounded-full border px-6 py-2 text-sm font-semibold"
              style={{ borderColor: brand.line }}
            >
              Sunday Pairings
            </Link>
          </div>
        </section>

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
              style={serif}
            >
              At its heart, Vino Pairings is about making wine feel less
              intimidating and more personal — thoughtful enough to elevate a
              meal, yet approachable enough to enjoy any day of the week.
            </p>
          </div>
        </section>

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

            <h2 className="mt-3 text-center text-[32px]" style={serif}>
              Pairing flavor with feeling
            </h2>

            <div className="mx-auto mt-6 max-w-[620px] text-[16px] leading-[1.85]">
              <p>
                My interest in wine pairing grew from a love of meals that
                linger a little longer — where conversation flows naturally and
                the smallest details make the evening feel special.
              </p>

              <p className="mt-5">
                Over time, I became fascinated by the way a well-chosen wine can
                transform a dish. The right pairing brings balance, harmony, and
                a sense of completeness to the table.
              </p>

              <p className="mt-5">
                Vino Pairings was created to share that experience — helping
                others discover combinations, tools, and simple wine knowledge
                that feel both beautiful and memorable.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="text-center">
            <p
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{ color: brand.gold }}
            >
              What Guides This Space
            </p>

            <h2 className="mt-3 text-[32px]" style={serif}>
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
                  background: "linear-gradient(180deg,#ffffff,#fdfaf3)",
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

        <section className="mt-12">
          <div
            className="rounded-[30px] border px-8 py-10 text-center"
            style={{
              backgroundColor: brand.parchment,
              borderColor: brand.line,
            }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{ color: brand.gold }}
            >
              Wine Essentials
            </p>

            <h2 className="mt-3 text-[32px]" style={serif}>
              Helpful guides for enjoying wine beautifully
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.85]">
              Along with pairing ideas and tutorials, Vino Pairings includes
              practical guides for choosing wine tools, glassware, and gifts
              with confidence.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-[22px] border bg-white px-5 py-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: brand.line }}
                >
                  <h3
                    className="text-[20px]"
                    style={{ ...serif, color: brand.burgundy }}
                  >
                    {guide.title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: brand.muted }}
                  >
                    {guide.desc}
                  </p>

                  <span
                    className="mt-4 inline-block text-sm font-semibold underline underline-offset-4"
                    style={{ color: brand.burgundy }}
                  >
                    Read guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div
            className="rounded-[26px] border px-8 py-9 text-center"
            style={{
              borderColor: brand.line,
              background: "linear-gradient(#ffffff,#f9f6ef)",
            }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{ color: brand.gold }}
            >
              Contact
            </p>

            <h3 className="mt-3 text-[32px]" style={serif}>
              I'd love to hear what is bringing beauty to your table
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.85]">
              Food and wine have a way of bringing people together. If you have
              discovered a pairing you love, have a question, or want to reach
              Vino Pairings directly, I would truly enjoy hearing from you.
            </p>

            <p className="mt-4 text-sm" style={{ color: brand.muted }}>
              Email{" "}
              <a
                href="mailto:hello@vinopairings.com"
                className="font-semibold underline underline-offset-4"
                style={{ color: brand.burgundy }}
              >
                hello@vinopairings.com
              </a>
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-block text-sm font-semibold underline underline-offset-4"
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