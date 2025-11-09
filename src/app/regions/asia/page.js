// src/app/regions/asia/page.js
import Image from "next/image";

export const metadata = {
  title: "Emerging Wine Regions of Asia • VinoPairings",
  description:
    "Discover Asia’s rising wine regions—China (Ningxia, Yunnan), India’s Nashik Valley, Thailand’s Khao Yai, and Japan’s Yamanashi/Hokkaido.",
  alternates: { canonical: "https://vinopairings.com/regions/asia" },
  openGraph: {
    title: "Emerging Wine Regions of Asia • VinoPairings",
    description:
      "From mountain terraces to tropical hillsides, explore Asia’s most exciting wine regions.",
    url: "https://vinopairings.com/regions/asia",
    images: ["/asia.png"],
  },
};

const REGIONS = [
  {
    country: "China",
    area: "Ningxia • Yunnan",
    description:
      "China’s wine scene is rising fast. Ningxia’s Helan Mountain foothills produce bold Cabernet blends that rival Bordeaux, while Yunnan’s mountain vineyards (like Ao Yun) yield refined wines grown at 2,600 m elevation.",
  },
  {
    country: "India",
    area: "Nashik Valley",
    description:
      "India’s Nashik Valley north of Mumbai has become the nation’s wine capital. Its warm, dry climate produces vibrant Chenin Blanc, Shiraz, and sparkling styles from pioneering wineries like Sula.",
  },
  {
    country: "Thailand",
    area: "Khao Yai • Hua Hin Hills",
    description:
      "Thailand’s ‘new latitude’ vineyards use altitude and ocean breezes to tame the tropics. Khao Yai’s hills produce aromatic Chenin Blanc and Shiraz with surprising balance.",
  },
  {
    country: "Japan",
    area: "Yamanashi • Hokkaido",
    description:
      "Japan’s cool-climate vineyards yield delicate Koshu whites and elegant Pinot Noirs. Yamanashi, near Mount Fuji, is the spiritual home of Japanese wine; Hokkaido leads in crisp modern Chardonnay.",
  },
];

export default function Page() {
  return (
    <main className="bg-[#fdfaf3] text-[#4b3f2f]">
      {/* HERO IMAGE ONLY */}
      <section className="relative overflow-hidden h-[70vh] sm:h-[80vh]">
        {/* parchment-colored fallback while image loads */}
        <div className="absolute inset-0 bg-[#f3efe9]" />

        {/* hero image */}
        <Image
          src="/asia.png"
          alt="Emerging Wine Regions of Asia"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center bg-[#f9f6ef]"
        />

        {/* soft gradient overlay to blend bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfaf3]/20 to-[#fdfaf3]" />
      </section>

      {/* GRID – text-only cards for now */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r) => (
            <article
              key={r.country}
              className="bg-[#f9f6ef] rounded-2xl border border-[#d8cfc4] shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[4/3] flex items-center justify-center bg-[#fdfaf3] text-[#a37c58] text-sm italic border-b border-[#d8cfc4]/60">
                <span>No image yet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#6e2a2a]">
                  {r.country}
                </h3>
                <p className="italic text-[#a37c58] mb-2">{r.area}</p>
                <p className="text-base leading-relaxed">{r.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-[#d8cfc4] bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#6e2a2a]">
                Keep exploring the world of wine
              </h3>
              <p className="mt-1 text-[#4b3f2f]/80">
                Compare Asia’s “new latitude” with Old World classics and New
                World icons.
              </p>
            </div>
            <div className="mt-4 flex gap-3 sm:mt-0">
              <a
                href="/regions"
                className="inline-flex items-center rounded-xl bg-[#a37c58] px-4 py-2 font-semibold text-white shadow-sm hover:brightness-95"
              >
                Back to Regions
              </a>
              <a
                href="/french-wine-pairings"
                className="inline-flex items-center rounded-xl border border-[#d8cfc4] bg-[#f9f6ef] px-4 py-2 font-semibold text-[#4b3f2f] hover:bg-white"
              >
                Classic Europe
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
