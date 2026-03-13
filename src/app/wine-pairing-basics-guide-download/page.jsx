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
    note: 'Choose the right glass with confidence.',
  },
  {
    title: 'Sweet vs. Dry Wines Guide',
    image: '/dry-vs-sweet-preview.png',
    href: '/downloads/sweet-dry-wines-guide.pdf',
    buttonClass: 'bg-[#7B1E3F] text-white',
    badgeClass: 'bg-[#7B1E3F]/10 text-[#7B1E3F] border border-[#7B1E3F]/20',
    note: 'Quick clarity for sweet and dry wine styles.',
  },
  {
    title: 'Wine Pairing Basics Guide',
    image: '/wine-pairing-basics-preview.png',
    href: '/downloads/wine-pairing-basics-guide.pdf',
    buttonClass: 'bg-[#C59B5F] text-white',
    badgeClass: 'bg-[#C59B5F]/10 text-[#7B1E3F] border border-[#C59B5F]/20',
    note: 'Classic pairings for easy entertaining.',
  },
];

export default function WineGuideBundleDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <section className="overflow-hidden rounded-[32px] border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_20px_70px_rgba(75,63,47,0.10)]">
          {/* Header */}
          <div className="relative px-6 md:px-10 lg:px-14 pt-12 md:pt-14 pb-10 text-center bg-[radial-gradient(circle_at_top,rgba(163,124,88,0.14),transparent_45%),linear-gradient(to_bottom,#fdfaf3,#f9f6ef)]">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center rounded-full bg-[#7B1E3F] text-white text-xs font-semibold uppercase tracking-[0.18em] px-4 py-1.5 shadow-sm">
                Best Value Bundle
              </span>
            </div>

            <p className="text-sm uppercase tracking-[0.24em] text-[#7a6b57] font-medium">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-wide [font-family:var(--font-playfair)]">
              Your Wine Guide Bundle
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[#6b5b4b]">
              Thank you for your purchase. Your complete bundle is ready —
              three beautifully designed wine guides to print, reference, and enjoy.
            </p>

            <div className="mx-auto mt-6 h-[2px] w-28 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </div>

          {/* Intro panel */}
          <div className="px-6 md:px-10 lg:px-14 pt-8">
            <div className="rounded-2xl border border-[#d8cfc4] bg-white/80 backdrop-blur px-6 py-5 text-center shadow-sm">
              <p className="text-sm md:text-base text-[#5f5144] leading-relaxed">
                Your bundle includes all three premium printables. Download each guide below and keep them handy for entertaining, gifting, or elevating your own wine experience.
              </p>
            </div>
          </div>

          {/* Guide cards */}
          <div className="px-6 md:px-10 lg:px-14 py-8 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GUIDES.map((guide) => (
                <article
                  key={guide.title}
                  className="group overflow-hidden rounded-2xl border border-[#d8cfc4] bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="relative bg-[#FDF7EF]">
                    <Image
                      src={guide.image}
                      alt={`${guide.title} preview`}
                      width={1200}
                      height={1600}
                      className="w-full h-auto transition duration-300 group-hover:scale-[1.01]"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <div className="flex justify-center mb-3">
                      <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${guide.badgeClass}`}>
                        Included in Bundle
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold [font-family:var(--font-playfair)]">
                      {guide.title}
                    </h2>

                    <p className="mt-2 text-sm text-[#6b5b4b] min-h-[44px]">
                      {guide.note}
                    </p>

                    <a
                      href={guide.href}
                      download
                      className={`inline-block mt-5 rounded-xl px-5 py-2.5 font-semibold shadow-sm hover:brightness-95 transition ${guide.buttonClass}`}
                    >
                      Download Guide
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="px-6 md:px-10 lg:px-14 pb-10">
            <div className="rounded-2xl border border-[#d8cfc4] bg-[#f9f6ef] px-5 py-4 text-center">
              <p className="text-sm text-[#5f5144]">
                If a download does not begin right away, click the button again.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}