// src/app/wine-gifts-under-50/page.js

import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Wine Gifts Under $50 | Elegant Ideas for Wine Lovers",
  description:
    "Elegant wine gift ideas under $50, including wine chillers, cheese boards, corkscrews, glassware, tumblers, and thoughtful entertaining essentials.",
  alternates: {
    canonical: "/wine-gifts-under-50",
  },
  openGraph: {
    title: "Best Wine Gifts Under $50 | Vino Pairings",
    description:
      "A refined wine gift guide for hosts, birthdays, housewarmings, holidays, and elegant entertaining.",
    type: "article",
    url: "https://vinopairings.com/wine-gifts-under-50",
    siteName: "Vino Pairings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wine Gifts Under $50 | Vino Pairings",
    description:
      "Elegant and practical wine gift ideas for hosts, birthdays, housewarmings, and celebrations.",
  },
};

const gifts = [
  {
    title: "Best Overall Gift",
    name: "Marble Wine Chiller",
    description:
      "A polished table piece that helps keep white wine, rosé, or sparkling bottles beautifully cool while adding instant elegance to the setting.",
    bestFor:
      "Host gifts, housewarmings, birthdays, and dinner party hosts",
    accent: "Luxury Table Moment",
  },
  {
    title: "Best for Entertaining",
    name: "Cheese Board & Serving Set",
    description:
      "A beautiful cheese board creates instant occasion and pairs naturally with wine nights, gatherings, and thoughtful hosting.",
    bestFor:
      "Hosts, couples, dinner parties, and housewarmings",
    accent: "Host Favorite",
  },
  {
    title: "Best Beginner Gift",
    name: "Classic Corkscrew Gift Set",
    description:
      "A timeless wine gift that feels useful, refined, and approachable for both new wine lovers and casual hosts.",
    bestFor:
      "Birthdays, housewarmings, and everyday gifting",
    href: "/best-corkscrews",
    button: "View Corkscrew Guide",
    accent: "Practical Classic",
  },
  {
    title: "Best Practical Gift",
    name: "Insulated Wine Tumbler Set",
    description:
      "A relaxed, useful gift for patios, lake days, picnics, and outdoor evenings where traditional glassware is not ideal.",
    bestFor:
      "Outdoor lovers and casual entertainers",
    accent: "Casual Luxury",
  },
  {
    title: "Best Elegant Choice",
    name: "Universal Wine Glass Set",
    description:
      "A versatile glass set can elevate everyday pours, dinner parties, and newly stocked kitchens.",
    bestFor:
      "New homeowners, newlyweds, and stylish gifting",
    href: "/best-wine-glasses",
    button: "View Wine Glass Guide",
    accent: "Everyday Refinement",
  },
  {
    title: "Best Small Gift",
    name: "Wine Stopper & Pourer Set",
    description:
      "Affordable, practical, and easy to pair with a bottle of wine for a complete host or thank-you gift.",
    bestFor:
      "Host gifts, thank-you gifts, and stocking stuffers",
    accent: "Small But Thoughtful",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Wine Gifts Under $50",
  description:
    "A refined guide to affordable wine gifts for hosts, birthdays, housewarmings, holidays, and entertaining.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://vinopairings.com/wine-gifts-under-50",
  },
  publisher: {
    "@type": "Organization",
    name: "Vino Pairings",
    url: "https://vinopairings.com",
  },
};

