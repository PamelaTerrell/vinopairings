// src/app/best-corkscrews/page.js
import Link from "next/link";

export const metadata = {
  title: "Best Corkscrews for Wine Lovers | Vino Pairings",
  description:
    "A refined guide to the best corkscrews for beginners, wine lovers, dinner parties, gifting, and elegant home entertaining.",
  alternates: { canonical: "/best-corkscrews" },
  openGraph: {
    title: "Best Corkscrews for Wine Lovers | Vino Pairings",
    description:
      "A polished guide to choosing the best corkscrew for wine lovers, beginners, and home entertaining.",
    type: "article",
    url: "https://vinopairings.com/best-corkscrews",
  },
};

const amazonLink = "https://www.amazon.com/dp/B07YBVR46Y?tag=vinopairings-20";

const corkscrews = [
  {
    title: "Best Beginner Pick",
    name: "Beneno Premium Wing Corkscrew",
    description:
      "A familiar wing-style corkscrew with an easy motion: twist, lift, and press the wings down. It is a practical first choice for casual wine lovers.",
    bestFor: "Beginners, casual home use, and simple everyday bottles",
    href: amazonLink,
    button: "Check Price on Amazon",
  },
  {
    title: "Best Classic Style",
    name: "Waiter’s Corkscrew",
    description:
      "A compact, restaurant-style corkscrew that feels polished once you learn the technique. It is elegant, small, and easy to store.",
    bestFor: "Dinner parties, bar carts, and people who want a classic wine ritual",
    href: "/tips",
    button: "Learn the Technique",
  },
  {
    title: "Best Effortless Option",
    name: "Electric Wine Opener",
    description:
      "A helpful choice for anyone who wants less twisting and pulling. Electric openers can feel especially convenient for hosting or gifting.",
    bestFor: "Convenience, gifting, frequent entertaining, and easy opening",
    href: "/best-wine-opener-for-beginners",
    button: "View Beginner Guide",
  },
];

export default function BestCorkscrewsPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <header className="rounded-[2rem] border border-[#d8cfc4] bg-gradient-to-b from-[#fdfaf3] to-[#f7efe5] p-8 text-center shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.22em] text-[#8a7463]">
            Wine Tools
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2f241f] md:text-5xl [font-family:var(--font-playfair)]">
            Best Corkscrews for Wine Lovers
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-[#6b5645]">
            The right corkscrew makes opening wine feel smoother, cleaner, and
            more graceful. This refined guide helps you choose one for everyday
            bottles, hosting, gifting, and your first confident pour.
          </p>

          <p className="mt-4 text-sm text-[#8a7463]">
            By Pamela Terrell · Updated April 2026
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={amazonLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-[#a37c58] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              See Beginner Pick on Amazon
            </a>

            <Link
              href="/tips"
              className="inline-flex justify-center rounded-full border border-[#cdbba8] px-7 py-3 text-sm font-semibold text-[#4b3f2f] transition hover:bg-white"
            >
              Watch Corkscrew Tutorial
            </Link>
          </div>
        </header>

        {/* DISCLOSURE */}
        <p className="mt-6 rounded-2xl border border-[#eadfd3] bg-white px-5 py-4 text-xs leading-6 text-[#8a7463] shadow-sm">
          Disclosure: As an Amazon Associate, Vino Pairings earns from
          qualifying purchases. Product recommendations are selected
          independently.
        </p>

        {/* FEATURED PRODUCT */}
        <section className="mt-10 rounded-[2rem] border border-[#d8cfc4] bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-[#8a7463]">
            Featured Pick
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="flex min-h-[260px] items-center justify-center rounded-[1.5rem] border border-[#eadfd3] bg-[#fdfaf3] p-6">
              <div className="text-center">
                <p className="text-5xl">🍷</p>
                <p className="mt-3 text-sm text-[#8a7463]">
                  Beginner-Friendly Corkscrew
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
                Beneno Premium Wing Corkscrew
              </h2>

              <p className="mt-4 text-[17px] leading-8 text-[#6b5645]">
                For beginners and casual wine lovers, a wing corkscrew is one of
                the easiest styles to understand. The motion feels familiar, the
                leverage is helpful, and it makes a dependable first wine tool
                for the home.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Feature label="Best For" text="First-time wine drinkers" />
                <Feature label="Why It Works" text="Simple wing-style motion" />
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-7 text-[#6b5645]">
                <li>• Easy to understand for beginners</li>
                <li>• Helpful leverage when removing corks</li>
                <li>• Practical for kitchens, bar carts, and casual hosting</li>
                <li>• Affordable enough for a first wine tool</li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={amazonLink}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#a37c58] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Check Price on Amazon
                </a>

                <Link
                  href="/best-wine-opener-for-beginners"
                  className="inline-flex justify-center rounded-full border border-[#d8cfc4] px-7 py-3 text-sm font-semibold text-[#4b3f2f] transition hover:bg-[#fdfaf3]"
                >
                  View Beginner Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO LOOK FOR */}
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

        {/* PICKS */}
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

              <div className="mt-5">
                {item.href.startsWith("http") ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-flex rounded-full bg-[#6e2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a3a3a]"
                  >
                    {item.button}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full bg-[#6e2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a3a3a]"
                  >
                    {item.button}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* BUYER COPY */}
        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Which Corkscrew Should You Choose?
          </h2>

          <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#6b5645]">
            <p>
              Choose a <strong className="text-[#2f241f]">wing corkscrew</strong>{" "}
              if you want the easiest visual learning curve. It is familiar,
              affordable, and reassuring for beginners.
            </p>

            <p>
              Choose a{" "}
              <strong className="text-[#2f241f]">waiter’s corkscrew</strong> if
              you want the classic wine-service experience. It takes a little
              more practice, but it feels elegant and compact.
            </p>

            <p>
              Choose an{" "}
              <strong className="text-[#2f241f]">electric opener</strong> if you
              want convenience, effortless opening, or a polished gift for a wine
              lover.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-10 rounded-3xl border border-[#d8cfc4] bg-white p-7 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Learn the Technique
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
            A good corkscrew helps, but the technique matters too. Watch the
            simple tutorial for opening a bottle smoothly and confidently.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/tips"
              className="inline-flex justify-center rounded-full bg-[#6e2a2a] px-7 py-3 font-semibold text-white transition hover:bg-[#8a3a3a]"
            >
              Watch Corkscrew Tutorial
            </Link>

            <a
              href={amazonLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-[#d8cfc4] px-7 py-3 font-semibold text-[#4b3f2f] transition hover:bg-[#fdfaf3]"
            >
              Check Price on Amazon
            </a>
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