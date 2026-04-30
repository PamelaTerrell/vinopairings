// =================================
// File: src/app/HomeClient.jsx
// =================================
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeClient() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("dish");
  const [resultText, setResultText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [didYouMean, setDidYouMean] = useState("");
  const [vivAutoOpened, setVivAutoOpened] = useState(false);

  const isLargeScreen = () => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(min-width: 1024px)").matches &&
      window.matchMedia("(pointer: fine)").matches
    );
  };

  const GLASS_GUIDE = {
    priceLabel: "$9 Printable Download",
    paymentLink: "https://buy.stripe.com/00w3cvckEccr7qDava0gw02",
    previewImage: "/wine-glass-guide-preview.png",
  };

  const FEATURED_UPDATED_ISO = "2026-02-27";
  const featuredUpdatedText = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(FEATURED_UPDATED_ISO));

  const FEATURED = {
    name: "Le FATbastard Chardonnay (2022)",
    brand: "Le FATbastard",
    imagePath: "/lefatbastard.png",
    brandUrl: "https://www.fatbastardwine.com",
    brandLabel: "Visit Brand Website",
    pairingTags: ["Roast chicken", "Lobster", "Mac & cheese", "Mushroom risotto"],
    blurb:
      "A plush, full-bodied Chardonnay—beautiful with roast chicken, creamy pastas, buttery seafood, and cozy dinners that deserve something a little richer.",
  };

  const featuredGuides = [
    {
      title: "Best Wines for Pasta Night",
      href: "/best-wines-for-pasta",
      desc: "Elegant pairings for spaghetti, Alfredo, pesto, seafood pasta, lasagna, and more.",
      label: "Featured Guide",
    },
    {
      title: "Best Corkscrews for Wine Lovers",
      href: "/best-corkscrews",
      desc: "A refined guide to choosing a corkscrew for everyday bottles, entertaining, and gifting.",
      label: "Wine Essential",
    },
    {
      title: "Best Wine Glasses for Everyday Elegance",
      href: "/best-wine-glasses",
      desc: "Choose glasses for red, white, sparkling, and relaxed outdoor wine moments.",
      label: "Wine Essential",
    },
    {
      title: "Best Wine Gifts Under $50",
      href: "/wine-gifts-under-50",
      desc: "Thoughtful wine gift ideas for hosts, birthdays, holidays, and housewarmings.",
      label: "Gift Guide",
    },
  ];

  const trackFeaturedCTA = () => {
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "cta_click",
        cta_id: "featured_wine_brand_site",
        cta_location: "featured_wine_top",
        cta_text: FEATURED.brandLabel,
        outbound: true,
      });
    }

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", {
        cta_id: "featured_wine_brand_site",
        cta_location: "featured_wine_top",
        link_domain: "fatbastardwine.com",
      });
    }
  };

  const strip = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const normalize = (s) => strip(s.trim().toLowerCase());
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const STOP = new Set([
    "and",
    "with",
    "the",
    "a",
    "an",
    "of",
    "in",
    "on",
    "to",
    "for",
    "style",
    "cooked",
    "grilled",
    "baked",
    "roasted",
    "pan",
    "seared",
  ]);

  const tokenize = (s) =>
    normalize(s)
      .split(/[^a-z0-9]+/i)
      .filter(Boolean)
      .filter((w) => !STOP.has(w));

  const containsEither = (a, b) => {
    const na = normalize(a);
    const nb = normalize(b);
    return na.includes(nb) || nb.includes(na);
  };

  const levenshtein = (a, b) => {
    const s = normalize(a);
    const t = normalize(b);
    const m = s.length;
    const n = t.length;

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

  const scoreCandidate = (query, candidate) => {
    const qTok = tokenize(query);
    const cTok = tokenize(candidate);
    const cSet = new Set(cTok);

    let exactOverlap = 0;
    qTok.forEach((t) => {
      if (cSet.has(t)) exactOverlap++;
    });

    let prefixOverlap = 0;
    qTok.forEach((qt) => {
      if (qt.length < 2) return;
      for (const ct of cTok) {
        if (ct.startsWith(qt)) {
          prefixOverlap++;
          break;
        }
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

  const hasAnyTokenSignal = (query, candidate) => {
    const qTok = tokenize(query);
    const cTok = tokenize(candidate);
    const cSet = new Set(cTok);

    if (qTok.some((t) => cSet.has(t))) return true;

    return qTok.some(
      (qt) => qt.length >= 2 && cTok.some((ct) => ct.startsWith(qt))
    );
  };

  const pairings = useMemo(
    () => ({
      steak: "Cabernet Sauvignon",
      beef: "Merlot",
      lamb: "Syrah",
      pork: "Zinfandel",
      chicken: "Chardonnay",
      "roast chicken": "Viognier",
      "bbq chicken": "Zinfandel",
      "nashville hot chicken": "Riesling (off-dry)",
      duck: "Merlot",
      turkey: "Pinot Noir",
      fish: "Sauvignon Blanc",
      salmon: "Pinot Noir",
      "griddle cooked salmon": "Chablis",
      "griddle salmon": "Chablis",
      "pan-seared salmon": "Chablis",
      "teriyaki salmon": "Pinot Noir",
      tuna: "Chablis",
      "ahi tuna": "Rosé",
      shrimp: "Vermentino",
      prawns: "Albariño",
      scallops: "Albariño",
      lobster: "Chardonnay",
      sushi: "Riesling",
      "sushi rolls": "Champagne",
      nigiri: "Sake or Champagne",
      pizza: "Barbera",
      spaghetti: "Chianti",
      "baked ziti": "Montepulciano",
      pasta: "Sangiovese",
      lasagna: "Sangiovese",
      "hot dog": "Zinfandel",
      risotto: "Soave",
      "mushroom risotto": "Pinot Noir",
      eggs: "Prosecco",
      omelette: "Prosecco",
      quiche: "Chardonnay",
      cheese: "Chardonnay",
      chocolate: "Port",
      cake: "Moscato d’Asti",
      dessert: "Sauternes",
      burger: "Malbec",
      "veggie burger": "Grenache",
      "french fries": "Cava",
      bbq: "Shiraz",
      curry: "Gewürztraminer",
      spicy: "Riesling",
      mushroom: "Pinot Noir",
      veal: "Nebbiolo",
      "foie gras": "Sauternes",
      truffle: "Barolo",
      "eggplant parmesan": "Montepulciano",
      "spaghetti bolognese": "Montepulciano",
      "tuna fish": "Albariño",
      pierogi: "Riesling (off-dry)",
      pierogies: "Riesling (off-dry)",
      perogi: "Riesling (off-dry)",
      oysters: "Muscadet",
      mussels: "Muscadet",
      clams: "Vermentino",
      crab: "Albariño",
      "smoked salmon": "Champagne",
      halibut: "Chardonnay",
      "sea bass": "Verdejo",
      cod: "Pinot Grigio",
      swordfish: "Viognier",
      calamari: "Vermentino",
      ceviche: "Sauvignon Blanc",
      sashimi: "Champagne",
      poke: "Riesling",
      carbonara: "Pinot Grigio",
      alfredo: "Chardonnay",
      pesto: "Vermentino",
      "tomato soup": "Barbera",
      "margherita pizza": "Chianti",
      "pepperoni pizza": "Barbera",
      "four cheese pizza": "Soave",
      "white pizza": "Pinot Grigio",
      "macaroni and cheese": "Chardonnay",
      "mac & cheese": "Chardonnay",
      "baked macaroni and cheese": "Viognier",
      "spicy macaroni and cheese": "Riesling (off-dry)",
      "macaroni and cheese with bacon": "Pinot Noir",
      gnocchi: "Pinot Grigio",
      "pasta puttanesca": "Nero d’Avola",
      "pasta primavera": "Sauvignon Blanc",
      "pasta arrabbiata": "Zinfandel",
      "pasta alla vodka": "Barbera",
      "shrimp scampi": "Vermentino",
      "caesar salad": "Chardonnay",
      caprese: "Pinot Grigio",
      "greek salad": "Assyrtiko",
      "cobb salad": "Sauvignon Blanc",
      falafel: "Rosé",
      hummus: "Chenin Blanc",
      shawarma: "Grenache",
      gazpacho: "Rosé",
      "roasted vegetables": "Côtes du Rhône",
      ratatouille: "Côtes du Rhône",
      "stuffed peppers": "Tempranillo",
      "caponata (eggplant)": "Barbera",
      "cauliflower steak": "Chenin Blanc",
      "broccoli cheddar soup": "Chardonnay",
      "tacos al pastor": "Garnacha",
      carnitas: "Chenin Blanc",
      "carne asada": "Tempranillo",
      burrito: "Zinfandel",
      fajitas: "Rioja",
      chili: "Zinfandel",
      "bbq brisket": "Malbec",
      "pulled pork": "Zinfandel",
      ribs: "Zinfandel",
      "elote (mexican street corn)": "Albariño",
      "empanadas (beef)": "Malbec",
      "fish tacos": "Sauvignon Blanc",
      arepas: "Torrontés",
      pho: "Riesling (off-dry)",
      ramen: "Pinot Noir",
      "pad thai": "Riesling",
      "thai green curry": "Riesling (off-dry)",
      "thai red curry": "Gewürztraminer",
      vindaloo: "Gewürztraminer",
      "butter chicken": "Riesling",
      biryani: "Gewürztraminer",
      samosas: "Gewürztraminer",
      kimchi: "Riesling",
      szechuan: "Gewürztraminer",
      tempura: "Prosecco",
      "general tso’s chicken": "Zinfandel",
      "kung pao chicken": "Riesling (off-dry)",
      "fried rice": "Riesling",
      gyoza: "Prosecco",
      bulgogi: "Pinot Noir",
      bibimbap: "Rosé",
      shakshuka: "Grenache",
      "lamb kebab": "Syrah",
      moussaka: "Xinomavro",
      "grilled octopus": "Assyrtiko",
      tabbouleh: "Sauvignon Blanc",
      "baba ganoush": "Chenin Blanc",
      "fattoush salad": "Rosé",
      schnitzel: "Grüner Veltliner",
      bratwurst: "Riesling (dry)",
      "beef stew": "Cabernet Sauvignon",
      goulash: "Blaufränkisch",
      paella: "Albariño",
      "coq au vin": "Pinot Noir",
      bouillabaisse: "Rosé (Provence)",
      cassoulet: "Cahors (Malbec)",
      "shepherd’s pie": "Côtes du Rhône",
      "bangers and mash": "Côtes du Rhône",
      brie: "Champagne",
      camembert: "Champagne",
      cheddar: "Cabernet Sauvignon",
      gouda: "Merlot",
      comté: "Chardonnay (Jura)",
      manchego: "Tempranillo",
      "goat cheese": "Sauvignon Blanc",
      "blue cheese": "Port",
      parmesan: "Chianti",
      gruyère: "Chenin Blanc",
      taleggio: "Barbera",
      charcuterie: "Beaujolais",
      prosciutto: "Prosecco",
      ham: "Riesling",
      minestrone: "Chianti",
      "french onion soup": "Beaujolais",
      chowder: "Chardonnay",
      "chicken noodle soup": "Sauvignon Blanc",
      "butternut squash soup": "Viognier",
      "tom kha gai": "Riesling (off-dry)",
      bagels: "Champagne",
      lox: "Champagne",
      pancakes: "Moscato d’Asti",
      waffles: "Moscato d’Asti",
      "avocado toast": "Sauvignon Blanc",
      "grilled cheese": "Chardonnay",
      "spinach artichoke dip": "Sauvignon Blanc",
      "buffalo wings": "Riesling (off-dry)",
      cheesecake: "Moscato d’Asti",
      "apple pie": "Riesling",
      "peach cobbler": "Late Harvest Riesling",
      tiramisu: "Vin Santo",
      "lemon tart": "Moscato d’Asti",
      strawberries: "Rosé",
      "berry tart": "Rosé",
      brownies: "Port",
      "dark chocolate": "Port",
      "crème brûlée": "Sauternes",
      cannoli: "Moscato d’Asti",
    }),
    []
  );

  const reversePairings = useMemo(() => {
    const acc = {};
    Object.entries(pairings).forEach(([dish, wine]) => {
      if (!acc[wine]) acc[wine] = [];
      acc[wine].push(dish);
    });
    return acc;
  }, [pairings]);

  const getCandidates = (mode) =>
    mode === "dish" ? Object.keys(pairings) : Object.keys(reversePairings);

  const buildSuggestions = (q, mode, limit = 6) => {
    const nq = normalize(q);
    if (!nq || nq.length < 2) return [];

    return getCandidates(mode)
      .filter((c) => hasAnyTokenSignal(q, c))
      .map((c) => ({ c, s: scoreCandidate(q, c) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, limit)
      .map(({ c }) => c);
  };

  const computeResult = (q, mode) => {
    const nq = normalize(q);
    if (!nq || nq.length < 2) return { found: false, text: "" };

    const anyHasSignal = (items) => items.some((x) => hasAnyTokenSignal(q, x));

    if (mode === "dish") {
      const dishes = Object.keys(pairings);
      if (!anyHasSignal(dishes)) return { found: false, text: "" };

      if (pairings[nq]) {
        return {
          found: true,
          text: `🍷 A beautiful wine pairing for "${q}" is **${pairings[nq]}**.`,
        };
      }

      const best = dishes
        .filter((k) => hasAnyTokenSignal(q, k))
        .map((k) => ({ k, s: scoreCandidate(q, k) }))
        .sort((a, b) => b.s - a.s)[0];

      if (best && best.s > 0) {
        return {
          found: true,
          text: `🍷 A beautiful wine pairing for "${q}" is **${pairings[best.k]}**.`,
        };
      }

      return { found: false, text: "" };
    }

    const wines = Object.keys(reversePairings);
    if (!anyHasSignal(wines)) return { found: false, text: "" };

    if (reversePairings[nq]) {
      const dishes = reversePairings[nq].map((d) => `**${d}**`).join(", ");
      return {
        found: true,
        text: `🍽️ Delicious dishes to enjoy with "${q}" include: ${dishes}.`,
      };
    }

    const bestWine = wines
      .filter((w) => hasAnyTokenSignal(q, w))
      .map((w) => ({ w, s: scoreCandidate(q, w) }))
      .sort((a, b) => b.s - a.s)[0];

    if (bestWine && bestWine.s > 0) {
      const dishes = reversePairings[bestWine.w].map((d) => `**${d}**`).join(", ");
      return {
        found: true,
        text: `🍽️ Delicious dishes to enjoy with "${q}" include: ${dishes}.`,
      };
    }

    return { found: false, text: "" };
  };

  const renderWithStrong = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      const m = part.match(/^\*\*(.*?)\*\*$/);
      if (m) return <strong key={i}>{m[1]}</strong>;
      return <span key={i}>{part}</span>;
    });
  };

  const highlight = (s, q) => {
    const toks = tokenize(q);
    if (!toks.length) return <span>{s}</span>;

    const lastIdx = toks.length - 1;
    const parts = toks.map((t, i) => {
      const esc = escapeRegExp(t);
      return i === lastIdx ? `\\b${esc}\\w*` : `\\b${esc}\\b`;
    });

    const splitRe = new RegExp(`(${parts.join("|")})`, "gi");
    const chunks = s.split(splitRe);

    return (
      <span>
        {chunks.map((part, i) => {
          const testRe = new RegExp(`^(?:${parts.join("|")})$`, "i");
          return testRe.test(part) ? (
            <strong key={i}>{part}</strong>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </span>
    );
  };

  const commitSelection = (value) => {
    setInput(value);
    const { found, text } = computeResult(value, type);
    setResultText(text);
    const s = buildSuggestions(value, type, 6);
    setDidYouMean(found ? "" : s[0] || "");
    setSuggestions([]);
    setVivAutoOpened(false);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      const { found, text } = computeResult(input, type);
      setResultText(text);
      const s = buildSuggestions(input, type, 6);
      setDidYouMean(found ? "" : s[0] || "");
      setSuggestions(s);
    }, 120);

    return () => clearTimeout(id);
  }, [input, type]);

  const noResult = input.trim().length >= 2 && !resultText;

  useEffect(() => {
    if (!noResult || vivAutoOpened || !isLargeScreen()) return;

    const btn = document.querySelector('button[title="Chat with Viv"]');
    const isPressed = btn?.getAttribute("aria-pressed") === "true";

    if (!isPressed) {
      btn?.click();
      setVivAutoOpened(true);
    }
  }, [noResult, vivAutoOpened]);

  useEffect(() => {
    const noText = input.trim().length < 2;
    const hasResult = !!resultText;

    if (noText || hasResult) setVivAutoOpened(false);
  }, [input, resultText]);

  return (
  <div className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] font-body">
    <h1 className="sr-only">
      Vino Pairings: Wine Pairing Guides, Wine Tips, Printables, and Wine Essentials
    </h1>

    {/* LUXURY HERO */}
    <section className="relative overflow-hidden px-4 py-6 md:px-8 md:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fff7e8_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#ead8c2_0%,transparent_38%)]" />

      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2.75rem] border border-[#e1d2c0] bg-[#fdfaf3] shadow-[0_30px_90px_rgba(75,63,47,0.16)] lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative z-10 flex flex-col justify-center px-7 py-12 md:px-12 lg:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a37c58]">
            Wine · Food · Elegance
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight text-[#2f241f] md:text-7xl [font-family:var(--font-playfair)]">
            Pair the right wine with the moment.
          </h2>

          <p className="mt-6 max-w-xl text-[18px] leading-8 text-[#6b5645]">
            Elegant wine pairings, thoughtful gift guides, beginner wine tips,
            and beautiful table essentials — designed to make every bottle feel
            effortless.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pairing-finder"
              className="inline-flex justify-center rounded-full bg-[#6e2a2a] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#8a3a3a]"
            >
              Find a Pairing
            </a>

            <Link
              href="/best-wines-for-pasta"
              className="inline-flex justify-center rounded-full border border-[#cdbba8] bg-white/75 px-7 py-3 text-sm font-semibold text-[#4b3f2f] shadow-sm transition hover:bg-white"
            >
              Explore Pasta Pairings
            </Link>
          </div>
        </div>

       <div className="relative min-h-[430px] bg-[#efe3d6] lg:min-h-[680px] xl:min-h-[720px]">
  <Image
    src="/vino-home-hero.png"
    alt="Elegant wine and food pairing table with pasta, wine glasses, and warm candlelight"
    fill
    priority
    className="object-cover object-[58%_center]"
    sizes="(min-width: 1024px) 55vw, 100vw"
  />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-[#fdfaf3]/65 lg:via-transparent lg:to-black/15" />

          <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10 lg:left-auto lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7b8]">
              Vino Pairings
            </p>

            

          
          </div>
        </div>
      </div>
    </section>

    {/* PAIRING FINDER */}
    <section id="pairing-finder" className="mx-auto mt-12 max-w-4xl px-4 md:px-8">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-[2.25rem] border border-[#d8cfc4] bg-white/90 p-7 shadow-[0_20px_60px_rgba(75,63,47,0.1)] backdrop-blur md:p-10"
        aria-labelledby="pairing-title"
      >
        <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#a37c58]">
          Pairing Finder
        </p>

        <h2
          id="pairing-title"
          className="mt-3 text-center text-4xl font-semibold text-[#2f241f] md:text-5xl [font-family:var(--font-playfair)]"
        >
          Discover Your Perfect Pairing
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-[#6b5b4b]">
          Enter a dish to find a wine, or enter a wine to discover foods that
          pair beautifully with it.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-[190px_1fr]">
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="type">
              Search by
            </label>

            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-2xl border border-[#d8cfc4] bg-[#fdfaf3] p-4 outline-none focus:ring-2 focus:ring-[#a37c58]"
            >
              <option value="dish">Dish</option>
              <option value="wine">Wine</option>
            </select>
          </div>

          <div className="relative flex flex-col gap-2">
            <label className="font-medium" htmlFor="query">
              {`Enter your ${type}`}
            </label>

            <input
              id="query"
              type="text"
              placeholder="e.g., pasta, salmon, Cabernet, Pinot Noir"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setSuggestions(buildSuggestions(input, type))}
              onBlur={() => setTimeout(() => setSuggestions([]), 120)}
              className="rounded-2xl border border-[#d8cfc4] bg-[#fdfaf3] p-4 outline-none focus:ring-2 focus:ring-[#a37c58]"
              inputMode="search"
              autoComplete="off"
              aria-autocomplete="list"
              aria-controls="suggestions"
              aria-expanded={suggestions.length > 0}
              aria-activedescendant={suggestions.length ? "sug-0" : undefined}
            />

            {suggestions.length > 0 && (
              <ul
                id="suggestions"
                role="listbox"
                className="absolute top-full z-10 mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-[#d8cfc4] bg-white shadow-xl"
              >
                {suggestions.map((s, i) => (
                  <li
                    key={`${s}-${i}`}
                    id={`sug-${i}`}
                    role="option"
                    aria-selected="false"
                    tabIndex={-1}
                    className="cursor-pointer px-4 py-3 hover:bg-[#f4ede4]"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      commitSelection(s);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") commitSelection(s);
                    }}
                  >
                    {highlight(s, input)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </form>

      {resultText && (
        <div
          className="mt-6 rounded-3xl border border-[#d8cfc4] bg-[#fdf7ef] p-6 text-center shadow-sm animate-fadeIn"
          role="status"
          aria-live="polite"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a37c58]">
            Suggested Pairing
          </p>

          <div className="mt-3 text-[17px] leading-8 text-[#5d4d3f]">
            {renderWithStrong(resultText)}
          </div>
        </div>
      )}

      {noResult && (
        <div className="mt-6 rounded-3xl border border-[#d8cfc4] bg-white p-6 shadow-sm animate-fadeIn">
          <div className="font-semibold text-[#6e2a2a]">
            Not finding an exact match?
          </div>

          <p className="mt-1 text-sm leading-7 text-[#6b5b4b]">
            Click the <strong>🍷</strong> button in the bottom-right to ask{" "}
            <strong>Viv, our virtual sommelier</strong>.
          </p>

          {didYouMean && (
            <button
              className="mt-3 text-sm font-semibold text-[#6e2a2a] underline underline-offset-4"
              onClick={() => commitSelection(didYouMean)}
            >
              Try “{didYouMean}”
            </button>
          )}
        </div>
      )}
    </section>

    {/* EDITORIAL GUIDES */}
    <section className="mx-auto mt-20 max-w-6xl px-4 md:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37c58]">
          Explore Vino Pairings
        </p>

        <h2 className="mt-3 text-4xl font-semibold text-[#2f241f] md:text-5xl [font-family:var(--font-playfair)]">
          Guides for Pairing, Pouring, and Gifting Well
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6b5b4b]">
          Build confidence with polished wine articles, entertaining tools, and
          elegant product-style guides.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {featuredGuides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group rounded-[2rem] border border-[#d8cfc4] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a37c58]">
              {guide.label}
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
              {guide.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6b5b4b]">
              {guide.desc}
            </p>

            <span className="mt-6 inline-block text-sm font-semibold text-[#6e2a2a] underline underline-offset-4">
              Read Guide →
            </span>
          </Link>
        ))}
      </div>
    </section>

    {/* WINE ESSENTIALS */}
    <section className="mx-auto mt-20 max-w-6xl px-4 md:px-8">
      <div className="grid overflow-hidden rounded-[2.5rem] border border-[#e6d8c8] bg-[#fffaf4] shadow-[0_20px_70px_rgba(75,63,47,0.1)] md:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.28em] text-[#a37c58]">
            Wine Essentials
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#3b2f2f] md:text-5xl [font-family:var(--font-playfair)]">
            Start with the tool that makes every bottle feel effortless.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f5d4f]">
            A beautiful wine experience begins before the first pour. Our
            beginner-friendly guide highlights elegant corkscrews and wine
            openers that are simple, dependable, and gift-worthy.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/best-wine-opener-for-beginners"
              className="rounded-full bg-[#a37c58] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              View Wine Opener Guide
            </Link>

            <Link
              href="/tips"
              className="rounded-full border border-[#cdbba8] bg-white px-6 py-3 text-sm font-semibold text-[#4b3f2f] transition hover:bg-[#f3eadf]"
            >
              Watch Tutorial
            </Link>
          </div>
        </div>

        <div className="m-5 rounded-[2rem] border border-[#eadfd3] bg-white p-7 shadow-sm md:m-8">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a37c58]">
            Featured Guide
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-[#3b2f2f] [font-family:var(--font-playfair)]">
            Best Wine Opener for Beginners
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#6f5d4f]">
            From classic waiter’s corkscrews to elegant electric openers, this
            guide helps you choose the right first tool with confidence.
          </p>

          <Link
            href="/best-wine-opener-for-beginners"
            className="mt-6 inline-flex text-sm font-semibold text-[#8a633f] underline underline-offset-4"
          >
            Read the guide →
          </Link>
        </div>
      </div>
    </section>

    {/* FEATURED WINE */}
    <section className="mx-auto mt-20 max-w-6xl px-4 md:px-8">
      <div className="grid overflow-hidden rounded-[2.5rem] border border-[#d8cfc4] bg-white shadow-[0_24px_80px_rgba(75,63,47,0.12)] md:grid-cols-2">
        <div className="relative min-h-[420px] bg-[#fdfaf3]">
          <Image
            src={FEATURED.imagePath}
            alt={`${FEATURED.name} bottle`}
            fill
            className="object-contain p-10"
            priority
          />
        </div>

        <div className="flex flex-col justify-center p-8 text-center md:p-12 md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
            Featured Wine of the Month
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            {FEATURED.name}
          </h2>

          <p className="mt-2 text-xs text-[#8a7463]">
            Last updated {featuredUpdatedText}
          </p>

          <p className="mt-5 text-[17px] leading-8 text-[#6b5b4b]">
            {FEATURED.blurb}
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {FEATURED.pairingTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#d8cfc4] bg-[#fdf7ef] px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={FEATURED.brandUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackFeaturedCTA}
            className="mt-7 inline-block w-fit rounded-full bg-[#a37c58] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            {FEATURED.brandLabel}
          </a>
        </div>
      </div>
    </section>

    {/* PRINTABLE GUIDES */}
    <section className="mx-auto mt-20 max-w-6xl px-4 md:px-8">
      <div className="grid overflow-hidden rounded-[2.5rem] border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_20px_70px_rgba(75,63,47,0.1)] md:grid-cols-2">
        <div className="bg-white">
          <Image
            src={GLASS_GUIDE.previewImage}
            alt="Wine Glass Guide preview"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-col justify-center p-8 text-center md:p-12 md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a37c58]">
            Printable Wine Guides
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-[#2f241f] [font-family:var(--font-playfair)]">
            Learn Wine Beautifully
          </h2>

          <p className="mt-4 text-[17px] leading-8 text-[#6b5b4b]">
            Beginner-friendly printable guides designed for kitchens, wine
            bars, dinner parties, gifting, and everyday confidence.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={GLASS_GUIDE.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#a37c58] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Get Wine Glass Guide
            </a>

            <Link
              href="/printable-guides"
              className="rounded-full border border-[#d8cfc4] bg-white px-6 py-3 text-sm font-semibold text-[#6e2a2a] transition hover:bg-[#f3eadf]"
            >
              Browse All Guides
            </Link>
          </div>

          <p className="mt-4 text-xs leading-6 text-[#8a7463]">
            You’ll be redirected to your download after checkout.
          </p>
        </div>
      </div>
    </section>

    {/* BRAND TRUST */}
    <section className="mx-auto mt-20 max-w-5xl px-4 pb-20 text-center md:px-8">
      <div className="rounded-[2.5rem] border border-[#d8cfc4] bg-[#2f241f] p-8 text-white shadow-[0_24px_80px_rgba(75,63,47,0.18)] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b98c]">
          Why Vino Pairings
        </p>

        <h2 className="mt-3 text-4xl font-semibold md:text-5xl [font-family:var(--font-playfair)]">
          Wine should feel welcoming.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-white/75">
          Created by Pamela Terrell, Vino Pairings brings together simple wine
          guidance, elegant entertaining inspiration, printable resources, and
          thoughtfully selected wine essentials.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/about"
            className="rounded-full bg-[#a37c58] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            About Vino Pairings
          </Link>

          <Link
            href="/sunday"
            className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Sunday Pairings
          </Link>
        </div>
      </div>
    </section>

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

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `}</style>
  </div>
);

}