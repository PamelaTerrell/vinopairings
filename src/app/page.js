'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
  const [input, setInput] = useState('');
  const [type, setType] = useState('dish'); // 'dish' | 'wine'
  const [resultText, setResultText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [didYouMean, setDidYouMean] = useState('');
  const [vivAutoOpened, setVivAutoOpened] = useState(false);

  // Desktop-only helper (>= 1024px and fine pointer like mouse/trackpad)
  const isLargeScreen = () => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(min-width: 1024px)').matches &&
      window.matchMedia('(pointer: fine)').matches
    );
  };

  // --- Featured meta ---
  const FEATURED_UPDATED_ISO = '2025-11-06'; // update when you change the featured wine
  const featuredUpdatedText = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(FEATURED_UPDATED_ISO));

  // Fire GA4 on CTA click (works with gtag.js and GTM dataLayer)
  const trackFeaturedCTA = () => {
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'cta_click',
        cta_id: 'frontera_samsclub',
        cta_location: 'featured_wine_top',
        cta_text: 'Buy at Sam’s Club',
        outbound: true,
      });
    }
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        cta_id: 'frontera_samsclub',
        cta_location: 'featured_wine_top',
        link_domain: 'samsclub.com',
      });
    }
  };

  // Helpers to normalize input (trim, lowercase, strip accents)
  const strip = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const normalize = (s) => strip(s.trim().toLowerCase());
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // ---------------- Matching helpers ----------------
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

    let exactOverlap = 0;
    qTok.forEach((t) => { if (cSet.has(t)) exactOverlap++; });

    let prefixOverlap = 0;
    qTok.forEach((qt) => {
      if (qt.length < 2) return;
      for (const ct of cTok) {
        if (ct.startsWith(qt)) { prefixOverlap++; break; }
      }
    });

    const uniqueCoverage = Math.min(qTok.length, exactOverlap + prefixOverlap);
    const containBonus = containsEither(query, candidate) ? 1 : 0;
    const dist = levenshtein(query, candidate);
    const invDist = 1 / (1 + dist);
    const lenBonus = 1 / (1 + candidate.length);

    return (
      uniqueCoverage * 4 +
      exactOverlap * 2 +
      prefixOverlap * 1.5 +
      containBonus * 1.25 +
      invDist * 1.0 +
      lenBonus * 0.25
    );
  };

  // shared signal checker
  const hasAnyTokenSignal = (query, candidate) => {
    const qTok = tokenize(query);
    const cTok = tokenize(candidate);
    const cSet = new Set(cTok);
    if (qTok.some((t) => cSet.has(t))) return true;
    return qTok.some((qt) => qt.length >= 2 && cTok.some((ct) => ct.startsWith(qt)));
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

      // NEW: pierogi spellings (aka perogies)
      pierogi: 'Riesling (off-dry)',
      pierogies: 'Riesling (off-dry)',
      perogi: 'Riesling (off-dry)',

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

  // ---------------- Compute result (mode-guarded) ----------------
  const computeResult = (q, mode) => {
    const nq = normalize(q);
    if (!nq || nq.length < 2) return { found: false, text: '' };

    const anyHasSignal = (items) => items.some((x) => hasAnyTokenSignal(q, x));

    if (mode === 'dish') {
      const dishes = Object.keys(pairings);
      if (!anyHasSignal(dishes)) return { found: false, text: '' };

      if (pairings[nq]) {
        return { found: true, text: `🍷 A perfect wine pairing for "${q}" is **${pairings[nq]}**.` };
      }

      const best = dishes
        .filter((k) => hasAnyTokenSignal(q, k))
        .map((k) => ({ k, s: scoreCandidate(q, k) }))
        .sort((a, b) => b.s - a.s)[0];

      if (best && best.s > 0) {
        return { found: true, text: `🍷 A perfect wine pairing for "${q}" is **${pairings[best.k]}**.` };
      }
      return { found: false, text: '' };
    }

    const wines = Object.keys(reversePairings);
    if (!anyHasSignal(wines)) return { found: false, text: '' };

    if (reversePairings[nq]) {
      const dishes = reversePairings[nq].map((d) => `**${d}**`).join(', ');
      return { found: true, text: `🍽️ Delicious dishes to enjoy with "${q}" include: ${dishes}.` };
    }

    const bestWine = wines
      .filter((w) => hasAnyTokenSignal(q, w))
      .map((w) => ({ w, s: scoreCandidate(q, w) }))
      .sort((a, b) => b.s - a.s)[0];

    if (bestWine && bestWine.s > 0) {
      const dishes = reversePairings[bestWine.w].map((d) => `**${d}**`).join(', ');
      return { found: true, text: `🍽️ Delicious dishes to enjoy with "${q}" include: ${dishes}.` };
    }
    return { found: false, text: '' };
  };

  // ---------------- Suggestions (reuse shared helper) ----------------
  const getCandidates = (mode) =>
    mode === 'dish' ? Object.keys(pairings) : Object.keys(reversePairings);

  const buildSuggestions = (q, mode, limit = 6) => {
    const nq = normalize(q);
    if (!nq || nq.length < 2) return [];
    const candidates = getCandidates(mode);

    return candidates
      .filter((c) => hasAnyTokenSignal(q, c))
      .map((c) => ({ c, s: scoreCandidate(q, c) }))
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
    const lastIdx = toks.length - 1;
    const parts = toks.map((t, i) => {
      const esc = escapeRegExp(t);
      return i === lastIdx ? `\\b${esc}\\w*` : `\\b${esc}\\b`;
    });
    const re = new RegExp(`(${parts.join('|')})`, 'gi');
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
    setVivAutoOpened(false);
  };

  const updateLive = (value, mode) => {
    const { found, text } = computeResult(value, mode);
    setResultText(text);
    const s = buildSuggestions(value, mode, 6);
    setDidYouMean(found ? '' : s[0] || '');
    setSuggestions(s);
  };

  // ---- Auto-open Viv when there's no match (desktop only)
  const noResult = input.trim().length >= 2 && !resultText;

  useEffect(() => {
    if (!noResult || vivAutoOpened || !isLargeScreen()) return;

    const btn = document.querySelector('button[title="Chat with Viv"]');
    const isPressed = btn?.getAttribute('aria-pressed') === 'true';
    if (!isPressed) {
      btn?.click();           // open once
      setVivAutoOpened(true); // remember
    }
  }, [noResult, vivAutoOpened]);

  // Allow auto-open again only when cleared or we have a result
  useEffect(() => {
    const noText = input.trim().length < 2;
    const hasResult = !!resultText;
    if (noText || hasResult) {
      setVivAutoOpened(false);
    }
  }, [input, resultText]);

  // JSON-LD for Featured Wine
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Frontera Cabernet Merlot 1.5L',
    brand: { '@type': 'Brand', name: 'Concha y Toro' },
    image: ['https://vinopairings.com/frontera-cabernet-merlot.png'],
    offers: {
      '@type': 'Offer',
      url: 'https://www.samsclub.com/ip/Concha-y-Toro-Frontera-Cabernet-Merlot-1-5-L/13809102300?classType=REGULAR&from=/search',
      priceCurrency: 'USD',
      price: '6.99',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal font-body">
      {/* JSON-LD for Featured Wine */}
      <Script
        id="featured-wine-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Featured Wine — TOP */}
      <section className="w-full max-w-3xl mx-auto px-4 pt-6">
        <div className="bg-white border border-[#D8CFC4] shadow-lg rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#f7efe4] to-[#fdf7ef] px-6 py-4 text-center">
            <p className="text-sm tracking-wide uppercase font-semibold text-[#7B1E3F]">
              Featured Wine of the Week
            </p>
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold mt-1">
              Frontera Cabernet Merlot
            </h1>
            <p className="mt-1 text-xs text-gray-500">Last updated {featuredUpdatedText}</p>
          </div>

          <div className="relative w-full h-60 sm:h-72 md:h-80 bg-cream">
            <Image
              src="/frontera-cabernet-merlot.png"
              alt="Frontera Cabernet Merlot bottle"
              fill
              className="object-contain p-4"
              sizes="(min-width: 768px) 768px, 100vw"
              priority
            />
          </div>

          <div className="p-6 text-center">
            <p className="text-lg mb-4">
              Available at Sam’s Club for{' '}
              <span className="font-bold" style={{ color: '#7B1E3F' }}>$6.99</span>
            </p>
            <a
              href="https://www.samsclub.com/ip/Concha-y-Toro-Frontera-Cabernet-Merlot-1-5-L/13809102300?classType=REGULAR&from=/search"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackFeaturedCTA}
              className="inline-block bg-[#C59B5F] text-white font-semibold py-2 px-6 rounded hover:brightness-95 transition"
              data-analytics="cta_buy_frontera_samsclub"
            >
              Buy at Sam’s Club
            </a>
          </div>
        </div>
      </section>

      {/* Pairing Finder */}
      <section className="max-w-3xl mx-auto p-6 mt-10 flex flex-col items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5 bg-[#FDF7EF] border border-[#D8CFC4] shadow-md p-8 rounded-xl w-full"
          aria-labelledby="pairing-title"
        >
          <h2 id="pairing-title" className="text-2xl md:text-3xl font-heading font-extrabold text-center">
            Discover Your Perfect Pairing
          </h2>

          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="type">What would you like to enter?</label>
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
              placeholder="e.g., pierogies or Pinot Noir"
              value={input}
              onChange={(e) => {
                const v = e.target.value;
                setInput(v);
                updateLive(v, type);
              }}
              onFocus={() => setSuggestions(buildSuggestions(input, type))}
              onBlur={() => setTimeout(() => setSuggestions([]), 120)}
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
                    onMouseDown={(e) => { e.preventDefault(); commitSelection(s); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') commitSelection(s); }}
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

        {/* No match? → Suggest Viv */}
        {noResult && (
          <div className="mt-6 w-full max-w-xl bg-white border border-[#D8CFC4] rounded-xl shadow p-5 animate-fadeIn">
            <div className="font-semibold text-[#7B1E3F]">Not finding an exact match?</div>
            <p className="mt-1 text-sm text-gray-700">
              Click the <strong>🍷</strong> button in the bottom-right to ask <strong>Viv, our virtual sommelier</strong>.
              Tell Viv your dish or wine (for example, “pierogies with onions and sour cream” or
              “a light red under $15 for tacos”) and she’ll recommend a perfect pairing.
            </p>

            {suggestions.length > 0 && (
              <div className="mt-3 text-sm">
                <div className="font-medium">Suggestions you can try:</div>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  {suggestions.slice(0, 3).map((s) => (
                    <li key={s}>
                      <button
                        className="underline hover:text-[#7B1E3F]"
                        onClick={() => commitSelection(s)}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Wine Basics Section */}
      <section className="mt-12 w-full max-w-2xl px-4 mx-auto">
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
      </section>

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
