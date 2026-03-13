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
    buttonClass: 'bg-[#C59B5F] text-white',
    badgeClass: 'bg-[#C59B5F]/10 text-[#7B1E3F] border border-[#C59B5F]/20',
    note: 'Choose the right glass with confidence and elegance.',
  },
  {
    title: 'Sweet vs. Dry Wines Guide',
    image: '/dry-vs-sweet-preview.png',
    href: '/downloads/sweet-dry-wines-guide.pdf',
    buttonClass: 'bg-[#7B1E3F] text-white',
    badgeClass: 'bg-[#7B1E3F]/10 text-[#7B1E3F] border border-[#7B1E3F]/20',
    note: 'A beautiful quick reference for sweet and dry wine styles.',
  },
  {
    title: 'Wine Pairing Basics Guide',
    image: '/wine-pairing-basics-preview.png',
    href: '/downloads/wine-pairing-basics-guide.pdf',
    buttonClass: 'bg-[#C59B5F] text-white',
    badgeClass: 'bg-[#C59B5F]/10 text-[#7B1E3F] border border-[#C59B5F]/20',
    note: 'Classic pairings designed to make entertaining easy.',
  },
];

export default function WineGuideBundleDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-10 md:py-16">
      <div className="max-w-6xl mx-auto">
        <section className="relative overflow-hidden rounded-[34px] border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_24px_80px_rgba(75,63,47,0.12)]">
          {/* soft background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,124,88,0.18),transparent_38%),radial-gradient(circle_at_bottom,rgba(110,42,42,0.06),transparent_30%)]" />

          {/* Header */}
          <div className="relative px-6 md:px-10 lg:px-14 pt-12 md:pt-16 pb-10 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center rounded-full bg-[#7B1E3F] text-white text-xs font-semibold uppercase tracking-[0.18em] px-4 py-1.5 shadow-sm">
                Signature Bundle
              </span>
            </div>

            <p className="text-sm uppercase tracking-[0.24em] text-[#7a6b57] font-medium">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-wide [font-family:var(--font-playfair)]">
              Your Wine Guide Bundle
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[#6b5b4b]">
              A curated collection of printable wine guides designed to bring
              more beauty, clarity, and confidence to the way you pour, pair,
              and enjoy.
            </p>

            <div className="mx-auto mt-7 h-[2px] w-28 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </div>

          {/* Elegant intro card */}
          <div className="relative px-6 md:px-10 lg:px-14">
            <div className="mx-auto max-w-3xl rounded-[24px] border border-[#d8cfc4] bg-white/85 backdrop-blur px-6 md:px-8 py-6 shadow-sm text-center">
              <p className="text-sm md:text-base leading-relaxed text-[#5f5144]">
                Thank you for supporting Vino Pairings. Your bundle includes all
                three premium guides below. Download each one and keep them on
                hand for everyday sipping, entertaining, gifting, or simply
                learning wine in a way that feels approachable and elegant.
              </p>
            </div>
          </div>

          {/* Collection cards */}
          <div className="relative px-6 md:px-10 lg:px-14 py-10 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {GUIDES.map((guide) => (
                <article
                  key={guide.title}
                  className="group overflow-hidden rounded-[26px] border border-[#d8cfc4] bg-white shadow-[0_10px_30px_rgba(75,63,47,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,63,47,0.12)]"
                >
                  <div className="relative bg-[#FDF7EF]">
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fff8ef] to-transparent z-10 pointer-events-none" />
                    <Image
                      src={guide.image}
                      alt={`${guide.title} preview`}
                      width={1200}
                      height={1600}
                      className="w-full h-auto transition duration-300 group-hover:scale-[1.015]"
                    />
                  </div>

                  <div className="p-5 md:p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <span
                        className={`text-[11px] font-semibold px-3 py-1 rounded-full ${guide.badgeClass}`}
                      >
                        Included in Bundle
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold [font-family:var(--font-playfair)]">
                      {guide.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#6b5b4b] min-h-[60px]">
                      {guide.note}
                    </p>

                    <a
                      href={guide.href}
                      download
                      className={`inline-block mt-5 rounded-xl px-6 py-2.5 font-semibold shadow-sm hover:brightness-95 transition ${guide.buttonClass}`}
                    >
                      Download Guide
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Footer area */}
          <div className="relative px-6 md:px-10 lg:px-14 pb-12">
            <div className="rounded-[24px] border border-[#d8cfc4] bg-[#f9f6ef] px-5 py-5 text-center shadow-sm">
              <p className="text-sm md:text-base text-[#5f5144]">
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