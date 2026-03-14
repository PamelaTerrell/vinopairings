// src/app/french-wine-pairings/page.js
import Link from "next/link";

export const metadata = {
  title: "French Wine Pairings • Vino Pairings",
  description:
    "Classic French wine and food pairings — Bordeaux with steak, Burgundy Pinot Noir with salmon and roast chicken, White Burgundy with creamy dishes, Champagne with brie, Rosé de Provence with summer dishes, and more.",
  alternates: { canonical: "https://vinopairings.com/french-wine-pairings" },
  openGraph: {
    type: "article",
    url: "https://vinopairings.com/french-wine-pairings",
    title: "French Wine Pairings • Vino Pairings",
    description:
      "From Bordeaux and Burgundy to Provence and the Loire — your guide to pairing French wines with beloved dishes."
  },
  twitter: {
    card: "summary_large_image",
    title: "French Wine Pairings • Vino Pairings",
    description:
      "From Bordeaux and Burgundy to Provence and the Loire — your guide to pairing French wines with beloved dishes."
  }
};

const pairings = [
  {
    wine: "Bordeaux (Left Bank: Cab-led; Right Bank: Merlot-led)",
    dish: "Steak frites, roast beef, hard cheeses",
    why: "Firm tannins, structure, and dark fruit pair beautifully with well-seasoned red meat and aged cheeses.",
    emoji: "🥩"
  },
  {
    wine: "Burgundy Pinot Noir (Red Burgundy)",
    dish: "Salmon, roast chicken, duck, mushroom dishes",
    why: "Silky texture, bright acidity, and earthy red-fruit character make Burgundy Pinot Noir one of France’s most elegant and versatile food wines.",
    emoji: "🍷"
  },
  {
    wine: "Burgundy Chardonnay (White Burgundy)",
    dish: "Herb-roasted chicken, creamy sauces, scallops",
    why: "Elegant acidity and subtle oak complement roast poultry, buttery seafood, and rich cream-based dishes.",
    emoji: "🍗"
  },
  {
    wine: "Champagne (Brut)",
    dish: "Brie, oysters, fried appetizers",
    why: "Crisp bubbles cut through fat and salt, while citrus and mineral notes brighten delicate seafood and creamy cheeses.",
    emoji: "🥂"
  },
  {
    wine: "Beaujolais (Gamay)",
    dish: "Charcuterie, roast turkey, mushroom dishes",
    why: "Juicy red fruit and low tannin flatter savory cured meats, earthy vegetables, and lighter roasts.",
    emoji: "🧀"
  },
  {
    wine: "Sancerre / Pouilly-Fumé (Sauvignon Blanc, Loire)",
    dish: "Goat cheese salad, asparagus, lemony fish",
    why: "Zesty acidity and flinty minerality sing with chèvre, fresh herbs, and green vegetables.",
    emoji: "🥗"
  },
  {
    wine: "Rosé de Provence",
    dish: "Niçoise salad, grilled shrimp, picnic fare",
    why: "Dry, refreshing berry-citrus character makes this one of France’s most versatile warm-weather food wines.",
    emoji: "🌸"
  },
  {
    wine: "Côtes du Rhône (GSM blends)",
    dish: "Herbed lamb, ratatouille, hearty stews",
    why: "Grenache, Syrah, and Mourvèdre bring spice, savory depth, and enough body for robust rustic dishes.",
    emoji: "🍲"
  },
  {
    wine: "Alsace Riesling (dry)",
    dish: "Pork dishes, onion tart, lightly spicy cuisine",
    why: "Racy acidity and stone-fruit notes refresh rich pork and balance gentle spice beautifully.",
    emoji: "🐖"
  }
];

export default function FrenchWinePairingsPage() {
  return (
    <article className="py-8">
      <header className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
          Vino Pairings
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold [font-family:var(--font-playfair)] tracking-tight text-[#3f3326]">
          French Wine Pairings
        </h1>

        <p className="mt-4 text-[#6b5b4b] text-base md:text-lg leading-relaxed">
          From Bordeaux and Burgundy to Provence and the Loire, French wines are
          deeply tied to the foods of their regions. Here are timeless,
          crowd-pleasing pairings to help you enjoy them with confidence.
        </p>

        <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {pairings.map((p) => (
          <section
            key={p.wine}
            className="rounded-[24px] border border-[#D8CFC4] bg-white shadow-[0_10px_30px_rgba(75,63,47,0.06)] p-6 hover:shadow-[0_16px_36px_rgba(75,63,47,0.10)] transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FDF7EF] text-2xl"
                aria-hidden
              >
                {p.emoji}
              </div>

              <div>
                <h2 className="text-xl font-semibold [font-family:var(--font-playfair)] text-[#3f3326]">
                  {p.wine}
                </h2>

                <p className="mt-2 text-[#5f5144] leading-relaxed">
                  <span className="font-semibold text-[#4b3f2f]">Best with:</span>{" "}
                  {p.dish}
                </p>

                <p className="mt-2 text-[#6b5b4b] leading-relaxed">{p.why}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <nav className="mt-10 flex flex-wrap gap-3 text-sm">
        <Link
          href="/regions"
          className="rounded-full border border-[#D8CFC4] bg-white px-4 py-2 hover:bg-[#FDF7EF] transition"
        >
          ← Back to Regions
        </Link>

        <Link
          href="/spanish-wine-pairings"
          className="rounded-full border border-[#D8CFC4] bg-white px-4 py-2 hover:bg-[#FDF7EF] transition"
        >
          Next: Spanish Wine Pairings
        </Link>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "French Wine Pairings",
            itemListElement: pairings.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: `${p.wine} with ${p.dish}`,
                description: p.why,
                url: "https://vinopairings.com/french-wine-pairings"
              }
            }))
          })
        }}
      />
    </article>
  );
}