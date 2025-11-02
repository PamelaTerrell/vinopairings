// src/app/sunday/page.js
import Image from 'next/image';
import Link from 'next/link';

// ✅ Co-located, optimized images
import salmonImg from './assets/salmon.png';
import clueImg from './assets/clue.png';

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
  const imgClass =
    item.fit === 'contain'
      ? 'object-contain object-center p-2 sm:p-3 lg:p-4'
      : 'object-cover object-[50%_40%]';

  return (
    <article className="group bg-white border border-[#D8CFC4] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] bg-cream">
        <Image
          src={item.src}
          alt={item.alt || item.dish}
          fill
          placeholder="blur"
          className={imgClass}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority
          style={{ filter: 'saturate(1.1) contrast(1.06) brightness(1.02)' }}
        />

        <span className="absolute top-3 left-3 bg-burgundy text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {item.wine}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-heading font-bold text-charcoal">
          {item.dish}
        </h3>
        {item.date && <p className="text-xs opacity-70 mt-0.5">{item.date}</p>}
        {item.notes && <p className="text-sm mt-2 text-charcoal/90">{item.notes}</p>}

        {item.source && (
          <p className="mt-2 text-sm italic text-charcoal/70">{item.source}</p>
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
      src: clueImg,
      dish: 'CLUE: Wine Lovers Edition',
      wine: 'Cabernet Sauvignon',
      date: 'This Sunday',
      notes:
        'Tonight we’re pairing a game instead of a meal — the limited edition “CLUE: Wine Lovers Edition,” matched with a smooth Cabernet Sauvignon. This playful take on the classic mystery features delightful characters like Chef Chardonnay, Lady Rosé, Colonel Cabernet, Lord Malbec, Mayor Merlot, and Professor Prosecco — each bringing their own vintage flair to the board. Pour a glass and let the fun unfold.',
      alt: 'Clue Wine Lovers Edition board game beside a glass of Cabernet Sauvignon',
      source:
        'Found at World Market in Columbia, SC — an eclectic destination for gourmet finds, gifts, and wine accessories.',
      fit: 'contain',
      links: [{ label: 'Visit World Market', href: 'https://www.worldmarket.com/' }],
    },
    {
      src: salmonImg,
      dish: 'Griddle Cooked Salmon with Asparagus & Rice–Quinoa Blend',
      wine: 'GEN5 Pinot Noir',
      date: 'Last Sunday',
      notes:
        'Griddle-seared salmon with tender asparagus and a rice–quinoa blend. The pairing — a juicy, bright GEN5 Pinot Noir from Costco — balances beautifully with the buttery grains and crisp vegetables. Serve the wine slightly chilled (55–58°F) for an extra layer of freshness.',
      alt: 'Griddle cooked salmon with asparagus and a rice and quinoa blend plated for dinner',
      source: 'Ingredients and wine sourced from Costco.',
      links: [
        { label: 'Join Costco', href: 'https://www.costco.com/join-costco.html' },
        { label: 'Shop GEN5 Wines', href: 'https://www.costco.com/wine.html' },
        {
          label: 'Blackstone 36" Griddle',
          href:
            'https://www.costco.com/blackstone-36-in.-griddle-with-hinged-hood%2C-front-shelf-and-soft-cover.product.1713585.html',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
<section className="relative w-full bg-cream flex items-center justify-center">
  <div className="relative w-full h-[48vh] sm:h-[56vh] lg:h-[64vh] flex items-center justify-center">
    <Image
      src={clueImg}
      alt="CLUE Wine Lovers Edition board game and wine"
      fill
      priority
      placeholder="blur"
      className="object-contain p-2 sm:p-4 lg:p-6"
      sizes="100vw"
      style={{
        filter: 'saturate(1.15) contrast(1.05) brightness(1.03)',
        objectPosition: 'center',
      }}
    />
  </div>

  {/* ✅ Lowered caption with soft backdrop for clarity */}
  <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 bg-[#faf7f2]/80 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs sm:text-sm text-charcoal/90 text-center max-w-[90%]">
    Limited Edition CLUE for Wine Lovers — starring Chef Chardonnay, Lady Rosé,
    Colonel Cabernet, Lord Malbec, Mayor Merlot, and Professor Prosecco.
  </div>
</section>


      {/* TITLE + CTAs */}
      <section className="mx-auto max-w-5xl px-4 pt-8 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-heading font-bold">Sunday</h1>
        <p className="mt-3 text-lg md:text-xl opacity-90">
          This week: A mystery twist on wine pairing.
        </p>

        {/* 👇 New personal note */}
        <p className="mt-3 italic text-charcoal/80">
          No cooking tonight — just good company, a cozy dinner out, and a glass of red waiting for a round of CLUE: Wine Lovers Edition at home.
        </p>

        <p className="mt-3 text-base text-charcoal/80">
          The CLUE Wine Lovers Edition — where every pour holds a clue and each
          character brings their own flavor to the mystery.
        </p>

        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <CTA href="https://www.worldmarket.com/">Visit World Market</CTA>
        </div>

        <div className="mt-4 text-sm">
          <Link href="/" className="underline hover:text-burgundy">
            ← Back to Pairings
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
