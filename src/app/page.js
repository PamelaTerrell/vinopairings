'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [input, setInput] = useState('');
  const [type, setType] = useState('dish'); // 'dish' | 'wine'
  const [resultText, setResultText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [didYouMean, setDidYouMean] = useState('');

  // Helpers to normalize input (trim, lowercase, strip accents)
  const strip = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const normalize = (s) => strip(s.trim().toLowerCase());

  // Expanded pairing dictionary: dish -> wine
  const pairings = useMemo(
    () => ({
      // core + extras
      steak: 'Cabernet Sauvignon',
      beef: 'Merlot',
      lamb: 'Syrah',
      pork: 'Zinfandel',
      chicken: 'Chardonnay',
      'roast chicken': 'Viognier',
      duck: 'Merlot',
      turkey: 'Pinot Noir',
      fish: 'Sauvignon Blanc',
      salmon: 'Pinot Noir',
      'teriyaki salmon': 'Pinot Noir',
      tuna: 'Chablis',
      shrimp: 'Vermentino',
      scallops: 'Albariño',
      lobster: 'Chardonnay',
      sushi: 'Riesling',
      pizza: 'Barbera',
      spaghetti: 'Chianti',
      'baked ziti': 'Montepulciano',
      pasta: 'Sangiovese',
      lasagna: 'Sangiovese',
      'hot dog': 'Zinfandel',
      risotto: 'Soave',
      eggs: 'Prosecco',
      omelette: 'Prosecco',
      cheese: 'Chardonnay',
      chocolate: 'Port',
      cake: 'Moscato d’Asti',
      dessert: 'Sauternes',
      burger: 'Malbec',
      'french fries': 'Cava',
      bbq: 'Shiraz',
      curry: 'Gewürztraminer',
      spicy: 'Riesling',
      mushroom: 'Pinot Noir',
      veal: 'Nebbiolo',
      'foie gras': 'Sauternes',
      truffle: 'Barolo',
      'eggplant parmesan': 'Montepulciano',
      'spaghetti bolognese': 'Montepulciano',
      'tuna fish': 'Albariño',

      // seafood & fish
      oysters: 'Muscadet',
      mussels: 'Muscadet',
      clams: 'Vermentino',
      crab: 'Albariño',
      'smoked salmon': 'Champagne',
      halibut: 'Chardonnay',
      'sea bass': 'Verdejo',
      cod: 'Pinot Grigio',
      swordfish: 'Viognier',
      calamari: 'Vermentino',
      ceviche: 'Sauvignon Blanc',
      sashimi: 'Champagne',

      // pasta & sauces
      carbonara: 'Pinot Grigio',
      alfredo: 'Chardonnay',
      pesto: 'Vermentino',
      'tomato soup': 'Barbera',
      'margherita pizza': 'Chianti',
      'pepperoni pizza': 'Barbera',

      // salads & veg
      'caesar salad': 'Chardonnay',
      caprese: 'Pinot Grigio',
      'greek salad': 'Assyrtiko',
      'cobb salad': 'Sauvignon Blanc',
      falafel: 'Rosé',
      hummus: 'Chenin Blanc',
      shawarma: 'Grenache',
      gazpacho: 'Rosé',
      'roasted vegetables': 'Côtes du Rhône',

      // latin & bbq
      'tacos al pastor': 'Garnacha',
      carnitas: 'Chenin Blanc',
      'carne asada': 'Tempranillo',
      burrito: 'Zinfandel',
      fajitas: 'Rioja',
      chili: 'Zinfandel',
      'bbq brisket': 'Malbec',
      'pulled pork': 'Zinfandel',
      ribs: 'Zinfandel',
      'fried chicken': 'Champagne',
      'roast beef': 'Cabernet Sauvignon',
      'short ribs': 'Syrah',

      // asian & spice
      pho: 'Riesling (off-dry)',
      'pad thai': 'Riesling',
      'thai green curry': 'Riesling (off-dry)',
      'thai red curry': 'Gewürztraminer',
      vindaloo: 'Gewürztraminer',
      'butter chicken': 'Riesling',
      samosas: 'Gewürztraminer',
      kimchi: 'Riesling',
      szechuan: 'Gewürztraminer',
      tempura: 'Prosecco',

      // cheeses / boards
      brie: 'Champagne',
      cheddar: 'Cabernet Sauvignon',
      'goat cheese': 'Sauvignon Blanc',
      'blue cheese': 'Port',
      parmesan: 'Chianti',
      charcuterie: 'Beaujolais',
      prosciutto: 'Prosecco',
      ham: 'Riesling',

      // desserts
      cheesecake: 'Moscato d’Asti',
      'apple pie': 'Riesling',
      tiramisu: 'Vin Santo',
      'lemon tart': 'Moscato d’Asti',
      strawberries: 'Rosé',
      'berry tart': 'Rosé',
      brownies: 'Port'
    }),
    []
  );

  // Reverse lookup: wine -> [dishes]
  const reversePairings = useMemo(() => {
    const acc = {};
    Object.entries(pairings).forEach(([dish, wine]) => {
      if (!acc[wine]) acc[wine] = [];
      acc[wine].push(dish);
    });
    return acc;
  }, [pairings]);

  // Levenshtein distance (for fuzzy suggestions)
  const levenshtein = (a, b) => {
    const s = normalize(a);
    const t = normalize(b);
    const m = s.length, n = t.length;
    if (m === 0) return n;
    if (n === 0) return m;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s[i - 1] === t[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }
    return dp[m][n];
  };

  // Candidates for typeahead
  const getCandidates = (mode) =>
    mode === 'dish' ? Object.keys(pairings) : Object.keys(reversePairings);

  const buildSuggestions = (q, mode, limit = 6) => {
    const nq = normalize(q);
    if (!nq || nq.length < 2) return [];
    const candidates = getCandidates(mode);
    const scored = candidates.map((c) => {
      const nc = normalize(c);
      const includePenalty = nc.includes(nq) ? 0 : 1;
      const prefixPenalty = nc.startsWith(nq) ? 0 : 1;
      const distance = levenshtein(nq, nc);
      return { c, includePenalty, prefixPenalty, distance, len: nc.length };
    });
    scored.sort((a, b) => {
      if (a.includePenalty !== b.includePenalty) return a.includePenalty - b.includePenalty;
      if (a.prefixPenalty !== b.prefixPenalty) return a.prefixPenalty - b.prefixPenalty;
      if (a.distance !== b.distance) return a.distance - b.distance;
      return a.len - b.len;
    });
    return scored.slice(0, limit).map((s) => s.c);
  };

  // Compute result text for a query + mode
  const computeResult = (q, mode) => {
    const nq = normalize(q);
    if (!nq || nq.length < 2) return { found: false, text: '' };

    if (mode === 'dish') {
      const key = Object.keys(pairings).find((k) => nq.includes(normalize(k)));
      if (key) {
        return { found: true, text: `🍷 A perfect wine pairing for "${q}" is **${pairings[key]}**.` };
      }
    } else {
      const match = Object.entries(reversePairings).find(([wine]) =>
        nq.includes(normalize(wine))
      );
      if (match) {
        const dishes = match[1].map((d) => `**${d}**`).join(', ');
        return { found: true, text: `🍽️ Delicious dishes to enjoy with "${q}" include: ${dishes}.` };
      }
    }
    return { found: false, text: `❌ Sorry, I don't have a ${mode === 'dish' ? 'pairing' : 'dish suggestion'} for "${q}" yet.` };
  };

  const commitSelection = (value) => {
    setInput(value);
    const { found, text } = computeResult(value, type);
    setResultText(text);
    const s = buildSuggestions(value, type, 6);
    setDidYouMean(found ? '' : s[0] || '');
    setSuggestions([]);
  };

  // Live update on input & type changes
  const updateLive = (value, mode) => {
    const { found, text } = computeResult(value, mode);
    setResultText(text);
    const s = buildSuggestions(value, mode, 6);
    setDidYouMean(found ? '' : s[0] || '');
    setSuggestions(s);
  };

  // Safely render **bold** without dangerouslySetInnerHTML
  const renderWithStrong = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      const m = part.match(/^\*\*(.*?)\*\*$/);
      if (m) return <strong key={i}>{m[1]}</strong>;
      return <span key={i}>{part}</span>;
    });
  };

  // Highlight query inside suggestions
  const highlight = (s, q) => {
    const nq = normalize(q);
    const ns = normalize(s);
    const idx = ns.indexOf(nq);
    if (idx === -1 || !q) return <span>{s}</span>;
    const before = s.slice(0, idx);
    const match = s.slice(idx, idx + q.length);
    const after = s.slice(idx + q.length);
    return (
      <span>
        {before}
        <strong>{match}</strong>
        {after}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] font-serif">
      {/* Hero Image */}
      <div className="relative w-full h-72 md:h-96 mb-8 shadow-lg overflow-hidden">
        <Image
          src="/picnicwine.png"
          alt="Picnic with wine and bread"
          fill
          className="object-cover brightness-90"
          priority
          sizes="100vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center">
          Photo by{' '}
          <a
            href="https://unsplash.com/@juliesdfg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="underline hover:text-gray-300"
          >
            Julie Sd
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/photos/a-group-of-wine-glasses-sitting-on-top-of-a-table-fDTv0BqaiFw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="underline hover:text-gray-300"
          >
            Unsplash
          </a>
        </div>
      </div>

      {/* Pairing Finder (live results; no submit button) */}
      <div className="max-w-3xl mx-auto p-6 flex flex-col items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5 bg-[#fdfaf3] border border-[#d8cfc4] shadow-md p-8 rounded w-full"
          aria-labelledby="pairing-title"
        >
          <h1 id="pairing-title" className="text-2xl md:text-3xl font-extrabold text-[#4b3f2f] text-center">
            Discover Your Perfect Pairing
          </h1>

          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="type">
              What would you like to enter?
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => {
                const mode = e.target.value;
                setType(mode);
                updateLive(input, mode);
              }}
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#a37c58]"
            >
              <option value="dish">Dish</option>
              <option value="wine">Wine</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="font-medium" htmlFor="query">
              {`Enter your ${type}`}
            </label>
            <input
              id="query"
              type="text"
              placeholder="e.g., salmon or Pinot Noir"
              value={input}
              onChange={(e) => {
                const v = e.target.value;
                setInput(v);
                updateLive(v, type);
              }}
              onFocus={() => setSuggestions(buildSuggestions(input, type))}
              onBlur={() => setTimeout(() => setSuggestions([]), 120)} // allow click
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#a37c58]"
              inputMode="search"
              autoComplete="off"
              aria-autocomplete="list"
              aria-controls="suggestions"
              aria-expanded={suggestions.length > 0}
            />

            {/* Typeahead suggestions */}
            {suggestions.length > 0 && (
              <ul
                id="suggestions"
                role="listbox"
                className="absolute z-10 top-full mt-1 w-full bg-white border border-[#d8cfc4] rounded shadow-lg max-h-60 overflow-auto"
              >
                {suggestions.map((s, i) => (
                  <li
                    key={`${s}-${i}`}
                    role="option"
                    tabIndex={0}
                    className="px-3 py-2 hover:bg-[#f4ede4] cursor-pointer"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      commitSelection(s);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') commitSelection(s);
                    }}
                  >
                    {highlight(s, input)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>

        {/* Results: only show when computed text exists */}
        {resultText && (
          <div
            className="mt-6 p-6 max-w-xl w-full bg-[#f4ede4] border-l-4 border-[#a37c58] text-[#4b3f2f] rounded shadow transition-opacity duration-500 animate-fadeIn"
            role="status"
            aria-live="polite"
          >
            {renderWithStrong(resultText)}
            {/* Did you mean */}
            {!resultText.startsWith('🍷') && !resultText.startsWith('🍽️') && didYouMean && (
              <div className="mt-3">
                <span className="opacity-80">Did you mean </span>
                <button
                  className="underline font-semibold hover:text-[#8b684a]"
                  onClick={() => commitSelection(didYouMean)}
                >
                  {didYouMean}
                </button>
                <span className="opacity-80">?</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Wine Basics Section */}
      <div className="mt-10 w-full max-w-2xl px-4 mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">Wine Pairing Basics</h2>
        <p className="text-center text-[#4b3f2f] mb-6 italic text-lg">
          🍷✨ <strong>Not sure where to start?</strong> This beautifully simple chart highlights timeless wine pairings to help you plan ahead and sip with confidence.
        </p>
        <Image
          src="/winebasics.png"
          alt="Wine pairing chart"
          width={1400}
          height={980}
          className="w-full h-auto border border-[#d8cfc4] shadow-md rounded"
          sizes="(min-width: 1024px) 768px, 100vw"
        />
      </div>

      {/* Featured Wine Section */}
      <div className="mt-16 w-full max-w-3xl mx-auto px-4">
        <div className="bg-white border border-[#d8cfc4] shadow-lg rounded-xl overflow-hidden">
          <div className="relative w-full h-64 bg-[#f9f6ef]">
            <Image
              src="/frontera-cabernet-merlot.png"
              alt="Frontera Cabernet Merlot bottle"
              fill
              className="object-contain p-4"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-[#4b3f2f] mb-2">
              Featured Wine of the Week
            </h2>
            <p className="text-lg text-[#4b3f2f] mb-4">
              <strong>Frontera Cabernet Merlot</strong> <br />
              Available at Sam’s Club for only{' '}
              <span className="font-bold" style={{ color: '#800020' }}>$6.99</span>
            </p>
            <Link
              href="/featured-wine"
              className="inline-block bg-[#a37c58] text-white font-semibold py-2 px-6 rounded hover:bg-[#8b684a] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        body {
          font-family: Georgia, serif;
        }
      `}</style>
    </div>
  );
}
