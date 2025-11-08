// app/celestial-sips/page.js
import Image from 'next/image';

export const metadata = {
  title: 'Celestial Sips • Vino Pairings',
  description:
    'Elegant wine reflections guided by the stars — poetic pairings that connect mood, season, and sky.',
};

export default function CelestialSipsPage() {
  const brand = {
    cream: '#f9f6ef',
    parchment: '#fdfaf3',
    cocoa: '#4b3f2f',
    gold: '#a37c58',
    line: '#d8cfc4',
    burgundy: '#6e2a2a',
    night: '#151423',
  };

  // --- Simple, static-friendly seasonal mapping (no client JS needed)
  const month = new Date().getUTCMonth(); // 0-11
  const season =
    month === 11 || month <= 1 ? 'Winter' :
    month >= 2 && month <= 4 ? 'Spring' :
    month >= 5 && month <= 7 ? 'Summer' :
    'Autumn';

  const seasonCopy = {
    Winter: {
      lead:
        'As nights draw in and the air stills, we crave warmth, resonance, and the kind of depth that lingers.',
      feature:
        'Featured pairing: Syrah with braised short ribs and rosemary — dark fruit, pepper, and candlelight.',
      notes: ['Savory reds', 'Slow braises', 'Fireside conversation'],
    },
    Spring: {
      lead:
        'Light returns and the table brightens. Freshness, lift, and herbs guide the glass and the gathering.',
      feature:
        'Featured pairing: Sauvignon Blanc with herbed salmon — citrus, garden greens, easy laughter.',
      notes: ['Crisp whites', 'Young greens', 'Lemon & dill'],
    },
    Summer: {
      lead:
        'Long evenings, open windows, and bowls of ripe produce. Texture softens; the wine turns playful.',
      feature:
        'Featured pairing: Dry Rosé with grilled vegetables — sun–warmed fruit and a cool breeze.',
      notes: ['Rosé & spritz', 'Chilled reds', 'Stone fruit & smoke'],
    },
    Autumn: {
      lead:
        'Harvest hues, a quieter pace, and flavors that lean earthy and wise. Depth without weight.',
      feature:
        'Featured pairing: Pinot Noir with roast poultry & mushrooms — silk, forest, and a gentle glow.',
      notes: ['Mushroom & thyme', 'Silky reds', 'Roast suppers'],
    },
  }[season];

  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.cream, color: brand.cocoa }}>
      <main className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        {/* HERO */}
        <section
          className="relative overflow-hidden rounded-2xl border shadow-md text-center"
          style={{ backgroundColor: brand.parchment, borderColor: brand.line }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-64"
            style={{
              background:
                'linear-gradient(180deg, rgba(21,20,35,0.45), rgba(21,20,35,0.0))',
            }}
          />
          <div className="relative p-8 md:p-14">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide">
              Celestial <span style={{ color: brand.gold }}>Sips</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#7a6b57] leading-relaxed">
              Inspired by the night sky — this collection blends the poetry of the stars
              with the sensory world of food and wine. Each glass becomes a reflection of
              rhythm, balance, and connection.
            </p>
          </div>

          {/* Subtle gold “constellation” accent */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 opacity-30"
            width="120"
            height="80"
            viewBox="0 0 120 80"
          >
            <g fill="none" stroke={brand.gold} strokeWidth="1">
              <circle cx="10" cy="10" r="1.2" />
              <circle cx="38" cy="18" r="1.2" />
              <circle cx="64" cy="8" r="1.2" />
              <circle cx="92" cy="22" r="1.2" />
              <circle cx="108" cy="12" r="1.2" />
              <path d="M10 10 L38 18 L64 8 L92 22 L108 12" />
            </g>
          </svg>
        </section>

        {/* CURRENT SKY — text-only, season-aware */}
        <section
          className="mt-14 rounded-2xl border p-8 shadow-sm relative overflow-hidden"
          style={{ backgroundColor: '#fff', borderColor: brand.line }}
        >
          {/* Decorative, image-free star wash */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(800px 400px at 90% -10%, rgba(163,124,88,0.18), transparent 60%), radial-gradient(600px 380px at 10% 110%, rgba(110,42,42,0.12), transparent 60%)',
            }}
          />
          <h2 className="text-3xl font-serif font-bold tracking-wide text-center">
            Under the Current Sky — <span style={{ color: brand.gold }}>{season}</span>
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">{seasonCopy.lead}</p>
              <p className="mt-4 italic text-[#7a6b57]">{seasonCopy.feature}</p>
            </div>
            <aside
              className="rounded-xl border p-5 bg-[#fdfaf3] shadow-sm"
              style={{ borderColor: brand.line }}
            >
              <p className="font-semibold">Notes for the table</p>
              <ul className="mt-2 space-y-1 text-sm opacity-90">
                {seasonCopy.notes.map((n) => (
                  <li key={n}>• {n}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* STAR PAIRINGS GALLERY */}
        <section className="mt-14 grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {[
            { sign: 'Aries',  wine: 'Grenache',        note: 'Vibrant and bold — a spark that lights up conversation.' },
            { sign: 'Taurus', wine: 'Merlot',          note: 'Grounded pleasure — a sip of comfort and devotion.' },
            { sign: 'Gemini', wine: 'Prosecco',        note: 'Airy curiosity — bubbles of laughter and story.' },
            { sign: 'Cancer', wine: 'Chardonnay',      note: 'Soft and reflective — moonlit dinners and tender hearts.' },
            { sign: 'Leo',    wine: 'Cabernet Franc',  note: 'Radiant and expressive — golden evenings of warmth.' },
            { sign: 'Virgo',  wine: 'Vermentino',      note: 'Clean lines and grace — herbal notes meet quiet clarity.' },
          ].map(({ sign, wine, note }) => (
            <article
              key={sign}
              className="rounded-2xl border bg-white p-6 text-center shadow-sm"
              style={{ borderColor: brand.line }}
            >
              <h3 className="text-xl font-serif font-bold text-[#a37c58]">{sign}</h3>
              <p className="mt-1 font-semibold">{wine}</p>
              <p className="mt-2 text-sm leading-relaxed opacity-85">{note}</p>
            </article>
          ))}
        </section>

        {/* JOURNAL / NOTES */}
        <section
          className="mt-16 rounded-2xl border p-8 shadow-sm"
          style={{ backgroundColor: brand.parchment, borderColor: brand.line }}
        >
          <h2 className="text-3xl font-serif font-bold tracking-wide text-center">
            Celestial Notes
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
            Each season carries a dialogue between sky and soil — between what we crave and what the
            world offers. Here, you’ll find reflections that link light and taste: slow evenings,
            candle flickers, and the quiet unfolding of the glass.
          </p>
          <div className="mt-6 text-center">
            <a
              href="/contact"
              className="underline decoration-dotted underline-offset-4 hover:opacity-90"
              style={{ color: brand.gold }}
            >
              Share your own celestial moment →
            </a>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section
          className="mt-16 rounded-2xl border p-8 text-center shadow-sm"
          style={{ borderColor: brand.line, background: '#fff' }}
        >
          <h3 className="text-2xl font-serif font-bold tracking-wide">
            Taste the Sky with Vino Pairings
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-lg">
            Discover how the beauty of the stars meets the flavor of the vine. Continue the
            story on{' '}
            <a
              href="https://cosmiczodiacastrology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted underline-offset-4 hover:opacity-90"
              style={{ color: brand.gold }}
            >
              Cosmic Zodiac Astrology ↗
            </a>
            .
          </p>
        </section>
      </main>

      {/* Lightweight GA4 event */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              try {
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'view_celestial_sips_expanded', {
                    page_location: window.location.href,
                    page_title: document.title || 'Celestial Sips',
                    season: '${season}'
                  });
                }
              } catch(e) {}
            })();
          `,
        }}
      />
    </div>
  );
}
