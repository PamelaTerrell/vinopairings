// src/app/terms/page.js
export const metadata = {
  title: "Terms of Use | Vino Pairings",
  description:
    "Terms of use for Vino Pairings, including site content, external links, affiliate relationships, and responsible wine enjoyment.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="overflow-hidden rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_10px_30px_rgba(75,63,47,0.08)]">
          <header className="bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef] px-8 pb-8 pt-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6b57]">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-wide md:text-5xl [font-family:var(--font-playfair)]">
              Terms of Use
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6b5b4b] md:text-lg">
              Please read these terms before using Vino Pairings. By accessing
              this website, you agree to the terms below.
            </p>

            <p className="mt-4 text-sm text-[#8a7463]">
              Last updated: April 2026
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </header>

          <section className="space-y-8 px-8 py-10 leading-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Use of This Website
              </h2>

              <p className="mt-3">
                Vino Pairings provides wine pairing ideas, wine tips,
                entertaining inspiration, product guides, and related lifestyle
                content for informational and educational purposes.
              </p>

              <p className="mt-3">
                You agree to use this website lawfully and respectfully, and not
                to misuse, copy, disrupt, or interfere with the site or its
                content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Informational Use Only
              </h2>

              <p className="mt-3">
                The content on Vino Pairings is provided for general
                informational purposes only. Wine preferences, pairings, product
                choices, and entertaining suggestions are subjective and may vary
                by personal taste.
              </p>

              <p className="mt-3">
                Nothing on this site should be considered professional,
                medical, legal, or financial advice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Responsible Alcohol Use
              </h2>

              <p className="mt-3">
                Vino Pairings is intended for readers who are of legal drinking
                age in their location. Please enjoy wine responsibly and follow
                all applicable laws regarding the purchase, possession, and
                consumption of alcohol.
              </p>

              <p className="mt-3">
                Do not drink and drive. If you choose to consume alcohol, please
                do so safely and responsibly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Affiliate Links & Product Mentions
              </h2>

              <p className="mt-3">
                Vino Pairings may participate in affiliate programs and may earn
                commissions from qualifying purchases made through links on this
                website, at no additional cost to you.
              </p>

              <p className="mt-3">
                Product recommendations and mentions are selected independently
                based on usefulness, relevance, editorial judgment, and fit for
                the Vino Pairings audience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                External Links
              </h2>

              <p className="mt-3">
                This website may contain links to third-party websites,
                retailers, brands, or services. Vino Pairings is not responsible
                for the content, policies, availability, pricing, or practices of
                external websites.
              </p>

              <p className="mt-3">
                Visiting external sites is at your own discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Intellectual Property
              </h2>

              <p className="mt-3">
                Unless otherwise noted, the text, layout, design, branding, and
                original content on Vino Pairings belong to Vino Pairings and/or
                its creator. You may not copy, reproduce, republish, or reuse
                substantial portions of this site without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                No Guarantees
              </h2>

              <p className="mt-3">
                We make reasonable efforts to keep information accurate and
                current, but we do not guarantee that all content, product
                details, prices, links, or availability will always be complete,
                accurate, or up to date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Changes to These Terms
              </h2>

              <p className="mt-3">
                Vino Pairings may update these Terms of Use from time to time.
                Updates will be posted on this page with a revised date.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d8cfc4] bg-[#f9f6ef] px-6 py-5">
              <p className="text-sm md:text-base">
                Questions about these terms? Contact{" "}
                <a
                  href="mailto:hello@vinopairings.com"
                  className="font-medium text-[#6e2a2a] underline underline-offset-4 hover:text-[#8a3a3a]"
                >
                  hello@vinopairings.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}