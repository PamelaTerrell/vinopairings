// src/app/best-corkscrews/page.js

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Corkscrews for Wine Lovers | Vino Pairings",
  description:
    "A refined guide to choosing the best corkscrew for beginners, wine lovers, dinner parties, and elegant home entertaining.",
  alternates: {
    canonical: "/best-corkscrews",
  },
  openGraph: {
    title: "Best Corkscrews for Wine Lovers | Vino Pairings",
    description:
      "Compare wing corkscrews, waiter’s corkscrews, and electric wine openers and find the style that best fits the way you enjoy wine.",
    type: "article",
    url: "https://vinopairings.com/best-corkscrews",
    siteName: "Vino Pairings",
    images: [
      {
        url: "/best-corkscrews-guide.png",
        width: 1024,
        height: 1536,
        alt: "Vino Pairings guide comparing wing corkscrews, waiter’s corkscrews, and electric wine openers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Corkscrews for Wine Lovers | Vino Pairings",
    description:
      "A polished guide to wing corkscrews, waiter’s corkscrews, and electric wine openers.",
    images: ["/best-corkscrews-guide.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Corkscrews for Wine Lovers",
  description:
    "A guide to choosing between wing corkscrews, waiter’s corkscrews, and electric wine openers.",
  image: "https://vinopairings.com/best-corkscrews-guide.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://vinopairings.com/best-corkscrews",
  },
  publisher: {
    "@type": "Organization",
    name: "Vino Pairings",
    url: "https://vinopairings.com",
  },
};

const openerTypes = [
  {
    title: "Wing Corkscrew",
    bestFor: "Best for beginners",
    text: "A familiar design with visible movement and helpful leverage. It is easy to understand and reassuring for first-time wine drinkers.",
  },
  {
    title: "Waiter’s Corkscrew",
    bestFor: "Best classic style",
    text: "Compact, elegant, and versatile. It takes a little practice, but it is one of the most useful corkscrews to learn.",
  },
  {
    title: "Electric Opener",
    bestFor: "Best effortless option",
    text: "A convenient choice for frequent entertaining or anyone who prefers less twisting and pulling.",
  },
];

const qualities = [
  "Comfortable grip",
  "Smooth spiral",
  "Sturdy hinge or leverage",
  "Built-in foil cutter",
  "Durable construction",
  "Easy storage",
];

export default function BestCorkscrewsPage() {
  return (
    <>
      <Script
        id="best-corkscrews-schema"
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

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-[#2f241f] md:text-5xl lg:text-6xl">
            Best Corkscrews for Wine Lovers
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6b5645]">
            The right corkscrew can make opening wine feel smoother, easier,
            and more enjoyable. This guide compares the most useful opener
            styles so you can choose one that fits the way you enjoy wine at
            home.
          </p>
        </header>

        {/* MAIN INFOGRAPHIC */}
        <figure className="mt-9">
          <div className="overflow-hidden rounded-[2rem] border border-[#eadfd3] bg-[#fffaf4] shadow-[0_18px_55px_rgba(74,55,40,0.08)]">
            <Image
              src="/best-corkscrews-guide.png"
              alt="Illustrated Vino Pairings guide comparing a wing corkscrew, waiter’s corkscrew, and electric opener"
              width={1024}
              height={1536}
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 960px"
              className="h-auto w-full"
            />
          </div>

          <figcaption className="mx-auto mt-3 max-w-2xl text-center text-xs leading-5 text-[#8a7463]">
            A visual guide to three common wine-opening styles: wing
            corkscrew, waiter&apos;s corkscrew, and electric opener.
          </figcaption>
        </figure>

        {/* SHORT ANSWER */}
        <section className="mt-14 rounded-[2rem] border border-[#d8cfc4] bg-[#fdfaf3] p-6 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
            A Good Place to Start
          </p>

          <div className="mt-4 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#2f241f]">
                A wing corkscrew is one of the easiest styles to learn.
              </h2>

              <p className="mt-4 leading-8 text-[#6b5645]">
                Its movement is easy to see: twist the spiral into the cork,
                let the wings rise, then press them down to lift the cork from
                the bottle.
              </p>

              <p className="mt-4 leading-8 text-[#6b5645]">
                Once you feel comfortable, a waiter&apos;s corkscrew is a useful
                next skill because it is compact, elegant, and easy to store.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadfd3] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a37c58]">
                Beginner-Friendly
              </p>

              <p className="mt-2 text-xl font-semibold text-[#2f241f]">
                Wing Corkscrew
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6b5645]">
                <li>✓ Easy to understand</li>
                <li>✓ Helpful leverage</li>
                <li>✓ Requires little practice</li>
                <li>✓ Practical for casual hosting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OPENER TYPES */}
        <section className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
            Compare the Styles
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#2f241f]">
            Which corkscrew fits you best?
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {openerTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#d8cfc4] bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a37c58]">
                  {item.bestFor}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[#2f241f]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#6b5645]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* WHAT TO LOOK FOR */}
        <section className="mt-14 rounded-[2rem] border border-[#d8cfc4] bg-[#fdfaf3] p-6 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
            What to Look For
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#2f241f]">
            Features that make a corkscrew easier to use
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {qualities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#eadfd3] bg-white px-5 py-4 text-[#6b5645]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CHOOSING GUIDE */}
        <section className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-semibold text-[#2f241f]">
                Choose a wing corkscrew if...
              </h2>

              <p className="mt-4 leading-8 text-[#6b5645]">
                You want the easiest visual learning curve and appreciate a
                tool that makes the opening process obvious while you use it.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#2f241f]">
                Choose a waiter&apos;s corkscrew if...
              </h2>

              <p className="mt-4 leading-8 text-[#6b5645]">
                You want a compact, classic opener and are willing to learn a
                simple lever technique. It is especially useful for dinner
                parties, travel, and small bar carts.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#2f241f]">
                Choose an electric opener if...
              </h2>

              <p className="mt-4 leading-8 text-[#6b5645]">
                Convenience matters most to you or you prefer to minimize
                twisting and pulling. Electric openers can also be useful when
                opening several bottles while entertaining.
              </p>
            </div>
          </div>

          {/* QUICK SUMMARY */}
          <aside className="h-fit rounded-[2rem] border border-[#d8cfc4] bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a37c58]">
              Quick Comparison
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2f241f]">
              At a glance
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
        <section className="mt-16 rounded-[2rem] bg-[#3b2f2f] p-7 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9b98f]">
            Learn the Technique
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">
            A little practice makes every bottle easier.
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-white/80">
            Learn how to position the corkscrew, use leverage, and remove a
            cork smoothly without making the experience feel complicated.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tips"
              className="inline-flex justify-center rounded-full bg-[#f3eadf] px-6 py-3 text-sm font-semibold text-[#3b2f2f] transition hover:bg-white"
            >
              Explore Wine Tips
            </Link>

            <Link
              href="/best-wine-opener-for-beginners"
              className="inline-flex justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Beginner Opener Guide
            </Link>
          </div>
        </section>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-[#8a7463]">
          Vino Pairings provides approachable wine guidance for everyday
          enjoyment, entertaining, and learning.
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
      <span className="text-sm leading-6 text-[#8a7463]">
        {label}
      </span>

      <span className="text-right text-sm font-semibold leading-6 text-[#2f241f]">
        {value}
      </span>
    </div>
  );
}