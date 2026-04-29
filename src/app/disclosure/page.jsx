export const metadata = {
  title: "Disclosure | Vino Pairings",
  description:
    "Affiliate, advertising, and editorial disclosure for Vino Pairings.",
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="overflow-hidden rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_10px_30px_rgba(75,63,47,0.08)]">
          {/* Header */}
          <header className="bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef] px-8 pb-8 pt-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6b57]">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-wide md:text-5xl [font-family:var(--font-playfair)]">
              Disclosure
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6b5b4b] md:text-lg">
              We believe recommendations should be elegant, honest, and
              transparent. This page explains how affiliate links, advertising,
              and product mentions may appear on Vino Pairings.
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </header>

          {/* Content */}
          <section className="space-y-10 px-8 py-10 leading-8">
            {/* Amazon / Affiliate */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Affiliate Relationships
              </h2>

              <p className="mt-3 text-[#4b3f2f]">
                As an Amazon Associate I earn from qualifying purchases.
                Vino Pairings also participates in other affiliate advertising
                programs designed to provide a means for websites to earn fees
                by linking to products and services.
              </p>

              <p className="mt-3 text-[#4b3f2f]">
                If you click certain links on this site and make a purchase,
                we may receive a small commission at no additional cost to you.
              </p>
            </div>

            {/* Product Recommendations */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Editorial Integrity
              </h2>

              <p className="mt-3 text-[#4b3f2f]">
                Our wine recommendations, pairing suggestions, and product
                selections are based on independent editorial judgment,
                experience, usefulness, and relevance to our readers.
              </p>

              <p className="mt-3 text-[#4b3f2f]">
                Compensation does not determine rankings, opinions, or featured
                recommendations.
              </p>
            </div>

            {/* Pricing / Availability */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Product Pricing & Availability
              </h2>

              <p className="mt-3 text-[#4b3f2f]">
                Prices, availability, ratings, and product details may change at
                any time without notice. Any price or availability information
                displayed on third-party retailer websites at the time of
                purchase will apply to your order.
              </p>
            </div>

            {/* Third Party */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Third-Party Links
              </h2>

              <p className="mt-3 text-[#4b3f2f]">
                Some links on this site may direct you to third-party websites,
                retailers, or service providers. We are not responsible for the
                content, policies, or practices of those external websites.
              </p>
            </div>

            {/* Responsibility */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Responsible Enjoyment
              </h2>

              <p className="mt-3 text-[#4b3f2f]">
                Vino Pairings is intended for informational and educational
                purposes only. Please enjoy wine responsibly and follow all
                local laws regarding the purchase and consumption of alcohol.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Updates to This Disclosure
              </h2>

              <p className="mt-3 text-[#4b3f2f]">
                We may update this page from time to time to reflect changes in
                partnerships, advertising relationships, or site practices.
              </p>
            </div>

            {/* Contact Card */}
            <div className="rounded-2xl border border-[#d8cfc4] bg-[#f9f6ef] px-6 py-5">
              <p className="text-sm text-[#5f5144] md:text-base">
                Questions about this disclosure?
              </p>

              <a
                href="mailto:pammyhoney@yahoo.com"
                className="mt-1 inline-block font-medium text-[#6e2a2a] underline underline-offset-4 transition hover:text-[#8a3a3a]"
              >
                pammyhoney@yahoo.com
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}