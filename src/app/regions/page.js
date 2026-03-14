import Link from "next/link";

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
    blurb: "Chianti, Barolo, Pinot Grigio, Soave, and more.",
    emoji: "🍝",
  },
  {
    slug: "french-wine-pairings",
    name: "France",
    blurb: "Bordeaux, Burgundy, Champagne, Loire, and more.",
    emoji: "🥖",
  },
  {
    slug: "spanish-wine-pairings",
    name: "Spain",
    blurb: "Rioja, Albariño, Cava, Sherry, and more.",
    emoji: "🌶️",
  },
  {
    slug: "california-wine-pairings",
    name: "California",
    blurb: "Cabernet, Chardonnay, Zinfandel, Pinot Noir, and more.",
    emoji: "🌴",
  },
  {
    slug: "australian-wine-pairings",
    name: "Australia",
    blurb: "Shiraz, Riesling, Semillon, Pinot Noir, and more.",
    emoji: "🦘",
  },
  {
    href: "/regions/asia",
    name: "Asia",
    blurb: "China, India, Thailand, Japan, and South Korea.",
    emoji: "🌏",
  },
];

export default function RegionsPage() {
  return (
    <main className="bg-[#fdfaf3] text-[#4b3f2f] py-8">
      <section className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#d8cfc4] bg-white shadow-[0_12px_35px_rgba(75,63,47,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-50%,#f3efe9_0%,transparent_60%),radial-gradient(1000px_500px_at_0%_120%,#f7f3ec_0%,transparent_60%)]" />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600' fill='none'><path d='M67 210c20 5 40-10 60 5 15 11-2 34 25 38 41 6 50-47 94-35 25 7 28 32 57 38 44 9 66-45 113-40 39 4 57 48 98 49 39 1 55-40 95-46 35-5 65 21 98 30 43 11 86-4 129-5 32 0 65 9 95-2 31-11 54-40 86-51 15-5 33-6 45 5 17 15 14 41 32 55 22 17 61 11 73 36 11 23-10 51-27 67-25 23-57 38-91 41-48 5-94-12-141-14-47-1-93 13-140 11-48-3-93-23-140-30-57-9-116-2-172-16-39-10-74-33-111-47-32-12-66-17-96-33-23-12-45-30-55-54-6-14-6-32 0-46Z' fill='%23000'/></svg>")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative px-6 py-10 sm:px-10 sm:py-14 text-center sm:text-left">
            <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold [font-family:var(--font-playfair)] tracking-tight text-[#3f3326]">
              Explore Regional Wine Pairings
            </h1>

            <p className="mt-4 max-w-2xl text-[#6b5b4b] text-base md:text-lg leading-relaxed sm:mx-0 mx-auto">
              From Tuscan reds to coastal rosé and emerging Asian wine regions,
              explore classic pairings by place and discover how geography shapes
              the wines you love.
            </p>

            <div className="mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#a37c58] to-transparent sm:mx-0 mx-auto" />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {regions.map((r) => {
            const href = r.href ?? `/${r.slug}`;

            return (
              <Link
                key={href}
                href={href}
                className="group rounded-[24px] border border-[#d8cfc4] bg-white p-6 shadow-[0_10px_30px_rgba(75,63,47,0.06)] transition hover:shadow-[0_16px_36px_rgba(75,63,47,0.10)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d8cfc4]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FDF7EF] text-2xl"
                    aria-hidden
                  >
                    {r.emoji}
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold [font-family:var(--font-playfair)] text-[#6e2a2a] group-hover:underline">
                      {r.name}
                    </h2>

                    <p className="mt-2 text-[#5f5144] leading-relaxed">
                      {r.blurb}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-[#a37c58]">
                      Explore pairings →
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Closing text */}
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