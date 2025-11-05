// src/app/california-wine-pairings/page.js
import Link from "next/link";

export const metadata = {
  title: "California Wine Pairings • Vino Pairings",
  description:
    "Classic California wine and food pairings — Cabernet with burgers, Chardonnay with crab cakes, Zinfandel with BBQ, Pinot Noir with salmon, and more.",
  alternates: { canonical: "https://vinopairings.com/california-wine-pairings" },
  openGraph: {
    type: "article",
    url: "https://vinopairings.com/california-wine-pairings",
    title: "California Wine Pairings • Vino Pairings",
    description:
      "From Napa and Sonoma to the Central Coast — your guide to pairing California wines with favorite dishes."
  },
  twitter: {
    card: "summary_large_image",
    title: "California Wine Pairings • Vino Pairings",
    description:
      "From Napa and Sonoma to the Central Coast — your guide to pairing California wines with favorite dishes."
  }
};

const pairings = [
  {
    wine: "Cabernet Sauvignon (Napa)",
    dish: "Cheeseburgers, ribeye steak, aged cheddar",
    why: "Bold tannins and dark fruit stand up to rich beef and sharp cheeses.",
    emoji: "🍔"
  },
  {
    wine: "Chardonnay (Sonoma / Carneros)",
    dish: "Crab cakes, lobster, roast chicken",
    why: "Vibrant acidity and creamy texture complement buttery seafood and poultry.",
    emoji: "🦀"
  },
  {
    wine: "Zinfandel (Dry Creek / Lodi)",
    dish: "BBQ ribs, pulled pork, chili",
    why: "Jammy fruit and warm spice love sweet–savory sauces and smoky flavors.",
    emoji: "🔥"
  },
  {
    wine: "Pinot Noir (Sonoma Coast / Santa Barbara)",
    dish: "Seared salmon, mushroom pasta, roast duck",
    why: "Silky tannin and red fruit flatter earthy, umami-rich dishes.",
    emoji: "🍄"
  },
  {
    wine: "Sauvignon Blanc (Napa / Sonoma)",
    dish: "Goat cheese salad, ceviche, green veggies",
    why: "Zesty citrus and herb notes brighten tangy cheeses and fresh produce.",
    emoji: "🥗"
  },
  {
    wine: "Sparkling Wine (Carneros)",
    dish: "Fried chicken, sushi, brunch plates",
    why: "Crisp bubbles cut salt and fat; ultra-versatile with crunchy textures.",
    emoji: "🥂"
  },
  {
    wine: "Syrah (Central Coast)",
    dish: "Tri-tip, grilled sausages, peppery steaks",
    why: "Dark fruit and pepper spice pair beautifully with char and smoke.",
    emoji: "🥩"
  },
  {
    wine: "Petite Sirah (Various AVAs)",
    dish: "Short ribs, shepherd’s pie, blue cheese",
    why: "Inky color, firm tannin, and dense fruit match hearty, slow-cooked dishes.",
    emoji: "🍲"
  }
];

export default function CaliforniaWinePairingsPage() {
  return (
    <article className="py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          California Wine Pairings
        </h1>
        <p className="mt-2 text-gray-700">
          From Napa and Sonoma to the Central Coast — here are delicious,
          crowd-pleasing California wine matches for favorite dishes.
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
          href="/australian-wine-pairings"
          className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        >
          Next: Australian Wine Pairings
        </Link>
        <Link
          href="/french-wine-pairings"
          className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        >
          See: French Wine Pairings
        </Link>
        <Link
          href="/spanish-wine-pairings"
          className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        >
          See: Spanish Wine Pairings
        </Link>
        <Link
          href="/italian-wine-pairings"
          className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        >
          See: Italian Wine Pairings
        </Link>
      </nav>

      {/* JSON-LD ItemList for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "California Wine Pairings",
            itemListElement: pairings.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: `${p.wine} with ${p.dish}`,
                description: p.why,
                url: "https://vinopairings.com/california-wine-pairings"
              }
            }))
          })
        }}
      />
    </article>
  );
}
