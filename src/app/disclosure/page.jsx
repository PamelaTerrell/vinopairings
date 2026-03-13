export const metadata = {
  title: 'Disclosure | Vino Pairings',
  description: 'Affiliate and advertising disclosure for Vino Pairings.',
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_10px_30px_rgba(75,63,47,0.08)] overflow-hidden">
          {/* Header */}
          <header className="px-8 pt-10 pb-8 text-center bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef]">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7a6b57] font-medium">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-wide [font-family:var(--font-playfair)]">
              Disclosure
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-[#6b5b4b] leading-relaxed">
              Transparency matters to us. This page explains how affiliate links,
              partnerships, and recommendations may appear on Vino Pairings.
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </header>

          {/* Content */}
          <section className="px-8 py-10 space-y-8 leading-8">
            <div>
              <h2 className="text-2xl font-semibold [font-family:var(--font-playfair)] text-[#6e2a2a]">
                Affiliate Relationships
              </h2>
              <p className="mt-3 text-[#4b3f2f]">
                Vino Pairings participates in affiliate marketing programs and may
                earn commissions from qualifying purchases made through links on
                this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold [font-family:var(--font-playfair)] text-[#6e2a2a]">
                Third-Party Links
              </h2>
              <p className="mt-3 text-[#4b3f2f]">
                Some links on this site may direct you to third-party websites,
                including wine brands, retailers, or partners. If you click one
                of these links, Vino Pairings may receive compensation at no
                additional cost to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold [font-family:var(--font-playfair)] text-[#6e2a2a]">
                Editorial Integrity
              </h2>
              <p className="mt-3 text-[#4b3f2f]">
                All wine recommendations and pairing suggestions are created
                independently based on pairing principles, experience, and
                editorial judgment. Compensation does not determine or influence
                the recommendations shared on this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold [font-family:var(--font-playfair)] text-[#6e2a2a]">
                Informational Use Only
              </h2>
              <p className="mt-3 text-[#4b3f2f]">
                Vino Pairings is intended for informational and educational
                purposes only. Please enjoy wine responsibly and follow all local
                laws regarding alcohol purchase and consumption.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d8cfc4] bg-[#f9f6ef] px-6 py-5">
              <p className="text-sm md:text-base text-[#5f5144]">
                Questions? Contact us at{' '}
                <a
                  href="mailto:pammyhoney@yahoo.com"
                  className="font-medium text-[#6e2a2a] underline underline-offset-4 hover:text-[#8a3a3a] transition"
                >
                  pammyhoney@yahoo.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}