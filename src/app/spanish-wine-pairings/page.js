// src/app/spanish-wine-pairings/page.js
import Link from "next/link";

export const metadata = {
  title: "Spanish Wine Pairings • Vino Pairings",
  description:
    "Classic Spanish wine and food pairings — Rioja with lamb, Albariño with seafood, Cava with tapas, Sherry with cheeses, and more.",
  alternates: { canonical: "https://vinopairings.com/spanish-wine-pairings" },
  openGraph: {
    type: "article",
    url: "https://vinopairings.com/spanish-wine-pairings",
    title: "Spanish Wine Pairings • Vino Pairings",
    description:
      "From Rioja and Ribera del Duero to Rías Baixas and Jerez — your guide to pairing Spanish wines with beloved dishes."
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanish Wine Pairings • Vino Pairings",
    description:
      "From Rioja and Ribera del Duero to Rías Baixas and Jerez — your guide to pairing Spanish wines with beloved dishes."
  }
};

const pairings = [
  {
    wine: "Rioja (Tempranillo)",
    dish: "Grilled lamb, chorizo, roasted peppers",
    why: "Red fruit, spice, and moderate tannin complement smoky, savory meats.",
    emoji: "🥩"
  },
  {
    wine: "Ribera del Duero (Tempranillo/Tinto Fino)",
    dish: "Steak, roast pork, aged manchego",
    why: "Riper fruit and firm structure stand up to rich proteins and salty cheeses.",
    emoji: "🧀"
  },
  {
    wine: "Albariño (Rías Baixas)",
    dish: "Seafood tapas, octopus, lemony fish",
    why: "Zesty acidity and saline snap are perfect for bright, ocean-kissed plates.",
    emoji: "🦐"
  },
  {
    wine: "Cava (Brut)",
    dish: "Patatas bravas, croquetas, fried bites",
    why: "Crisp bubbles cut through salt and fat; super versatile with tapas spreads.",
    emoji: "🥂"
  },
  {
    wine: "Garnacha (Navarra / Aragón)",
    dish: "Paella, roasted veggie dishes, sausage",
    why: "Juicy red fruit and gentle spice flatter saffron rice and charred flavors.",
    emoji: "🍤"
  },
  {
    wine: "Txakoli (Txakolina)",
    dish: "Anchovies, pintxos, salads",
    why: "Light, lightly spritzy, with citrus-herbal notes that refresh salty snacks.",
    emoji: "🥗"
  },
  {
    wine: "Sherry (Fino / Manzanilla)",
    dish: "Olives, almonds, jamón ibérico",
    why: "Bone-dry, nutty, and saline — born for classic bar snacks and cured ham.",
    emoji: "🥜"
  },
  {
    wine: "Priorat (Garnacha/Carignan blends)",
    dish: "Braised beef, hearty stews, grilled mushrooms",
    why: "Concentrated fruit and mineral depth match intense, slow-cooked flavors.",
    emoji: "🍲"
  }
];

export default function SpanishWinePairingsPage() {
  return (
    <article className="py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          Spanish Wine Pairings
        </h1>
        <p className="mt-2 text-gray-700">
          From Rioja and Ribera del Duero to Rías Baixas and Jerez — here are
          delicious, crowd-pleasing Spanish wine matches for favorite dishes.
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
          href="/california-wine-pairings"
          className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        >
          Next: California Wine Pairings
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
            name: "Spanish Wine Pairings",
            itemListElement: pairings.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: `${p.wine} with ${p.dish}`,
                description: p.why,
                url: "https://vinopairings.com/spanish-wine-pairings"
              }
            }))
          })
        }}
      />
    </article>
  );
}
