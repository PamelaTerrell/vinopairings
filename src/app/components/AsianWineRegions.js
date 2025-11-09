// src/app/components/AsiaWineRegions.js
import Image from "next/image";

export default function AsiaWineRegions() {
  const regions = [
    {
      country: "China",
      area: "Ningxia • Yunnan",
      description:
        "China’s wine scene is rising fast. Ningxia’s Helan Mountain foothills produce bold Cabernet blends that rival Bordeaux, while Yunnan’s mountain vineyards (like Ao Yun) yield refined wines from vines grown at 2,600 m elevation.",
      image: "/regions/china-ningxia.jpg",
    },
    {
      country: "India",
      area: "Nashik Valley",
      description:
        "The Nashik Valley, north of Mumbai, has become India’s wine capital with over 40 wineries. Its warm, dry climate produces vibrant Chenin Blanc, Shiraz, and sparkling styles—led by pioneering label Sula Vineyards.",
      image: "/regions/india-nashik.jpg",
    },
    {
      country: "Thailand",
      area: "Khao Yai • Hua Hin Hills",
      description:
        "Thai vineyards defy the tropics with 'new latitude' winemaking. Khao Yai’s altitude and ocean breezes let grapes like Shiraz and Chenin Blanc ripen slowly, creating aromatic, balanced wines.",
      image: "/regions/thailand-khaoyai.jpg",
    },
    {
      country: "Japan",
      area: "Yamanashi • Hokkaido",
      description:
        "Japan’s cool-climate regions yield delicate Koshu whites and elegant Pinot Noirs. Yamanashi near Mount Fuji is the spiritual home of Japanese wine, while Hokkaido leads in crisp, modern Chardonnay.",
      image: "/regions/japan-yamanashi.jpg",
    },
  ];

  return (
    <section className="bg-[#fdfaf3] text-[#4b3f2f] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-[#6e2a2a] mb-12">
          Emerging Wine Regions of Asia
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r, i) => (
            <article
              key={i}
              className="bg-[#f9f6ef] rounded-2xl border border-[#d8cfc4] shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={r.image}
                  alt={`${r.country} wine region`}
                  fill
                  className="object-cover brightness-[0.97]"
                />
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

        <div className="text-center mt-16">
          <p className="text-lg text-[#4b3f2f]">
            From mountain terraces to tropical hillsides, Asia’s winemakers are
            proving that passion—and a touch of innovation—can flourish anywhere
            on Earth.
          </p>
        </div>
      </div>
    </section>
  );
}
