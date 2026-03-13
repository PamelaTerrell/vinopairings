import Image from 'next/image';

const GUIDES = [
  {
    slug: 'wine-glass-guide',
    title: 'Wine Glass Guide',
    priceLabel: '$9 Printable Download',
    paymentLink: 'https://buy.stripe.com/00w3cvckEccr7qDava0gw02',
    previewImage: '/wine-glass-guide-preview.png',
    description:
      'A simple, elegant guide to help you choose the right glass for each wine style.',
    accent: 'gold',
    previewNote: 'Elegant printable guide for choosing the right wine glass.',
  },
  {
    slug: 'sweet-dry-wines-guide',
    title: 'Sweet vs. Dry Wines Guide',
    priceLabel: '$9 Printable Download',
    paymentLink: 'https://buy.stripe.com/dRmfZh2K40tJdP19r60gw04',
    previewImage: '/dry-vs-sweet-preview.png',
    description:
      'A beautifully designed guide to help you quickly understand sweet red, dry red, sweet white, and dry white wines.',
    accent: 'burgundy',
    previewNote:
      'Preview shown with watermark or reduced quality — premium printable download is delivered after purchase.',
  },

  {
  slug: 'wine-pairing-basics-guide',
  title: 'Wine Pairing Basics Guide',
  priceLabel: '$9 Printable Download',
  paymentLink: 'https://buy.stripe.com/fZubJ13O80tJcKXbze0gw05',
  previewImage: '/wine-pairing-basics-preview.png',
  description:
    'A beautifully designed visual guide showing classic wine styles and the foods they pair best with.',
  accent: 'gold',
  previewNote:
    'Preview shown with watermark — premium printable download is delivered after purchase.',
},

];

export const metadata = {
  title: 'Printable Wine Guides | Vino Pairings',
  description:
    'Shop printable wine guides from Vino Pairings, including elegant downloads for wine basics, sweetness levels, and more.',
};

export default function PrintableGuidesPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal px-4 py-10">
      <section className="max-w-5xl mx-auto text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[#7B1E3F] font-semibold">
          Vino Pairings
        </p>

        <h1 className="mt-2 text-3xl md:text-5xl font-heading font-extrabold">
          Printable Wine Guides
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-700">
          Beautiful, beginner-friendly wine printables designed to help you sip
          with confidence, understand wine more easily, and elevate your next meal.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {GUIDES.map((guide) => {
          const buttonClass =
            guide.accent === 'burgundy'
              ? 'bg-[#7B1E3F] text-white'
              : 'bg-[#C59B5F] text-white';

          const badgeClass =
            guide.accent === 'burgundy'
              ? 'bg-[#7B1E3F]/10 text-[#7B1E3F] border border-[#7B1E3F]/20'
              : 'bg-[#C59B5F]/10 text-[#7B1E3F] border border-[#C59B5F]/20';

          return (
            <article
              key={guide.slug}
              className="bg-white border border-[#D8CFC4] shadow-md rounded-2xl overflow-hidden"
            >
              <div className="relative w-full bg-[#FDF7EF]">
                <Image
                  src={guide.previewImage}
                  alt={`${guide.title} preview`}
                  width={1400}
                  height={1800}
                  className="w-full h-auto"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              <div className="p-6 text-center">
                <div className="flex justify-center">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}
                  >
                    Printable Download
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-heading font-bold">
                  {guide.title}
                </h2>

                <p className="mt-3 text-sm md:text-base text-gray-700">
                  {guide.description}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  {guide.previewNote}
                </p>

                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#7B1E3F]">
                  {guide.priceLabel}
                </p>

                <a
                  href={guide.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-5 font-semibold py-2.5 px-6 rounded hover:brightness-95 transition ${buttonClass}`}
                >
                  Get the Printable
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}