export default function WineGiftsUnder50Page() {
  return (
    <>
      <Script
        id="wine-gifts-under-50-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>

      <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* HERO */}
          <header className="relative overflow-hidden rounded-[2.5rem] border border-[#d8cfc4] bg-[#fdfaf3] p-8 text-center shadow-sm md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ead8c2,transparent_32%),radial-gradient(circle_at_bottom_right,#f1e5d7,transparent_36%)]" />
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b99775] to-transparent" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.34em] text-[#8a7463]">
                Vino Pairings Gift Guide
              </p>

              <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[#2f241f] md:text-6xl [font-family:var(--font-playfair)]">
                Best Wine Gifts Under $50
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-8 text-[#6b5645]">
                Thoughtful wine gifts do not need to feel ordinary. These
                elegant, useful, and memorable ideas are perfect for hosts,
                birthdays, housewarmings, holidays, and everyday celebrations.
              </p>

              <p className="mt-5 text-sm text-[#8a7463]">
                By Pamela Terrell · Updated August 2026
              </p>
            </div>
          </header>

          {/* FEATURED DUO */}
          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <FeaturedGift
              eyebrow="Best Overall Gift"
              title="Marble Wine Chiller"
              icon="🥂"
              description="A marble wine chiller feels more luxurious than its price point. It looks beautiful on the table, helps keep chilled bottles ready to pour, and makes a tasteful gift for hosts and wine lovers."
              note="Decorative, practical, and easy to gift without needing to know the recipient’s favorite wine style."
            />

            <FeaturedGift
              eyebrow="Best for Entertaining"
              title="Cheese Board & Serving Set"
              icon="🧀"
              description="A cheese board set turns a simple bottle of wine into a full hosting moment. It feels generous, useful, and ready for gatherings, date nights, housewarmings, and relaxed evenings with friends."
              note="Perfect when you want a gift that feels complete rather than like an accessory added at the last minute."
            />
          </section>

          {/* WHAT MAKES GREAT GIFT */}
          <section className="mt-10 rounded-[2rem] border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm md:p-9">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8a7463]">
              The Vino Pairings Standard
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
              What Makes a Wine Gift Feel Special?
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Looks beautiful when given",
                "Feels elevated but useful",
                "Pairs naturally with hosting",
                "Works for many wine lovers",
                "Easy to enjoy immediately",
                "Affordable without feeling cheap",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#eee2d6] bg-white px-5 py-4 text-sm leading-7 text-[#6b5645] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* GIFT CARDS */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            {gifts.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.85rem] border border-[#d8cfc4] bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#8a7463]">
                  {item.title}
                </p>

                <p className="mt-3 inline-flex rounded-full border border-[#eadfd3] bg-[#fdf7ef] px-4 py-2 text-xs font-medium text-[#8a633f]">
                  {item.accent}
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
                  {item.name}
                </h2>

                <p className="mt-3 text-[16px] leading-8 text-[#6b5645]">
                  {item.description}
                </p>

                <p className="mt-4 rounded-2xl bg-[#fdf7ef] px-5 py-4 text-sm leading-7 text-[#6b5645]">
                  <strong className="text-[#2f241f]">Best for:</strong>{" "}
                  {item.bestFor}
                </p>

                {item.href ? (
                  <div className="mt-5">
                    <Link
                      href={item.href}
                      className="inline-flex rounded-full bg-[#6e2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a3a3a]"
                    >
                      {item.button || "View Related Guide"}
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
          </section>

          {/* RECOMMENDATION */}
          <section className="mt-10 rounded-[2rem] border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a7463]">
                Our Recommendation
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] md:text-4xl [font-family:var(--font-playfair)]">
                When in doubt, choose something beautiful and useful.
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-[#6b5645]">
                A marble wine chiller and cheese board are strong choices
                because they feel thoughtful, decorative, and practical.
                Neither requires the recipient to be a wine expert — they
                simply make the table feel more polished.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-10 rounded-[2.25rem] border border-[#d8cfc4] bg-[#2f241f] p-8 text-center text-white shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.26em] text-[#d9b98f]">
              Continue Exploring
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold md:text-4xl [font-family:var(--font-playfair)]">
              Build a more elegant wine experience, one small detail at a time.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-white/75">
              Explore tools, glassware, tutorials, and pairing ideas designed
              to make wine feel approachable, refined, and special.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/best-corkscrews"
                className="inline-flex rounded-full bg-[#a37c58] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Corkscrew Guide
              </Link>

              <Link
                href="/tips"
                className="inline-flex rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Wine Tips
              </Link>

              <Link
                href="/best-wine-glasses"
                className="inline-flex rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Wine Glass Guide
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function FeaturedGift({ eyebrow, title, icon, description, note }) {
  return (
    <article className="rounded-[2rem] border border-[#d8cfc4] bg-white p-7 shadow-sm md:p-9">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#eadfd3] bg-[#fdfaf3] p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#efe0cf,transparent_45%)]" />

        <div className="relative z-10 flex min-h-[220px] items-center justify-center">
          <div className="text-center">
            <p className="text-6xl">{icon}</p>

            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#8a7463]">
              {eyebrow}
            </p>

            <p className="mt-2 text-lg font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
              {title}
            </p>
          </div>
        </div>
      </div>

      <h2 className="mt-6 text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
        {title}
      </h2>

      <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
        {description}
      </p>

      <p className="mt-5 rounded-2xl bg-[#fdf7ef] px-5 py-4 text-sm leading-7 text-[#6b5645]">
        <strong className="text-[#2f241f]">Why it works:</strong> {note}
      </p>
    </article>
  );
}