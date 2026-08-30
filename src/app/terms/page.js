// src/app/terms/page.js

export const metadata = {
  title: "Terms of Use | Vino Pairings",
  description:
    "Terms of use for Vino Pairings, including site content, digital products, external links, intellectual property, and responsible wine enjoyment.",
  alternates: {
    canonical: "/terms",
  },
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
              or using this website, you agree to the terms below.
            </p>

            <p className="mt-4 text-sm text-[#8a7463]">
              Last updated: August 2026
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </header>

          <section className="space-y-8 px-8 py-10 leading-8">
            {/* USE OF WEBSITE */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Use of This Website
              </h2>

              <p className="mt-3">
                Vino Pairings provides wine pairing ideas, wine education,
                entertaining inspiration, tutorials, printable resources, wine
                guides, and related lifestyle content for informational and
                educational purposes.
              </p>

              <p className="mt-3">
                You agree to use this website lawfully and respectfully and not
                to misuse, copy, disrupt, damage, interfere with, or attempt to
                gain unauthorized access to the website or its content.
              </p>
            </div>

            {/* INFORMATIONAL USE */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Informational Use Only
              </h2>

              <p className="mt-3">
                The content on Vino Pairings is provided for general
                informational and educational purposes only. Wine preferences,
                food pairings, serving suggestions, entertaining ideas, and
                recommendations are subjective and may vary according to
                personal taste and individual circumstances.
              </p>

              <p className="mt-3">
                Nothing on this website should be considered professional,
                medical, legal, financial, or other specialized advice.
              </p>
            </div>

            {/* PAIRING FINDER */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Pairing Finder & Interactive Features
              </h2>

              <p className="mt-3">
                Vino Pairings may provide interactive tools, including the
                Pairing Finder and virtual wine guidance features, to help
                visitors explore food and wine combinations.
              </p>

              <p className="mt-3">
                These suggestions are provided for general guidance and
                enjoyment. Wine and food preferences are highly personal, and no
                particular pairing or recommendation is guaranteed to suit every
                visitor.
              </p>
            </div>

            {/* RESPONSIBLE ALCOHOL USE */}
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
                Do not drink and drive or operate machinery while impaired. If
                you choose to consume alcohol, please do so safely and
                responsibly.
              </p>
            </div>

            {/* DIGITAL PRODUCTS */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Digital Products & Printable Guides
              </h2>

              <p className="mt-3">
                Vino Pairings may offer original digital products, including
                printable wine guides and other downloadable resources.
              </p>

              <p className="mt-3">
                Digital products are intended for personal use unless otherwise
                stated. Purchasing a digital product does not transfer ownership
                of the underlying design, text, artwork, or other intellectual
                property.
              </p>

              <p className="mt-3">
                You may download and use purchased materials for your own
                personal use, but you may not reproduce, resell, distribute,
                publish, upload, share, or commercially exploit them without
                written permission from Vino Pairings.
              </p>
            </div>

            {/* PAYMENTS */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Payments
              </h2>

              <p className="mt-3">
                Payments for digital products may be processed through a
                third-party payment provider. Vino Pairings does not directly
                store complete payment card information.
              </p>

              <p className="mt-3">
                Transactions may also be subject to the payment provider&apos;s
                own terms, privacy practices, and policies.
              </p>
            </div>

            {/* EXTERNAL LINKS */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                External Links
              </h2>

              <p className="mt-3">
                This website may contain links to third-party websites, wine
                brands, services, or other external resources. These links are
                provided for convenience and informational purposes.
              </p>

              <p className="mt-3">
                Vino Pairings does not control and is not responsible for the
                content, policies, availability, pricing, accuracy, security, or
                practices of external websites.
              </p>

              <p className="mt-3">
                Visiting or using an external website is at your own discretion
                and is subject to that website&apos;s own terms and policies.
              </p>
            </div>

            {/* INTELLECTUAL PROPERTY */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Intellectual Property
              </h2>

              <p className="mt-3">
                Unless otherwise noted, the original text, pairing resources,
                guides, downloadable materials, layout, design, branding,
                graphics, and other original content on Vino Pairings belong to
                Vino Pairings and/or its creator.
              </p>

              <p className="mt-3">
                You may not copy, reproduce, republish, distribute, modify,
                sell, or reuse substantial portions of this website or its
                original materials without prior permission, except where
                permitted by applicable law.
              </p>
            </div>

            {/* TRADEMARKS */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Third-Party Names & Trademarks
              </h2>

              <p className="mt-3">
                Wine names, winery names, company names, trademarks, logos, and
                other third-party intellectual property referenced on Vino
                Pairings remain the property of their respective owners.
              </p>

              <p className="mt-3">
                References to a wine, winery, brand, or other third party do not
                imply sponsorship, endorsement, or an official relationship
                unless expressly stated.
              </p>
            </div>

            {/* NO GUARANTEES */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Accuracy & No Guarantees
              </h2>

              <p className="mt-3">
                Vino Pairings makes reasonable efforts to provide useful and
                accurate information, but we do not guarantee that all content,
                links, product information, wine details, recommendations, or
                other information will always be complete, accurate, current,
                or available.
              </p>

              <p className="mt-3">
                Information may be updated, corrected, removed, or changed at
                any time without notice.
              </p>
            </div>

            {/* AVAILABILITY */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Website Availability
              </h2>

              <p className="mt-3">
                We do not guarantee that Vino Pairings or any particular feature
                will always be available, uninterrupted, secure, or free from
                errors. Features, content, and services may be modified,
                suspended, or discontinued from time to time.
              </p>
            </div>

            {/* CHANGES */}
            <div>
              <h2 className="text-2xl font-semibold text-[#6e2a2a] [font-family:var(--font-playfair)]">
                Changes to These Terms
              </h2>

              <p className="mt-3">
                Vino Pairings may update these Terms of Use from time to time.
                Any changes will be posted on this page along with a revised
                &quot;Last updated&quot; date.
              </p>

              <p className="mt-3">
                Continued use of the website after updated terms are posted
                constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* CONTACT */}
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