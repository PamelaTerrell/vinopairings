import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Wine Glass Guide Download | Vino Pairings',
  description: 'Download your Wine Glass Guide.',
};

export default function WineGlassGuideDownloadPage() {
  return (
    <main className="relative min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-10 md:py-16">

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(163,124,88,0.18),transparent_40%),radial-gradient(circle_at_bottom,rgba(110,42,42,0.06),transparent_40%)]" />

      <div className="relative max-w-5xl mx-auto">

        <section className="relative overflow-hidden rounded-[34px] border border-[#ddd3c7] bg-[#fdfaf3] shadow-[0_24px_80px_rgba(75,63,47,0.12)]">

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,124,88,0.18),transparent_30%),linear-gradient(to_bottom,#fdfaf3,#f8f3eb)]" />

          {/* Header */}
          <div className="relative px-6 md:px-10 lg:px-14 pt-12 md:pt-16 pb-10 text-center">

            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center rounded-full border border-[#C59B5F]/20 bg-[#C59B5F] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-sm">
                Premium Printable
              </span>
            </div>

            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8a7a68] font-medium">
              Vino Pairings
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] [font-family:var(--font-playfair)] text-[#3f3326]">
              Your Wine Glass Guide
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg leading-8 text-[#665748]">
              Thank you for supporting Vino Pairings. Your guide is ready to
              download and enjoy.
            </p>

            <div className="mx-auto mt-7 h-px w-28 bg-gradient-to-r from-transparent via-[#b28a62] to-transparent" />

          </div>

          {/* Content Card */}
          <div className="relative px-6 md:px-10 lg:px-14 pb-10">

            <div className="mx-auto max-w-4xl rounded-[28px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,251,245,0.82))] backdrop-blur-md shadow-[0_16px_50px_rgba(75,63,47,0.08)] overflow-hidden">

              <div className="grid md:grid-cols-[1.05fr_0.95fr] items-center">

                {/* Preview Image */}
                <div className="relative bg-[#fbf6ee] p-5 md:p-6">

                  <div className="absolute inset-x-5 top-5 h-20 rounded-t-[22px] bg-gradient-to-b from-white/55 to-transparent pointer-events-none z-10" />

                  <div className="overflow-hidden rounded-[22px] border border-[#eee4d8] bg-white shadow-sm">

                    <Image
                      src="/wine-glass-guide-preview.png"
                      alt="Wine Glass Guide preview"
                      width={1400}
                      height={1800}
                      className="w-full h-auto"
                    />

                  </div>

                </div>

                {/* Download Section */}
                <div className="px-7 py-8 md:px-8 md:py-10 text-center md:text-left">

                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a7a68] font-semibold">
                    Included in your purchase
                  </p>

                  <h2 className="mt-3 text-2xl md:text-3xl [font-family:var(--font-playfair)] font-semibold leading-tight text-[#3f3326]">
                    A beautifully designed glassware guide
                  </h2>

                  <p className="mt-4 text-sm md:text-base leading-7 text-[#665748]">
                    Learn which wine glass enhances each style of wine. This
                    elegant printable reference makes it easy to serve wine
                    confidently whether you’re hosting guests or enjoying a
                    quiet evening.
                  </p>

                  <a
                    href="/downloads/wine-glass-guide.pdf"
                    download
                    className="inline-block mt-6 rounded-full bg-[#C59B5F] text-white px-6 py-3 text-sm font-semibold shadow-sm hover:brightness-95 transition"
                  >
                    Download Your Guide
                  </a>

                  <p className="text-xs text-[#857563] mt-4">
                    If your download does not start automatically, click the
                    button again.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="relative px-6 md:px-10 lg:px-14 pb-12 pt-6 text-center">

            <div className="mx-auto mb-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />

            <p className="text-xl [font-family:var(--font-playfair)] text-[#3f3326]">
              Enjoy your guide.
            </p>

            <p className="mt-3 text-sm md:text-base text-[#6b5b4b] leading-relaxed max-w-xl mx-auto">
              Vino Pairings was created to help make wine more approachable,
              beautiful, and enjoyable.
            </p>

            <Link
              href="/printable-guides"
              className="inline-block mt-5 text-sm font-semibold text-[#7B1E3F] hover:underline"
            >
              Explore more printable guides →
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}