import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Emerging Wine Regions of Asia • Vino Pairings",
  description:
    "Discover Asia’s rising wine regions — China, India, Thailand, Japan, and South Korea — from mountain vineyards to tropical hillsides.",
  alternates: { canonical: "https://vinopairings.com/regions/asia" },
  openGraph: {
    title: "Emerging Wine Regions of Asia • Vino Pairings",
    description:
      "From mountain terraces to tropical hillsides, explore Asia’s most exciting wine regions.",
    url: "https://vinopairings.com/regions/asia",
    images: ["/asia.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerging Wine Regions of Asia • Vino Pairings",
    description:
      "From mountain terraces to tropical hillsides, explore Asia’s most exciting wine regions.",
  },
};

const REGIONS = [
  {
    country: "China",
    area: "Ningxia • Yunnan",
    description:
      "China’s wine scene is rising fast. Ningxia’s Helan Mountain foothills produce bold Cabernet blends that rival Bordeaux, while Yunnan’s mountain vineyards yield refined wines grown at dramatic elevation.",
    image: "/regions/china-ningxia.jpg",
  },
  {
    country: "India",
    area: "Nashik Valley",
    description:
      "India’s Nashik Valley, north of Mumbai, has become the nation’s wine capital. Its warm, dry climate produces vibrant Chenin Blanc, Shiraz, and sparkling styles from pioneering wineries like Sula.",
    image: "/regions/india-nashik.jpg",
  },
  {
    country: "Thailand",
    area: "Khao Yai • Hua Hin Hills",
    description:
      "Thailand’s 'new latitude' vineyards use altitude and cooling breezes to tame the tropics. Khao Yai and Hua Hin have become known for aromatic whites and surprisingly balanced reds.",
    image: "/regions/thailand-khaoyai.jpg",
  },
  {
    country: "Japan",
    area: "Yamanashi • Hokkaido",
    description:
      "Japan’s cool-climate vineyards yield delicate Koshu whites and elegant Pinot Noir. Yamanashi, near Mount Fuji, is the spiritual home of Japanese wine, while Hokkaido leads in modern Chardonnay and sparkling styles.",
    image: "/regions/japan-yamanashi.jpg",
  },
  {
    country: "South Korea",
    area: "Yeongcheon • Gyeongbuk",
    description:
      "South Korea’s emerging wine industry is experimenting with hybrid grapes and local varieties. Yeongcheon’s sunny climate supports wineries producing fresh whites, fruit-driven reds, and a growing modern wine culture.",
    image: "/regions/korea-yeongcheon.jpg",
  },
];

export default function Page() {
  return (
    <main className="bg-[#fdfaf3] text-[#4b3f2f]">
      {/* Hero */}
      <section className="relative overflow-hidden h-[60vh] sm:h-[72vh] lg:h-[80vh]">
        <div className="absolute inset-0 bg-[#f3efe9]" />

        <Image
          src="/asia.png"
          alt="Emerging Wine Regions of Asia"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center bg-[#f9f6ef]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfaf3]/20 to-[#fdfaf3]" />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-6 text-center">
        <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
          Vino Pairings
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold [font-family:var(--font-playfair)] tracking-tight text-[#3f3326]">
          Emerging Wine Regions of Asia
        </h1>

        <p className="mt-4 text-[#6b5b4b] text-base md:text-lg leading-relaxed">
          From mountain terraces to tropical hillsides, Asia’s winemakers are
          proving that passion, place, and innovation can flourish far beyond
          the traditional wine map.
        </p>

        <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
      </section>

      {/* Region cards */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r) => (
            <article
              key={r.country}
              className="overflow-hidden rounded-[24px] border border-[#d8cfc4] bg-[#f9f6ef] shadow-[0_10px_30px_rgba(75,63,47,0.06)] hover:shadow-[0_16px_36px_rgba(75,63,47,0.10)] transition"
            >
              <div className="relative aspect-[4/3] bg-[#f3efe9]">
                <Image
                  src={r.image}
                  alt={`${r.country} wine region`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold [font-family:var(--font-playfair)] text-[#6e2a2a]">
                  {r.country}
                </h2>

                <p className="mt-1 italic text-[#a37c58]">{r.area}</p>

                <p className="mt-3 text-base leading-relaxed text-[#4b3f2f]">
                  {r.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing text */}
      <section className="max-w-3xl mx-auto px-6 pb-10 text-center">
        <p className="text-lg text-[#4b3f2f] leading-relaxed">
          Asia’s wine story is still being written — and that’s exactly what
          makes it so exciting to explore.
        </p>
      </section>

      {/* CTA footer */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[24px] border border-[#d8cfc4] bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold [font-family:var(--font-playfair)] text-[#6e2a2a]">
                Keep exploring the world of wine
              </h3>
              <p className="mt-1 text-[#4b3f2f]/80 leading-relaxed">
                Compare Asia’s emerging regions with Old World classics and New
                World favorites across the site.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
              <Link
                href="/regions"
                className="inline-flex items-center rounded-full bg-[#a37c58] px-4 py-2 font-semibold text-white shadow-sm hover:brightness-95 transition"
              >
                Back to Regions
              </Link>

              <Link
                href="/french-wine-pairings"
                className="inline-flex items-center rounded-full border border-[#d8cfc4] bg-[#f9f6ef] px-4 py-2 font-semibold text-[#4b3f2f] hover:bg-white transition"
              >
                Classic Europe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}