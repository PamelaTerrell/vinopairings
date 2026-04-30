// src/app/wine-gifts-under-50/page.js
import Link from "next/link";

export const metadata = {
  title: "Best Wine Gifts Under $50 | Elegant Ideas for Wine Lovers | Vino Pairings",
  description:
    "Elegant wine gifts under $50 including a marble wine chiller, corkscrews, glassware, serving pieces, and thoughtful entertaining essentials.",
  alternates: { canonical: "/wine-gifts-under-50" },
  openGraph: {
    title: "Best Wine Gifts Under $50 | Vino Pairings",
    description:
      "A refined gift guide for wine lovers, hosts, housewarmings, birthdays, and elegant entertaining.",
    type: "article",
    url: "https://vinopairings.com/wine-gifts-under-50",
  },
};

const marbleWineChillerLink =
  "https://www.amazon.com/Gusto-Nostro-01-Marble-Chiller/dp/B0B21D16DX?tag=vinopairings-20&linkCode=ll2";

const gifts = [
  {
    title: "Best Overall Gift",
    name: "Marble Wine Chiller",
    description:
      "A polished table piece that helps keep white wine, rosé, or sparkling bottles beautifully cool while adding instant elegance to the setting.",
    bestFor: "Hostess gifts, housewarmings, birthdays, and dinner party hosts",
    href: marbleWineChillerLink,
    button: "View Gift on Amazon",
  },
  {
    title: "Best Beginner Gift",
    name: "Classic Corkscrew Gift Set",
    description:
      "A timeless wine gift that feels useful, refined, and approachable for both new wine lovers and casual hosts.",
    bestFor: "Birthdays, housewarmings, and everyday gifting",
    href: "/best-corkscrews",
    button: "View Corkscrew Guide",
  },
  {
  title: "Best for Entertaining",
  name: "Cheese Board & Serving Set",
  description:
    "A beautiful cheese board set creates instant occasion and pairs naturally with wine nights, gatherings, and thoughtful hosting.",
  bestFor: "Hosts, couples, dinner parties",
  href: "https://amzn.to/4w82fVp",
  button: "View Gift on Amazon",
},
  {
    title: "Best Practical Gift",
    name: "Insulated Wine Tumbler Set",
    description:
      "A relaxed, useful gift for patios, lake days, picnics, and outdoor evenings where glassware is not ideal.",
    bestFor: "Outdoor lovers and casual entertainers",
  },
  {
    title: "Best Elegant Choice",
    name: "Universal Wine Glass Set",
    description:
      "A versatile glass set can elevate everyday pours, dinner parties, and newly stocked kitchens.",
    bestFor: "New homeowners, newlyweds, stylish gifting",
    href: "/best-wine-glasses",
    button: "View Wine Glass Guide",
  },
  {
    title: "Best Small Gift",
    name: "Wine Stopper & Pourer Set",
    description:
      "Affordable, practical, and easy to pair with a bottle of wine for a complete host or thank-you gift.",
    bestFor: "Host gifts, thank-you gifts, stocking stuffers",
  },
];

