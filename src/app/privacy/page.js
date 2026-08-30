// src/app/privacy/page.js

export const metadata = {
  title: "Privacy Policy | Vino Pairings",
  description:
    "Learn how Vino Pairings handles information, analytics, payments, interactive features, cookies, and third-party services.",
  alternates: {
    canonical: "/privacy",
  },
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
              backgroundSize:
                "220px 220px, 240px 240px, 260px 260px, 280px 280px, 100% 100%",
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <header className="text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-[#a37c58]">
                Vino Pairings
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-wide md:text-5xl [font-family:var(--font-playfair)]">
                Privacy Policy
              </h1>

              <p className="mt-3 text-sm text-[#7a6b57]">
                Effective date: August 30, 2026
              </p>

              <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
            </header>

            {/* Content */}
            <div className="mt-10 space-y-10 text-[17px] leading-8 text-[#5a4636]">
              {/* INTRODUCTION */}
              <section>
                <p className="drop-cap">
                  Vino Pairings respects your privacy. This Privacy Policy
                  explains what information may be collected when you visit or
                  interact with this website, how that information may be used,
                  and what choices you have.
                </p>
              </section>

              {/* INFORMATION COLLECTED */}
              <section>
                <h2 className="section-title">
                  Information We Collect
                </h2>

                <p>
                  Visitors may browse most of Vino Pairings without creating an
                  account or directly providing personal information. However,
                  limited technical information may be collected automatically
                  through analytics, hosting services, cookies, and standard web
                  technologies.
                </p>

                <p className="mt-3">
                  Depending on the services in use, this information may include
                  browser type, device type, operating system, pages viewed,
                  approximate geographic region, referring website, interaction
                  data, and general usage information.
                </p>

                <p className="mt-3">
                  If you choose to contact Vino Pairings, purchase a digital
                  product, or use certain interactive features, additional
                  information may be processed as necessary to provide that
                  service.
                </p>
              </section>

              {/* ANALYTICS */}
              <section>
                <h2 className="section-title">
                  Cookies & Analytics
                </h2>

                <p>
                  Vino Pairings may use cookies and analytics technologies to
                  better understand how visitors use the website and to improve
                  content, performance, navigation, and user experience.
                </p>

                <p className="mt-3">
                  The site may use services such as Google Analytics and Vercel
                  Analytics. Depending on their configuration, these services
                  may process information such as pages viewed, referring
                  sources, device and browser information, interactions with the
                  site, and approximate location.
                </p>

                <p className="mt-3">
                  Vino Pairings uses analytics primarily to understand overall
                  website usage and improve the site rather than to identify
                  individual visitors.
                </p>
              </section>

              {/* HOW INFORMATION IS USED */}
              <section>
                <h2 className="section-title">
                  How Information Is Used
                </h2>

                <p>
                  Information collected through Vino Pairings may be used to:
                </p>

                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>understand how visitors use the website</li>
                  <li>improve content, navigation, and usability</li>
                  <li>measure the performance of articles and features</li>
                  <li>operate interactive features</li>
                  <li>process purchases and deliver digital products</li>
                  <li>maintain website reliability and security</li>
                  <li>diagnose technical problems</li>
                  <li>respond to messages or questions</li>
                </ul>
              </section>

              {/* INTERACTIVE FEATURES */}
              <section>
                <h2 className="section-title">
                  Pairing Finder & Interactive Features
                </h2>

                <p>
                  Vino Pairings includes interactive features designed to help
                  visitors explore food and wine pairings.
                </p>

                <p className="mt-3">
                  The Pairing Finder may process the dish or wine terms you enter
                  in order to return pairing suggestions. Some searches may be
                  handled directly within the website without requiring you to
                  provide personally identifying information.
                </p>
              </section>

              {/* VIV */}
              <section>
  <h2 className="section-title">
    Viv, the Virtual Sommelier
  </h2>

  <p>
    Vino Pairings provides an interactive virtual sommelier called Viv.
    When you use Viv, the questions and conversation history needed to
    provide a response are sent to OpenAI through its API for processing.
  </p>

  <p className="mt-3">
    OpenAI states that data submitted through its API is not used to train
    or improve its models by default unless the API account holder
    specifically opts in to data sharing.
  </p>

  <p className="mt-3">
    Please do not submit passwords, payment information, health
    information, or other sensitive or confidential personal information
    through Viv.
  </p>
</section>
                

              {/* DIGITAL PRODUCTS */}
              <section>
                <h2 className="section-title">
                  Digital Products & Payments
                </h2>

                <p>
                  Vino Pairings may offer original printable guides and other
                  digital products for purchase.
                </p>

                <p className="mt-3">
                  Payments may be processed through Stripe or another third-party
                  payment processor. When you make a purchase, payment
                  information is provided directly to the payment processor
                  rather than being entered into Vino Pairings&apos; own payment
                  storage system.
                </p>

                <p className="mt-3">
                  The payment provider may collect information necessary to
                  complete the transaction, such as payment details, billing
                  information, contact information, and transaction data, in
                  accordance with its own privacy policy.
                </p>
              </section>

              {/* EXTERNAL LINKS */}
              <section>
                <h2 className="section-title">
                  External Links
                </h2>

                <p>
                  Vino Pairings may include links to wineries, wine brands,
                  educational resources, payment services, or other third-party
                  websites.
                </p>

                <p className="mt-3">
                  When you follow a link to another website, that website may
                  collect information according to its own privacy practices.
                  Vino Pairings does not control the privacy practices of
                  third-party websites.
                </p>
              </section>

              {/* THIRD PARTY SERVICES */}
              <section>
                <h2 className="section-title">
                  Third-Party Services
                </h2>

                <p>
                  Vino Pairings relies on third-party technology providers to
                  operate certain parts of the website. These may include
                  services for website hosting, analytics, payment processing,
                  security, and interactive features.
                </p>

                <p className="mt-3">
                  These providers may process limited information as necessary
                  to provide their services and may have their own privacy
                  policies governing how they handle information.
                </p>
              </section>

              {/* DATA SHARING */}
              <section>
                <h2 className="section-title">
                  Sharing of Information
                </h2>

                <p>
                  Vino Pairings does not sell personal information in the
                  ordinary sense of exchanging personal information for money.
                </p>

                <p className="mt-3">
                  Information may be shared with service providers when
                  reasonably necessary to operate the website, process
                  transactions, provide interactive features, maintain security,
                  or comply with applicable legal obligations.
                </p>
              </section>

              {/* DATA SECURITY */}
              <section>
                <h2 className="section-title">
                  Data Security
                </h2>

                <p>
                  Reasonable efforts are made to use reputable service providers
                  and appropriate technical practices to protect the website and
                  information processed through it.
                </p>

                <p className="mt-3">
                  However, no website, online service, or method of electronic
                  transmission can guarantee absolute security.
                </p>
              </section>

              {/* CHOICES */}
              <section>
                <h2 className="section-title">
                  Your Choices
                </h2>

                <p>
                  You may control or limit certain cookies through your browser
                  settings. Your browser may also provide options for deleting
                  previously stored cookies or restricting certain tracking
                  technologies.
                </p>

                <p className="mt-3">
                  If a cookie or privacy preference tool is provided on Vino
                  Pairings, you may also use that tool to manage available
                  preferences.
                </p>

                <p className="mt-3">
                  Blocking certain technologies may affect how some website
                  features function.
                </p>
              </section>

              {/* CHILDREN */}
              <section>
                <h2 className="section-title">
                  Children&apos;s Privacy
                </h2>

                <p>
                  Vino Pairings is a wine-focused website intended for adults
                  and is not directed toward children.
                </p>

                <p className="mt-3">
                  Vino Pairings does not knowingly seek to collect personal
                  information from children through the website.
                </p>
              </section>

              {/* CHANGES */}
              <section>
                <h2 className="section-title">
                  Changes to This Policy
                </h2>

                <p>
                  This Privacy Policy may be updated periodically to reflect
                  changes in website functionality, technology providers,
                  business practices, or applicable requirements.
                </p>

                <p className="mt-3">
                  Updates will be posted on this page with a revised effective
                  date.
                </p>
              </section>

              {/* CONTACT */}
              <section>
                <h2 className="section-title">
                  Contact
                </h2>

                <p>
                  Questions about this Privacy Policy may be sent to{" "}
                  <a
                    href="mailto:hello@vinopairings.com"
                    className="font-medium text-[#6e2a2a] underline underline-offset-4 hover:text-[#8a3a3a]"
                  >
                    hello@vinopairings.com
                  </a>
                  .
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