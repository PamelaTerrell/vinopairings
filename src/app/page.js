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
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // ---------------- Matching helpers ----------------
  // Ignore common words so "salmon with lemon" ~ "salmon lemon"
  const STOP = new Set([
    'and','with','the','a','an','of','in','on','to','for','style',
    'cooked','grilled','baked','roasted','pan','seared'
  ]);

  const tokenize = (s) =>
    normalize(s)
      .split(/[^a-z0-9]+/i)
      .filter(Boolean)
      .filter((w) => !STOP.has(w));

  const containsEither = (a, b) => {
    const na = normalize(a), nb = normalize(b);
    return na.includes(nb) || nb.includes(na);
  };

  // Levenshtein distance
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

  // Score a candidate against a query (higher is better)
  const scoreCandidate = (query, candidate) => {
    const qTok = tokenize(query);
    const cTok = tokenize(candidate);
    const cSet = new Set(cTok);

    // exact token overlap
    let exactOverlap = 0;
    qTok.forEach((t) => { if (cSet.has(t)) exactOverlap++; });

    // prefix overlap (handles "salm" vs "salmon")
    let prefixOverlap = 0;
    qTok.forEach((qt) => {
      if (qt.length < 2) return;
      for (const ct of cTok) {
        if (ct.startsWith(qt)) { prefixOverlap++; break; }
      }
    });

    // unique coverage (favor candidates that hit more query tokens)
    const uniqueCoverage = Math.min(qTok.length, exactOverlap + prefixOverlap);

    // substring bonus (either direction)
    const containBonus = containsEither(query, candidate) ? 1 : 0;

    // edit distance (invert for scoring)
    const dist = levenshtein(query, candidate);
    const invDist = 1 / (1 + dist);

    // shorter strings break ties slightly
    const lenBonus = 1 / (1 + candidate.length);

    // Weighted total
    return (
      uniqueCoverage * 4 +     // cover more distinct query tokens first
      exactOverlap * 2 +       // reward exact token matches
      prefixOverlap * 1.5 +    // reward prefix token matches
      containBonus * 1.25 +
      invDist * 1.0 +
      lenBonus * 0.25
    );
  };

  // ---------------- Pairing dictionary: dish -> wine ----------------
  const pairings = useMemo(
    () => ({
      // core + extras
      steak: 'Cabernet Sauvignon',
      beef: 'Merlot',
      lamb: 'Syrah',
      pork: 'Zinfandel',
      chicken: 'Chardonnay',
      'roast chicken': 'Viognier',
      'bbq chicken': 'Zinfandel',
      'nashville hot chicken': 'Riesling (off-dry)',
      duck: 'Merlot',
      turkey: 'Pinot Noir',
      fish: 'Sauvignon Blanc',
      salmon: 'Pinot Noir',
      'griddle cooked salmon': 'Chablis',
      'griddle salmon': 'Chablis',
      'pan-seared salmon': 'Chablis',
      'teriyaki salmon': 'Pinot Noir',
      tuna: 'Chablis',
      'ahi tuna': 'Rosé',
      shrimp: 'Vermentino',
      prawns: 'Albariño',
      scallops: 'Albariño',
      lobster: 'Chardonnay',
      sushi: 'Riesling',
      'sushi rolls': 'Champagne',
      nigiri: 'Sake or Champagne',
      pizza: 'Barbera',
      spaghetti: 'Chianti',
      'baked ziti': 'Montepulciano',
      pasta: 'Sangiovese',
      lasagna: 'Sangiovese',
      'hot dog': 'Zinfandel',
      risotto: 'Soave',
      'mushroom risotto': 'Pinot Noir',
      eggs: 'Prosecco',
      omelette: 'Prosecco',
      quiche: 'Chardonnay',
      cheese: 'Chardonnay',
      chocolate: 'Port',
      cake: 'Moscato d’Asti',
      dessert: 'Sauternes',
      burger: 'Malbec',
      'veggie burger': 'Grenache',
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
      poke: 'Riesling',

      // pasta & sauces
      carbonara: 'Pinot Grigio',
      alfredo: 'Chardonnay',
      pesto: 'Vermentino',
      'tomato soup': 'Barbera',
      'margherita pizza': 'Chianti',
      'pepperoni pizza': 'Barbera',
      'four cheese pizza': 'Soave',
      'white pizza': 'Pinot Grigio',
      'macaroni and cheese': 'Chardonnay',
      'mac & cheese': 'Chardonnay',
      'baked macaroni and cheese': 'Viognier',
      'spicy macaroni and cheese': 'Riesling (off-dry)',
      'macaroni and cheese with bacon': 'Pinot Noir',
      gnocchi: 'Pinot Grigio',
      'pasta puttanesca': 'Nero d’Avola',
      'pasta primavera': 'Sauvignon Blanc',
      'pasta arrabbiata': 'Zinfandel',
      'pasta alla vodka': 'Barbera',
      'shrimp scampi': 'Vermentino',

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
      ratatouille: 'Côtes du Rhône',
      'stuffed peppers': 'Tempranillo',
      'caponata (eggplant)': 'Barbera',
      'cauliflower steak': 'Chenin Blanc',
      'broccoli cheddar soup': 'Chardonnay',

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
      'elote (mexican street corn)': 'Albariño',
      'empanadas (beef)': 'Malbec',
      'fish tacos': 'Sauvignon Blanc',
      arepas: 'Torrontés',

      // asian & spice
      pho: 'Riesling (off-dry)',
      ramen: 'Pinot Noir',
      'pad thai': 'Riesling',
      'thai green curry': 'Riesling (off-dry)',
      'thai red curry': 'Gewürztraminer',
      vindaloo: 'Gewürztraminer',
      'butter chicken': 'Riesling',
      biryani: 'Gewürztraminer',
      samosas: 'Gewürztraminer',
      kimchi: 'Riesling',
      szechuan: 'Gewürztraminer',
      tempura: 'Prosecco',
      'general tso’s chicken': 'Zinfandel',
      'kung pao chicken': 'Riesling (off-dry)',
      'fried rice': 'Riesling',
      gyoza: 'Prosecco',
      bulgogi: 'Pinot Noir',
      bibimbap: 'Rosé',

      // mediterranean & middle east
      shakshuka: 'Grenache',
      'lamb kebab': 'Syrah',
      moussaka: 'Xinomavro',
      'grilled octopus': 'Assyrtiko',
      tabbouleh: 'Sauvignon Blanc',
      'baba ganoush': 'Chenin Blanc',
      'fattoush salad': 'Rosé',

      // european comfort
      schnitzel: 'Grüner Veltliner',
      bratwurst: 'Riesling (dry)',
      'beef stew': 'Cabernet Sauvignon',
      goulash: 'Blaufränkisch',
      paella: 'Albariño',
      'coq au vin': 'Pinot Noir',
      bouillabaisse: 'Rosé (Provence)',
      cassoulet: 'Cahors (Malbec)',
      "shepherd’s pie": 'Côtes du Rhône',
      'bangers and mash': 'Côtes du Rhône',

      // cheeses / boards
      brie: 'Champagne',
      camembert: 'Champagne',
      cheddar: 'Cabernet Sauvignon',
      gouda: 'Merlot',
      comté: 'Chardonnay (Jura)',
      manchego: 'Tempranillo',
      'goat cheese': 'Sauvignon Blanc',
      'blue cheese': 'Port',
      parmesan: 'Chianti',
      gruyère: 'Chenin Blanc',
      taleggio: 'Barbera',
      charcuterie: 'Beaujolais',
      prosciutto: 'Prosecco',
      ham: 'Riesling',

      // soups & stews
      minestrone: 'Chianti',
      'french onion soup': 'Beaujolais',
      chowder: 'Chardonnay',
      'chicken noodle soup': 'Sauvignon Blanc',
      'butternut squash soup': 'Viognier',
      'tom kha gai': 'Riesling (off-dry)',

      // brunch & snacks
      bagels: 'Champagne',
      lox: 'Champagne',
      pancakes: 'Moscato d’Asti',
      waffles: 'Moscato d’Asti',
      'avocado toast': 'Sauvignon Blanc',
      'grilled cheese': 'Chardonnay',
      'spinach artichoke dip': 'Sauvignon Blanc',
      'buffalo wings': 'Riesling (off-dry)',

      // desserts
      cheesecake: 'Moscato d’Asti',
      'apple pie': 'Riesling',
      'peach cobbler': 'Late Harvest Riesling',
      tiramisu: 'Vin Santo',
      'lemon tart': 'Moscato d’Asti',
      strawberries: 'Rosé',
      'berry tart': 'Rosé',
      brownies: 'Port',
      'dark chocolate': 'Port',
      'crème brûlée': 'Sauternes',
      cannoli: 'Moscato d’Asti'
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

  // ---------------- Compute result (token-aware for all items) ----------------
  const computeResult = (q, mode) => {
    const nq = normalize(q);
    if (!nq || nq.length < 2) return { found: false, text: '' };

    if (mode === 'dish') {
      // exact
      if (pairings[nq]) {
        return { found: true, text: `🍷 A perfect wine pairing for "${q}" is **${pairings[nq]}**.` };
      }
      // best candidate
      const best = Object.keys(pairings)
        .map((k) => ({ k, s: scoreCandidate(q, k) }))
        .sort((a, b) => b.s - a.s)[0];
      if (best && best.s > 0) {
        return { found: true, text: `🍷 A perfect wine pairing for "${q}" is **${pairings[best.k]}**.` };
      }
    } else {
      // wine mode
      if (reversePairings[nq]) {
        const dishes = reversePairings[nq].map((d) => `**${d}**`).join(', ');
        return { found: true, text: `🍽️ Delicious dishes to enjoy with "${q}" include: ${dishes}.` };
      }
      const bestWine = Object.keys(reversePairings)
        .map((w) => ({ w, s: scoreCandidate(q, w) }))
        .sort((a, b) => b.s - a.s)[0];
      if (bestWine && bestWine.s > 0) {
        const dishes = reversePairings[bestWine.w].map((d) => `**${d}**`).join(', ');
        return { found: true, text: `🍽️ Delicious dishes to enjoy with "${q}" include: ${dishes}.` };
      }
    }
    return { found: false, text: `❌ Sorry, I don't have a ${mode === 'dish' ? 'pairing' : 'dish suggestion'} for "${q}" yet.` };
  };

  // ---------------- Suggestions (same scoring so dropdown agrees) ----------------
  const getCandidates = (mode) =>
    mode === 'dish' ? Object.keys(pairings) : Object.keys(reversePairings);

  const buildSuggestions = (q, mode, limit = 6) => {
    const nq = normalize(q);
    if (!nq || nq.length < 2) return [];
    const candidates = getCandidates(mode);

    const hasAnyTokenSignal = (query, candidate) => {
      const qTok = tokenize(query);
      const cTok = tokenize(candidate);
      const cSet = new Set(cTok);
      if (qTok.some((t) => cSet.has(t))) return true; // exact token hit
      return qTok.some((qt) => qt.length >= 2 && cTok.some((ct) => ct.startsWith(qt))); // prefix hit
    };

    return candidates
      .map((c) => ({ c, s: scoreCandidate(q, c) }))
      .filter(({ c }) => hasAnyTokenSignal(q, c))
      .sort((a, b) => b.s - a.s)
      .slice(0, limit)
      .map(({ c }) => c);
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

  // ---------------- Highlight matched tokens (incl. prefixes) ----------------
  const highlight = (s, q) => {
    const toks = tokenize(q);
    if (!toks.length) return <span>{s}</span>;

    // Build regex that matches tokens as whole words OR as prefixes
    const lastIdx = toks.length - 1;
    const parts = toks.map((t, i) => {
      const esc = escapeRegExp(t);
      return i === lastIdx ? `\\b${esc}\\w*` : `\\b${esc}\\b`;
    });
    const re = new RegExp(`(${parts.join('|')})`, 'gi');

    // Split by regex and bold the matches
    const split = s.split(re);
    return (
      <span>
        {split.map((part, i) =>
          re.test(part) ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
        )}
      </span>
    );
  };

  // Commit + live update
  const commitSelection = (value) => {
    setInput(value);
    const { found, text } = computeResult(value, type);
    setResultText(text);
    const s = buildSuggestions(value, type, 6);
    setDidYouMean(found ? '' : s[0] || '');
    setSuggestions([]);
  };

  const updateLive = (value, mode) => {
    const { found, text } = computeResult(value, mode);
    setResultText(text);
    const s = buildSuggestions(value, mode, 6);
    setDidYouMean(found ? '' : s[0] || '');
    setSuggestions(s);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal font-body">
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
          className="flex flex-col gap-5 bg-[#FDF7EF] border border-[#D8CFC4] shadow-md p-8 rounded-xl w-full"
          aria-labelledby="pairing-title"
        >
          <h1 id="pairing-title" className="text-2xl md:text-3xl font-heading font-extrabold text-center">
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
              className="border border-[#D8CFC4] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C59B5F]"
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
              className="border border-[#D8CFC4] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C59B5F]"
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
                className="absolute z-10 top-full mt-1 w-full bg-white border border-[#D8CFC4] rounded shadow-lg max-h-60 overflow-auto"
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

        {/* Results */}
        {resultText && (
          <div
            className="mt-6 p-6 max-w-xl w-full bg-[#f4ede4] border-l-4 border-[#C59B5F] rounded shadow transition-opacity duration-500 animate-fadeIn"
            role="status"
            aria-live="polite"
          >
            {renderWithStrong(resultText)}
            {!resultText.startsWith('🍷') && !resultText.startsWith('🍽️') && didYouMean && (
              <div className="mt-3">
                <span className="opacity-80">Did you mean </span>
                <button
                  className="underline font-semibold hover:text-[#7B1E3F]"
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
        <h2 className="text-xl font-heading font-bold text-center mb-4">Wine Pairing Basics</h2>
        <p className="text-center mb-6 italic text-lg">
          🍷✨ <strong>Not sure where to start?</strong> This beautifully simple chart highlights timeless wine pairings to help you plan ahead and sip with confidence.
        </p>
        <Image
          src="/winebasics.png"
          alt="Wine pairing chart"
          width={1400}
          height={980}
          className="w-full h-auto border border-[#D8CFC4] shadow-md rounded"
          sizes="(min-width: 1024px) 768px, 100vw"
        />
      </div>

      {/* Featured Wine Section */}
      <div className="mt-16 w-full max-w-3xl mx-auto px-4">
        <div className="bg-white border border-[#D8CFC4] shadow-lg rounded-xl overflow-hidden">
          <div className="relative w-full h-64 bg-cream">
            <Image
              src="/frontera-cabernet-merlot.png"
              alt="Frontera Cabernet Merlot bottle"
              fill
              className="object-contain p-4"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-heading font-bold mb-2">
              Featured Wine of the Week
            </h2>
            <p className="text-lg mb-4">
              <strong>Frontera Cabernet Merlot</strong> <br />
              Available at Sam’s Club for only{' '}
              <span className="font-bold" style={{ color: '#7B1E3F' }}>$6.99</span>
            </p>
            <Link
              href="/featured-wine"
              className="inline-block bg-[#C59B5F] text-white font-semibold py-2 px-6 rounded hover:brightness-95 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </div>
  );
}
