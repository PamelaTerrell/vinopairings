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
    why: "Red fruit, spice, and moderate tannin complement smoky, savory meats beautifully.",
    emoji: "🥩"
  },
  {
    wine: "Ribera del Duero (Tempranillo / Tinto Fino)",
    dish: "Steak, roast pork, aged Manchego",
    why: "Riper fruit and firmer structure stand up well to rich proteins and salty aged cheeses.",
    emoji: "🧀"
  },
  {
    wine: "Albariño (Rías Baixas)",
    dish: "Seafood tapas, octopus, lemony fish",
    why: "Zesty acidity and a saline snap make Albariño ideal for bright, ocean-kissed dishes.",
    emoji: "🦐"
  },
  {
    wine: "Cava (Brut)",
    dish: "Patatas bravas, croquetas, fried bites",
    why: "Crisp bubbles cut through salt and fat, making Cava one of Spain’s most versatile tapas wines.",
    emoji: "🥂"
  },
  {
    wine: "Garnacha (Navarra / Aragón)",
    dish: "Paella, roasted vegetables, sausage",
    why: "Juicy red fruit and gentle spice flatter saffron rice, charred vegetables, and savory sausage dishes.",
    emoji: "🍤"
  },
  {
    wine: "Txakoli (Txakolina)",
    dish: "Anchovies, pintxos, salads",
    why: "Light body, lively acidity, and citrus-herbal notes refresh salty snacks and lighter small plates.",
    emoji: "🥗"
  },
  {
    wine: "Sherry (Fino / Manzanilla)",
    dish: "Olives, almonds, jamón ibérico",
    why: "Bone-dry, nutty, and saline, these classic Sherries were practically made for Spanish bar snacks and cured ham.",
    emoji: "🥜"
  },
  {
    wine: "Priorat (Garnacha / Carignan blends)",
    dish: "Braised beef, hearty stews, grilled mushrooms",
    why: "Concentrated fruit, mineral depth, and structure match intense, slow-cooked flavors beautifully.",
    emoji: "🍲"
  }
];

export default function SpanishWinePairingsPage() {
  return (
    <article className="py-8">
      <header className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
          Vino Pairings
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold [font-family:var(--font-playfair)] tracking-tight text-[#3f3326]">
          Spanish Wine Pairings
        </h1>

        <p className="mt-4 text-[#6b5b4b] text-base md:text-lg leading-relaxed">
          From Rioja and Ribera del Duero to Rías Baixas and Jerez, Spanish wines
          bring energy, versatility, and depth to the table. Here are delicious,
          crowd-pleasing pairings for favorite Spanish dishes.
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
          href="/california-wine-pairings"
          className="rounded-full border border-[#D8CFC4] bg-white px-4 py-2 hover:bg-[#FDF7EF] transition"
        >
          Next: California Wine Pairings
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