export default function WineGiftsUnder50Page() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-6xl px-6 py-14">
        {/* HERO */}
        <header className="relative overflow-hidden rounded-[2.25rem] border border-[#d8cfc4] bg-[#fdfaf3] p-8 text-center shadow-sm md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#efe0cf,transparent_35%),radial-gradient(circle_at_bottom_right,#f4e8dc,transparent_35%)]" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7463]">
              Vino Pairings Gift Guide
            </p>

            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[#2f241f] md:text-6xl [font-family:var(--font-playfair)]">
              Best Wine Gifts Under $50
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-8 text-[#6b5645]">
              Thoughtful wine gifts do not need to feel ordinary. These elegant,
              useful, and memorable ideas are perfect for hosts, birthdays,
              housewarmings, holidays, and everyday celebrations.
            </p>

            <p className="mt-5 text-sm text-[#8a7463]">
              By Pamela Terrell · Updated April 2026
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={marbleWineChillerLink}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-[#a37c58] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                View Featured Gift
              </a>

              <Link
                href="/best-corkscrews"
                className="inline-flex justify-center rounded-full border border-[#cdbba8] bg-white/60 px-7 py-3 text-sm font-semibold text-[#4b3f2f] transition hover:bg-white"
              >
                Explore Wine Tools
              </Link>
            </div>
          </div>
        </header>

        {/* DISCLOSURE */}
        <p className="mt-6 rounded-2xl border border-[#eadfd3] bg-white px-5 py-4 text-xs leading-6 text-[#8a7463] shadow-sm">
          Disclosure: As an Amazon Associate, Vino Pairings earns from
          qualifying purchases. Product recommendations are selected
          independently.
        </p>

        {/* FEATURED PICK */}
        <section className="mt-10 rounded-[2rem] border border-[#d8cfc4] bg-white p-7 shadow-sm md:p-10">
          <div className="grid gap-9 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#eadfd3] bg-[#fdfaf3] p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#efe0cf,transparent_45%)]" />

              <div className="relative z-10 flex min-h-[290px] items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl">🥂</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#8a7463]">
                    Featured Gift Pick
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
                    Elegant Entertaining Essential
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#8a7463]">
                Best Overall Gift
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] md:text-4xl [font-family:var(--font-playfair)]">
                Marble Wine Chiller
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-[#6b5645]">
                A marble wine chiller feels more luxurious than its price point.
                It looks beautiful on the table, helps keep chilled bottles
                ready to pour, and makes a tasteful gift for hosts, wine lovers,
                and anyone who enjoys elegant entertaining.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Feature label="Perfect For" text="Hostess gifts" />
                <Feature label="Best Moment" text="Dinner parties" />
              </div>

              <p className="mt-5 rounded-2xl bg-[#fdf7ef] px-5 py-4 text-sm leading-7 text-[#6b5645]">
                <strong className="text-[#2f241f]">Why it works:</strong>{" "}
                It is decorative, practical, and easy to gift without needing to
                know the recipient’s favorite wine style.
              </p>

              <a
                href={marbleWineChillerLink}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-[#a37c58] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                View Gift on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* WHAT MAKES GREAT GIFT */}
        <section className="mt-10 rounded-[2rem] border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm md:p-9">
          <h2 className="text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
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
                className="rounded-2xl border border-[#eee2d6] bg-white px-5 py-4 text-sm leading-7 text-[#6b5645]"
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
              className="rounded-[1.75rem] border border-[#d8cfc4] bg-white p-7 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a7463]">
                {item.title}
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
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
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="inline-flex rounded-full bg-[#6e2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a3a3a]"
                    >
                      {item.button || "View Gift on Amazon"}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex rounded-full bg-[#6e2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a3a3a]"
                    >
                      {item.button || "View Related Guide"}
                    </Link>
                  )}
                </div>
              ) : null}
            </article>
          ))}
        </section>

        {/* RECOMMENDATION */}
        <section className="mt-10 rounded-[2rem] border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm md:p-9">
          <p className="text-sm uppercase tracking-[0.22em] text-[#8a7463]">
            Our Recommendation
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            When in doubt, choose something beautiful and useful.
          </h2>

          <p className="mt-5 max-w-3xl text-[17px] leading-8 text-[#6b5645]">
            The marble wine chiller is a strong first choice because it feels
            thoughtful, decorative, and practical. It does not require the
            recipient to be a wine expert — it simply makes the table feel more
            polished.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-[2rem] border border-[#d8cfc4] bg-[#2f241f] p-8 text-center text-white shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[#d9b98f]">
            Continue Exploring
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold [font-family:var(--font-playfair)]">
            Build a more elegant wine experience, one small detail at a time.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-white/75">
            Explore tools, glassware, tutorials, and pairing ideas designed to
            make wine feel approachable and special.
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
              Corkscrew Tutorial
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
  );
}

function Feature({ label, text }) {
  return (
    <div className="rounded-2xl border border-[#eadfd3] bg-[#fdfaf3] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8a7463]">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-[#2f241f]">{text}</p>
    </div>
  );
}