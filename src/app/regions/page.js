// src/app/regions/page.js
import Link from "next/link";

export const metadata = {
  title: "World of Wine Pairings • Vino Pairings",
  description:
    "Explore wine pairings by region — Italian, French, Spanish, California, Australia, and more.",
  alternates: { canonical: "https://vinopairings.com/regions" },
  openGraph: {
    type: "website",
    url: "https://vinopairings.com/regions",
    title: "World of Wine Pairings • Vino Pairings",
    description:
      "Explore wine pairings by region — Italian, French, Spanish, California, Australia, and more."
  },
  twitter: {
    card: "summary_large_image",
    title: "World of Wine Pairings • Vino Pairings",
    description:
      "Explore wine pairings by region — Italian, French, Spanish, California, Australia, and more."
  }
};

const regions = [
  { slug: "italian-wine-pairings", name: "Italy", blurb: "Chianti, Barolo, Pinot Grigio & more.", emoji: "🍝" },
  { slug: "french-wine-pairings", name: "France", blurb: "Bordeaux, Burgundy, Champagne, Loire.", emoji: "🥖" },
  { slug: "spanish-wine-pairings", name: "Spain", blurb: "Rioja, Albariño, Cava, Sherry.", emoji: "🌶️" },
  { slug: "california-wine-pairings", name: "California", blurb: "Cabernet, Chardonnay, Zinfandel.", emoji: "🌴" },
  { slug: "australian-wine-pairings", name: "Australia", blurb: "Shiraz, Riesling, Semillon.", emoji: "🦘" }
];

export default function RegionsPage() {
  return (
    <section className="py-6">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white">
        {/* soft gradient wash */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-50%,#f3efe9_0%,transparent_60%),radial-gradient(1000px_500px_at_0%_120%,#f7f3ec_0%,transparent_60%)]" />
        {/* subtle world map svg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              // tiny inline world-map path (abstract), keeps it lightweight
              `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600' fill='none'><path d='M67 210c20 5 40-10 60 5 15 11-2 34 25 38 41 6 50-47 94-35 25 7 28 32 57 38 44 9 66-45 113-40 39 4 57 48 98 49 39 1 55-40 95-46 35-5 65 21 98 30 43 11 86-4 129-5 32 0 65 9 95-2 31-11 54-40 86-51 15-5 33-6 45 5 17 15 14 41 32 55 22 17 61 11 73 36 11 23-10 51-27 67-25 23-57 38-91 41-48 5-94-12-141-14-47-1-93 13-140 11-48-3-93-23-140-30-57-9-116-2-172-16-39-10-74-33-111-47-32-12-66-17-96-33-23-12-45-30-55-54-6-14-6-32 0-46Z' fill='%23000'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        {/* content */}
        <div className="relative px-6 py-10 sm:px-10 sm:py-14">
          <p className="text-sm font-medium tracking-wide text-[#a37c58]">WORLD OF WINE</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore Regional Wine Pairings
          </h1>
          <p className="mt-3 max-w-2xl text-gray-700">
            From Tuscan reds to coastal rosé—browse classic matches by region. Start with a favorite,
            or wander the map for new discoveries.
          </p>
          <div className="mt-5 h-1 w-24 rounded-full bg-[#a37c58]/70" />
        </div>
      </div>

      {/* GRID */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {regions.map((r) => (
          <Link
            key={r.slug}
            href={`/${r.slug}`}
            className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl" aria-hidden>
                {r.emoji}
              </div>
              <div>
                <h2 className="text-xl font-semibold group-hover:underline">
                  {r.name}
                </h2>
                <p className="mt-1 text-gray-600">{r.blurb}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* JSON-LD to mark this as a collection of region pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "World of Wine Pairings",
            url: "https://vinopairings.com/regions",
            hasPart: regions.map((r) => ({
              "@type": "WebPage",
              name: `${r.name} Wine Pairings`,
              url: `https://vinopairings.com/${r.slug}`
            }))
          })
        }}
      />
    </section>
  );
}
