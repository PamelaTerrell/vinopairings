export const metadata = {
  title: "Privacy Policy | Vino Pairings",
  description:
    "Learn how Vino Pairings protects your privacy and uses limited analytics.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="privacy-card relative overflow-hidden">
          {/* Soft watermark background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 18% 22%, rgba(163,124,88,0.45) 0, rgba(163,124,88,0.45) 2px, transparent 2px),
                radial-gradient(circle at 78% 18%, rgba(163,124,88,0.35) 0, rgba(163,124,88,0.35) 2px, transparent 2px),
                radial-gradient(circle at 30% 78%, rgba(110,42,42,0.28) 0, rgba(110,42,42,0.28) 2px, transparent 2px),
                radial-gradient(circle at 72% 74%, rgba(163,124,88,0.32) 0, rgba(163,124,88,0.32) 2px, transparent 2px),
                linear-gradient(135deg, transparent 0%, rgba(163,124,88,0.08) 50%, transparent 100%)
              `,
              backgroundSize: "220px 220px, 240px 240px, 260px 260px, 280px 280px, 100% 100%",
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <header className="text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-[#a37c58]">
                Vino Pairings
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-wide [font-family:var(--font-playfair)]">
                Privacy Policy
              </h1>

              <p className="mt-3 text-sm text-[#7a6b57]">
                Effective date: March 12, 2026
              </p>

              <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
            </header>

            {/* Content */}
            <div className="mt-10 space-y-10 text-[17px] leading-8 text-[#5a4636]">
              <section>
                <p className="drop-cap">
                  Vino Pairings respects your privacy. This Privacy Policy explains
                  what information may be collected when you visit this website,
                  how that information is used, and what choices you have.
                </p>
              </section>

              <section>
                <h2 className="section-title">Information We Collect</h2>

                <p>
                  Visitors may browse Vino Pairings without creating an account or
                  submitting personal information. However, limited technical data
                  may be collected automatically through analytics and standard web
                  technologies.
                </p>

                <p>
                  This may include browser type, device type, pages viewed, time
                  spent on the site, referral source, and approximate geographic
                  region.
                </p>
              </section>

              <section>
                <h2 className="section-title">Cookies and Analytics</h2>

                <p>
                  Vino Pairings uses cookies and analytics technologies to
                  understand how visitors use the site. This helps improve content,
                  performance, and user experience.
                </p>

                <p>
                  The site may use services such as Google Analytics and Vercel
                  Analytics. These tools may collect information including pages
                  visited, time spent on pages, device information, and general
                  location.
                </p>

                <p>
                  This information is analyzed in aggregate and is not used to
                  personally identify individual visitors.
                </p>
              </section>

              <section>
                <h2 className="section-title">How Information Is Used</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>understand visitor interests</li>
                  <li>improve site design and usability</li>
                  <li>measure content performance</li>
                  <li>maintain website reliability and security</li>
                </ul>
              </section>

              <section>
                <h2 className="section-title">Affiliate Links</h2>

                <p>
                  Some pages may contain affiliate links. If you purchase a product
                  through an affiliate link, Vino Pairings may earn a small
                  commission at no additional cost to you.
                </p>

                <p>
                  Affiliate partners may use their own cookies or tracking
                  technologies when you visit their sites. Please review those
                  websites&apos; privacy policies for details.
                </p>
              </section>

              <section>
                <h2 className="section-title">Third-Party Services</h2>

                <p>
                  Vino Pairings may use third-party services to operate and improve
                  the website, including web hosting, analytics tools, and
                  affiliate platforms.
                </p>

                <p>
                  These providers may process limited technical data required to
                  deliver their services.
                </p>
              </section>

              <section>
                <h2 className="section-title">Your Choices</h2>

                <p>
                  You may control cookies through your browser settings. If a
                  cookie notice appears on this site, you may also use it to manage
                  analytics preferences where available.
                </p>

                <p>
                  Disabling certain technologies may affect how parts of the site
                  function.
                </p>
              </section>

              <section>
                <h2 className="section-title">Children&apos;s Privacy</h2>

                <p>
                  Vino Pairings is not directed toward children under the age of 13
                  and does not knowingly collect personal information from
                  children.
                </p>
              </section>

              <section>
                <h2 className="section-title">Changes to This Policy</h2>

                <p>
                  This Privacy Policy may be updated periodically to reflect
                  changes in site functionality, legal requirements, or business
                  practices. Updates will be posted on this page.
                </p>
              </section>

              <section>
                <h2 className="section-title">Contact</h2>

                <p>
                  Questions about this policy may be directed through the contact
                  information available on the Vino Pairings website.
                </p>
              </section>
            </div>

            {/* Footer Divider */}
            <div className="mx-auto mt-16 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </div>
        </div>
      </main>
    </div>
  );
}