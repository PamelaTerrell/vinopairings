// src/app/best-wine-glasses/page.js
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Best Wine Glasses for Everyday Elegance | Vino Pairings",
  description:
    "A refined guide to choosing wine glasses for red wine, white wine, sparkling wine, everyday meals, and elegant home entertaining.",
  alternates: { canonical: "/best-wine-glasses" },
  openGraph: {
    title: "Best Wine Glasses for Everyday Elegance | Vino Pairings",
    description:
      "A simple, elegant guide to choosing the best wine glasses for everyday meals, entertaining, and gifting.",
    type: "article",
    url: "https://vinopairings.com/best-wine-glasses",
  },
};

const glasses = [
  {
    title: "Best Overall",
    name: "Universal Wine Glass",
    description:
      "A versatile glass that works beautifully for many reds, whites, and rosés. If you only want one dependable style, this is the best place to begin.",
    bestFor: "Everyday wine, casual dinners, and simple entertaining",
  },
  {
    title: "Best for Red Wine",
    name: "Large Bowl Red Wine Glass",
    description:
      "A wider bowl gives red wine more room to open, helping aromas feel fuller and the wine taste smoother.",
    bestFor: "Cabernet Sauvignon, Merlot, Pinot Noir, Syrah, and red blends",
  },
  {
    title: "Best for White Wine",
    name: "Smaller Bowl White Wine Glass",
    description:
      "A slightly smaller glass helps preserve freshness, brightness, and delicate aromas in chilled white wines.",
    bestFor: "Sauvignon Blanc, Chardonnay, Pinot Grigio, Riesling, and Albariño",
  },
  {
    title: "Best for Sparkling Wine",
    name: "Tulip or Flute Glass",
    description:
      "A narrower sparkling glass helps keep bubbles lively while still allowing enough space for aroma.",
    bestFor: "Champagne, Prosecco, Cava, and sparkling rosé",
  },
  {
    title: "Best for Outdoors",
    name: "Stemless Wine Glass or Tumbler",
    description:
      "Stemless glasses or insulated wine tumblers are practical for patios, picnics, lake days, and casual gatherings.",
    bestFor: "Outdoor entertaining, travel, patios, and relaxed evenings",
  },
];

const features = [
  "Clear glass that lets the wine color show",
  "Comfortable weight in the hand",
  "A bowl shape that suits the wine style",
  "Thin enough rim for pleasant sipping",
  "Easy cleaning and storage",
  "Durability for everyday use",
];

export default function BestWineGlassesPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        {/* HERO */}
        <header className="overflow-hidden rounded-[2.75rem] border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_28px_90px_rgba(75,63,47,0.14)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center px-7 py-12 md:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a37c58]">
                Wine Tools
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight text-[#2f241f] md:text-7xl [font-family:var(--font-playfair)]">
                Best Wine Glasses for Everyday Elegance
              </h1>

              <p className="mt-6 max-w-xl text-[18px] leading-8 text-[#6b5645]">
                The right wine glass can make an ordinary pour feel more
                graceful. Whether you enjoy red wine, white wine, sparkling
                wine, or relaxed outdoor gatherings, thoughtful glassware helps
                elevate the moment.
              </p>

              <p className="mt-5 text-sm text-[#8a7463]">
                By Pamela Terrell · Updated April 2026
              </p>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <Image
                src="/wine-glasses-hero.png"
                alt="Elegant collection of unique wine glasses on a softly lit marble table"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#fdfaf3]/35 lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </header>

        {/* LOOK FOR */}
        <section className="mt-12 rounded-[2.25rem] border border-[#d8cfc4] bg-white p-7 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a37c58]">
            Buying Basics
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] md:text-4xl [font-family:var(--font-playfair)]">
            What to Look For in a Good Wine Glass
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#eee2d6] bg-[#fdfaf3] px-5 py-4 text-sm leading-7 text-[#6b5645]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* GLASSES */}
        <section className="mt-12 grid gap-6">
          {glasses.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#d8cfc4] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
                {item.title}
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
                {item.name}
              </h2>

              <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
                {item.description}
              </p>

              <p className="mt-5 rounded-2xl border border-[#eee2d6] bg-[#fdf7ef] px-5 py-4 text-sm leading-7 text-[#6b5645]">
                <strong className="text-[#2f241f]">Best for:</strong>{" "}
                {item.bestFor}
              </p>
            </article>
          ))}
        </section>

        {/* RECOMMENDATION */}
        <section className="mt-12 rounded-[2.25rem] border border-[#d8cfc4] bg-[#2f241f] p-8 text-white shadow-[0_24px_80px_rgba(75,63,47,0.16)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b98c]">
            Our Current Recommendation
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl [font-family:var(--font-playfair)]">
            Start with universal wine glasses first.
          </h2>

          <p className="mt-5 text-[17px] leading-8 text-white/75">
            If you are just starting your collection, choose a set of universal
            wine glasses first. They are flexible enough for weeknight dinners,
            small gatherings, red wines, white wines, and rosés.
          </p>

          <p className="mt-4 text-[17px] leading-8 text-white/75">
            Later, you can add larger red wine glasses, sparkling wine glasses,
            or outdoor wine tumblers depending on how you most often enjoy wine.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-[2.25rem] border border-[#d8cfc4] bg-white p-8 text-center shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a37c58]">
            Pair the Glass with the Moment
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] md:text-4xl [font-family:var(--font-playfair)]">
            Make every pour feel intentional.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
            Once your glassware is ready, explore simple wine pairings for
            everyday meals, dinner parties, and relaxed evenings at home.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-block rounded-full bg-[#6e2a2a] px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-[#8a3a3a]"
            >
              Explore Wine Pairings →
            </Link>

            <Link
              href="/best-corkscrews"
              className="inline-block rounded-full border border-[#d8cfc4] bg-[#fdfaf3] px-7 py-3 font-semibold text-[#6e2a2a] transition hover:bg-[#f3eadf]"
            >
              View Corkscrew Guide →
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs leading-6 text-[#8a7463]">
          Disclosure: Product recommendations are selected independently. Vino
          Pairings may participate in affiliate programs in the future.
        </p>
      </section>
    </main>
  );
}