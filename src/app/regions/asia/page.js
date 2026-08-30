// src/app/regions/asia/page.js

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Emerging Wine Regions of Asia | Vino Pairings",
  description:
    "Explore emerging wine regions across China, India, Thailand, Japan, and South Korea, with approachable notes on grapes, styles, climate, and food pairings.",
  alternates: {
    canonical: "https://vinopairings.com/regions/asia",
  },
  openGraph: {
    title: "Emerging Wine Regions of Asia | Vino Pairings",
    description:
      "From high-altitude vineyards to tropical wine country, discover the grapes, styles, and food pairings shaping Asia’s growing wine scene.",
    type: "article",
    url: "https://vinopairings.com/regions/asia",
    images: [
      {
        url: "/asia.png",
        width: 1200,
        height: 630,
        alt: "Emerging wine regions of Asia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerging Wine Regions of Asia | Vino Pairings",
    description:
      "Explore the grapes, wine styles, climates, and food pairings of Asia’s emerging wine regions.",
    images: ["/asia.png"],
  },
};

const REGIONS = [
  {
    country: "China",
    area: "Ningxia • Yunnan",
    description:
      "China’s modern wine scene stretches across dramatically different landscapes. Ningxia, along the foothills of the Helan Mountains, is especially known for structured Cabernet-based reds, while high-altitude vineyards in Yunnan are producing increasingly refined wines in cooler mountain conditions.",
    grapes: "Cabernet Sauvignon • Cabernet blends • Chardonnay",
    style:
      "Structured reds, polished Bordeaux-inspired blends, and increasingly expressive high-altitude wines.",
    pairing:
      "Try Cabernet-based reds with roast beef, lamb, mushroom dishes, or richly seasoned meats.",
    image: "/regions/china-ningxia.png",
  },
  {
    country: "India",
    area: "Nashik Valley",
    description:
      "North of Mumbai, Nashik has become the best-known center of Indian wine production. Warm days, seasonal rainfall, and elevation help support a range of styles, including fresh whites, fruit-forward reds, rosé, and sparkling wine.",
    grapes: "Chenin Blanc • Shiraz • Sauvignon Blanc",
    style:
      "Bright whites, ripe reds, sparkling wines, and approachable styles made for warm-weather drinking.",
    pairing:
      "Chenin Blanc and off-dry whites can be especially friendly with curries, samosas, biryani, and spicy dishes.",
    image: "/regions/india-nashik.png",
  },
  {
    country: "Thailand",
    area: "Khao Yai • Hua Hin",
    description:
      "Thailand is part of the so-called new-latitude wine movement, where growers work beyond the world’s traditional wine belts. Elevation, vineyard management, and careful harvest timing help producers create balanced wines despite the tropical climate.",
    grapes: "Chenin Blanc • Shiraz • Colombard",
    style:
      "Aromatic whites, fresh rosé, and supple reds designed to stay lively in a warm climate.",
    pairing:
      "Aromatic whites and rosé work beautifully with Thai salads, seafood, green curry, and dishes with herbs or gentle heat.",
    image: "/regions/thailand-khaoyai.png",
  },
  {
    country: "Japan",
    area: "Yamanashi • Hokkaido",
    description:
      "Japan offers one of Asia’s most distinctive wine traditions. Yamanashi is closely associated with the native Koshu grape, known for delicate, refreshing whites, while cooler Hokkaido has become increasingly important for Pinot Noir, Chardonnay, and sparkling wine.",
    grapes: "Koshu • Pinot Noir • Chardonnay",
    style:
      "Delicate whites, elegant cool-climate reds, and precise sparkling wines with an understated character.",
    pairing:
      "Koshu is a natural partner for sushi, sashimi, tempura, shellfish, and other delicate dishes.",
    image: "/regions/japan-yamanashi.png",
  },
  {
    country: "South Korea",
    area: "Yeongcheon • Gyeongbuk",
    description:
      "South Korea’s wine industry remains relatively small, but producers are experimenting with local fruit, hybrid grapes, and international varieties. Areas such as Yeongcheon have become centers for a developing domestic wine culture.",
    grapes: "Hybrid varieties • Muscat styles • Selected international grapes",
    style:
      "Fresh, fruit-forward wines with a growing emphasis on regional identity and experimentation.",
    pairing:
      "Lighter reds and aromatic whites can pair nicely with bulgogi, grilled meats, savory pancakes, and mildly spicy Korean dishes.",
    image: "/regions/korea-yeongcheon.png",
  },
];

const HIGHLIGHTS = [
  {
    number: "01",
    title: "Extreme Landscapes",
    text: "Asian vineyards can be found in deserts, mountain valleys, humid hillsides, and cool northern climates.",
  },
  {
    number: "02",
    title: "Unexpected Grapes",
    text: "International varieties grow alongside regional grapes and hybrids adapted to very different conditions.",
  },
  {
    number: "03",
    title: "Food-Friendly Wines",
    text: "Many Asian wine styles work especially well with seafood, aromatic herbs, spice, grilled meats, and regional cuisines.",
  },
];

export default function Page() {
  return (
    <main className="bg-[#fdfaf3] text-[#4b3f2f]">
      {/* HERO */}
      <section className="relative h-[60vh] overflow-hidden sm:h-[72vh] lg:h-[80vh]">
        <div className="absolute inset-0 bg-[#f3efe9]" />

        <Image
          src="/asia.png"
          alt="Emerging wine regions of Asia"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center bg-[#f9f6ef]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfaf3]/15 to-[#fdfaf3]" />
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7B1E3F]">
          Vino Pairings · Wine Regions
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#3f3326] md:text-5xl [font-family:var(--font-playfair)]">
          Emerging Wine Regions of Asia
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6b5b4b] md:text-lg">
          Asia may not be the first place many wine drinkers think of, but its
          vineyards are among the most interesting places to watch. From the
          high-altitude vineyards of western China to tropical Thailand and
          cool-climate northern Japan, winemakers are discovering how grapes
          respond to landscapes far beyond the traditional European wine map.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#6b5b4b]">
          These regions are still evolving, which is part of their appeal.
          Expect experimentation, distinctive local conditions, and wines that
          often make especially interesting companions for Asian cuisines.
        </p>

        <div className="mx-auto mt-7 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
      </section>

      {/* WHY ASIA */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-[2rem] border border-[#dfd4c7] bg-white px-7 py-9 shadow-[0_16px_50px_rgba(75,63,47,0.07)] md:px-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#a37c58]">
              Why It&apos;s Worth Exploring
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] md:text-4xl [font-family:var(--font-playfair)]">
              A wine story still being written
            </h2>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.number}
                className="border-t border-[#e8ddd2] pt-5 text-center md:text-left"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-[#a37c58]">
                  {item.number}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#3f3326] [font-family:var(--font-playfair)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6b5b4b]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGION CARDS */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a37c58]">
            Five Regions to Know
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] md:text-4xl [font-family:var(--font-playfair)]">
            From Cabernet to Koshu
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#6b5b4b]">
            Each region brings a different climate, grape story, and approach
            to the table.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {REGIONS.map((region) => (
            <article
              key={region.country}
              className="overflow-hidden rounded-[26px] border border-[#d8cfc4] bg-white shadow-[0_10px_30px_rgba(75,63,47,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(75,63,47,0.11)]"
            >
              <div className="relative aspect-[16/10] bg-[#f3efe9]">
                <Image
                  src={region.image}
                  alt={`${region.country} wine region`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    {region.area}
                  </p>

                  <h3 className="mt-1 text-3xl font-semibold text-white [font-family:var(--font-playfair)]">
                    {region.country}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-base leading-8 text-[#4b3f2f]">
                  {region.description}
                </p>

                <div className="mt-6 space-y-4 border-t border-[#eadfd5] pt-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a37c58]">
                      Grapes to Know
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[#5e4d40]">
                      {region.grapes}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a37c58]">
                      What to Expect
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[#5e4d40]">
                      {region.style}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fdf7ef] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B1E3F]">
                      Pairing Idea
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[#5e4d40]">
                      {region.pairing}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BEGINNER TAKEAWAY */}
      <section className="mx-auto max-w-4xl px-6 pb-14">
        <div className="rounded-[2rem] border border-[#d8cfc4] bg-[#f9f6ef] p-7 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
            If You&apos;re New to Asian Wine
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Start with the food.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
            You do not need to memorize unfamiliar regions before trying these
            wines. Think about what is on the table: delicate seafood may call
            for Koshu or another crisp white, aromatic and spicy dishes often
            welcome a fragrant or slightly off-dry wine, and grilled meats can
            be a natural fit for fuller-bodied reds.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-[#6e2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a3a3a]"
          >
            Try the Pairing Finder →
          </Link>
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pb-12 text-center">
        <p className="text-lg leading-8 text-[#4b3f2f]">
          Asia&apos;s wine story is still being written — and that is exactly
          what makes it so exciting to explore.
        </p>
      </section>

      {/* CTA FOOTER */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[24px] border border-[#d8cfc4] bg-white p-7 shadow-sm md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a37c58]">
                Continue Exploring
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Keep exploring the world of wine
              </h2>

              <p className="mt-2 max-w-2xl leading-7 text-[#4b3f2f]/80">
                Compare Asia&apos;s emerging regions with Old World classics
                and New World favorites across Vino Pairings.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:justify-end">
              <Link
                href="/regions"
                className="inline-flex items-center rounded-full bg-[#a37c58] px-5 py-3 font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Back to Regions
              </Link>

              <Link
                href="/french-wine-pairings"
                className="inline-flex items-center rounded-full border border-[#d8cfc4] bg-[#f9f6ef] px-5 py-3 font-semibold text-[#4b3f2f] transition hover:bg-white"
              >
                Explore France
              </Link>

              <Link
                href="/australian-wine-pairings"
                className="inline-flex items-center rounded-full border border-[#d8cfc4] bg-[#f9f6ef] px-5 py-3 font-semibold text-[#4b3f2f] transition hover:bg-white"
              >
                Explore Australia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}