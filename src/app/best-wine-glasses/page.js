// src/app/best-wine-glasses/page.js
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

export default function BestWineGlassesPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-[#8a7463]">
            Wine Tools
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2f241f] md:text-5xl [font-family:var(--font-playfair)]">
            Best Wine Glasses for Everyday Elegance
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-[#6b5645]">
            The right wine glass can make an ordinary pour feel more graceful.
            Whether you enjoy red wine, white wine, sparkling wine, or relaxed
            outdoor gatherings, a thoughtful glass helps elevate the moment.
          </p>

          <p className="mt-4 text-sm text-[#8a7463]">
            By Pamela Terrell · Updated April 2026
          </p>
        </header>

        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            What to Look For in a Good Wine Glass
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Clear glass that lets the wine color show",
              "Comfortable weight in the hand",
              "A bowl shape that suits the wine style",
              "Thin enough rim for pleasant sipping",
              "Easy cleaning and storage",
              "Durability for everyday use",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#eee2d6] bg-white px-5 py-4 text-[#6b5645]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6">
          {glasses.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#d8cfc4] bg-white p-7 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a7463]">
                {item.title}
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
                {item.name}
              </h2>

              <p className="mt-3 text-[17px] leading-8 text-[#6b5645]">
                {item.description}
              </p>

              <p className="mt-4 rounded-2xl bg-[#fdf7ef] px-5 py-4 text-sm text-[#6b5645]">
                <strong className="text-[#2f241f]">Best for:</strong>{" "}
                {item.bestFor}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Our Current Recommendation
          </h2>

          <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
            If you are just starting your collection, choose a set of universal
            wine glasses first. They are flexible enough for weeknight dinners,
            small gatherings, red wines, white wines, and rosés.
          </p>

          <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
            Later, you can add larger red wine glasses, sparkling wine glasses,
            or outdoor wine tumblers depending on how you most often enjoy wine.
          </p>

          <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
            Once Vino Pairings begins adding shopping links, this guide may be
            updated with selected product recommendations.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-white p-7 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Pair the Glass with the Moment
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
            Once your glassware is ready, explore simple wine pairings for
            everyday meals, dinner parties, and relaxed evenings at home.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-block rounded-full bg-[#6e2a2a] px-7 py-3 font-semibold text-white transition hover:bg-[#8a3a3a]"
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