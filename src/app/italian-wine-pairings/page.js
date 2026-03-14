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
    dish: "Tomato-based pasta, marinara, arrabbiata, pizza rossa",
    why: "Bright acidity matches tangy tomato sauces beautifully, while savory herbal notes complement basil, oregano, and garlic.",
    emoji: "🍅"
  },
  {
    wine: "Barolo / Barbaresco (Nebbiolo)",
    dish: "Mushroom risotto, truffle pasta, braised meats",
    why: "High tannin, lifted acidity, and earthy aromatics shine with umami-rich mushrooms and slow-cooked dishes.",
    emoji: "🍄"
  },
  {
    wine: "Pinot Grigio (Veneto / Friuli)",
    dish: "Shrimp scampi, grilled fish, lemon chicken piccata",
    why: "Crisp acidity and citrus notes refresh delicate seafood and lighter lemon-butter sauces.",
    emoji: "🍋"
  },
  {
    wine: "Prosecco",
    dish: "Antipasti, prosciutto & melon, fritto misto",
    why: "Lively bubbles cleanse salt and fat, while gentle fruitiness flatters salty cured meats and crispy appetizers.",
    emoji: "🥂"
  },
  {
    wine: "Montepulciano d’Abruzzo",
    dish: "Sausage ragù, lasagna, meatballs",
    why: "Dark fruit and moderate tannin stand up well to rich, savory meats, baked pasta, and melted cheese.",
    emoji: "🍝"
  },
  {
    wine: "Verdicchio / Vermentino",
    dish: "Herb-roasted chicken, pesto pasta, grilled vegetables",
    why: "Fresh herbal and mineral notes sync beautifully with basil, parsley, olive oil, and green vegetable flavors.",
    emoji: "🌿"
  },
  {
    wine: "Lambrusco (dry / secco)",
    dish: "Pizza, cured meats, cutlets",
    why: "Dry sparkle and juicy berry fruit make Lambrusco especially good with salty, crispy, cheesy, or fried dishes.",
    emoji: "🍕"
  },
  {
    wine: "Soave",
    dish: "Risotto, roast chicken, simple seafood pasta",
    why: "Soft citrus, almond, and floral notes make Soave a graceful match for lighter northern Italian dishes.",
    emoji: "🍷"
  }
];

export default function ItalianWinePairingsPage() {
  return (
    <article className="py-8">
      <header className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
          Vino Pairings
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold [font-family:var(--font-playfair)] tracking-tight text-[#3f3326]">
          Italian Wine Pairings
        </h1>

        <p className="mt-4 text-[#6b5b4b] text-base md:text-lg leading-relaxed">
          From Tuscany’s bold reds to Veneto’s refreshing whites, Italian wines
          were made for the table. Here are classic, crowd-pleasing pairings for
          favorite Italian dishes.
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
          href="/french-wine-pairings"
          className="rounded-full border border-[#D8CFC4] bg-white px-4 py-2 hover:bg-[#FDF7EF] transition"
        >
          Next: French Wine Pairings
        </Link>
      </nav>

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