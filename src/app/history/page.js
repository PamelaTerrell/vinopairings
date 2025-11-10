"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Wine,
  Landmark,
  BookOpen,
  Sparkles,
  Globe,
  Castle,
  Sprout,
  ShieldCheck,
} from "lucide-react";

export default function History() {
  const [view, setView] = useState("detailed");
  const [eraFilter, setEraFilter] = useState("all");

  const brand = {
    cream: "#f9f6ef",
    parchment: "#fdfaf3",
    cocoa: "#4b3f2f",
    gold: "#a37c58",
    line: "#d8cfc4",
    burgundy: "#6e2a2a",
    moss: "#4a5d39",
  };

  const historyPoints = [
    { id: "neolithic-6000-bce", period: "6000–5000 BCE", era: "ancient", icon: <Sprout className="w-5 h-5" aria-hidden />, event: "Earliest Evidence", description: "Residues in Neolithic pottery indicate the earliest known grape wine production in the South Caucasus (present‑day Georgia).", details: "Chemical analysis of tartaric acid crystals in clay jars suggests deliberate fermentation and storage — a technological leap for preserving calories and enhancing social ritual." },
    { id: "areni-4100-bce", period: "c. 4100 BCE", era: "ancient", icon: <Castle className="w-5 h-5" aria-hidden />, event: "Areni‑1 Winery", description: "Archaeologists uncover one of the oldest known wine‑making sites in a cave complex (present‑day Armenia).", details: "Finds include a treading vat, fermentation jars, and pressed grape remains — evidence of organized, small‑scale vinification." },
    { id: "egypt-1500-bce", period: "1500–1200 BCE", era: "ancient", icon: <Landmark className="w-5 h-5" aria-hidden />, event: "Ancient Egypt", description: "Wine features in elite feasts and funerary rites; amphora labels record vintage, vineyard, and overseer — early ‘appellation’ thinking.", details: "Wall paintings at Theban tombs depict pruning, harvesting, and pressing; red and sweetened wines were prized at court." },
    { id: "phoenicians-1000-bce", period: "1200–500 BCE", era: "ancient", icon: <Globe className="w-5 h-5" aria-hidden />, event: "Seafaring Spread", description: "Phoenician and later Greek trade carries vines, techniques, and amphorae across the Mediterranean littoral.", details: "Standardized amphora shapes and stamped seals help track origin and taxes; symposium culture entwines wine with philosophy and poetry." },
    { id: "greece-700-bce", period: "c. 700 BCE", era: "classical", icon: <BookOpen className="w-5 h-5" aria-hidden />, event: "Greek Influence", description: "Viticulture codified; dilution norms and tasting language emerge; colonies propagate vines to Southern Italy and beyond.", details: "Texts describe pruning, trellising, and soil selection — early viticultural science." },
    { id: "rome-27-bce", period: "27 BCE – 476 CE", era: "classical", icon: <Landmark className="w-5 h-5" aria-hidden />, event: "Roman Expansion & Innovation", description: "Roads and trade networks extend vineyards from Gaul to Hispania; barrel use spreads; terroir observations take root.", details: "Writers note site selection, yield control, and aging vessels (amphorae vs. wood) — foundations of later European traditions." },
    { id: "monastic-500-ce", period: "500–1400 CE", era: "medieval", icon: <ShieldCheck className="w-5 h-5" aria-hidden />, event: "Monastic Preservation", description: "Monasteries maintain vineyards for liturgy, documenting parcels and practices — precursors to cru systems.", details: "Cistercian and Benedictine records map slope, drainage, and exposure; careful observation refines quality zones." },
    { id: "bottle-17th", period: "17th Century", era: "early-modern", icon: <Wine className="w-5 h-5" aria-hidden />, event: "Bottle, Cork & Sparkle", description: "Thicker glass and natural cork enable controlled aging; secondary fermentation becomes a style in Champagne.", details: "Packaging innovation shifts wine from bulk commodity to cellar‑worthy product; glass shapes begin to signal origin." },
    { id: "phylloxera-19th", period: "19th Century", era: "modern", icon: <Sprout className="w-5 h-5" aria-hidden />, event: "Phylloxera Crisis", description: "A root‑feeding louse devastates European vines; grafting onto resistant American rootstocks rescues viticulture.", details: "Nursery science, quarantine policy, and international collaboration reshape vineyard biology and trade." },
    { id: "bordeaux-1855", period: "1855 & after", era: "modern", icon: <BookOpen className="w-5 h-5" aria-hidden />, event: "Classifications & Appellations", description: "Regional hierarchies (e.g., Bordeaux 1855) and later appellation laws link place, practice, and label.", details: "Legal frameworks protect names and codify methods — the birth of modern geographic indications." },
    { id: "judgment-1976", period: "1976", era: "contemporary", icon: <Sparkles className="w-5 h-5" aria-hidden />, event: "Judgment of Paris", description: "California wines triumph in a blind tasting, accelerating the New World renaissance.", details: "Investment and research surge in California, Australia, Chile, Argentina, and South Africa; stainless steel and temperature control proliferate." },
    { id: "modern-era", period: "Late 20th – 21st Century", era: "contemporary", icon: <Globe className="w-5 h-5" aria-hidden />, event: "Globalization, Science & Climate", description: "Precision viticulture (clones, canopy, yeasts) meets shifting climates; sustainability and low‑intervention styles rise.", details: "Producers adapt with altitude, latitude, drought‑tolerant rootstocks, and regenerative farming; consumers explore diverse regions." },
  ];

  const eras = [
    { key: "all", label: "All Eras" },
    { key: "ancient", label: "Ancient" },
    { key: "classical", label: "Classical" },
    { key: "medieval", label: "Medieval" },
    { key: "early-modern", label: "Early Modern" },
    { key: "modern", label: "Modern" },
    { key: "contemporary", label: "Contemporary" },
  ];

  const filtered = useMemo(() => historyPoints.filter((p) => eraFilter === "all" || p.era === eraFilter), [eraFilter]);

  return (
    <main
      className="relative w-full px-4 md:px-8 xl:px-16 2xl:px-24 py-12 md:py-16 2xl:py-24"
      style={{ backgroundColor: brand.cream, color: brand.cocoa }}
    >
      {/* Background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(80rem 40rem at 10% 10%, #ffffff80, transparent), radial-gradient(60rem 30rem at 90% 10%, #fff6e680, transparent)",
        }}
      />

      <header className="relative text-center mb-10 md:mb-14 2xl:mb-20">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-serif font-bold tracking-wide mb-4" style={{ color: brand.burgundy }}>
          The History of Wine
        </h1>
        <p className="max-w-5xl mx-auto text-lg 2xl:text-xl">
          Follow the journey of wine from Neolithic innovation to contemporary terroirs. Use the controls to filter by era or switch views.
        </p>
      </header>

      {/* Controls */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-10 2xl:mb-14">
        <div className="flex items-center gap-2">
          <label htmlFor="era" className="text-sm font-medium">Filter era:</label>
          <select
            id="era"
            className="rounded-xl border px-3 py-2 bg-white/80 shadow-sm"
            style={{ borderColor: brand.line }}
            value={eraFilter}
            onChange={(e) => setEraFilter(e.target.value)}
          >
            {eras.map((e) => (
              <option key={e.key} value={e.key}>{e.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">View:</span>
          <button
            onClick={() => setView("compact")}
            className={`px-4 py-2 rounded-l-xl border ${view === "compact" ? "bg-white" : "bg-white/60"}`}
            style={{ borderColor: brand.line }}
            aria-pressed={view === "compact"}
          >
            Compact
          </button>
          <button
            onClick={() => setView("detailed")}
            className={`px-4 py-2 rounded-r-xl border -ml-[1px] ${view === "detailed" ? "bg-white" : "bg-white/60"}`}
            style={{ borderColor: brand.line }}
            aria-pressed={view === "detailed"}
          >
            Detailed
          </button>
        </div>
      </div>

      {/* Timeline — full width variant */}
      <section className="relative">
        {/* 24‑col grid gives finer control across the width */}
        <div className="relative grid grid-cols-1 lg:grid-cols-24 gap-y-10 lg:gap-y-16">
          {/* Center spine */}
          <div aria-hidden className="hidden lg:block absolute inset-y-0 left-1/2 w-px -translate-x-1/2" style={{ background: brand.line }} />

          {filtered.map((item, idx) => (
            <TimelineItem
              key={item.id}
              item={item}
              align={idx % 2 === 0 ? "left" : "right"}
              brand={brand}
              view={view}
            />
          ))}
        </div>
      </section>

      <aside className="mt-16 2xl:mt-20 p-6 2xl:p-8 rounded-2xl border bg-white/70 shadow-sm max-w-6xl mx-auto" style={{ borderColor: brand.gold }}>
        <div className="flex items-start gap-4">
          <Wine className="w-6 h-6" aria-hidden />
          <div>
            <h3 className="font-serif text-2xl 2xl:text-3xl font-bold mb-1" style={{ color: brand.burgundy }}>
              Key Innovations to Notice
            </h3>
            <ul className="list-disc pl-5 space-y-1 2xl:space-y-2">
              <li>From clay jars to barrels to glass — containers shaped style and shelf life.</li>
              <li>Monastic observation anticipated modern terroir mapping and cru systems.</li>
              <li>Rootstock grafting after phylloxera re‑engineered vineyards worldwide.</li>
              <li>Temperature control and stainless steel refined freshness and consistency.</li>
              <li>Climate shifts now influence grape selection, canopy, and site choice.</li>
            </ul>
          </div>
        </div>
      </aside>

      <footer className="mt-12 2xl:mt-16 text-sm opacity-80 text-center">
        <p>
          This timeline is a high‑level synthesis intended for wine lovers and learners. It highlights widely cited milestones without claiming to be exhaustive.
        </p>
      </footer>
    </main>
  );
}

function TimelineItem({ item, align, brand, view }) {
  const isLeft = align === "left";
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={isLeft ? "lg:col-span-10 lg:col-start-2" : "lg:col-span-10 lg:col-start-14"}
    >
      {/* Desktop spine dot */}
      <span aria-hidden className="hidden lg:block absolute left-1/2 -translate-x-1/2 mt-2 w-4 h-4 rounded-full border-4 shadow" style={{ backgroundColor: brand.burgundy, borderColor: brand.cream }} />

      {/* Mobile dot+line */}
      <div className="lg:hidden relative pl-8">
        <span aria-hidden className="absolute left-3 top-2 bottom-0 w-px" style={{ background: brand.line }} />
        <span aria-hidden className="absolute left-2 top-2 w-3 h-3 rounded-full border-4 shadow" style={{ backgroundColor: brand.burgundy, borderColor: brand.cream }} />
      </div>

      <div className="relative border rounded-2xl p-5 md:p-6 2xl:p-7 bg-white/80 shadow-sm max-w-[44rem] 2xl:max-w-[50rem]" style={{ borderColor: brand.gold }}>
        <header className="flex items-center gap-3 mb-3">
          <div className="inline-flex items-center justify-center rounded-xl border p-2 bg-white/70" style={{ borderColor: brand.line }} aria-hidden>
            {item.icon}
          </div>
          <div>
            <time className="block font-semibold text-xs md:text-sm tracking-wide uppercase opacity-80">{item.period}</time>
            <h2 className="text-2xl 2xl:text-3xl font-serif font-bold" style={{ color: brand.burgundy }}>{item.event}</h2>
          </div>
        </header>

        <p className="leading-relaxed mb-3 text-base 2xl:text-lg">{item.description}</p>
        {view === "detailed" && (
          <p className="leading-relaxed text-sm 2xl:text-base opacity-90">{item.details}</p>
        )}
      </div>
    </motion.article>
  );
}
