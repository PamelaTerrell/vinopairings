// src/app/italian-wine-pairings/page.js
import Link from "next/link";

export const metadata = {
  title: "Italian Wine Pairings • Vino Pairings",
  description:
    "Classic Italian wine and food pairings — Chianti with red sauce, Barolo with mushrooms, Pinot Grigio with seafood, Prosecco with antipasti, and more.",
  alternates: {
    canonical: "https://vinopairings.com/italian-wine-pairings"
  },
  openGraph: {
    type: "article",
    url: "https://vinopairings.com/italian-wine-pairings",
    title: "Italian Wine Pairings • Vino Pairings",
    description:
      "From Tuscany’s bold reds to Veneto’s refreshing whites — your guide to pairing Italian wines with favorite dishes."
  },
  twitter: {
    card: "summary_large_image",
    title: "Italian Wine Pairings • Vino Pairings",
    description:
      "From Tuscany’s bold reds to Veneto’s refreshing whites — your guide to pairing Italian wines with favorite dishes."
  }
};

const pairings = [
  {
    wine: "Chianti (Sangiovese)",
    dish: "Tomato-based pasta (marinara, arrabbiata), pizza rossa",
    why: "Bright acidity matches tangy tomato sauces; savory notes complement herbs.",
    emoji: "🍅"
  },
  {
    wine: "Barolo / Barbaresco (Nebbiolo)",
    dish: "Mushroom risotto, truffle pasta, braised meats",
    why: "High tannin + earthy aromatics love umami-rich mushrooms and slow-cooked dishes.",
    emoji: "🍄"
  },
  {
    wine: "Pinot Grigio (Veneto/Friuli)",
    dish: "Shrimp scampi, grilled fish, lemon chicken piccata",
    why: "Crisp acidity and citrus notes refresh delicate seafood and light sauces.",
    emoji: "🍋"
  },
  {
    wine: "Prosecco",
    dish: "Antipasti, prosciutto & melon, fritto misto",
    why: "Lively bubbles cleanse salt and fat; fruitiness flatters salty cured meats.",
    emoji: "🥂"
  },
  {
    wine: "Montepulciano d’Abruzzo",
    dish: "Sausage ragu, lasagna, meatballs",
    why: "Dark fruit and moderate tannin stand up to rich, savory meats and cheeses.",
    emoji: "🍝"
  },
  {
    wine: "Verdicchio / Vermentino",
    dish: "Herby chicken, pesto pasta, grilled vegetables",
    why: "Herbal/mineral profile syncs with basil, parsley, and olive oil flavors.",
    emoji: "🌿"
  },
  {
    wine: "Lambrusco (dry/secco)",
    dish: "Pizza, cured meats, cutlets",
    why: "Dry sparkle + berry fruit = perfect with salty, crispy, or cheesy bites.",
    emoji: "🍕"
  }
];

export default function ItalianWinePairingsPage() {
  return (
    <article className="py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          Italian Wine Pairings
        </h1>
        <p className="mt-2 text-gray-700">
          From Tuscany’s bold reds to Veneto’s refreshing whites — here are
          classic, crowd-pleasing matches for your favorite Italian dishes.
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
          Next: French Wine Pairings
        </Link>
      </nav>

      {/* Minimal JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Italian Wine Pairings",
            itemListElement: pairings.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: `${p.wine} with ${p.dish}`,
                description: p.why,
                url: "https://vinopairings.com/italian-wine-pairings"
              }
            }))
          })
        }}
      />
    </article>
  );
}
