// app/celestial-sips/page.js

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
    plum: '#5f3b63',
    indigo: '#3b4466',
    rose: '#9a5b6f',
    starlight: '#e8c78c',
  };

  const month = new Date().getUTCMonth();

  const season =
    month === 11 || month <= 1
      ? 'Winter'
      : month >= 2 && month <= 4
      ? 'Spring'
      : month >= 5 && month <= 7
      ? 'Summer'
      : 'Autumn';

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
        'Featured pairing: Dry Rosé with grilled vegetables — sun-warmed fruit and a cool breeze.',
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

  const signs = [
    ['Aries', '♈', 'Grenache', 'Vibrant spice and bright fruit — a spark that lights up conversation.'],
    ['Taurus', '♉', 'Merlot', 'Plush textures and calm pleasure — slow suppers, candlelight, devotion.'],
    ['Gemini', '♊', 'Prosecco', 'Airy curiosity — sparkling banter, grazing boards, easy delight.'],
    ['Cancer', '♋', 'Chardonnay', 'Silky and nurturing — butter, shellfish, and moonlit comfort.'],
    ['Leo', '♌', 'Cabernet Franc', 'Radiant and expressive — aroma-forward, generous, center stage.'],
    ['Virgo', '♍', 'Vermentino', 'Clean lines and grace — herbal notes meet quiet clarity.'],
    ['Libra', '♎', 'Pinot Noir', 'Poised and balanced — bright acidity meeting gentle tannin in harmony.'],
    ['Scorpio', '♏', 'Cabernet Sauvignon', 'Inky depth and focus — midnight fruit, dark chocolate, intensity.'],
    ['Sagittarius', '♐', 'Tempranillo', 'Open-road spirit — smoky grill notes, tapas, and lively stories.'],
    ['Capricorn', '♑', 'Left-Bank Bordeaux', 'Classic structure — cedar, cassis, and aged cheeses by the fire.'],
    ['Aquarius', '♒', 'Albariño', 'Bright, unconventional, sea-kissed — citrus lift and saline snap.'],
    ['Pisces', '♓', 'Riesling (off-dry)', 'Tender and luminous — spice-friendly, a gentle, lingering finish.'],
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(900px 600px at 18% 8%, rgba(154,91,111,0.16), transparent 60%),
          radial-gradient(850px 550px at 88% 12%, rgba(232,199,140,0.20), transparent 60%),
          radial-gradient(900px 650px at 50% 110%, rgba(59,68,102,0.14), transparent 60%),
          linear-gradient(180deg, ${brand.cream} 0%, ${brand.parchment} 55%, #f6efe4 100%)
        `,
        color: brand.cocoa,
      }}
    >
      <div className="celestial-atmosphere" aria-hidden="true" />

      <main id="top" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        {/* HERO */}
        <section
          className="relative overflow-hidden rounded-[28px] border text-center shadow-[0_20px_60px_rgba(75,63,47,0.12)]"
          style={{
            borderColor: brand.line,
            background: `
              linear-gradient(180deg, rgba(253,250,243,0.84), rgba(249,246,239,0.92)),
              radial-gradient(circle at 20% 20%, rgba(154,91,111,0.16), transparent 35%),
              radial-gradient(circle at 80% 18%, rgba(232,199,140,0.18), transparent 32%),
              radial-gradient(circle at 50% 75%, rgba(59,68,102,0.14), transparent 38%)
            `,
          }}
        >
          <div className="celestial-sky" aria-hidden="true" />
          <div className="celestial-nebula" aria-hidden="true" />
          <div className="celestial-bg" aria-hidden="true" />

          <svg
            aria-hidden="true"
            className="absolute inset-0 z-[4] h-full w-full opacity-20"
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
          >
            <circle cx="180" cy="120" r="2" fill="white" />
            <circle cx="240" cy="150" r="2" fill="white" />
            <circle cx="305" cy="98" r="2" fill="white" />
            <line x1="180" y1="120" x2="240" y2="150" stroke="white" strokeWidth="0.7" />
            <line x1="240" y1="150" x2="305" y2="98" stroke="white" strokeWidth="0.7" />

            <circle cx="910" cy="110" r="2" fill="white" />
            <circle cx="965" cy="145" r="2" fill="white" />
            <circle cx="1035" cy="120" r="2" fill="white" />
            <line x1="910" y1="110" x2="965" y2="145" stroke="white" strokeWidth="0.7" />
            <line x1="965" y1="145" x2="1035" y2="120" stroke="white" strokeWidth="0.7" />
          </svg>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
            <div
              className="shooting-star"
              style={{ top: '68%', left: '8%', animationDelay: '1.8s', animationDuration: '3.6s' }}
            />
            <div
              className="shooting-star"
              style={{ top: '32%', left: '62%', animationDelay: '6.2s', animationDuration: '3.3s' }}
            />
            <div
              className="shooting-star"
              style={{ top: '22%', left: '28%', animationDelay: '10.5s', animationDuration: '4.1s' }}
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(30,34,68,0.18) 0%, rgba(30,34,68,0.02) 32%, rgba(249,246,239,0.12) 100%)',
            }}
          />

          <div className="relative z-20 px-8 py-12 md:px-14 md:py-16">
            <div
              className="absolute inset-0 z-0 rounded-[28px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(75,63,47,0.08) 0%, rgba(249,246,239,0.86) 72%)',
                backdropFilter: 'blur(5px)',
              }}
            />

            <div className="relative z-10">
              <p
                className="text-sm uppercase tracking-[0.28em]"
                style={{ color: brand.gold }}
              >
                A Zodiac Wine Journal
              </p>

              <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-wide shimmer-text [font-family:var(--font-playfair)]">
                Celestial Sips
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5c4a33]">
                Inspired by the night sky, this collection blends the poetry of the
                stars with the sensory world of food and wine. Each glass becomes a
                reflection of rhythm, mood, and connection.
              </p>
            </div>
          </div>
        </section>

        <div className="cosmic-divider" />

        {/* CURRENT SKY */}
        <section
          className={`relative overflow-hidden rounded-[28px] border p-8 shadow-[0_14px_40px_rgba(75,63,47,0.08)] ${
            season === 'Autumn' ? 'autumn-vibe' : ''
          }`}
          style={{
            borderColor: brand.line,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.84), rgba(253,250,243,0.95))',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `
                radial-gradient(820px 420px at 94% -10%, rgba(232,199,140,0.22), transparent 60%),
                radial-gradient(620px 360px at 8% 110%, rgba(154,91,111,0.14), transparent 60%),
                radial-gradient(500px 260px at 50% 0%, rgba(59,68,102,0.10), transparent 50%)
              `,
            }}
          />

          <h2
            className="text-center text-3xl font-semibold tracking-wide [font-family:var(--font-playfair)]"
            style={{
              background: `linear-gradient(90deg, ${brand.gold}, ${brand.starlight}, ${brand.rose})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Under the Current Sky —{' '}
            <span style={{ WebkitTextFillColor: brand.cocoa }}>{season}</span>
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-lg leading-8 text-[#5a4636]">{seasonCopy.lead}</p>
              <p className="mt-4 italic text-[#7a5f59]">{seasonCopy.feature}</p>
            </div>

            <aside
              className="rounded-2xl border p-5 shadow-sm"
              style={{
                borderColor: brand.line,
                background:
                  'linear-gradient(180deg, rgba(253,250,243,0.96), rgba(255,255,255,0.92))',
              }}
            >
              <p className="font-semibold" style={{ color: brand.rose }}>
                Notes for the table
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[#5d4a3b]">
                {seasonCopy.notes.map((n) => (
                  <li key={n}>• {n}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <div className="cosmic-divider" />

        {/* ZODIAC GALLERY */}
        <section className="grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {signs.map(([name, symbol, wine, note]) => (
            <div
              key={name}
              data-sign={name}
              className="zodiac-card group relative overflow-hidden rounded-[26px] border p-7 text-center transition-all duration-300"
              style={{
                borderColor: brand.line,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(253,247,239,0.96))',
              }}
            >
              {/* hover halo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(232,199,140,0.18), transparent 45%), radial-gradient(circle at 80% 100%, rgba(154,91,111,0.12), transparent 38%)',
                }}
              />

              {/* inner wine-label border trick */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 rounded-[20px] border opacity-60"
                style={{ borderColor: 'rgba(163,124,88,0.22)' }}
              />

              {/* tiny top flourish */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-4 h-px w-16 -translate-x-1/2"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(163,124,88,0.55), transparent)',
                }}
              />

              <div className="relative z-10">
                <p
                  className="mb-2 text-3xl"
                  style={{
                    color: brand.gold,
                    textShadow: '0 0 8px rgba(232,199,140,0.35)',
                  }}
                  aria-hidden="true"
                >
                  {symbol}
                </p>

                <h3 className="mt-2 text-2xl font-semibold [font-family:var(--font-playfair)]">
                  {name}
                </h3>

                <p className="mt-2 font-semibold" style={{ color: brand.rose }}>
                  {wine}
                </p>

                <p className="mt-4 text-sm leading-8 text-[#5d4a3b] opacity-95">
                  {note}
                </p>
              </div>
            </div>
          ))}
        </section>

        <div className="cosmic-divider" />

        {/* FOOTER CTA */}
        <section
          className="rounded-[28px] border p-8 text-center shadow-[0_12px_30px_rgba(75,63,47,0.08)]"
          style={{
            borderColor: brand.line,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(253,250,243,0.94))',
          }}
        >
          <h3 className="text-2xl font-semibold tracking-wide [font-family:var(--font-playfair)]">
            Taste the Sky with Vino Pairings
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-[#5b4738]">
            Discover how the beauty of the stars meets the flavor of the vine.
            Continue the story on{' '}
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
    </div>
  );
}