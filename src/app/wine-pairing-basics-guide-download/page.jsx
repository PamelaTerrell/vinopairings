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
    accent: 'gold',
  },
  {
    title: 'Sweet vs. Dry Wines Guide',
    image: '/dry-vs-sweet-preview.png',
    href: '/downloads/sweet-dry-wines-guide.pdf',
    buttonClass: 'bg-[#7B1E3F] text-white',
    accent: 'burgundy',
  },
  {
    title: 'Wine Pairing Basics Guide',
    image: '/wine-pairing-basics-preview.png',
    href: '/downloads/wine-pairing-basics-guide.pdf',
    buttonClass: 'bg-[#C59B5F] text-white',
    accent: 'gold',
  },
];

export default function WineGuideBundleDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <section className="rounded-[28px] border border-[#D8CFC4] bg-[#fdfaf3] shadow-[0_18px_60px_rgba(75,63,47,0.10)] overflow-hidden">
          {/* Header */}
          <div className="px-6 md:px-10 pt-10 pb-8 text-center bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef]">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center rounded-full border border-[#7B1E3F]/15 bg-[#7B1E3F] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Bundle Included
              </span>
            </div>

            <p className="text-sm uppercase tracking-[0.24em] text-[#7a6b57] font-medium">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-wide [font-family:var(--font-playfair)]">
              Your Wine Guide Bundle
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-[#6b5b4b] leading-relaxed">
              Thank you for supporting Vino Pairings. Your bundle includes all
              three printable guides, ready to download and enjoy.
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </div>

          {/* Guide cards */}
          <div className="px-6 md:px-10 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GUIDES.map((guide) => (
                <article
                  key={guide.title}
                  className="overflow-hidden rounded-2xl border border-[#D8CFC4] bg-white shadow-sm"
                >
                  <div className="relative bg-[#FDF7EF]">
                    <Image
                      src={guide.image}
                      alt={`${guide.title} preview`}
                      width={1200}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <div className="flex justify-center mb-3">
                      <span
                        className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${
                          guide.accent === 'burgundy'
                            ? 'bg-[#7B1E3F]/10 text-[#7B1E3F] border-[#7B1E3F]/20'
                            : 'bg-[#C59B5F]/10 text-[#7B1E3F] border-[#C59B5F]/20'
                        }`}
                      >
                        Bundle Guide
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold [font-family:var(--font-playfair)]">
                      {guide.title}
                    </h2>

                    <p className="mt-2 text-sm text-[#6b5b4b]">
                      Instant printable download included with your purchase.
                    </p>

                    <a
                      href={guide.href}
                      download
                      className={`inline-block mt-5 rounded-lg px-5 py-2.5 font-semibold hover:brightness-95 transition ${guide.buttonClass}`}
                    >
                      Download Guide
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#D8CFC4] bg-[#f9f6ef] px-5 py-4 text-center">
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