// src/app/best-corkscrews/page.js

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Corkscrews for Wine Lovers | Vino Pairings",
  description:
    "A refined guide to wing corkscrews, waiter’s corkscrews, and electric wine openers for beginners, entertaining, and everyday wine rituals.",
  alternates: {
    canonical: "/best-corkscrews",
  },
  openGraph: {
    title: "Best Corkscrews for Wine Lovers | Vino Pairings",
    description:
      "A polished guide to choosing between wing corkscrews, waiter’s corkscrews, and electric wine openers.",
    type: "article",
    url: "https://vinopairings.com/best-corkscrews",
    siteName: "Vino Pairings",
    images: [
      {
        url: "/best-corkscrews-guide.png",
        width: 1024,
        height: 1536,
        alt: "Vino Pairings guide comparing wing corkscrews, waiter’s corkscrews, and electric wine openers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Corkscrews for Wine Lovers | Vino Pairings",
    description:
      "An elegant guide to choosing the right corkscrew for your wine ritual.",
    images: ["/best-corkscrews-guide.png"],
  },
};

const openerStyles = [
  {
    number: "01",
    eyebrow: "The Beginner Favorite",
    title: "Wing Corkscrew",
    description:
      "A familiar design with visible movement and helpful leverage. It is reassuring, intuitive, and especially easy to understand when you are first learning.",
    note: "Best for beginners, casual wine drinkers, and simple everyday bottles.",
  },
  {
    number: "02",
    eyebrow: "The Classic Choice",
    title: "Waiter’s Corkscrew",
    description:
      "Compact, elegant, and endlessly useful. Once the hinged lever feels familiar, this becomes one of the most satisfying and versatile wine tools to own.",
    note: "Best for dinner parties, travel, and a classic wine-service ritual.",
  },
  {
    number: "03",
    eyebrow: "The Effortless Choice",
    title: "Electric Opener",
    description:
      "A convenient option when ease matters most. The motor handles the twisting and pulling, making it particularly useful when opening several bottles.",
    note: "Best for frequent entertaining or anyone who prefers minimal hand effort.",
  },
];

const qualities = [
  {
    number: "01",
    title: "Comfortable Grip",
    text: "A corkscrew should feel stable and secure in your hand before you ever apply pressure.",
  },
  {
    number: "02",
    title: "Smooth Spiral",
    text: "A well-shaped spiral enters the cork cleanly and helps reduce tearing or crumbling.",
  },
  {
    number: "03",
    title: "Reliable Leverage",
    text: "Good leverage makes cork removal feel controlled rather than like a struggle.",
  },
  {
    number: "04",
    title: "Useful Details",
    text: "Features such as a foil cutter can make the entire bottle-opening ritual feel more complete.",
  },
  {
    number: "05",
    title: "Durable Construction",
    text: "A simple, well-made opener is more valuable than a complicated tool that feels flimsy.",
  },
  {
    number: "06",
    title: "Easy Storage",
    text: "The best tool is one you can keep close at hand and reach for without hesitation.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Corkscrews for Wine Lovers",
  description:
    "A guide to choosing between wing corkscrews, waiter’s corkscrews, and electric wine openers.",
  image: "https://vinopairings.com/best-corkscrews-guide.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://vinopairings.com/best-corkscrews",
  },
  publisher: {
    "@type": "Organization",
    name: "Vino Pairings",
    url: "https://vinopairings.com",
  },
};

export default function BestCorkscrewsPage() {
  return (
    <>
      <Script
        id="best-corkscrews-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>

      <article className="mx-auto max-w-6xl">
        {/* HERO */}
        <header className="relative overflow-hidden rounded-[2.75rem] bg-[#f4eee6] px-7 py-14 md:px-14 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,124,88,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(110,42,42,0.07),transparent_32%)]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9a7659]">
              The Vino Pairings Wine Tool Edit
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-[#2c211c] md:text-7xl [font-family:var(--font-playfair)]">
              The Corkscrew
              <span className="mt-1 block italic text-[#7d4a3d]">
                Worth Reaching For
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#665246]">
              A good corkscrew turns a small task into part of the ritual.
              Here&apos;s how to choose a style that feels natural, elegant,
              and easy to use.
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-[#b99573]" />
          </div>
        </header>

        {/* MAIN INFOGRAPHIC */}
        <figure className="mt-14">
          <div className="overflow-hidden rounded-[2.5rem] border border-[#e4d7ca] bg-[#fffaf4] shadow-[0_24px_70px_rgba(74,55,40,0.10)]">
            <Image
              src="/best-corkscrews-guide.png"
              alt="Illustrated Vino Pairings guide comparing wing corkscrews, waiter’s corkscrews, and electric wine openers"
              width={1024}
              height={1536}
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1040px"
              className="h-auto w-full"
            />
          </div>

          <figcaption className="mx-auto mt-4 max-w-2xl text-center text-xs leading-6 text-[#8a7463]">
            Three common wine-opening styles: wing corkscrew, waiter&apos;s
            corkscrew, and electric opener.
          </figcaption>
        </figure>

        {/* EDITORIAL INTRO */}
        <section className="mx-auto mt-20 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
            A Small Tool, A Better Ritual
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#2c211c] md:text-5xl [font-family:var(--font-playfair)]">
            The best corkscrew almost disappears into the experience.
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-[#665246]">
            It should feel intuitive enough that you stop thinking about the
            tool itself and simply enjoy opening the bottle.
          </p>
        </section>

        {/* SHORT ANSWER */}
        <section className="mt-20 grid gap-12 border-y border-[#d7c7b7] py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              A Good Place to Start
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#2c211c] [font-family:var(--font-playfair)]">
              Start with a wing corkscrew if you want simplicity.
            </h2>

            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#665246]">
              The motion is visible and easy to understand. Twist the spiral
              into the cork, allow the wings to rise, then press them down to
              lift the cork free.
            </p>

            <p className="mt-4 max-w-2xl text-[17px] leading-8 text-[#665246]">
              If you enjoy the ritual and want something more compact, a
              waiter&apos;s corkscrew is a natural next step.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-[#eee5db] p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7659]">
              Beginner-Friendly
            </p>

            <h3 className="mt-3 text-3xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
              Wing Corkscrew
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-6 text-[#665246]">
              <p>✓ Easy to understand</p>
              <p>✓ Helpful leverage</p>
              <p>✓ Requires little practice</p>
              <p>✓ Practical for casual hosting</p>
            </div>
          </aside>
        </section>

        {/* THREE STYLES */}
        <section className="mt-20">
          <div className="border-b border-[#cfbda9] pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              Three Ways to Open Wine
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-[#2c211c] md:text-5xl [font-family:var(--font-playfair)]">
              Choose the style that suits the way you drink.
            </h2>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {openerStyles.map((opener) => (
              <article
                key={opener.title}
                className="border-t border-[#cdbba8] pt-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7659]">
                    {opener.eyebrow}
                  </p>

                  <span className="text-sm text-[#b6a18e]">
                    {opener.number}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
                  {opener.title}
                </h3>

                <p className="mt-4 leading-8 text-[#665246]">
                  {opener.description}
                </p>

                <p className="mt-5 text-sm leading-6 text-[#8a7463]">
                  {opener.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="my-20 border-y border-[#d7c7b7] py-12 text-center">
          <p className="mx-auto max-w-4xl text-3xl font-medium leading-snug text-[#47352c] md:text-5xl [font-family:var(--font-playfair)]">
            “The right corkscrew makes opening wine feel less like a task and
            more like the beginning of the evening.”
          </p>
        </section>

        {/* WHAT TO LOOK FOR */}
        <section className="rounded-[2.5rem] bg-[#eee5db] px-7 py-12 md:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
            What Matters Most
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#2c211c] md:text-5xl [font-family:var(--font-playfair)]">
            Six details that make a corkscrew feel better.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {qualities.map((item) => (
              <QualityPoint key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* HOW TO CHOOSE */}
        <section className="mt-20 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              How to Choose
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#2c211c] [font-family:var(--font-playfair)]">
              Choose for the experience you want.
            </h2>

            <p className="mt-5 leading-8 text-[#665246]">
              All three styles can open a bottle beautifully. The difference
              is whether you value simplicity, tradition, or convenience most.
            </p>
          </div>

          <div className="border-t border-[#cfbda9]">
            <ChoiceRow
              title="Choose a wing corkscrew if..."
              text="You want the easiest visual learning curve and appreciate a tool that makes the opening motion obvious."
            />

            <ChoiceRow
              title="Choose a waiter’s corkscrew if..."
              text="You want a compact, classic tool and enjoy learning a small skill that becomes more graceful with practice."
            />

            <ChoiceRow
              title="Choose an electric opener if..."
              text="Convenience matters most or you prefer to minimize twisting and pulling when opening wine."
            />
          </div>
        </section>

        {/* QUICK COMPARISON */}
        <section className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              At a Glance
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
              The quick comparison.
            </h2>
          </div>

          <div className="border-t border-[#cfbda9]">
            <ComparisonRow
              label="Easiest to learn"
              value="Wing corkscrew"
            />

            <ComparisonRow
              label="Most compact"
              value="Waiter’s corkscrew"
            />

            <ComparisonRow
              label="Least physical effort"
              value="Electric opener"
            />

            <ComparisonRow
              label="Best skill to learn"
              value="Waiter’s corkscrew"
            />

            <ComparisonRow
              label="Best starting point"
              value="Wing corkscrew"
              last
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#2d211c] px-7 py-14 text-center text-white md:px-14 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9b98f]">
            Learn the Ritual
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl [font-family:var(--font-playfair)]">
            A little practice makes every bottle easier.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-white/75">
            Learn how to position the corkscrew, use leverage, and remove the
            cork smoothly without making the experience feel complicated.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/tips"
              className="inline-flex items-center justify-center rounded-full bg-[#b58a63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#c69a72]"
            >
              Explore Wine Tips
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>

            <Link
              href="/best-wine-opener-for-beginners"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Beginner Opener Guide
            </Link>
          </div>
        </section>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-[#8a7463]">
          Vino Pairings offers approachable guidance for wine, entertaining,
          pairing, and the small rituals that make every pour feel more
          special.
        </p>
      </article>
    </>
  );
}

function QualityPoint({ number, title, text }) {
  return (
    <article className="border-t border-[#cfbda9] py-8">
      <p className="text-xs tracking-[0.2em] text-[#ad927a]">
        {number}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
        {title}
      </h3>

      <p className="mt-3 max-w-xl leading-8 text-[#665246]">
        {text}
      </p>
    </article>
  );
}

function ChoiceRow({ title, text }) {
  return (
    <article className="grid gap-3 border-b border-[#cfbda9] py-7 sm:grid-cols-[220px_1fr]">
      <h3 className="text-xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
        {title}
      </h3>

      <p className="leading-8 text-[#665246]">
        {text}
      </p>
    </article>
  );
}

function ComparisonRow({ label, value, last = false }) {
  return (
    <div
      className={`grid grid-cols-[1fr_auto] gap-5 py-5 ${
        last ? "" : "border-b border-[#cfbda9]"
      }`}
    >
      <span className="text-sm leading-6 text-[#8a7463]">
        {label}
      </span>

      <span className="text-right text-sm font-semibold leading-6 text-[#2c211c]">
        {value}
      </span>
    </div>
  );
}