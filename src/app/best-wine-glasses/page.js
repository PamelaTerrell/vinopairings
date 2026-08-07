// src/app/best-wine-glasses/page.js

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Wine Glasses for Everyday Elegance | Vino Pairings",
  description:
    "A refined guide to choosing wine glasses for red wine, white wine, sparkling wine, everyday meals, and elegant home entertaining.",
  alternates: {
    canonical: "/best-wine-glasses",
  },
  openGraph: {
    title: "Best Wine Glasses for Everyday Elegance | Vino Pairings",
    description:
      "A polished guide to choosing universal, red, white, sparkling, and stemless wine glasses.",
    type: "article",
    url: "https://vinopairings.com/best-wine-glasses",
    siteName: "Vino Pairings",
    images: [
      {
        url: "/wine-glasses-hero.png",
        width: 1200,
        height: 900,
        alt: "Elegant collection of wine glasses arranged on a softly lit table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wine Glasses for Everyday Elegance | Vino Pairings",
    description:
      "A refined guide to choosing the right wine glass for the way you enjoy wine.",
    images: ["/wine-glasses-hero.png"],
  },
};

const glassStyles = [
  {
    number: "01",
    eyebrow: "The Everyday Essential",
    title: "Universal Wine Glass",
    description:
      "A graceful all-purpose glass that works beautifully for many reds, whites, and rosés. If you want one dependable shape for most occasions, this is the place to begin.",
    note: "Best for everyday wine, casual dinners, and simple entertaining.",
  },
  {
    number: "02",
    eyebrow: "For Fuller Reds",
    title: "Large Bowl Red Wine Glass",
    description:
      "A broader bowl gives red wine more room to meet the air, helping aromas feel more expressive and the drinking experience more generous.",
    note: "Especially suited to Cabernet Sauvignon, Merlot, Syrah, Pinot Noir, and red blends.",
  },
  {
    number: "03",
    eyebrow: "For Fresh Whites",
    title: "Smaller Bowl White Wine Glass",
    description:
      "A slightly smaller bowl helps preserve freshness and keeps delicate aromas feeling focused, especially when the wine is served chilled.",
    note: "A natural fit for Sauvignon Blanc, Chardonnay, Riesling, Pinot Grigio, and Albariño.",
  },
  {
    number: "04",
    eyebrow: "For Celebration",
    title: "Tulip or Flute Glass",
    description:
      "A narrower profile helps preserve lively bubbles while still allowing enough room for aroma, especially in sparkling wine served at the table.",
    note: "Best for Champagne, Prosecco, Cava, and sparkling rosé.",
  },
  {
    number: "05",
    eyebrow: "For Relaxed Evenings",
    title: "Stemless Glass or Tumbler",
    description:
      "A practical choice for patios, picnics, lake days, and casual gatherings where traditional stemware may feel too delicate.",
    note: "Best for outdoor entertaining, travel, and easygoing wine moments.",
  },
];

const glassQualities = [
  {
    number: "01",
    title: "Clear Glass",
    text: "The glass should let the color of the wine remain part of the experience.",
  },
  {
    number: "02",
    title: "Comfortable Weight",
    text: "Good glassware should feel balanced rather than heavy or awkward in the hand.",
  },
  {
    number: "03",
    title: "Thoughtful Bowl Shape",
    text: "The shape helps guide aroma toward the nose and influences how the wine feels while drinking.",
  },
  {
    number: "04",
    title: "A Pleasant Rim",
    text: "A thinner rim can make the sip feel cleaner and more refined.",
  },
  {
    number: "05",
    title: "Easy Care",
    text: "Everyday glassware should be simple enough to clean and store without becoming precious.",
  },
  {
    number: "06",
    title: "Everyday Durability",
    text: "The most useful glasses are elegant enough for guests and practical enough for a Tuesday night.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Wine Glasses for Everyday Elegance",
  description:
    "A refined guide to choosing wine glasses for red wine, white wine, sparkling wine, and everyday entertaining.",
  image: "https://vinopairings.com/wine-glasses-hero.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://vinopairings.com/best-wine-glasses",
  },
  publisher: {
    "@type": "Organization",
    name: "Vino Pairings",
    url: "https://vinopairings.com",
  },
};

export default function BestWineGlassesPage() {
  return (
    <>
      <Script
        id="best-wine-glasses-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>

      <article className="mx-auto max-w-6xl">
        {/* HERO */}
        <header className="overflow-hidden rounded-[2.75rem] bg-[#f4eee6]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex items-center px-7 py-14 md:px-12 md:py-16 lg:px-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,124,88,0.14),transparent_38%)]" />

              <div className="relative z-10 max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9a7659]">
                  The Vino Pairings Glassware Edit
                </p>

                <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-[#2c211c] md:text-7xl [font-family:var(--font-playfair)]">
                  The Glass
                  <span className="mt-1 block italic text-[#7d4a3d]">
                    Shapes the Moment
                  </span>
                </h1>

                <p className="mt-7 text-lg leading-8 text-[#665246]">
                  The right glass can make an ordinary pour feel more
                  considered. Here&apos;s how to choose wine glasses that suit
                  both the wine and the way you actually live.
                </p>

                <div className="mt-8 h-px w-24 bg-[#b99573]" />
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <Image
                src="/wine-glasses-hero.png"
                alt="Elegant collection of wine glasses on a softly lit marble table"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#f4eee6]/25 lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </header>

        {/* EDITORIAL INTRO */}
        <section className="mx-auto mt-20 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
            Everyday Elegance
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#2c211c] md:text-5xl [font-family:var(--font-playfair)]">
            Beautiful glassware should feel special without feeling precious.
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-[#665246]">
            You do not need a cabinet full of shapes to enjoy wine well. A few
            thoughtful glasses can carry you from weeknight dinner to a
            celebratory bottle with guests.
          </p>
        </section>

        {/* START HERE */}
        <section className="mt-20 grid gap-12 border-y border-[#d7c7b7] py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              If You Buy One Style
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#2c211c] [font-family:var(--font-playfair)]">
              Start with a universal wine glass.
            </h2>

            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#665246]">
              A well-shaped universal glass is versatile enough for many reds,
              whites, and rosés while still feeling polished enough for a
              dinner table.
            </p>

            <p className="mt-4 max-w-2xl text-[17px] leading-8 text-[#665246]">
              It is especially useful when you want beautiful glassware without
              storing a different shape for every bottle.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-[#eee5db] p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7659]">
              The Essential
            </p>

            <h3 className="mt-3 text-3xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
              Universal Wine Glass
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-6 text-[#665246]">
              <p>✓ Works with reds and whites</p>
              <p>✓ Elegant enough for guests</p>
              <p>✓ Practical for everyday meals</p>
              <p>✓ Simplifies storage</p>
            </div>
          </aside>
        </section>

        {/* GLASS STYLES */}
        <section className="mt-20">
          <div className="border-b border-[#cfbda9] pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              Five Useful Shapes
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-[#2c211c] md:text-5xl [font-family:var(--font-playfair)]">
              Choose the glass for the way you pour.
            </h2>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-12 lg:grid-cols-2">
            {glassStyles.map((glass) => (
              <article
                key={glass.title}
                className="border-t border-[#cdbba8] pt-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7659]">
                    {glass.eyebrow}
                  </p>

                  <span className="text-sm text-[#b6a18e]">
                    {glass.number}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
                  {glass.title}
                </h3>

                <p className="mt-4 leading-8 text-[#665246]">
                  {glass.description}
                </p>

                <p className="mt-5 text-sm leading-6 text-[#8a7463]">
                  {glass.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="my-20 border-y border-[#d7c7b7] py-12 text-center">
          <p className="mx-auto max-w-4xl text-3xl font-medium leading-snug text-[#47352c] md:text-5xl [font-family:var(--font-playfair)]">
            “The best wine glass is the one that makes you notice the wine, not
            the glass.”
          </p>
        </section>

        {/* WHAT TO LOOK FOR */}
        <section className="rounded-[2.5rem] bg-[#eee5db] px-7 py-12 md:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
            What Matters Most
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#2c211c] md:text-5xl [font-family:var(--font-playfair)]">
            Six details that make glassware feel better.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {glassQualities.map((item) => (
              <QualityPoint key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* HOW TO BUILD A COLLECTION */}
        <section className="mt-20 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              Build Slowly
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#2c211c] [font-family:var(--font-playfair)]">
              You do not need every shape at once.
            </h2>

            <p className="mt-5 leading-8 text-[#665246]">
              Start with the glass that matches the way you drink most often,
              then add specialized pieces only when they genuinely improve the
              experience.
            </p>
          </div>

          <div className="border-t border-[#cfbda9]">
            <CollectionRow
              title="Begin with universal glasses"
              text="They cover the widest range of wines and work beautifully for everyday meals and guests."
            />

            <CollectionRow
              title="Add red wine glasses next"
              text="If you frequently drink fuller reds, a larger bowl can make aromas feel more expressive."
            />

            <CollectionRow
              title="Add sparkling glasses if you celebrate often"
              text="A tulip or flute gives sparkling wine its own sense of occasion."
            />

            <CollectionRow
              title="Keep something casual for outdoors"
              text="Stemless glasses or tumblers are useful when durability matters more than formality."
            />
          </div>
        </section>

        {/* QUICK GUIDE */}
        <section className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              At a Glance
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
              The quick glass guide.
            </h2>
          </div>

          <div className="border-t border-[#cfbda9]">
            <ComparisonRow
              label="Best all-around choice"
              value="Universal glass"
            />

            <ComparisonRow
              label="Best for fuller reds"
              value="Large bowl"
            />

            <ComparisonRow
              label="Best for chilled whites"
              value="Smaller bowl"
            />

            <ComparisonRow
              label="Best for sparkling wine"
              value="Tulip or flute"
            />

            <ComparisonRow
              label="Best for outdoors"
              value="Stemless or tumbler"
              last
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#2d211c] px-7 py-14 text-center text-white md:px-14 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9b98f]">
            Pair the Glass with the Moment
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl [font-family:var(--font-playfair)]">
            Make every pour feel intentional.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-white/75">
            Once your glassware is ready, explore wine pairings, corkscrew
            techniques, and simple ways to make the table feel a little more
            special.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#b58a63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#c69a72]"
            >
              Explore Wine Pairings
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>

            <Link
              href="/best-corkscrews"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Corkscrew Guide
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

function CollectionRow({ title, text }) {
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