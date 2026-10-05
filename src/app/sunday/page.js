// src/app/sunday/page.js

import Image from "next/image";
import Link from "next/link";

// Images
import salmonImg from "./assets/salmon.png";
import clueImg from "./assets/clue.png";
import turkeyImg from "./assets/turkeysandwich.png";
import whiteshellsImg from "./assets/whiteshells.png";
import stuffedChickenImg from "./assets/stuffedchicken-chardonnay.jpg";

export const metadata = {
  title:
    "Sunday Pairings | Real Meals, Wine & Everyday Elegance | Vino Pairings",
  description:
    "Sunday Pairings from Vino Pairings — real meals, thoughtful wines, relaxed entertaining, and everyday moments worth savoring.",
  alternates: {
    canonical: "/sunday",
  },
  openGraph: {
    title: "Sunday Pairings | Vino Pairings",
    description:
      "Real meals, thoughtful wines, and beautiful everyday moments worth savoring.",
    type: "website",
    url: "https://vinopairings.com/sunday",
  },
};

/* -------------------------------------------------------------------------- */
/* SUNDAY ENTRIES                                                             */
/* -------------------------------------------------------------------------- */

const sundayPairings = [
  {
    src: stuffedChickenImg,
    dish: "Stuffed Chicken Breast with Coconut Quinoa Rice",
    wine: "Kendall-Jackson Chardonnay",
    date: "This Sunday",
    mood: "Comfort Food & Chardonnay",
    eyebrow: "October · At the Table",
    notes:
      "Savory stuffed chicken breast with coconut quinoa rice meets a creamy, refreshing Chardonnay. Rich enough to feel comforting, bright enough to keep the whole plate beautifully balanced.",
    featureNotes:
      "A warm stuffed chicken dinner, coconut quinoa rice, and a chilled glass of Kendall-Jackson Chardonnay — the kind of Sunday meal that feels special without asking too much of you.",
    pairingNotes:
      "The Chardonnay’s creamy texture complements the richness of the chicken, while its bright acidity brings freshness back to every bite.",
    alt: "Stuffed chicken breast with coconut quinoa rice beside a glass and bottle of Kendall-Jackson Chardonnay",
    winery: {
      label: "Visit Kendall-Jackson",
      href: "https://www.kj.com/",
    },
    featured: true,
    imagePosition: "object-center",
  },

  {
    src: turkeyImg,
    dish: "Turkey Sandwich on the Lake",
    wine: "Bogle Sauvignon Blanc",
    date: "Sunday Escape",
    notes:
      "A relaxed pontoon afternoon with crisp Sauvignon Blanc and a simple turkey sandwich. Proof that a memorable pairing does not have to be complicated.",
    alt: "Turkey sandwich and white wine enjoyed on a pontoon boat",
    winery: {
      label: "Visit Bogle Winery",
      href: "https://www.boglewinery.com/",
    },
    imagePosition: "object-center",
  },

  {
    src: whiteshellsImg,
    dish: "White Cheddar Shells & Bacon-Wrapped Filet",
    wine: "Cabernet-Merlot",
    date: "Comfort Dinner",
    notes:
      "Creamy white cheddar shells, seared zucchini, and rich beef make an easy comfort dinner feel just a little more special with a smooth red blend.",
    alt: "White cheddar pasta shells, zucchini, and bacon-wrapped filet dinner",
    imagePosition: "object-center",
  },

  {
    src: clueImg,
    dish: "CLUE: Wine Lovers Edition",
    wine: "Cabernet Sauvignon",
    date: "Game Night",
    notes:
      "Sometimes the pairing is not about the meal at all. A cozy game night, a generous pour of Cabernet, and nowhere else you need to be.",
    alt: "Wine Lovers edition of Clue beside a glass of red wine",
    imagePosition: "object-center",
  },

  {
    src: salmonImg,
    dish: "Salmon with Asparagus & Rice-Quinoa Blend",
    wine: "GEN5 Pinot Noir",
    date: "Sunday Dinner",
    notes:
      "Fresh salmon, tender asparagus, and a rice-quinoa blend make an elegant but approachable dinner, finished with a bright Pinot Noir.",
    alt: "Salmon with asparagus and rice-quinoa blend served with wine",
    imagePosition: "object-center",
  },
];

/* -------------------------------------------------------------------------- */
/* LINKS                                                                      */
/* -------------------------------------------------------------------------- */

