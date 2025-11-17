// src/app/sunday/page.js
import Image from 'next/image';
import Link from 'next/link';

// ✅ Co-located, optimized images
import salmonImg from './assets/salmon.png';
import clueImg from './assets/clue.png';
import turkeyImg from './assets/turkeysandwich.png'; // ← correct filename
import whiteshellsImg from './assets/whiteshells.png'; // ← NEW

function CTA({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-white font-semibold hover:brightness-95 transition shadow-sm"
    >
      {children}
    </a>
  );
}

function MealCard({ item }) {
  return (
    <article className="group bg-white border border-[#D8CFC4] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image container */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/2] xl:aspect-[16/10] bg-cream overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt || item.dish}
          fill
          placeholder="blur"
          priority
          sizes="(min-width:1536px) 22vw, (min-width:1280px) 28vw, (min-width:1024px) 31vw, (min-width:640px) 45vw, 100vw"
          className="object-contain object-center w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
          style={{
            filter: 'saturate(1.1) contrast(1.06) brightness(1.02)',
          }}
        />

        <span className="absolute top-3 left-3 bg-burgundy text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {item.wine}
        </span>
      </div>

      {/* Text section */}
      <div className="p-4">
        <h3 className="text-lg font-heading font-bold text-charcoal">
          {item.dish}
        </h3>
        {item.date && <p className="text-xs opacity-70 mt-0.5">{item.date}</p>}
        {item.notes && (
          <p className="text-sm mt-2 text-charcoal/90">{item.notes}</p>
        )}
        {item.source && (
          <p className="mt-2 text-sm italic text-charcoal/70">
            {item.source}
          </p>
        )}
        {item.links?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.links.map((l, i) => (
              <CTA key={i} href={l.href}>
                {l.label}
              </CTA>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export const metadata = {
  title: 'Sunday • VinoPairings',
  description: 'Homemade meals and inspired pairings — wine, food, and fun.',
};

export default function SundayPage() {
  const gallery = [
    {
      src: turkeyImg,
      dish: 'Turkey Sandwich on the Lake (Subway)',
      wine: 'Bogle Sauvignon Blanc',
      date: 'Sunday, November 9, 2025',
      notes:
        'A relaxed Sunday cruise on a Bentley pontoon — crisp Bogle Sauvignon Blanc alongside a classic Subway turkey sandwich. Bright citrus and herb notes in the wine cut through the savory turkey, while the lake breeze does the rest.',
      alt:
        'Turkey sandwich from Subway with a glass of Sauvignon Blanc and a Bogle bottle on a Bentley pontoon boat at the lake.',
      links: [
        { label: 'Bogle Sauvignon Blanc', href: 'https://www.boglewinery.com/' },
        { label: 'Subway Menu', href: 'https://www.subway.com/' },
        { label: 'Bentley Pontoons', href: 'https://www.bentleypontoons.com/' },
      ],
    },
    {
      src: whiteshellsImg,
      dish: 'White Cheddar Shells with Zucchini & Bacon-Wrapped Filet',
      wine: 'Frontera Cabernet Sauvignon–Merlot',
      date: 'This Sunday',
      notes:
        'A cozy triple-market dinner: creamy white cheddar shells from Aldi, pan-seared zucchini, and a bacon-wrapped chuck tender filet from Lidl. Paired with Frontera Cabernet Sauvignon–Merlot from Sam’s Club — a smooth, fruit-forward blend with enough structure to stand up to the richness of the bacon and steak.',
      alt:
        'Creamy white cheddar pasta shells with pan-seared zucchini and a bacon-wrapped chuck tender filet, paired with a glass of Frontera Cabernet Sauvignon Merlot.',
      links: [
        { label: 'Aldi', href: 'https://www.aldi.us/' },
        { label: 'Lidl', href: 'https://www.lidl.com/' },
        { label: 'Frontera Wines at Sam’s Club', href: 'https://www.samsclub.com/' },
      ],
    },
    {
      src: clueImg,
      dish: 'CLUE: Wine Lovers Edition',
      wine: 'Cabernet Sauvignon',
      date: 'This Sunday',
      notes:
        'Tonight we’re pairing a game instead of a meal — the limited edition “CLUE: Wine Lovers Edition,” matched with a smooth Cabernet Sauvignon. This playful take on the classic mystery features delightful characters like Chef Chardonnay, Lady Rosé, Colonel Cabernet, Lord Malbec, Mayor Merlot, and Professor Prosecco — each bringing their own vintage flair to the board.',
      alt: 'Clue Wine Lovers Edition board game beside a glass of Cabernet Sauvignon',
      source:
        'Found at World Market in Columbia, SC — an eclectic destination for gourmet finds, gifts, and wine accessories.',
      links: [{ label: 'Visit World Market', href: 'https://www.worldmarket.com/' }],
    },
    {
      src: salmonImg,
      dish: 'Griddle Cooked Salmon with Asparagus & Rice–Quinoa Blend',
      wine: 'GEN5 Pinot Noir',
      date: 'Last Sunday',
      notes:
        'Griddle-seared salmon with tender asparagus and a rice–quinoa blend. The pairing — a juicy, bright GEN5 Pinot Noir from Costco — balances beautifully with the buttery grains and crisp vegetables. Serve the wine slightly chilled (55–58°F) for an extra layer of freshness.',
      alt:
        'Griddle cooked salmon with asparagus and a rice and quinoa blend plated for dinner',
      source: 'Ingredients and wine sourced from Costco.',
      links: [
        { label: 'Join Costco', href: 'https://www.costco.com/join-costco.html' },
        { label: 'Shop GEN5 Wines', href: 'https://www.costco.com/wine.html' },
        {
          label: 'Blackstone 36\" Griddle',
          href:
            'https://www.costco.com/blackstone-36-in.-griddle-with-hinged-hood%2C-front-shelf-and-soft-cover.product.1713585.html',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
      <section className="relative w-full bg-cream flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full flex items-center justify-center">
          <Image
            src={turkeyImg}
            alt="Bogle Sauvignon Blanc and a Subway turkey sandwich on a Bentley pontoon at the lake"
            className="w-full h-auto max-h-[64vh] object-contain"
            priority
            placeholder="blur"
            style={{
              filter: 'saturate(1.15) contrast(1.05) brightness(1.03)',
              objectPosition: 'center',
            }}
            sizes="100vw"
          />
        </div>

        <div className="mt-3 text-center text-xs sm:text-sm text-charcoal/90 max-w-[90%] leading-snug">
          Sunday on the water — Bogle Sauvignon Blanc + a classic Subway turkey sandwich aboard a Bentley pontoon.
        </div>
      </section>

      {/* TITLE + CTAs */}
      <section className="mx-auto max-w-5xl px-4 pt-8 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-heading font-bold">Sunday</h1>
        <p className="mt-3 text-lg md:text-xl opacity-90">
          This week: Lake vibes — simple food, bright wine, perfect views.
        </p>

        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <CTA href="https://www.boglewinery.com/">Bogle Winery</CTA>
          <CTA href="https://www.subway.com/">Subway</CTA>
          <CTA href="https://www.bentleypontoons.com/">Bentley Pontoons</CTA>
        </div>

        <div className="mt-4 text-sm">
          <Link href="/" className="underline hover:text-burgundy">
            ← Back to Pairings
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-screen-2xl px-4 pb-20">
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {gallery.map((item, i) => (
            <MealCard key={i} item={item} />
          ))}

          <div className="flex items-center justify-center bg-[#FDF7EF] border-2 border-dashed border-[#D8CFC4] rounded-xl p-8 text-center text-charcoal/80 shadow-sm hover:shadow-md transition">
            <div>
              <span className="text-5xl block mb-3">📸</span>
              <p className="font-heading text-lg font-semibold mb-1">
                More Sundays Coming Soon
              </p>
              <p className="text-sm italic">
                Check back for new meals, pairings, and inspirations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
