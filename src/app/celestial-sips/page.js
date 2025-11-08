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
    night: '#151423',
  };

  // Season-aware copy (UTC month keeps it static-friendly)
  const month = new Date().getUTCMonth(); // 0-11
  const season =
    month === 11 || month <= 1 ? 'Winter'
    : month >= 2 && month <= 4 ? 'Spring'
    : month >= 5 && month <= 7 ? 'Summer'
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

  // All 12 signs (slug, headline wine, gallery note, essay)
  const signs = [
    ['aries',       'Aries',       'Grenache',            'Vibrant spice and bright fruit — a spark that lights up conversation.',
      'Spark, warmth, motion. Aries brings the first flame: playful spice, red fruit, and a pace that keeps stories flowing. Grenache mirrors that energy — easy to love, generous with aromatics, and just enough pepper to lean into grilled and charred edges. Pair with tapas, roasted peppers, and lively company.'
    ],
    ['taurus',      'Taurus',      'Merlot',              'Plush textures and calm pleasure — slow suppers, candlelight, devotion.',
      'Pleasure with patience. Taurus favors silk over flash: ripe plum, cocoa, and a steady tempo at the table. Merlot’s velvety curve meets slow-cooked meals, buttered mushrooms, and conversations that stretch. Serve slightly cool for poise; let the evening move without hurry.'
    ],
    ['gemini',      'Gemini',      'Prosecco',            'Airy curiosity — sparkling banter, grazing boards, easy delight.',
      'Gemini is the breeze: questions, laughter, a tray of little things. Prosecco answers with bright lift and nimble fruit — perfect for grazing boards, citrus-dressed salads, and moments that bounce. Keep a second bottle chilled; the best ideas arrive mid-sparkle.'
    ],
    ['cancer',      'Cancer',      'Chardonnay',          'Silky and nurturing — butter, shellfish, and moonlit comfort.',
      'Quiet glow, warm plates, gentle care. Cancer invites softness — baked shellfish, butter, and candlelight. Chardonnay, thoughtfully oaked or purely mineral, carries the mood with generosity. Choose the style to match the evening: lean for sea mist; lush for hearth.'
    ],
    ['leo',         'Leo',         'Cabernet Franc',      'Radiant and expressive — aroma-forward, generous, center stage.',
      'Golden hour charisma. Leo thrives where the room leans toward warmth and applause. Cabernet Franc brings perfume and poise — violets, redcurrant, a subtle green line. It flatters grilled lamb, rosemary, charred leeks, and the sparkle of being seen.'
    ],
    ['virgo',       'Virgo',       'Vermentino',          'Clean lines and grace — herbal notes meet quiet clarity.',
      'Precision as kindness. Virgo loves the clean snap of citrus, the whisper of herb, the sense of order on a plate. Vermentino speaks that language — saline, lemon peel, fennel frond. Think garden fish, olive oil, and tableware placed with care.'
    ],
    ['libra',       'Libra',       'Pinot Noir',          'Poised and balanced — bright acidity meeting gentle tannin in harmony.',
      'Equilibrium, always. Libra seeks proportion: Pinot Noir’s bright acid and fine tannin drape beautifully over roast chicken, mushroom risotto, or salmon. The pleasure is in harmony — no note too loud, no edge too sharp.'
    ],
    ['scorpio',     'Scorpio',     'Cabernet Sauvignon',  'Inky depth and focus — midnight fruit, dark chocolate, intensity.',
      'A velvet shadow with intent. Scorpio invites depth, sincerity, the long gaze. Cabernet Sauvignon answers with graphite, cassis, and the patience to breathe. Pair with charred steaks, bitter greens, and the kind of talk that lingers.'
    ],
    ['sagittarius', 'Sagittarius', 'Tempranillo',         'Open-road spirit — smoky grill notes, tapas, and lively stories.',
      'Maps on the table; smoke in the air. Sagittarius thrives on breadth — Tempranillo’s cherry, tobacco, and spice play across grilled meats, tapas, and laughter that crosses borders. Uncork outdoors; serve with a little wander.'
    ],
    ['capricorn',   'Capricorn',   'Left-Bank Bordeaux',  'Classic structure — cedar, cassis, and aged cheeses by the fire.',
      'Form with feeling. Capricorn honors craft and time: cedar spice, firm lines, and a finish that rewards attention. Left-Bank Bordeaux carries ceremony to roasts and aged cheeses. Iron the napkins; light the fire.'
    ],
    ['aquarius',    'Aquarius',    'Albariño',            'Bright, unconventional, sea-kissed — citrus lift and saline snap.',
      'A bright edge and a kind heart. Aquarius brings clarity and a dash of surprise; Albariño brings citrus, stone, and sea spray. Pair with crudo, citrus dressings, and conversations that tilt toward the future.'
    ],
    ['pisces',      'Pisces',      'Riesling (off-dry)',  'Tender and luminous — spice-friendly, a gentle, lingering finish.',
      'A softer light. Pisces pours empathy into the glass — Riesling (off-dry) pairs with spice, poetry, and the hush of late evening. It holds space for nuance: Thai basil, ginger, lime, and the sweetest endings.'
    ],
  ];

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
              background: 'linear-gradient(180deg, rgba(21,20,35,0.45), rgba(21,20,35,0))',
            }}
          />
          <div className="relative p-8 md:p-14">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide">
              Celestial <span style={{ color: brand.gold }}>Sips</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#7a6b57] leading-relaxed">
              Inspired by the night sky — this collection blends the poetry of the stars with the sensory world of food and wine.
              Each glass becomes a reflection of rhythm, balance, and connection.
            </p>
          </div>
          {/* tiny gold constellation */}
          <svg aria-hidden="true" className="pointer-events-none absolute right-6 top-6 opacity-30" width="120" height="80" viewBox="0 0 120 80">
            <g fill="none" stroke={brand.gold} strokeWidth="1">
              <circle cx="10" cy="10" r="1.2" /><circle cx="38" cy="18" r="1.2" />
              <circle cx="64" cy="8" r="1.2" /><circle cx="92" cy="22" r="1.2" />
              <circle cx="108" cy="12" r="1.2" /><path d="M10 10 L38 18 L64 8 L92 22 L108 12" />
            </g>
          </svg>
        </section>

        {/* CURRENT SKY — text-only, season-aware */}
        <section className="mt-14 rounded-2xl border p-8 shadow-sm relative overflow-hidden" style={{ backgroundColor: '#fff', borderColor: brand.line }}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10"
            style={{ background:
              'radial-gradient(800px 400px at 90% -10%, rgba(163,124,88,0.18), transparent 60%), radial-gradient(600px 380px at 10% 110%, rgba(110,42,42,0.12), transparent 60%)' }} />
          <h2 className="text-3xl font-serif font-bold tracking-wide text-center">
            Under the Current Sky — <span style={{ color: brand.gold }}>{season}</span>
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">{seasonCopy.lead}</p>
              <p className="mt-4 italic text-[#7a6b57]">{seasonCopy.feature}</p>
            </div>
            <aside className="rounded-xl border p-5 bg-[#fdfaf3] shadow-sm" style={{ borderColor: brand.line }}>
              <p className="font-semibold">Notes for the table</p>
              <ul className="mt-2 space-y-1 text-sm opacity-90">
                {seasonCopy.notes.map((n) => (<li key={n}>• {n}</li>))}
              </ul>
            </aside>
          </div>
        </section>

        {/* STAR PAIRINGS GALLERY — links to anchors */}
        <section className="mt-14 grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {signs.map(([slug, name, wine, note]) => (
            <a
              key={slug}
              href={`#${slug}`}
              className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:bg-[#fdfaf3] transition-colors"
              style={{ borderColor: brand.line }}
              data-sign={name}
            >
              <h3 className="text-xl font-serif font-bold text-[#a37c58]">{name}</h3>
              <p className="mt-1 font-semibold">{wine}</p>
              <p className="mt-2 text-sm leading-relaxed opacity-85">{note}</p>
              <p className="mt-3 text-xs underline decoration-dotted underline-offset-4" style={{ color: brand.gold }}>
                Read more
              </p>
            </a>
          ))}
        </section>

        {/* READ MORE — anchored essays */}
        <section className="mt-16 rounded-2xl border p-8 shadow-sm" style={{ backgroundColor: brand.parchment, borderColor: brand.line }}>
          <h2 className="text-3xl font-serif font-bold tracking-wide text-center">Read More</h2>
          <div className="mt-8 space-y-10">
            {signs.map(([slug, name, wine, _note, essay]) => (
              <article key={slug} id={slug} className="rounded-xl border bg-white p-6 shadow-sm scroll-mt-24"
                style={{ borderColor: brand.line }}>
                <header className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-2xl font-serif font-bold">{name}</h3>
                  <span className="text-sm px-2 py-0.5 rounded-full border" style={{ borderColor: brand.line, color: brand.gold }}>
                    {wine}
                  </span>
                </header>
                <p className="mt-3 leading-relaxed">{essay}</p>
                <div className="mt-4">
                  <a href="#top" className="text-sm underline decoration-dotted underline-offset-4 hover:opacity-90" style={{ color: brand.gold }}>
                    Back to top ↑
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="mt-16 rounded-2xl border p-8 text-center shadow-sm" style={{ borderColor: brand.line, background: '#fff' }}>
          <h3 className="text-2xl font-serif font-bold tracking-wide">Taste the Sky with Vino Pairings</h3>
          <p className="mx-auto mt-3 max-w-2xl text-lg">
            Discover how the beauty of the stars meets the flavor of the vine. Continue the story on{' '}
            <a href="https://cosmiczodiacastrology.com" target="_blank" rel="noopener noreferrer"
               className="underline decoration-dotted underline-offset-4 hover:opacity-90" style={{ color: brand.gold }}>
              Cosmic Zodiac Astrology ↗
            </a>.
          </p>
        </section>
      </main>

      {/* GA4: page view + sign-click tracking via simple delegation */}
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
                document.addEventListener('click', function(e){
                  var a = e.target.closest('a[data-sign]');
                  if (!a) return;
                  var sign = a.getAttribute('data-sign');
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'celestial_sign_click', { sign: sign });
                  }
                }, { passive: true });
              } catch(e){}
            })();
          `,
        }}
      />
    </div>
  );
}
