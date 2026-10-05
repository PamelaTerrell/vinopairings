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
    "Sunday Pairings | Real Meals, Wine & Lifestyle Inspiration | Vino Pairings",
  description:
    "Sunday Pairings from Vino Pairings — real meals, thoughtful wine pairings, relaxed entertaining ideas, and beautiful everyday moments shared by Pamela Terrell.",
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

const gallery = [
  {
    src: stuffedChickenImg,
    dish: "Stuffed Chicken Breast with Coconut Quinoa Rice",
    wine: "Kendall-Jackson Chardonnay",
    date: "This Sunday",
    notes:
      "Savory stuffed chicken breast with coconut quinoa rice meets a creamy, refreshing Chardonnay. Rich enough to feel comforting, bright enough to keep the whole plate beautifully balanced.",
    alt: "Stuffed chicken breast with coconut quinoa rice beside a glass and bottle of Kendall-Jackson Chardonnay",
    links: [
      {
        label: "Visit Kendall-Jackson",
        href: "https://www.kj.com/",
      },
    ],
    featured: true,
  },
  {
    src: turkeyImg,
    dish: "Turkey Sandwich on the Lake",
    wine: "Bogle Sauvignon Blanc",
    date: "Sunday Escape",
    notes:
      "A relaxed pontoon afternoon with crisp Sauvignon Blanc and a simple turkey sandwich. Proof that a memorable pairing does not have to be complicated.",
    alt: "Turkey sandwich and white wine enjoyed on a pontoon boat",
    links: [
      {
        label: "Visit Bogle Winery",
        href: "https://www.boglewinery.com/",
      },
    ],
  },
  {
    src: whiteshellsImg,
    dish: "White Cheddar Shells & Bacon-Wrapped Filet",
    wine: "Cabernet-Merlot",
    date: "Comfort Dinner",
    notes:
      "Creamy white cheddar shells, seared zucchini, and rich beef make an easy comfort dinner feel just a little more special with a smooth red blend.",
    alt: "White cheddar pasta shells, zucchini, and bacon-wrapped filet dinner",
  },
  {
    src: clueImg,
    dish: "CLUE: Wine Lovers Edition",
    wine: "Cabernet Sauvignon",
    date: "Game Night",
    notes:
      "Sometimes the pairing is not about the meal at all. A cozy game night, a generous pour of Cabernet, and nowhere else you need to be.",
    alt: "Wine Lovers edition of Clue beside a glass of red wine",
  },
  {
    src: salmonImg,
    dish: "Salmon with Asparagus & Rice-Quinoa Blend",
    wine: "GEN5 Pinot Noir",
    date: "Sunday Dinner",
    notes:
      "Fresh salmon, tender asparagus, and a rice-quinoa blend make an elegant but approachable dinner, finished with a bright Pinot Noir.",
    alt: "Salmon with asparagus and rice-quinoa blend served with wine",
  },
];

function ArrowIcon() {
  return (
    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

function InternalTextLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#733c35] transition hover:text-[#4b2723]"
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
      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#733c35] transition hover:text-[#4b2723]"
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
      className="inline-flex items-center justify-center rounded-full bg-[#6f302d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#582522] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6f302d] focus-visible:ring-offset-4"
    >
      {children}
    </Link>
  );
}

