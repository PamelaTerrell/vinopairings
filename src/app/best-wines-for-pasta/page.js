// src/app/best-wines-for-pasta/page.js
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Best Wines for Pasta Night | Vino Pairings",
  description:
    "Discover the best wines for pasta night, including pairings for tomato sauce, creamy pasta, pesto, seafood pasta, lasagna, and more.",
  alternates: { canonical: "/best-wines-for-pasta" },
  openGraph: {
    title: "Best Wines for Pasta Night | Vino Pairings",
    description:
      "Elegant and approachable wine pairings for spaghetti, Alfredo, pesto, seafood pasta, baked pasta, and more.",
    url: "https://vinopairings.com/best-wines-for-pasta",
    type: "article",
  },
};

const pairings = [
  {
    pasta: "Spaghetti with Tomato Sauce",
    wine: "Chianti, Sangiovese, Barbera",
    note:
      "Bright acidity in these reds complements tomato sauce beautifully and keeps the pairing balanced.",
  },
  {
    pasta: "Creamy Alfredo",
    wine: "Chardonnay, Pinot Grigio, Viognier",
    note:
      "Cream sauces pair well with rounder whites that mirror richness while keeping the palate refreshed.",
  },
  {
    pasta: "Pesto Pasta",
    wine: "Sauvignon Blanc, Vermentino, Grüner Veltliner",
    note:
      "Herbal freshness in pesto loves crisp whites with lively acidity and green notes.",
  },
  {
    pasta: "Seafood Pasta",
    wine: "Pinot Grigio, Albariño, Champagne",
    note:
      "Lighter seafood dishes shine with fresh, mineral-driven whites or sparkling wine.",
  },
  {
    pasta: "Lasagna",
    wine: "Chianti Classico, Montepulciano, Cabernet Blend",
    note:
      "Layered baked dishes call for structured reds that can stand up to meat, tomato, and cheese.",
  },
  {
    pasta: "Mushroom Pasta",
    wine: "Pinot Noir, Nebbiolo, Chardonnay",
    note:
      "Earthy mushroom flavors pair beautifully with elegant reds or richer whites.",
  },
];

export default function BestWinesForPastaPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-5xl px-4 py-14">
        {/* Hero */}
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a37c58]">
            Vino Pairings
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl [font-family:var(--font-playfair)]">
            Best Wines for Pasta Night
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6b5b4b] md:text-lg">
            Pasta night becomes something special when the right bottle joins
            the table. Here are elegant, approachable wine pairings for classic
            pasta dishes—from tomato sauce to creamy Alfredo and seafood pasta.
          </p>

  

          <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
        </header>

                      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#d8cfc4] bg-[#fdfaf3] shadow-md">
  <Image
    src="/best-wines-for-pasta-hero.png"
    alt="Elegant pasta night table with wine pairings"
    width={1600}
    height={900}
    priority
    className="h-auto w-full object-cover"
  />
</div>

  

        {/* Intro */}
        <section className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            The Secret to Great Pasta Pairings
          </h2>

          <p className="mt-4 leading-8 text-[#6b5b4b]">
            When pairing wine with pasta, focus first on the sauce rather than
            the noodle shape. Tomato sauces prefer wines with acidity, creamy
            sauces welcome rounder whites, and richer baked dishes often shine
            with fuller-bodied reds.
          </p>

          <p className="mt-4 leading-8 text-[#6b5b4b]">
            Keep it simple: match richness with richness, freshness with
            freshness, and let the wine enhance the meal rather than overpower
            it.
          </p>
        </section>

        {/* Pairing Cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {pairings.map((item) => (
            <article
              key={item.pasta}
              className="rounded-3xl border border-[#d8cfc4] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a37c58]">
                Pasta Dish
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
                {item.pasta}
              </h3>

              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#6e2a2a]">
                Best Wines: {item.wine}
              </p>

              <p className="mt-4 leading-8 text-[#6b5b4b]">{item.note}</p>
            </article>
          ))}
        </section>

        {/* Entertaining Tip */}
        <section className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#d8cfc4] bg-[#fdf7ef] p-8 shadow-sm text-center">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Easy Entertaining Tip
          </h2>

          <p className="mt-4 leading-8 text-[#6b5b4b]">
            Hosting pasta night? Offer one red and one white so guests can
            choose their favorite pairing. A Chianti and a Pinot Grigio create
            an easy, crowd-friendly combination.
          </p>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Build Your Wine Confidence
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6b5b4b]">
            Explore printable wine guides, elegant tools, and approachable wine
            inspiration designed to make every meal feel elevated.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/printable-guides"
              className="rounded-full bg-[#a37c58] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              Printable Guides
            </Link>

            <Link
              href="/best-wine-glasses"
              className="rounded-full border border-[#d8cfc4] bg-white px-6 py-3 text-sm font-semibold text-[#4b3f2f] transition hover:bg-[#f3eadf]"
            >
              Best Wine Glasses
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}