function ArrowIcon() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

function InternalTextLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#713a34] transition hover:text-[#4d2824] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8f5d52] focus-visible:ring-offset-4"
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function ExternalTextLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#713a34] transition hover:text-[#4d2824] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8f5d52] focus-visible:ring-offset-4"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#6f302d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#572421] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8f5d52] focus-visible:ring-offset-4"
    >
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* JOURNAL CARD                                                               */
/* -------------------------------------------------------------------------- */

function MealCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[1.65rem] border border-[#e3d8cc] bg-[#fffdf9] shadow-[0_10px_28px_rgba(57,39,29,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(57,39,29,0.09)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eee6dc]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          placeholder="blur"
          className={`object-cover transition duration-700 group-hover:scale-[1.02] ${
            item.imagePosition || "object-center"
          }`}
          sizes="(min-width: 768px) 50vw, 100vw"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
        />

        <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full border border-white/50 bg-[#fffdf9]/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#62312d] shadow-sm backdrop-blur">
          {item.wine}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a08067]">
          {item.date}
        </p>

        <h3 className="mt-3 text-[1.5rem] font-semibold leading-[1.2] text-[#30231e] [font-family:var(--font-playfair)] sm:text-[1.65rem]">
          {item.dish}
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-[#725d4e]">
          {item.notes}
        </p>

        {item.winery && (
          <div className="mt-5 border-t border-[#eee5dc] pt-5">
            <ExternalTextLink href={item.winery.href}>
              {item.winery.label}
            </ExternalTextLink>
          </div>
        )}
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* ESSENTIAL CARD                                                             */
/* -------------------------------------------------------------------------- */

function EssentialCard({ number, title, children, href, linkLabel }) {
  return (
    <article className="flex h-full flex-col rounded-[1.45rem] border border-[#e8ddd1] bg-[#fffdf9] p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(57,39,29,0.06)]">
      <span className="text-[10px] font-semibold tracking-[0.24em] text-[#ad896b]">
        {number}
      </span>

      <h3 className="mt-4 text-xl font-semibold text-[#30231e] [font-family:var(--font-playfair)]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-[#745f50]">
        {children}
      </p>

      <div className="mt-5">
        <InternalTextLink href={href}>{linkLabel}</InternalTextLink>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function SundayPage() {
  const featured =
    sundayPairings.find((item) => item.featured) || sundayPairings[0];

  const archiveItems = sundayPairings.filter(
    (item) => item !== featured
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f4ed] text-[#4a3c31]">
      {/* ------------------------------------------------------------------ */}
      {/* COMPACT PAGE INTRO                                                 */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative border-b border-[#e7ddd1] bg-[#faf7f1]">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d7bca3]/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-7 text-center sm:py-8">
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#9d7b61] sm:text-[10px]">
            A Weekly Vino Pairings Journal
          </p>

          <h1 className="mt-2 text-3xl font-semibold leading-tight text-[#2e231e] [font-family:var(--font-playfair)] sm:text-4xl">
            Sunday Pairings
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#766153] sm:text-[15px]">
            Real meals, thoughtful wines, and everyday moments worth savoring.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FEATURED SUNDAY                                                    */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <article className="overflow-hidden rounded-[1.8rem] border border-[#dfd3c6] bg-[#fffdf9] shadow-[0_20px_60px_rgba(58,40,29,0.08)] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          {/* IMAGE */}

          <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e1d7] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[620px]">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              priority
              placeholder="blur"
              className={`object-cover ${
                featured.imagePosition || "object-center"
              }`}
              sizes="(min-width: 1024px) 55vw, 100vw"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 via-black/5 to-transparent lg:hidden"
            />

            <div className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] rounded-full border border-white/40 bg-[#fffdf9]/94 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65342f] shadow-sm backdrop-blur lg:hidden">
              {featured.wine}
            </div>
          </div>

          {/* COPY */}

          <div className="flex items-center">
            <div className="w-full px-7 py-10 sm:px-10 sm:py-12 lg:px-12 xl:px-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9e7b60]">
                This Week&apos;s Sunday
              </p>

              <p className="mt-4 text-sm italic text-[#8b7462]">
                {featured.eyebrow}
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-[#30231e] [font-family:var(--font-playfair)] sm:text-5xl">
                {featured.mood.includes("&") ? (
                  <>
                    {featured.mood.split("&")[0]}&
                    <span className="block text-[#763a34]">
                      {featured.mood.split("&")[1].trim()}
                    </span>
                  </>
                ) : (
                  featured.mood
                )}
              </h2>

              <div
                aria-hidden="true"
                className="mt-6 h-px w-12 bg-[#bd9573]"
              />

              <p className="mt-6 text-[16px] leading-8 text-[#715c4d]">
                {featured.featureNotes}
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[#806a59]">
                {featured.pairingNotes}
              </p>

              <div className="mt-7 rounded-xl border-l-2 border-[#b48764] bg-[#f5ede4] px-5 py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a07e63]">
                  The Pairing
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-[#3e3028]">
                  {featured.dish}
                  <span className="mx-2 font-normal text-[#b49a84]">
                    ×
                  </span>
                  {featured.wine}
                </p>
              </div>

              {featured.winery && (
                <div className="mt-7">
                  <ExternalTextLink href={featured.winery.href}>
                    {featured.winery.label}
                  </ExternalTextLink>
                </div>
              )}
            </div>
          </div>
        </article>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SUNDAY JOURNAL                                                     */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-4 sm:pb-16">
        <div className="mb-8 flex flex-col gap-3 border-b border-[#dfd4c8] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a795f]">
              From Recent Sundays
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#30231e] [font-family:var(--font-playfair)] sm:text-4xl">
              The Sunday Journal
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#806b5b] sm:text-right">
            Meals, bottles, game nights, lake afternoons, and everything in
            between.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {archiveItems.map((item) => (
            <MealCard
              key={`${item.dish}-${item.wine}`}
              item={item}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SUNDAY NOTE                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-y border-[#e3d7cb] bg-[#f0e7dd]">
        <div className="mx-auto max-w-4xl px-6 py-11 text-center sm:py-12">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9b795f]">
            A Sunday Thought
          </p>

          <blockquote className="mx-auto mt-4 max-w-3xl text-2xl font-medium leading-relaxed text-[#3c2d26] [font-family:var(--font-playfair)] sm:text-[1.75rem]">
            “The best pairing is the one that makes an ordinary meal feel like
            a moment worth remembering.”
          </blockquote>

          <p className="mt-4 text-xs text-[#907764]">
            — Vino Pairings
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SUNDAY ESSENTIALS                                                  */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a795f]">
            Sunday Essentials
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-[#30231e] [font-family:var(--font-playfair)] sm:text-4xl">
            Make Wine Feel Effortless
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#776253]">
            You do not need complicated rules or a cabinet full of accessories.
            A few useful basics can make opening, pouring, and pairing wine feel
            much easier.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <EssentialCard
            number="01"
            title="Open It Easily"
            href="/best-corkscrews"
            linkLabel="Corkscrew Guide"
          >
            Compare popular corkscrew styles and find an opener that feels
            comfortable, dependable, and easy to use.
          </EssentialCard>

          <EssentialCard
            number="02"
            title="Choose Your Glass"
            href="/best-wine-glasses"
            linkLabel="Wine Glass Guide"
          >
            Learn which wine glass shapes actually matter and what works well
            for everyday drinking without overcomplicating it.
          </EssentialCard>

          <EssentialCard
            number="03"
            title="Trust Your Pairing"
            href="/tips"
            linkLabel="Explore Wine Tips"
          >
            Start with simple principles around acidity, sweetness, body, and
            richness — then let your own taste do the rest.
          </EssentialCard>
        </div>

        <div className="mt-8 text-center">
          <InternalTextLink href="/printable-guides">
            Browse Vino Pairings Printable Guides
          </InternalTextLink>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FINAL CTA                                                          */}
      {/* ------------------------------------------------------------------ */}

      <section className="px-5 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] bg-[#34251f] px-7 py-10 text-center shadow-[0_18px_50px_rgba(45,31,25,0.13)] sm:px-12 sm:py-12">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d5b491]">
            Come Back Next Sunday
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#fffaf3] [font-family:var(--font-playfair)] sm:text-4xl">
            Another Bottle. Another Meal.
            <span className="block">Another Story.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#d7c8bc]">
            New Sunday pairings will keep joining the journal — real meals,
            real wines, and ideas meant to be enjoyed at home.
          </p>

          <div className="mt-7">
            <PrimaryLink href="/">
              Explore All Wine Pairings
            </PrimaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}