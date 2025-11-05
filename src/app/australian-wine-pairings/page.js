// src/app/australian-wine-pairings/page.js
import Link from "next/link";

export const metadata = {
  title: "Australian Wine Pairings • Vino Pairings",
  description:
    "Classic Australian wine and food pairings — Shiraz with grilled meats, Riesling with spice, Semillon with seafood, Cabernet with lamb, and more.",
  alternates: { canonical: "https://vinopairings.com/australian-wine-pairings" },
  openGraph: {
    type: "article",
    url: "https://vinopairings.com/australian-wine-pairings",
    title: "Australian Wine Pairings • Vino Pairings",
    description:
      "From Barossa and McLaren Vale to Margaret River and the Hunter — your guide to pairing Australian wines with favorite dishes."
  },
  twitter: {
    card: "summary_large_image",
    title: "Australian Wine Pairings • Vino Pairings",
    description:
      "From Barossa and McLaren Vale to Margaret River and the Hunter — your guide to pairing Australian wines with favorite dishes."
  }
};

const pairings = [
  {
    wine: "Shiraz (Barossa / McLaren Vale)",
    dish: "Grilled steaks, BBQ ribs, peppered sausages",
    why: "Plush dark fruit and pepper spice are perfect with char and smoke.",
    emoji: "🥩"
  },
  {
    wine: "Riesling (Clare / Eden Valley, dry)",
    dish: "Spicy Thai, limey seafood, fresh salads",
    why: "Racy acidity and citrus lift cool heat and brighten delicate dishes.",
    emoji: "🌶️"
  },
  {
    wine: "Semillon (Hunter Valley)",
    dish: "Prawns, oysters, lemon chicken",
    why: "Zippy, age-worthy whites that love citrus, shellfish, and light sauces.",
    emoji: "🦐"
  },
  {
    wine: "Cabernet Sauvignon (Coonawarra)",
    dish: "Roast lamb, hard cheeses, herb rubs",
    why: "Firm tannin and cassis pair beautifully with savory, herbed meats.",
    emoji: "🐑"
  },
  {
    wine: "Chardonnay (Margaret River / Yarra)",
    dish: "Butter-poached fish, roast chicken, scallops",
    why: "Elegant oak + crisp acidity match creamy textures and roast flavors.",
    emoji: "🦪"
  },
  {
    wine: "GSM Blends (Grenache–Syrah–Mourvèdre)",
    dish: "Mixed grills, ratatouille, hearty stews",
    why: "Spice and savory depth handle charred veggies and rich sauces.",
    emoji: "🍲"
  },
  {
    wine: "Pinot Noir (Yarra Valley / Tassie)",
    dish: "Salmon, mushroom pasta, duck",
    why: "Silky tannins and red fruit flatter umami and earthy elements.",
    emoji: "🍄"
  },
  {
    wine: "Sparkling Shiraz",
    dish: "Glazed ham, BBQ, festive spreads",
    why: "Bubbles + dark fruit = brilliant with sweet–savory holiday flavors.",
    emoji: "🥂"
  }
];

export default function AustralianWinePairingsPage() {
  return (
    <article className="py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          Australian Wine Pairings
        </h1>
        <p className="mt-2 text-gray-700">
          From Barossa and McLaren Vale to Margaret River and the Hunter —
          here are delicious, crowd-pleasing Australian wine matches for
          favorite dishes.
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
        <Link
          href="/california-wine-pairings"
          className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        >
          See: California Wine Pairings
        </Link>
      </nav>

      {/* JSON-LD ItemList for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Australian Wine Pairings",
            itemListElement: pairings.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: `${p.wine} with ${p.dish}`,
                description: p.why,
                url: "https://vinopairings.com/australian-wine-pairings"
              }
            }))
          })
        }}
      />
    </article>
  );
}
