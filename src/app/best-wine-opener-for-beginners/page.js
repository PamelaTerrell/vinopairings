// src/app/best-wine-opener-for-beginners/page.js

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title:
    "Best Wine Opener for Beginners | Wing, Waiter’s & Electric Corkscrews",
  description:
    "Learn which wine opener is best for beginners. Compare wing corkscrews, waiter’s corkscrews, and electric wine openers with an easy beginner-friendly guide.",
  alternates: {
    canonical: "/best-wine-opener-for-beginners",
  },
  openGraph: {
    title: "Best Wine Opener for Beginners | Vino Pairings",
    description:
      "Compare wing corkscrews, waiter’s corkscrews, and electric wine openers and find the easiest style for opening wine with confidence.",
    url: "https://vinopairings.com/best-wine-opener-for-beginners",
    siteName: "Vino Pairings",
    type: "article",
    images: [
      {
        url: "/beginner-wine-openers.png",
        width: 1024,
        height: 1536,
        alt: "Vino Pairings beginner wine opener guide comparing a wing corkscrew, waiter’s corkscrew, and electric opener",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wine Opener for Beginners | Vino Pairings",
    description:
      "A simple guide to wing corkscrews, waiter’s corkscrews, and electric wine openers.",
    images: ["/beginner-wine-openers.png"],
  },
};

const openerTypes = [
  {
    title: "Wing Corkscrew",
    bestFor: "Easiest starting point",
    description:
      "A familiar design with visible movement that makes the opening process easy to understand.",
  },
  {
    title: "Waiter’s Corkscrew",
    bestFor: "Best skill to learn",
    description:
      "Compact, classic, and versatile once you learn how to use the hinged lever.",
  },
  {
    title: "Electric Opener",
    bestFor: "Least physical effort",
    description:
      "A convenient choice for effortless opening, frequent entertaining, or anyone who prefers less twisting and pulling.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Wine Opener for Beginners",
  description:
    "A beginner-friendly guide comparing wing corkscrews, waiter’s corkscrews, and electric wine openers.",
  image: "https://vinopairings.com/beginner-wine-openers.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://vinopairings.com/best-wine-opener-for-beginners",
  },
  publisher: {
    "@type": "Organization",
    name: "Vino Pairings",
    url: "https://vinopairings.com",
  },
};

export default function BestWineOpenerPage() {
  return (
    <>
      <Script
        id="wine-opener-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>

      <article className="mx-auto max-w-5xl">
        {/* HERO */}
        <header className="pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a37c58]">
            Vino Pairings Guide
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-[#3b2f2f] md:text-5xl lg:text-6xl">
            Best Wine Opener for Beginners
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6f5d4f]">
            Opening wine should feel simple, elegant, and enjoyable — not
            intimidating. Here&apos;s how the most common wine opener styles
            compare and which one may be easiest when you&apos;re just getting
            started.
          </p>
        </header>

        {/* MAIN GUIDE IMAGE */}
        <figure className="mt-9">
          <div className="overflow-hidden rounded-[2rem] border border-[#e8dacd] bg-[#fffaf4] shadow-[0_18px_55px_rgba(74,55,40,0.08)]">
            <Image
              src="/beginner-wine-openers.png"
              alt="Illustrated Vino Pairings guide comparing a wing corkscrew, waiter’s corkscrew, and electric wine opener for beginners"
              width={1024}
              height={1536}
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 960px"
              className="h-auto w-full"
            />
          </div>

          <figcaption className="mx-auto mt-3 max-w-2xl text-center text-xs leading-5 text-[#8a7868]">
            A visual comparison of three common wine opener styles for
            beginners: wing corkscrew, waiter&apos;s corkscrew, and electric
            opener.
          </figcaption>
        </figure>

        {/* QUICK ANSWER */}
        <section className="mt-14 rounded-[2rem] border border-[#eadfd3] bg-[#fffaf4] p-6 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
            The Short Answer
          </p>

          <div className="mt-4 grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#3b2f2f]">
                A wing corkscrew is a comfortable place to start.
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-[#5b4a3d]">
                The mechanism is easy to see and understand. Twist the spiral
                into the cork, allow the wings to rise, then press them down to
                lift the cork from the bottle.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-[#5b4a3d]">
                Once that feels natural, learning a waiter&apos;s corkscrew is
                worthwhile because it is compact, versatile, and widely used.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadfd3] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a37c58]">
                Beginner Pick
              </p>

              <p className="mt-2 text-xl font-semibold text-[#3b2f2f]">
                Wing Corkscrew
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5b4a3d]">
                <li>✓ Easy to understand</li>
                <li>✓ Minimal technique</li>
                <li>✓ Familiar opening motion</li>
                <li>✓ Good for occasional wine drinkers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OPENER TYPES */}
        <section
          className="mt-14"
          aria-labelledby="wine-opener-types-heading"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
              Compare Your Options
            </p>

            <h2
              id="wine-opener-types-heading"
              className="mt-3 text-3xl font-semibold text-[#3b2f2f]"
            >
              Three beginner-friendly wine opener styles
            </h2>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {openerTypes.map((opener) => (
              <article
                key={opener.title}
                className="rounded-[1.5rem] border border-[#eadfd3] bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a37c58]">
                  {opener.bestFor}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[#3b2f2f]">
                  {opener.title}
                </h3>

                <p className="mt-3 leading-7 text-[#6f5d4f]">
                  {opener.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* BEGINNER GUIDE */}
        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-semibold text-[#3b2f2f]">
                What makes a wine opener beginner-friendly?
              </h2>

              <p className="mt-4 leading-8 text-[#5b4a3d]">
                A good beginner wine opener should be comfortable to grip,
                simple to position over the cork, and predictable while you use
                it. The best opener is ultimately the one whose movement feels
                natural to you.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#3b2f2f]">
                Is a waiter&apos;s corkscrew difficult to use?
              </h2>

              <p className="mt-4 leading-8 text-[#5b4a3d]">
                Not once you understand the leverage. A waiter&apos;s corkscrew
                typically combines a foil cutter, spiral, and hinged lever in a
                small tool. After a few bottles, the motion usually becomes
                quick and intuitive.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#3b2f2f]">
                Are electric wine openers easier?
              </h2>

              <p className="mt-4 leading-8 text-[#5b4a3d]">
                They can be. An electric opener performs most of the twisting
                and pulling for you, making it useful for frequent
                entertaining or for anyone who prefers to minimize hand
                effort.
              </p>

              <p className="mt-4 leading-8 text-[#5b4a3d]">
                The tradeoff is that electric models need batteries or
                charging and generally take up more room than a traditional
                corkscrew.
              </p>
            </div>
          </div>

          {/* QUICK COMPARISON */}
          <aside className="h-fit rounded-[2rem] border border-[#eadfd3] bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a37c58]">
              Quick Comparison
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3b2f2f]">
              Which opener should you choose?
            </h2>

            <div className="mt-7">
              <ComparisonRow
                label="Easiest to learn"
                value="Wing corkscrew"
              />

              <ComparisonRow
                label="Most compact"
                value="Waiter’s corkscrew"
              />

              <ComparisonRow
                label="Least physical effort"
                value="Electric opener"
              />

              <ComparisonRow
                label="Best skill to learn"
                value="Waiter’s corkscrew"
              />

              <ComparisonRow
                label="Best starting point"
                value="Wing corkscrew"
                last
              />
            </div>
          </aside>
        </section>

        {/* FINAL CTA */}
        <section className="mt-16 overflow-hidden rounded-[2rem] bg-[#3b2f2f]">
          <div className="p-7 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9b98f]">
              Ready to Open Your Next Bottle?
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">
              Start simple and enjoy the ritual.
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-white/80">
              You don&apos;t need a complicated wine tool to enjoy a bottle
              with confidence. Learn one opening method well, and the entire
              experience becomes easier.
            </p>

            <div className="mt-7">
              <Link
                href="/tips"
                className="inline-flex items-center justify-center rounded-full bg-[#f3eadf] px-6 py-3 text-sm font-semibold text-[#3b2f2f] transition hover:bg-white"
              >
                Explore Wine Tips
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* EDITORIAL NOTE */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-[#8a7868]">
          Vino Pairings provides educational wine guidance and approachable
          tips for enjoying wine with confidence.
        </p>
      </article>
    </>
  );
}

function ComparisonRow({ label, value, last = false }) {
  return (
    <div
      className={`grid grid-cols-[1fr_auto] gap-5 py-4 ${
        last ? "" : "border-b border-[#eadfd3]"
      }`}
    >
      <span className="text-sm leading-6 text-[#7a6859]">
        {label}
      </span>

      <span className="text-right text-sm font-semibold leading-6 text-[#3b2f2f]">
        {value}
      </span>
    </div>
  );
}