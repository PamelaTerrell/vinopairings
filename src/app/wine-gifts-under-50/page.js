// src/app/wine-gifts-under-50/page.js

import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Beautiful Wine Gifts Under $50 | Vino Pairings",
  description:
    "A refined edit of elegant wine gifts under $50 for hosts, wine lovers, birthdays, housewarmings, holidays, and thoughtful entertaining.",
  alternates: {
    canonical: "/wine-gifts-under-50",
  },
  openGraph: {
    title: "Beautiful Wine Gifts Under $50 | Vino Pairings",
    description:
      "Thoughtful wine gifts for gracious hosts, wine lovers, and beautifully set tables.",
    type: "article",
    url: "https://vinopairings.com/wine-gifts-under-50",
    siteName: "Vino Pairings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beautiful Wine Gifts Under $50 | Vino Pairings",
    description:
      "A refined edit of thoughtful wine gifts for hosts and wine lovers.",
  },
};

const featuredGifts = [
  {
    eyebrow: "For the Elegant Table",
    title: "Marble Wine Chiller",
    description:
      "Sculptural, useful, and quietly luxurious. A marble wine chiller looks beautiful even when no bottle is inside and brings an effortless sense of occasion to the table.",
    bestFor: "Hosts, housewarmings, birthdays, and dinner parties",
  },
  {
    eyebrow: "For the Gracious Host",
    title: "Cheese Board & Serving Set",
    description:
      "A generous gift that turns a bottle of wine into an evening. Add cheese, fruit, bread, and a few thoughtful details and the table instantly feels more inviting.",
    bestFor: "Entertainers, couples, housewarmings, and gatherings",
  },
  {
    eyebrow: "For the New Wine Lover",
    title: "Classic Corkscrew Set",
    description:
      "Timeless, practical, and easy to appreciate. A well-designed corkscrew is one of those small objects that makes the ritual of opening wine feel more polished.",
    bestFor: "New wine drinkers, birthdays, and everyday gifting",
    href: "/best-corkscrews",
    linkLabel: "Explore Corkscrews",
  },
];

const smallerGifts = [
  {
    title: "Insulated Wine Tumblers",
    eyebrow: "For Outdoor Evenings",
    description:
      "A relaxed choice for patios, picnics, lake days, and evenings when traditional stemware is less practical.",
  },
  {
    title: "Universal Wine Glasses",
    eyebrow: "For Everyday Refinement",
    description:
      "Beautiful glassware makes even an ordinary weeknight pour feel considered.",
    href: "/best-wine-glasses",
    linkLabel: "Explore Wine Glasses",
  },
  {
    title: "Wine Stopper & Pourer Set",
    eyebrow: "For a Small Gesture",
    description:
      "An easy host or thank-you gift that feels especially thoughtful when paired with a favorite bottle.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beautiful Wine Gifts Under $50",
  description:
    "A refined guide to thoughtful wine gifts for hosts, birthdays, housewarmings, holidays, and entertaining.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://vinopairings.com/wine-gifts-under-50",
  },
  publisher: {
    "@type": "Organization",
    name: "Vino Pairings",
    url: "https://vinopairings.com",
  },
};

