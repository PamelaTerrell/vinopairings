import Link from "next/link";
import WorldMapRegions from "../components/WorldMapRegions";

export const metadata = {
  title: "World of Wine Pairings • Vino Pairings",
  description:
    "Explore wine pairings by region — Italian, French, Spanish, California, Australia, and emerging Asian wine regions.",
  alternates: { canonical: "https://vinopairings.com/regions" },
  openGraph: {
    type: "website",
    url: "https://vinopairings.com/regions",
    title: "World of Wine Pairings • Vino Pairings",
    description:
      "Explore wine pairings by region — Italian, French, Spanish, California, Australia, and emerging Asian wine regions.",
    images: ["/og/regions.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "World of Wine Pairings • Vino Pairings",
    description:
      "Explore wine pairings by region — Italian, French, Spanish, California, Australia, and emerging Asian wine regions.",
  },
};

const regions = [
  {
    slug: "italian-wine-pairings",
    name: "Italy",
    blurb: "Chianti, Barolo, Pinot Grigio, Soave.",
    emoji: "🍝",
  },
  {
    slug: "french-wine-pairings",
    name: "France",
    blurb: "Bordeaux, Burgundy, Champagne, Loire.",
    emoji: "🥖",
  },
  {
    slug: "spanish-wine-pairings",
    name: "Spain",
    blurb: "Rioja, Albariño, Cava, Sherry.",
    emoji: "🌶️",
  },
  {
    slug: "california-wine-pairings",
    name: "California",
    blurb: "Cabernet, Chardonnay, Zinfandel, Pinot Noir.",
    emoji: "🌴",
  },
  {
    slug: "australian-wine-pairings",
    name: "Australia",
    blurb: "Shiraz, Riesling, Semillon, Pinot Noir.",
    emoji: "🦘",
  },
  {
    href: "/regions/asia",
    name: "Asia",
    blurb: "China, India, Thailand, Japan, South Korea.",
    emoji: "🌏",
  },
];

export default function RegionsPage() {
  return (
    <main className="bg-[#fdfaf3] text-[#4b3f2f] py-8 md:py-10">
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
            Vino Pairings
          </p>

          <h1 className="mt-3 text-3xl md:text-5xl font-semibold [font-family:var(--font-playfair)] tracking-tight text-[#3f3326]">
            World of Wine Pairings
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-[#6b5b4b] text-base md:text-lg leading-relaxed">
            Explore wine by place, discover signature styles, and find your next
            pairing inspiration around the world.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
        </div>

        <WorldMapRegions />

        <div className="mt-8">
          <div className="mb-4 text-center">
            <p className="text-sm tracking-[0.18em] uppercase text-[#8a7a68] font-semibold">
              Browse by region
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => {
              const href = r.href ?? `/${r.slug}`;

              return (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-[20px] border border-[#d8cfc4] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(75,63,47,0.05)] transition hover:shadow-[0_12px_28px_rgba(75,63,47,0.08)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d8cfc4]"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDF7EF] text-xl"
                      aria-hidden
                    >
                      {r.emoji}
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold [font-family:var(--font-playfair)] text-[#6e2a2a] group-hover:underline">
                        {r.name}
                      </h2>

                      <p className="mt-1 text-sm text-[#5f5144] leading-relaxed">
                        {r.blurb}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="mx-auto mb-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />

          <p className="text-lg [font-family:var(--font-playfair)] text-[#3f3326]">
            Wander the world, one glass at a time.
          </p>

          <p className="mt-3 text-[#6b5b4b] leading-relaxed">
            Whether you love classic European regions or want to explore new and
            unexpected wine origins, this collection is designed to help you pair
            with more confidence and curiosity.
          </p>
        </div>
      </section>

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
              name: r.href ? r.name : `${r.name} Wine Pairings`,
              url: `https://vinopairings.com${r.href ?? `/${r.slug}`}`,
            })),
          }),
        }}
      />
    </main>
  );
}