function MealCard({ item, index }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#e3d8ca] bg-[#fffdf9] shadow-[0_12px_35px_rgba(65,45,34,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(65,45,34,0.09)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eee6db]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          priority={index < 2}
          placeholder="blur"
          className="object-cover transition duration-700 group-hover:scale-[1.025]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-[#fffdf9]/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#63322d] shadow-sm backdrop-blur">
          {item.wine}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a7d65]">
          {item.date}
        </p>

        <h3 className="mt-3 text-[1.55rem] font-semibold leading-snug text-[#30241e] [font-family:var(--font-playfair)] sm:text-[1.7rem]">
          {item.dish}
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-[#725d4e]">
          {item.notes}
        </p>

        {item.links?.length > 0 && (
          <div className="mt-5 border-t border-[#eee5dc] pt-5">
            {item.links.map((link) => (
              <ExternalTextLink key={link.href} href={link.href}>
                {link.label}
              </ExternalTextLink>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function EssentialCard({ number, title, children, href, linkLabel }) {
  return (
    <div className="flex h-full flex-col rounded-[1.5rem] border border-[#eadfd4] bg-[#fffdf9] p-6">
      <span className="text-xs font-semibold tracking-[0.22em] text-[#ad8c6d]">
        {number}
      </span>

      <h3 className="mt-4 text-xl font-semibold text-[#30241e] [font-family:var(--font-playfair)]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-[#735f50]">
        {children}
      </p>

      <div className="mt-6">
        <InternalTextLink href={href}>{linkLabel}</InternalTextLink>
      </div>
    </div>
  );
}

export default function SundayPage() {
  const archiveItems = gallery.filter((item) => !item.featured);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f4ed] text-[#4a3c31]">
      {/* HERO */}
      
<section className="relative border-b border-[#e8ded2]">
  <div
    aria-hidden="true"
    className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d8bea4]/20 blur-3xl"
  />

  <div className="relative mx-auto max-w-6xl px-6 py-10 text-center sm:py-12">
    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7b62] sm:text-[11px]">
      A Weekly Vino Pairings Journal
    </p>

    <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-semibold leading-tight text-[#2e231e] [font-family:var(--font-playfair)] sm:text-5xl lg:text-6xl">
      Sunday Pairings
    </h1>

    <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#715d4f] sm:text-[17px]">
      Real meals, thoughtful wines, and the little moments that make an
      ordinary Sunday worth remembering.
    </p>

    <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
      <InternalTextLink href="/">Explore Wine Pairings</InternalTextLink>
      <InternalTextLink href="/tips">Wine Tips</InternalTextLink>
      <InternalTextLink href="/printable-guides">
        Printable Guides
      </InternalTextLink>
    </div>
  </div>
</section>

      {/* FEATURED SUNDAY */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#e0d5c8] bg-[#fffdf9] shadow-[0_24px_70px_rgba(69,48,36,0.09)] lg:grid lg:grid-cols-[1.02fr_0.98fr]">
          {/* Portrait-friendly image */}
          <div className="relative min-h-[500px] overflow-hidden bg-[#e9e0d4] sm:min-h-[650px] lg:min-h-[760px]">
            <Image
              src={stuffedChickenImg}
              alt="Stuffed chicken breast with coconut quinoa rice beside a glass and bottle of Kendall-Jackson Chardonnay"
              fill
              priority
              placeholder="blur"
              className="object-cover object-center"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />

            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 via-black/10 to-transparent lg:hidden" />

            <div className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#67342f] shadow-sm backdrop-blur lg:hidden">
              Kendall-Jackson Chardonnay
            </div>
          </div>

          {/* Editorial copy */}
          <div className="flex items-center">
            <div className="px-7 py-12 sm:px-12 sm:py-16 lg:px-14 xl:px-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9d7a5d]">
                This Week&apos;s Sunday
              </p>

              <p className="mt-5 text-sm italic text-[#8b7462]">
                October · At the table
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] text-[#30231e] [font-family:var(--font-playfair)] sm:text-5xl xl:text-[3.5rem]">
                Comfort Food &
                <span className="block text-[#713a34]">Chardonnay</span>
              </h2>

              <div className="mt-7 h-px w-12 bg-[#c09a77]" />

              <p className="mt-7 text-[17px] leading-8 text-[#725d4e]">
                A warm stuffed chicken dinner, coconut quinoa rice, and a
                chilled glass of Kendall-Jackson Chardonnay — the kind of
                Sunday meal that feels special without asking too much of you.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#806a59]">
                The Chardonnay&apos;s creamy texture complements the richness
                of the chicken, while its bright acidity brings freshness back
                to every bite.
              </p>

              <div className="mt-8 rounded-2xl border-l-2 border-[#b68865] bg-[#f6efe7] px-6 py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a07e63]">
                  The Pairing
                </p>
                <p className="mt-2 font-semibold text-[#3f3028]">
                  Stuffed Chicken Breast
                  <span className="mx-2 font-normal text-[#b49a84]">×</span>
                  Kendall-Jackson Chardonnay
                </p>
              </div>

              <div className="mt-8">
                <ExternalTextLink href="https://www.kj.com/">
                  Visit Kendall-Jackson
                </ExternalTextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUNDAY JOURNAL */}
      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
        <div className="mb-9 flex flex-col gap-4 border-b border-[#dfd4c8] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a7a61]">
              From Recent Sundays
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#30241e] [font-family:var(--font-playfair)] sm:text-4xl">
              The Sunday Journal
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#826d5c] sm:text-right">
            Meals, bottles, game nights, lake afternoons, and everything in
            between.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {archiveItems.map((item, index) => (
            <MealCard
              key={`${item.dish}-${item.wine}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* SUNDAY PHILOSOPHY */}
      <section className="border-y border-[#e5dacf] bg-[#f1e8de]">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#99775c]">
            A Little Sunday Philosophy
          </p>

          <blockquote className="mx-auto mt-6 max-w-3xl text-2xl font-medium leading-relaxed text-[#3c2d26] [font-family:var(--font-playfair)] sm:text-3xl">
            “The best pairing is the one that makes an ordinary meal feel like
            a moment worth remembering.”
          </blockquote>

          <p className="mt-5 text-sm text-[#8a725f]">— Vino Pairings</p>
        </div>
      </section>

      {/* SUNDAY ESSENTIALS */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9a795f]">
            Sunday Essentials
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-[#30241e] [font-family:var(--font-playfair)] sm:text-4xl">
            A Few Things That Make Wine Feel Effortless
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#776253]">
            You do not need complicated rules or a cabinet full of accessories.
            A few useful basics can make choosing, opening, pouring, and pairing
            wine feel much easier.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
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

        <div className="mt-10 text-center">
          <InternalTextLink href="/printable-guides">
            Browse Vino Pairings Printable Guides
          </InternalTextLink>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#34251f] px-7 py-12 text-center shadow-[0_20px_55px_rgba(45,31,25,0.14)] sm:px-12 sm:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d5b491]">
            Come Back Next Sunday
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#fffaf3] [font-family:var(--font-playfair)] sm:text-4xl">
            There&apos;s Always Another Bottle,
            <span className="block">Another Meal, Another Story.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#d7c8bc] sm:text-base">
            New Sunday pairings will continue to join the journal — real meals,
            real wines, and ideas you can actually enjoy at home.
          </p>

          <div className="mt-8">
            <PrimaryLink href="/">Explore All Wine Pairings</PrimaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}