export default function WineGiftsUnder50Page() {
  return (
    <>
      <Script
        id="wine-gifts-under-50-schema"
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
              The Vino Pairings Gift Edit
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-[#2c211c] md:text-7xl [font-family:var(--font-playfair)]">
              Beautiful Wine Gifts
              <span className="mt-1 block italic text-[#7d4a3d]">
                Under $50
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#665246]">
              Thoughtful objects for wine lovers, gracious hosts, and anyone
              who appreciates a beautifully set table.
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-[#b99573]" />

            <p className="mt-6 text-sm text-[#8a7463]">
              By Pamela Terrell · Updated August 2026
            </p>
          </div>
        </header>

        {/* EDITORIAL INTRO */}
        <section className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
            The Art of Giving Well
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#2c211c] md:text-4xl [font-family:var(--font-playfair)]">
            A thoughtful wine gift should feel useful long after the bottle is
            gone.
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-[#665246]">
            The best gifts are rarely the loudest ones. A beautiful serving
            piece, a dependable wine tool, or a pair of glasses can become part
            of someone&apos;s table for years.
          </p>
        </section>

        {/* FEATURED EDIT */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-6 border-b border-[#cfbda9] pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
                The Featured Edit
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-[#2c211c] md:text-4xl [font-family:var(--font-playfair)]">
                Three gifts that always feel considered
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {featuredGifts.map((gift, index) => (
              <EditorialGift
                key={gift.title}
                number={`0${index + 1}`}
                {...gift}
              />
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="my-20 border-y border-[#d7c7b7] py-12 text-center">
          <p className="mx-auto max-w-4xl text-3xl font-medium leading-snug text-[#47352c] md:text-5xl [font-family:var(--font-playfair)]">
            “Luxury is often less about price and more about choosing something
            beautifully useful.”
          </p>
        </section>

        {/* HOW TO CHOOSE */}
        <section className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              A Simple Rule
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#2c211c] [font-family:var(--font-playfair)]">
              Choose for the way they live.
            </h2>

            <p className="mt-5 leading-8 text-[#665246]">
              Think less about finding the most impressive object and more
              about where it will naturally fit into the recipient&apos;s life.
            </p>
          </div>

          <div className="space-y-0 border-t border-[#cfbda9]">
            <GiftRule
              label="The Host"
              text="Choose something that belongs on the table — a marble chiller, serving board, or elegant glassware."
            />

            <GiftRule
              label="The New Wine Lover"
              text="Choose something approachable and useful, such as a classic corkscrew or universal wine glasses."
            />

            <GiftRule
              label="The Outdoor Entertainer"
              text="Choose something relaxed and durable, such as insulated wine tumblers."
            />

            <GiftRule
              label="The Thank-You Gift"
              text="Keep it simple: a stopper or pourer set paired with a favorite bottle can feel personal without being elaborate."
            />
          </div>
        </section>

        {/* SMALL LUXURIES */}
        <section className="mt-20 rounded-[2.5rem] bg-[#eee5db] px-7 py-12 md:px-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              Small Luxuries
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#2c211c] md:text-5xl [font-family:var(--font-playfair)]">
              Thoughtful doesn&apos;t have to mean elaborate.
            </h2>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {smallerGifts.map((gift) => (
              <SmallGift key={gift.title} {...gift} />
            ))}
          </div>
        </section>

        {/* WHAT MAKES IT FEEL SPECIAL */}
        <section className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7659]">
              The Vino Pairings Standard
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
              What makes a wine gift feel special?
            </h2>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
            <LuxuryPoint
              number="01"
              title="It looks beautiful when given"
              text="Presentation matters. A refined object has presence before it is ever used."
            />

            <LuxuryPoint
              number="02"
              title="It serves a real purpose"
              text="The most memorable gifts often become part of everyday rituals."
            />

            <LuxuryPoint
              number="03"
              title="It does not require expertise"
              text="A good wine gift should be easy to enjoy whether someone is a collector or simply likes a glass with dinner."
            />

            <LuxuryPoint
              number="04"
              title="It feels personal without being risky"
              text="Classic wine accessories can feel thoughtful without requiring you to know someone’s exact taste in wine."
            />
          </div>
        </section>

        {/* FINAL RECOMMENDATION */}
        <section className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#2d211c] px-7 py-14 text-center text-white md:px-14 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9b98f]">
            One Last Thought
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl [font-family:var(--font-playfair)]">
            When in doubt, choose something beautiful and useful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-white/75">
            A polished wine gift does not need to be expensive. A thoughtfully
            chosen object can make an ordinary evening feel a little more
            special.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/best-corkscrews"
              className="inline-flex rounded-full bg-[#b58a63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#c69a72]"
            >
              Corkscrew Guide
            </Link>

            <Link
              href="/best-wine-glasses"
              className="inline-flex rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Wine Glass Guide
            </Link>

            <Link
              href="/tips"
              className="inline-flex rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Wine Tips
            </Link>
          </div>
        </section>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-[#8a7463]">
          Vino Pairings offers approachable guidance for wine, entertaining,
          pairing, and the small rituals that make a table feel special.
        </p>
      </article>
    </>
  );
}

function EditorialGift({
  number,
  eyebrow,
  title,
  description,
  bestFor,
  href,
  linkLabel,
}) {
  return (
    <article className="border-t border-[#cdbba8] pt-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7659]">
          {eyebrow}
        </p>

        <span className="text-sm text-[#b6a18e]">
          {number}
        </span>
      </div>

      <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#2c211c] [font-family:var(--font-playfair)]">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-[#665246]">
        {description}
      </p>

      <p className="mt-5 text-sm leading-6 text-[#8a7463]">
        <span className="font-semibold text-[#584237]">
          Especially lovely for:
        </span>{" "}
        {bestFor}
      </p>

      {href ? (
        <Link
          href={href}
          className="mt-6 inline-flex items-center text-sm font-semibold text-[#7d4a3d] transition hover:text-[#542f28]"
        >
          {linkLabel}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      ) : null}
    </article>
  );
}

function SmallGift({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}) {
  return (
    <article>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7659]">
        {eyebrow}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-[#665246]">
        {description}
      </p>

      {href ? (
        <Link
          href={href}
          className="mt-5 inline-flex items-center text-sm font-semibold text-[#7d4a3d]"
        >
          {linkLabel}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      ) : null}
    </article>
  );
}

function GiftRule({ label, text }) {
  return (
    <div className="grid gap-3 border-b border-[#cfbda9] py-7 sm:grid-cols-[150px_1fr]">
      <h3 className="text-xl font-semibold text-[#2c211c] [font-family:var(--font-playfair)]">
        {label}
      </h3>

      <p className="leading-8 text-[#665246]">
        {text}
      </p>
    </div>
  );
}

function LuxuryPoint({ number, title, text }) {
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