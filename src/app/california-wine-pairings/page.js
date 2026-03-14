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
    why: "Bold tannins, dark fruit, and structure stand up beautifully to rich beef and sharp aged cheeses.",
    emoji: "🍔"
  },
  {
    wine: "Chardonnay (Sonoma / Carneros)",
    dish: "Crab cakes, lobster, roast chicken",
    why: "Vibrant acidity and a creamy texture complement buttery seafood, roast poultry, and richer sauces.",
    emoji: "🦀"
  },
  {
    wine: "Zinfandel (Dry Creek / Lodi)",
    dish: "BBQ ribs, pulled pork, chili",
    why: "Jammy fruit and warm spice love sweet-savory sauces, smoke, and bold backyard barbecue flavors.",
    emoji: "🔥"
  },
  {
    wine: "Pinot Noir (Sonoma Coast / Santa Barbara)",
    dish: "Seared salmon, mushroom pasta, roast duck",
    why: "Silky texture, bright acidity, and red fruit make California Pinot Noir especially good with earthy, savory dishes.",
    emoji: "🍄"
  },
  {
    wine: "Sauvignon Blanc (Napa / Sonoma)",
    dish: "Goat cheese salad, ceviche, green vegetables",
    why: "Zesty citrus and herbal notes brighten tangy cheeses, fresh produce, and lighter seafood dishes.",
    emoji: "🥗"
  },
  {
    wine: "Sparkling Wine (Carneros)",
    dish: "Fried chicken, sushi, brunch plates",
    why: "Crisp bubbles cut through salt and fat, making California sparkling wine wonderfully versatile with crunchy and savory foods.",
    emoji: "🥂"
  },
  {
    wine: "Syrah (Central Coast)",
    dish: "Tri-tip, grilled sausages, peppery steaks",
    why: "Dark fruit and peppery spice pair beautifully with char, smoke, and grilled meats.",
    emoji: "🥩"
  },
  {
    wine: "Petite Sirah (Various AVAs)",
    dish: "Short ribs, shepherd’s pie, blue cheese",
    why: "Inky color, firm tannin, and dense fruit match hearty, slow-cooked dishes and intensely flavored cheeses.",
    emoji: "🍲"
  }
];

export default function CaliforniaWinePairingsPage() {
  return (
    <article className="py-8">
      <header className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
          Vino Pairings
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold [font-family:var(--font-playfair)] tracking-tight text-[#3f3326]">
          California Wine Pairings
        </h1>

        <p className="mt-4 text-[#6b5b4b] text-base md:text-lg leading-relaxed">
          From Napa and Sonoma to the Central Coast, California wines offer bold
          flavor, sunshine ripeness, and incredible versatility at the table.
          Here are delicious, crowd-pleasing matches for favorite dishes.
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
          href="/australian-wine-pairings"
          className="rounded-full border border-[#D8CFC4] bg-white px-4 py-2 hover:bg-[#FDF7EF] transition"
        >
          Next: Australian Wine Pairings
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
      </nav>

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