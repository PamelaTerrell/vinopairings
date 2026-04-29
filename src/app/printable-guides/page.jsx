// src/app/printable-guides/page.js
import Image from "next/image";

const GUIDES = [
  {
    slug: "wine-glass-guide",
    title: "Wine Glass Guide",
    priceLabel: "$9 Printable Download",
    paymentLink: "https://buy.stripe.com/00w3cvckEccr7qDava0gw02",
    previewImage: "/wine-glass-guide-preview.png",
    description:
      "A simple, elegant guide to help you choose the right glass for each wine style.",
    accent: "gold",
    previewNote:
      "Premium printable download is delivered after purchase.",
  },
  {
    slug: "sweet-dry-wines-guide",
    title: "Sweet vs. Dry Wines Guide",
    priceLabel: "$9 Printable Download",
    paymentLink: "https://buy.stripe.com/dRmfZh2K40tJdP19r60gw04",
    previewImage: "/dry-vs-sweet-preview.png",
    description:
      "A beautifully designed guide to help you quickly understand sweet red, dry red, sweet white, and dry white wines.",
    accent: "burgundy",
    previewNote:
      "Premium printable download is delivered after purchase.",
  },
  {
    slug: "wine-pairing-basics-guide",
    title: "Wine Pairing Basics Guide",
    priceLabel: "$9 Printable Download",
    paymentLink: "https://buy.stripe.com/fZubJ13O80tJcKXbze0gw05",
    previewImage: "/wine-pairing-basics-guide.png",
    description:
      "A visual guide showing classic wine styles and the foods they pair best with.",
    accent: "gold",
    previewNote:
      "Premium printable download is delivered after purchase.",
  },
  {
    slug: "wine-guide-bundle",
    title: "Wine Guide Bundle",
    priceLabel: "$19 Bundle Download",
    paymentLink: "https://buy.stripe.com/7sYcN584o1xN8uHdHm0gw06",
    previewImage: "/wine-bundle.png",
    description:
      "Save with the complete wine guide collection. Includes the Wine Glass Guide, Sweet vs. Dry Wines Guide, and Wine Pairing Basics Guide.",
    accent: "burgundy",
    previewNote:
      "Best value — download all three premium printable wine guides after purchase.",
    isBundle: true,
  },
];

export const metadata = {
  title: "Printable Wine Guides | Vino Pairings",
  description:
    "Shop printable wine guides from Vino Pairings, including beginner-friendly downloads for wine glasses, sweet vs. dry wines, wine pairing basics, and wine gift inspiration.",
  alternates: { canonical: "/printable-guides" },
  openGraph: {
    title: "Printable Wine Guides | Vino Pairings",
    description:
      "Beautiful printable wine guides designed to help you sip with confidence and elevate everyday wine moments.",
    type: "website",
    url: "https://vinopairings.com/printable-guides",
  },
};

export default function PrintableGuidesPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-5xl px-4 py-14">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7B1E3F]">
            Vino Pairings
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl [font-family:var(--font-playfair)]">
            Printable Wine Guides
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6b5b4b] md:text-lg">
            Beautiful, beginner-friendly wine printables designed to help you
            sip with confidence, understand wine more easily, and elevate your
            next meal.
          </p>

          <p className="mt-4 text-sm text-[#7a6b57]">
            🍷 Instant digital downloads — perfect for kitchens, wine bars,
            gifts, and entertaining.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
        </header>

        <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {GUIDES.map((guide) => {
            const buttonClass =
              guide.accent === "burgundy"
                ? "bg-[#7B1E3F] text-white hover:bg-[#8a2a4d]"
                : "bg-[#C59B5F] text-white hover:brightness-95";

            const badgeClass =
              guide.accent === "burgundy"
                ? "bg-[#7B1E3F]/10 text-[#7B1E3F] border border-[#7B1E3F]/20"
                : "bg-[#C59B5F]/10 text-[#7B1E3F] border border-[#C59B5F]/20";

            return (
              <article
                key={guide.slug}
                className={`overflow-hidden rounded-3xl border border-[#D8CFC4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  guide.isBundle ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`grid gap-0 ${
                    guide.isBundle ? "md:grid-cols-2" : ""
                  }`}
                >
                  <div className="relative w-full bg-[#FDF7EF]">
                    <Image
                      src={guide.previewImage}
                      alt={`${guide.title} preview`}
                      width={1400}
                      height={1800}
                      className="h-auto w-full"
                      sizes={
                        guide.isBundle
                          ? "(min-width: 1024px) 40vw, 100vw"
                          : "(min-width: 1024px) 50vw, 100vw"
                      }
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 text-center">
                    <div className="flex justify-center">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
                      >
                        {guide.isBundle
                          ? "Best Value Bundle"
                          : "Printable Download"}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
                      {guide.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#6b5b4b] md:text-base">
                      {guide.description}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-[#7a6b57]">
                      {guide.previewNote}
                    </p>

                    <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-[#7B1E3F]">
                      {guide.priceLabel}
                    </p>

                    <a
                      href={guide.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-5 inline-block rounded-full px-7 py-3 text-sm font-semibold transition ${buttonClass}`}
                    >
                      {guide.isBundle ? "Get the Bundle" : "Get the Printable"}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#D8CFC4] bg-[#FDF7EF] p-7 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            After Purchase
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6b5b4b] md:text-base">
            After checkout, you’ll be redirected to a download page for your
            printable guide. Please save the file for personal use.
          </p>

          <p className="mt-4 text-sm text-[#6b5b4b]">
            Need help? Email{" "}
            <a
              href="mailto:hello@vinopairings.com"
              className="font-medium text-[#6e2a2a] underline underline-offset-4 hover:text-[#8a3a3a]"
            >
              hello@vinopairings.com
            </a>
            .
          </p>
        </section>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#7a6b57]">
          Digital products are intended for personal use only. Please do not
          redistribute, resell, or share the downloadable files.
        </p>
      </section>
    </main>
  );
}