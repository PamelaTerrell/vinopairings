import Image from 'next/image';

export const metadata = {
  title: 'Wine Guide Bundle Download | Vino Pairings',
  description: 'Download your complete Wine Guide Bundle.',
};

const GUIDES = [
  {
    title: 'Wine Glass Guide',
    image: '/wine-glass-guide-preview.png',
    href: '/downloads/wine-glass-guide-printable.pdf',
    buttonClass: 'bg-[#a37c58] text-white',
    eyebrow: 'Glassware',
    note: 'An elegant printable for choosing the right glass with confidence.',
  },
  {
    title: 'Sweet vs. Dry Wines Guide',
    image: '/dry-vs-sweet-preview.png',
    href: '/downloads/sweet-dry-wines-guide.pdf',
    buttonClass: 'bg-[#6e2a2a] text-white',
    eyebrow: 'Wine Styles',
    note: 'A beautifully designed reference for understanding sweetness at a glance.',
  },
  {
    title: 'Wine Pairing Basics Guide',
    image: '/wine-pairing-basics-preview.png',
    href: '/downloads/wine-pairing-basics-guide.pdf',
    buttonClass: 'bg-[#a37c58] text-white',
    eyebrow: 'Pairing',
    note: 'Classic food-and-wine pairings designed to make entertaining feel effortless.',
  },
];

export default function WineGuideBundleDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#4b3f2f] px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <section className="relative overflow-hidden rounded-[36px] border border-[#ddd3c7] bg-[#fdfaf3] shadow-[0_30px_90px_rgba(75,63,47,0.12)]">
          {/* layered luxury background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,124,88,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(110,42,42,0.08),transparent_28%),linear-gradient(to_bottom,#fdfaf3,#f8f3eb)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/40 to-transparent" />

          {/* Hero */}
          <div className="relative px-6 md:px-10 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-5">
                <span className="inline-flex items-center rounded-full border border-[#6e2a2a]/10 bg-[#6e2a2a] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-sm">
                  Signature Collection
                </span>
              </div>

              <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-[#8a7a68] font-medium">
                Vino Pairings
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl leading-none font-semibold tracking-[-0.02em] [font-family:var(--font-playfair)] text-[#3f3326]">
                Your Wine Guide Bundle
              </h1>

              <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8 text-[#665748]">
                Thank you for your purchase. This curated bundle brings together
                three beautifully designed printables to help you pour, pair,
                host, and enjoy with more confidence and style.
              </p>

              <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#b28a62] to-transparent" />
            </div>
          </div>

          {/* Featured intro band */}
          <div className="relative px-6 md:px-10 lg:px-16">
            <div className="mx-auto max-w-5xl rounded-[30px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,251,245,0.82))] backdrop-blur-md shadow-[0_16px_50px_rgba(75,63,47,0.08)]">
              <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-0">
                <div className="px-8 py-8 md:px-10 md:py-10 text-center md:text-left">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a7a68] font-semibold">
                    Included in your purchase
                  </p>

                  <h2 className="mt-3 text-2xl md:text-4xl [font-family:var(--font-playfair)] font-semibold leading-tight text-[#3f3326]">
                    A refined trio of wine printables
                  </h2>

                  <p className="mt-4 text-sm md:text-base leading-7 text-[#665748]">
                    Keep them nearby for dinner parties, gifting, learning, or
                    simply adding a beautiful wine reference to your kitchen,
                    dining room, or bar area.
                  </p>
                </div>

                <div className="px-8 pb-8 md:py-10 md:pr-10 flex items-center justify-center">
                  <div className="rounded-[26px] border border-[#e6ddd1] bg-[#f9f3ea] px-6 py-5 shadow-sm text-center w-full max-w-sm">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a7a68] font-semibold">
                      Collection value
                    </p>
                    <p className="mt-3 text-3xl [font-family:var(--font-playfair)] font-semibold text-[#3f3326]">
                      3 Premium Guides
                    </p>
                    <p className="mt-2 text-sm text-[#665748]">
                      Ready to download individually below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guides */}
          <div className="relative px-6 md:px-10 lg:px-16 py-10 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {GUIDES.map((guide) => (
                <article
                  key={guide.title}
                  className="group overflow-hidden rounded-[30px] bg-white/92 border border-[#e7ddd1] shadow-[0_14px_45px_rgba(75,63,47,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(75,63,47,0.12)]"
                >
                  <div className="relative bg-[#fbf6ee] p-4">
                    <div className="absolute inset-x-4 top-4 h-20 rounded-t-[24px] bg-gradient-to-b from-white/55 to-transparent pointer-events-none z-10" />
                    <div className="overflow-hidden rounded-[24px] border border-[#eee4d8] bg-white">
                      <Image
                        src={guide.image}
                        alt={`${guide.title} preview`}
                        width={1200}
                        height={1600}
                        className="w-full h-auto transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-7 pt-2 text-center">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a7a68] font-semibold">
                      {guide.eyebrow}
                    </p>

                    <h3 className="mt-3 text-2xl [font-family:var(--font-playfair)] font-semibold leading-tight text-[#3f3326]">
                      {guide.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#665748] min-h-[78px]">
                      {guide.note}
                    </p>

                    <a
                      href={guide.href}
                      download
                      className={`inline-block mt-5 rounded-full px-6 py-3 text-sm font-semibold shadow-sm hover:brightness-95 transition ${guide.buttonClass}`}
                    >
                      Download Guide
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="relative px-6 md:px-10 lg:px-16 pb-12 md:pb-14">
            <div className="mx-auto max-w-4xl rounded-[26px] border border-[#e3d8cb] bg-[#f8f2e9] px-6 py-5 text-center shadow-sm">
              <p className="text-sm md:text-base text-[#5f5144] leading-7">
                If a download does not begin right away, simply click the
                button again.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}