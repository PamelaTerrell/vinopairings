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
    why: "Plush dark fruit and peppery spice are perfect with char, smoke, and deeply savory grilled meats.",
    emoji: "🥩"
  },
  {
    wine: "Riesling (Clare / Eden Valley, dry)",
    dish: "Spicy Thai dishes, limey seafood, fresh salads",
    why: "Racy acidity and citrus lift cool heat, refresh delicate seafood, and brighten vibrant dishes.",
    emoji: "🌶️"
  },
  {
    wine: "Semillon (Hunter Valley)",
    dish: "Prawns, oysters, lemon chicken",
    why: "Zippy freshness and citrusy structure make Hunter Valley Semillon especially good with shellfish and lighter sauces.",
    emoji: "🦐"
  },
  {
    wine: "Cabernet Sauvignon (Coonawarra)",
    dish: "Roast lamb, hard cheeses, herb rubs",
    why: "Firm tannin and cassis character pair beautifully with savory, herb-crusted meats and aged cheeses.",
    emoji: "🐑"
  },
  {
    wine: "Chardonnay (Margaret River / Yarra Valley)",
    dish: "Butter-poached fish, roast chicken, scallops",
    why: "Elegant oak and crisp acidity complement creamy textures, roast flavors, and delicate seafood.",
    emoji: "🦪"
  },
  {
    wine: "GSM Blends (Grenache–Syrah–Mourvèdre)",
    dish: "Mixed grills, ratatouille, hearty stews",
    why: "Spice, fruit, and savory depth handle charred vegetables, rich sauces, and rustic comfort dishes.",
    emoji: "🍲"
  },
  {
    wine: "Pinot Noir (Yarra Valley / Tasmania)",
    dish: "Salmon, mushroom pasta, duck",
    why: "Silky texture, bright acidity, and red fruit flatter umami-rich dishes and earthy flavors beautifully.",
    emoji: "🍄"
  },
  {
    wine: "Sparkling Shiraz",
    dish: "Glazed ham, BBQ, festive spreads",
    why: "Bubbles plus dark berry fruit make Sparkling Shiraz especially fun with sweet-savory holiday flavors.",
    emoji: "🥂"
  }
];

export default function AustralianWinePairingsPage() {
  return (
    <article className="py-8">
      <header className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
          Vino Pairings
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold [font-family:var(--font-playfair)] tracking-tight text-[#3f3326]">
          Australian Wine Pairings
        </h1>

        <p className="mt-4 text-[#6b5b4b] text-base md:text-lg leading-relaxed">
          From Barossa and McLaren Vale to Margaret River, the Hunter, and Tasmania,
          Australian wines bring bold fruit, freshness, and versatility to the table.
          Here are delicious, crowd-pleasing pairings for favorite dishes.
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
          See: French Wine Pairings
        </Link>

        <Link
          href="/spanish-wine-pairings"
          className="rounded-full border border-[#D8CFC4] bg-white px-4 py-2 hover:bg-[#FDF7EF] transition"
        >
          See: Spanish Wine Pairings
        </Link>

        <Link
          href="/italian-wine-pairings"
          className="rounded-full border border-[#D8CFC4] bg-white px-4 py-2 hover:bg-[#FDF7EF] transition"
        >
          See: Italian Wine Pairings
        </Link>

        <Link
          href="/california-wine-pairings"
          className="rounded-full border border-[#D8CFC4] bg-white px-4 py-2 hover:bg-[#FDF7EF] transition"
        >
          See: California Wine Pairings
        </Link>
      </nav>

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