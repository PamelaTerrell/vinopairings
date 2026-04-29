// src/app/wine-gifts-under-50/page.js
import Link from "next/link";

export const metadata = {
  title: "Best Wine Gifts Under $50 | Vino Pairings",
  description:
    "Thoughtful wine gift ideas under $50 including elegant accessories, entertaining essentials, and practical gifts for wine lovers.",
  alternates: { canonical: "/wine-gifts-under-50" },
  openGraph: {
    title: "Best Wine Gifts Under $50 | Vino Pairings",
    description:
      "Elegant and practical wine gift ideas under $50 for birthdays, holidays, hosts, and everyday celebrations.",
    type: "article",
    url: "https://vinopairings.com/wine-gifts-under-50",
  },
};

const gifts = [
  {
    title: "Best Overall Gift",
    name: "Classic Corkscrew Gift Set",
    description:
      "A timeless gift that feels useful, refined, and easy to enjoy. Great for new wine lovers and seasoned hosts alike.",
    bestFor: "Birthdays, housewarmings, and everyday gifting",
  },
  {
    title: "Best for Entertaining",
    name: "Cheese Board & Serving Set",
    description:
      "A beautiful serving board creates instant occasion and pairs naturally with wine nights and gatherings.",
    bestFor: "Hosts, couples, dinner parties",
  },
  {
    title: "Best Practical Gift",
    name: "Insulated Wine Tumbler Set",
    description:
      "Perfect for patios, lake days, picnics, and relaxed evenings outdoors.",
    bestFor: "Outdoor lovers and casual entertainers",
  },
  {
    title: "Best Elegant Choice",
    name: "Universal Wine Glass Set",
    description:
      "A stylish set of versatile wine glasses can elevate everyday pours and special dinners.",
    bestFor: "New homeowners, newlyweds, stylish gifting",
  },
  {
    title: "Best Small Gift",
    name: "Wine Stopper & Pourer Set",
    description:
      "Affordable, practical, and easy to pair with a bottle of wine for a complete gift.",
    bestFor: "Host gifts, thank-you gifts, stocking stuffers",
  },
];

export default function WineGiftsUnder50Page() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-4xl px-6 py-14">
        {/* Header */}
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-[#8a7463]">
            Gift Guide
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2f241f] md:text-5xl [font-family:var(--font-playfair)]">
            Best Wine Gifts Under $50
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-[#6b5645]">
            Thoughtful wine gifts do not need to be expensive. These ideas feel
            elegant, useful, and memorable—perfect for birthdays, hosts,
            holidays, and everyday celebrations.
          </p>

          <p className="mt-4 text-sm text-[#8a7463]">
            By Pamela Terrell · Updated April 2026
          </p>
        </header>

        {/* Intro */}
        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            What Makes a Great Wine Gift?
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Useful in real life",
              "Feels elevated and thoughtful",
              "Easy to enjoy immediately",
              "Pairs naturally with gatherings",
              "Looks beautiful when given",
              "Affordable without feeling cheap",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#eee2d6] bg-white px-5 py-4 text-[#6b5645]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Gift Cards */}
        <section className="mt-10 grid gap-6">
          {gifts.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#d8cfc4] bg-white p-7 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a7463]">
                {item.title}
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
                {item.name}
              </h2>

              <p className="mt-3 text-[17px] leading-8 text-[#6b5645]">
                {item.description}
              </p>

              <p className="mt-4 rounded-2xl bg-[#fdf7ef] px-5 py-4 text-sm text-[#6b5645]">
                <strong className="text-[#2f241f]">Best for:</strong>{" "}
                {item.bestFor}
              </p>
            </article>
          ))}
        </section>

        {/* Recommendation */}
        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Our Current Recommendation
          </h2>

          <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
            If you are unsure what to choose, start with a classic corkscrew set
            or universal wine glasses. Both feel premium, practical, and widely
            appreciated.
          </p>

          <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
            As Vino Pairings grows, this guide may be updated with selected
            product recommendations and shopping links.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-white p-7 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Explore More Wine Essentials
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
            Continue building your wine experience with helpful guides for
            corkscrews, glassware, and pairings.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/best-corkscrews"
              className="inline-block rounded-full bg-[#6e2a2a] px-7 py-3 font-semibold text-white transition hover:bg-[#8a3a3a]"
            >
              Corkscrew Guide →
            </Link>

            <Link
              href="/best-wine-glasses"
              className="inline-block rounded-full border border-[#d8cfc4] bg-[#fdfaf3] px-7 py-3 font-semibold text-[#6e2a2a] transition hover:bg-[#f3eadf]"
            >
              Wine Glass Guide →
            </Link>
          </div>
        </section>

        {/* Disclosure */}
        <p className="mt-8 text-xs leading-6 text-[#8a7463]">
          Disclosure: Product recommendations are selected independently. Vino
          Pairings may participate in affiliate programs in the future.
        </p>
      </section>
    </main>
  );
}