// src/app/sunday/page.js

import Image from "next/image";
import Link from "next/link";

// Images
import salmonImg from "./assets/salmon.png";
import clueImg from "./assets/clue.png";
import turkeyImg from "./assets/turkeysandwich.png";
import whiteshellsImg from "./assets/whiteshells.png";

export const metadata = {
  title:
    "Sunday Pairings | Real Meals, Wine & Lifestyle Inspiration | Vino Pairings",
  description:
    "A weekly collection of real meals, thoughtful wine pairings, and elegant everyday inspiration from Pamela Terrell of Vino Pairings.",
  alternates: {
    canonical: "/sunday",
  },
  openGraph: {
    title: "Sunday Pairings | Vino Pairings",
    description:
      "Real meals, real wines, and beautiful everyday moments shared weekly.",
    type: "website",
    url: "https://vinopairings.com/sunday",
  },
};

function InternalCTA({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-[#a37c58] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
    >
      {children}
    </Link>
  );
}

function ExternalCTA({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#a37c58] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
    >
      {children}
    </a>
  );
}

function MealCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#d8cfc4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full bg-[#f9f6ef]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          priority
          placeholder="blur"
          className="object-contain p-3"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#6e2a2a] px-3 py-1 text-xs font-semibold text-white shadow">
          {item.wine}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8a7463]">
          {item.date}
        </p>

        <h2 className="text-xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
          {item.dish}
        </h2>

        <p className="text-[15px] leading-7 text-[#6b5645]">
          {item.notes}
        </p>

        {item.links?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {item.links.map((link) => (
              <ExternalCTA key={link.href} href={link.href}>
                {link.label}
              </ExternalCTA>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function SundayPage() {
  const gallery = [
    {
      src: turkeyImg,
      dish: "Turkey Sandwich on the Lake",
      wine: "Bogle Sauvignon Blanc",
      date: "Sunday Escape",
      notes:
        "A relaxed pontoon afternoon with crisp Sauvignon Blanc and a simple turkey sandwich. Proof that great pairings do not need to be complicated to feel memorable.",
      alt: "Turkey sandwich and white wine on pontoon boat",
      links: [
        {
          label: "Bogle Winery",
          href: "https://www.boglewinery.com/",
        },
      ],
    },
    {
      src: whiteshellsImg,
      dish: "White Cheddar Shells & Bacon-Wrapped Filet",
      wine: "Cabernet-Merlot",
      date: "This Week",
      notes:
        "Creamy shells, seared zucchini, and rich beef create a comforting dinner made even better with a smooth red blend.",
      alt: "Pasta shells zucchini and filet dinner",
    },
    {
      src: clueImg,
      dish: "CLUE: Wine Lovers Edition",
      wine: "Cabernet Sauvignon",
      date: "Game Night",
      notes:
        "Sometimes the best pairing is not a meal, but a moment. A cozy evening game paired with a generous pour of Cabernet.",
      alt: "Wine lovers clue game with red wine",
    },
    {
      src: salmonImg,
      dish: "Salmon with Asparagus & Rice-Quinoa Blend",
      wine: "GEN5 Pinot Noir",
      date: "Last Sunday",
      notes:
        "Fresh salmon, tender asparagus, and a bright Pinot Noir create an elegant yet approachable dinner worth repeating.",
      alt: "Salmon asparagus plated dinner",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      {/* HERO */}
      <section className="border-b border-[#e6ddd2] bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-[#8a7463]">
            Weekly Lifestyle Series
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-[#2f241f] md:text-6xl [font-family:var(--font-playfair)]">
            Sunday Pairings
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#6b5645]">
            Real meals. Thoughtful wine pairings. Beautiful everyday moments.
            Shared weekly by Pamela Terrell, creator of Vino Pairings.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <InternalCTA href="/">Explore Pairings</InternalCTA>
            <InternalCTA href="/tips">Wine Tips</InternalCTA>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="overflow-hidden rounded-[2rem] border border-[#d8cfc4] bg-white shadow-md">
          <div className="relative aspect-[16/7] w-full bg-[#f9f6ef]">
            <Image
              src={turkeyImg}
              alt="Wine and sandwich on pontoon"
              fill
              priority
              placeholder="blur"
              className="object-cover"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>

          <div className="px-8 py-10 text-center md:px-14 md:py-12">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#8a7463]">
              This Week&apos;s Mood
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#2f241f] md:text-5xl [font-family:var(--font-playfair)]">
              Lake Breeze & Sauvignon Blanc
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-[19px] leading-9 text-[#6b5645] md:text-[21px]">
              Lake breeze, bright Sauvignon Blanc, and the reminder that simple
              pleasures often create the best memories.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-7 md:grid-cols-2">
          {gallery.map((item) => (
            <MealCard key={`${item.dish}-${item.wine}`} item={item} />
          ))}
        </div>
      </section>

      {/* SUNDAY ESSENTIALS */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-[#d8cfc4] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-[#8a7463]">
            Sunday Essentials
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Simple Ways to Make Wine Feel Effortless
          </h2>

          <p className="mt-4 max-w-3xl text-[16px] leading-8 text-[#6b5645]">
            A relaxed Sunday does not need much. The right opener, a comfortable
            glass, and a little pairing confidence can make an ordinary meal
            feel special.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-[#fdf7ef] p-5">
              <h3 className="font-semibold text-[#2f241f]">
                Find the Right Corkscrew
              </h3>

              <p className="mt-2 flex-1 text-sm leading-7 text-[#6b5645]">
                Learn the differences between popular corkscrew styles and find
                an opener that feels comfortable and easy to use.
              </p>

              <div className="mt-4">
                <InternalCTA href="/best-corkscrews">
                  Corkscrew Guide →
                </InternalCTA>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-[#fdf7ef] p-5">
              <h3 className="font-semibold text-[#2f241f]">
                Choose a Wine Glass
              </h3>

              <p className="mt-2 flex-1 text-sm leading-7 text-[#6b5645]">
                Understand the basic wine glass shapes and what actually matters
                when choosing glassware for everyday wine.
              </p>

              <div className="mt-4">
                <InternalCTA href="/best-wine-glasses">
                  Wine Glass Guide →
                </InternalCTA>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-[#fdf7ef] p-5">
              <h3 className="font-semibold text-[#2f241f]">
                Pair With Confidence
              </h3>

              <p className="mt-2 flex-1 text-sm leading-7 text-[#6b5645]">
                Start with a few simple pairing principles and learn why
                acidity, sweetness, body, and richness can change what works.
              </p>

              <div className="mt-4">
                <InternalCTA href="/tips">
                  Explore Wine Tips →
                </InternalCTA>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#e6ddd2] pt-7 text-center">
            <p className="text-sm leading-7 text-[#8a7463]">
              Looking for something to keep?
            </p>

            <Link
              href="/printable-guides"
              className="mt-2 inline-block font-semibold text-[#7d4a3d] underline decoration-[#b79579]/60 underline-offset-4 transition hover:text-[#4f2f29]"
            >
              Explore Vino Pairings printable guides →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
          More Sundays Coming Soon
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
          Check back for new meals, wine pairings, hosting inspiration, and
          beautiful moments from everyday life.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block rounded-full bg-[#6e2a2a] px-7 py-3 font-semibold text-white transition hover:bg-[#8a3a3a]"
          >
            Explore All Pairings →
          </Link>
        </div>
      </section>
    </main>
  );
}