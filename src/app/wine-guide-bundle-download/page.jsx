import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Wine Guide Bundle Download | Vino Pairings",
  description: "Download your complete Wine Guide Bundle.",
};

const GUIDES = [
  {
    title: "Wine Glass Guide",
    image: "/wine-glass-guide-preview.png",
    href: "/downloads/wine-glass-guide.pdf",
    buttonClass: "bg-[#a37c58] text-white",
    eyebrow: "Glassware",
    note: "An elegant printable for choosing the right glass with confidence.",
  },
  {
    title: "Sweet vs. Dry Wines Guide",
    image: "/dry-vs-sweet-preview.png",
    href: "/downloads/sweet-dry-wines-guide.pdf",
    buttonClass: "bg-[#6e2a2a] text-white",
    eyebrow: "Wine Styles",
    note: "A beautiful quick reference for understanding sweetness at a glance.",
  },
  {
    title: "Wine Pairing Basics Guide",
    image: "/wine-pairing-basics-guide.png",
    href: "/downloads/wine-pairing-basics-guide.pdf",
    buttonClass: "bg-[#a37c58] text-white",
    eyebrow: "Pairing",
    note: "Classic pairings designed to make entertaining feel effortless.",
  },
];

export default function WineGuideBundleDownloadPage() {
  return (
    <main className="relative min-h-screen bg-[#f9f6ef] px-4 py-10 text-[#4b3f2f] md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,124,88,0.18),transparent_40%),radial-gradient(circle_at_bottom,rgba(110,42,42,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl">
        <section className="relative overflow-hidden rounded-[36px] border border-[#ddd3c7] bg-[#fdfaf3] shadow-[0_30px_90px_rgba(75,63,47,0.12)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,124,88,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(110,42,42,0.08),transparent_28%),linear-gradient(to_bottom,#fdfaf3,#f8f3eb)]" />

          {/* Header */}
          <div className="relative px-6 pb-10 pt-12 md:px-10 md:pb-12 md:pt-16 lg:px-16 lg:pt-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 flex justify-center">
                <span className="inline-flex items-center rounded-full bg-[#6e2a2a] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-sm">
                  Signature Collection
                </span>
              </div>

              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#8a7a68]">
                Vino Pairings
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.02em] text-[#3f3326] md:text-6xl [font-family:var(--font-playfair)]">
                Your Wine Guide Bundle
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#665748] md:text-lg">
                Thank you for your purchase. This curated bundle brings together
                three beautifully designed printables to help you pour, pair,
                host, and enjoy with more confidence and style.
              </p>

              <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#b28a62] to-transparent" />
            </div>
          </div>

          {/* Intro */}
          <div className="relative px-6 md:px-10 lg:px-16">
            <div className="mx-auto max-w-4xl rounded-[30px] border border-white/60 bg-white/80 px-8 py-8 text-center shadow-[0_16px_50px_rgba(75,63,47,0.08)] backdrop-blur-md md:px-10 md:py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8a7a68]">
                Included in your purchase
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#3f3326] md:text-4xl [font-family:var(--font-playfair)]">
                A refined trio of wine printables
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#665748] md:text-base">
                Keep them nearby for dinner parties, gifting, learning, or
                simply adding a beautiful wine reference to your kitchen,
                dining room, or bar area.
              </p>
            </div>
          </div>

          {/* Guide Cards */}
          <div className="relative space-y-8 px-6 py-10 md:px-10 md:py-14 lg:px-16">
            {GUIDES.map((guide, index) => (
              <article
                key={guide.title}
                className="group overflow-hidden rounded-[30px] border border-[#e7ddd1] bg-white/92 shadow-[0_14px_45px_rgba(75,63,47,0.08)] transition duration-300 hover:shadow-[0_24px_55px_rgba(75,63,47,0.12)]"
              >
                <div
                  className={`grid grid-cols-1 items-center md:grid-cols-2 ${
                    index % 2 === 1
                      ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                      : ""
                  }`}
                >
                  <div className="relative bg-[#fbf6ee] p-5 md:p-7">
                    <div className="overflow-hidden rounded-[24px] border border-[#eee4d8] bg-white">
                      <Image
                        src={guide.image}
                        alt={`${guide.title} preview`}
                        width={1200}
                        height={1600}
                        className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="px-7 py-8 text-center md:px-10 md:py-10 md:text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8a7a68]">
                      {guide.eyebrow}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#3f3326] md:text-4xl [font-family:var(--font-playfair)]">
                      {guide.title}
                    </h3>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#665748] md:mx-0 md:text-lg">
                      {guide.note}
                    </p>

                    <a
                      href={guide.href}
                      download
                      className={`mt-7 inline-block rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:brightness-95 ${guide.buttonClass}`}
                    >
                      Download Guide
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Closing */}
          <div className="relative px-6 md:px-10 lg:px-16">
            <div className="mx-auto mt-2 max-w-2xl text-center">
              <div className="mx-auto mb-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />

              <p className="text-xl text-[#3f3326] [font-family:var(--font-playfair)]">
                Enjoy your guides.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#6b5b4b] md:text-base">
                These printables were designed to make wine feel more
                approachable — whether you're hosting a dinner, discovering new
                bottles, or simply learning at your own pace.
              </p>

              <Link
                href="/printable-guides"
                className="mt-5 inline-block text-sm font-semibold text-[#7B1E3F] hover:underline"
              >
                Explore more wine inspiration →
              </Link>
            </div>
          </div>

          {/* Footer Support */}
          <div className="relative px-6 pb-12 pt-10 md:px-10 md:pb-14 lg:px-16">
            <div className="mx-auto max-w-4xl rounded-[26px] border border-[#e3d8cb] bg-[#f8f2e9] px-6 py-5 text-center shadow-sm">
              <p className="text-sm leading-7 text-[#5f5144] md:text-base">
                If a download does not begin right away, simply click the button
                again.
              </p>

              <p className="mt-3 text-sm text-[#5f5144]">
                Need help?{" "}
                <a
                  href="mailto:hello@vinopairings.com"
                  className="font-semibold text-[#6e2a2a] underline underline-offset-4"
                >
                  hello@vinopairings.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}