// src/app/french-wine-pairings/page.js
import Link from "next/link";

export const metadata = {
  title: "French Wine Pairings • Vino Pairings",
  description:
    "Classic French wine and food pairings — Bordeaux with steak, Burgundy Chardonnay with roast chicken, Champagne with brie, Rosé de Provence with summer dishes, and more.",
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
    why: "Firm tannins and dark fruit pair beautifully with well-seasoned red meat and aged cheeses.",
    emoji: "🥩"
  },
  {
    wine: "Burgundy Chardonnay (White Burgundy)",
    dish: "Herb-roasted chicken, creamy sauces, scallops",
    why: "Elegant acidity and subtle oak complement roast poultry and rich cream or butter sauces.",
    emoji: "🍗"
  },
  {
    wine: "Champagne (Brut)",
    dish: "Brie, oysters, fried appetizers",
    why: "Crisp bubbles cut fat and salt; citrus-mineral notes brighten delicate seafood.",
    emoji: "🥂"
  },
  {
    wine: "Beaujolais (Gamay)",
    dish: "Charcuterie, roast turkey, mushroom dishes",
    why: "Juicy red fruit and low tannin flatter savory-cured meats and lighter roasts.",
    emoji: "🧀"
  },
  {
    wine: "Sancerre / Pouilly-Fumé (Sauvignon Blanc, Loire)",
    dish: "Goat cheese salad, asparagus, lemony fish",
    why: "Zesty acidity and flinty minerality sing with chèvre and green veggies.",
    emoji: "🥗"
  },
  {
    wine: "Rosé de Provence",
    dish: "Niçoise salad, grilled shrimp, picnic fare",
    why: "Dry, refreshing berry-citrus profile is ultra-versatile for sunny plates.",
    emoji: "🌸"
  },
  {
    wine: "Côtes du Rhône (GSM blends)",
    dish: "Herbed lamb, ratatouille, hearty stews",
    why: "Grenache-Syrah-Mourvèdre bring spice, savory depth, and enough body for robust dishes.",
    emoji: "🍲"
  },
  {
    wine: "Alsace Riesling (dry)",
    dish: "Pork dishes, onion tart, lightly spicy cuisine",
    why: "Racy acidity and stone-fruit notes refresh rich pork and balance gentle spice.",
    emoji: "🐖"
  }
];

export default function FrenchWinePairingsPage() {
  return (
    <article className="py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          French Wine Pairings
        </h1>
        <p className="mt-2 text-gray-700">
          From Bordeaux and Burgundy to Provence and the Loire — here are
          timeless, crowd-pleasing French wine matches for favorite dishes.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {pairings.map((p) => (
          <section
            key={p.wine}
            className="rounded-2xl border border-[#D8CFC4] bg-white shadow-sm p-5 hover:shadow-md transition"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>
                {p.emoji}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{p.wine}</h2>
                <p className="mt-1 text-gray-700">
                  <span className="font-medium">Best with:</span> {p.dish}
                </p>
                <p className="mt-1 text-gray-600">{p.why}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Cross-links */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/regions"
          className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        >
          ← Back to Regions
        </Link>
        <Link
          href="/spanish-wine-pairings"
          className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        >
          Next: Spanish Wine Pairings
        </Link>
      </nav>

      {/* JSON-LD ItemList for SEO */}
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
