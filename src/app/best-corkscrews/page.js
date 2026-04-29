// src/app/best-corkscrews/page.js
import Link from "next/link";

export const metadata = {
  title: "Best Corkscrews for Wine Lovers | Vino Pairings",
  description:
    "A refined guide to choosing the best corkscrew for everyday wine opening, dinner parties, gifting, and elegant home entertaining.",
  alternates: { canonical: "/best-corkscrews" },
  openGraph: {
    title: "Best Corkscrews for Wine Lovers | Vino Pairings",
    description:
      "A simple, elegant guide to choosing a corkscrew for wine lovers and home entertaining.",
    type: "article",
    url: "https://vinopairings.com/best-corkscrews",
  },
};

const corkscrews = [
  {
    title: "Best Overall",
    name: "Classic Waiter’s Corkscrew",
    description:
      "A timeless choice for most wine lovers. Compact, elegant, and reliable once you learn the simple technique.",
    bestFor: "Everyday wine opening and dinner parties",
  },
  {
    title: "Best for Beginners",
    name: "Wing Corkscrew",
    description:
      "Easy to understand and comfortable for people who want a little more leverage when removing the cork.",
    bestFor: "New wine drinkers and casual home use",
  },
  {
    title: "Best Electric Option",
    name: "Electric Wine Opener",
    description:
      "A helpful option for anyone who wants effortless opening with minimal twisting or pulling.",
    bestFor: "Convenience, gifting, and frequent entertaining",
  },
  {
    title: "Best Gift Choice",
    name: "Premium Wine Opener Set",
    description:
      "A polished set with a corkscrew, foil cutter, stopper, or pourer can make a thoughtful wine-lover gift.",
    bestFor: "Birthdays, holidays, housewarming gifts",
  },
];

export default function BestCorkscrewsPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-[#8a7463]">
            Wine Tools
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2f241f] md:text-5xl [font-family:var(--font-playfair)]">
            Best Corkscrews for Wine Lovers
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-[#6b5645]">
            The right corkscrew makes opening wine feel smoother, cleaner, and
            more graceful. Here is a simple guide to choosing one for everyday
            use, entertaining, or gifting.
          </p>

          <p className="mt-4 text-sm text-[#8a7463]">
            By Pamela Terrell · Updated April 2026
          </p>
        </header>

        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            What to Look For in a Good Corkscrew
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Comfortable grip",
              "Smooth spiral",
              "Sturdy hinge or leverage",
              "Built-in foil cutter",
              "Durable metal construction",
              "Easy storage",
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

        <section className="mt-10 grid gap-6">
          {corkscrews.map((item) => (
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

        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Our Current Recommendation
          </h2>

          <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
            For most wine lovers, a classic waiter’s corkscrew is the best place
            to start. It is elegant, compact, affordable, and useful for both
            everyday bottles and special occasions.
          </p>

          <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
            Once Vino Pairings begins adding shopping links, this guide may be
            updated with selected product recommendations.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-white p-7 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Learn the Technique
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
            A good corkscrew helps, but the technique matters too. Watch the
            simple tutorial for opening a bottle smoothly and confidently.
          </p>

          <div className="mt-6">
            <Link
              href="/tips"
              className="inline-block rounded-full bg-[#6e2a2a] px-7 py-3 font-semibold text-white transition hover:bg-[#8a3a3a]"
            >
              Watch Corkscrew Tutorial →
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs leading-6 text-[#8a7463]">
          Disclosure: Product recommendations are selected independently. Vino
          Pairings may participate in affiliate programs in the future.
        </p>
      </section>
    </main>
  );
}