"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  {
    name: "France",
    coordinates: [2.2, 46.2],
    href: "/french-wine-pairings",
    label: "Bordeaux, Burgundy, Champagne",
  },
  {
    name: "Italy",
    coordinates: [12.5, 42.8],
    href: "/italian-wine-pairings",
    label: "Chianti, Barolo, Pinot Grigio",
  },
  {
    name: "Spain",
    coordinates: [-3.7, 40.3],
    href: "/spanish-wine-pairings",
    label: "Rioja, Albariño, Cava",
  },
  {
    name: "California",
    coordinates: [-119.5, 36.5],
    href: "/california-wine-pairings",
    label: "Cabernet, Chardonnay, Zinfandel",
  },
  {
    name: "Australia",
    coordinates: [134.5, -25.5],
    href: "/australian-wine-pairings",
    label: "Shiraz, Riesling, Semillon",
  },
  {
    name: "Asia",
    coordinates: [104, 30],
    href: "/regions/asia",
    label: "China, India, Thailand, Japan, South Korea",
  },
];

export default function WorldMapRegions() {
  const router = useRouter();
  const [active, setActive] = useState(null);

  return (
    <section className="mt-10">
      <div className="overflow-hidden rounded-[32px] border border-[#d8cfc4] bg-white shadow-[0_12px_35px_rgba(75,63,47,0.08)]">
        <div className="px-6 md:px-10 pt-8 pb-4 text-center">
          <p className="text-sm tracking-[0.22em] uppercase text-[#7B1E3F] font-semibold">
            Explore by Map
          </p>

          <h2 className="mt-3 text-2xl md:text-4xl font-semibold [font-family:var(--font-playfair)] text-[#3f3326]">
            Discover Wine Regions Around the World
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-[#6b5b4b] leading-relaxed">
            Explore signature wines and classic pairings by region.
          </p>

          <div className="mx-auto mt-5 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
        </div>

        {/* Mobile quick links */}
        <div className="px-4 md:hidden pb-2">
          <div className="grid grid-cols-2 gap-3">
            {markers.map((marker) => (
              <Link
                key={marker.name}
                href={marker.href}
                className="rounded-full border border-[#d8cfc4] bg-[#fdfaf3] px-4 py-3 text-sm font-semibold text-[#4b3f2f] text-center shadow-sm hover:bg-white transition"
              >
                {marker.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="px-4 md:px-6 pb-3">
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-full border border-[#e7ddd1] bg-[#fdfaf3] px-4 py-3 text-sm text-[#5f5144]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#7B1E3F]" />
              <span>Featured region</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#C59B5F]" />
              <span>Tap or click to explore</span>
            </div>
          </div>
        </div>

        <div className="relative px-3 pb-6 md:px-6 md:pb-8">
          <div className="rounded-[24px] border border-[#eee4d8] bg-[#fdfaf3] p-3 md:p-5">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 165 }}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#efe7db"
                      stroke="#cdbda9"
                      strokeWidth={0.6}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#e8dccb", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {markers.map((marker) => {
                const isActive = active?.name === marker.name;

                return (
                  <Marker
                    key={marker.name}
                    coordinates={marker.coordinates}
                    onMouseEnter={() => setActive(marker)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(marker)}
                    onBlur={() => setActive(null)}
                    onClick={() => router.push(marker.href)}
                  >
                    <g className="cursor-pointer">
                      {/* larger invisible tap target */}
                      <circle
                        r={18}
                        fill="transparent"
                      />
                      <circle
                        r={isActive ? 9 : 7}
                        fill={isActive ? "#C59B5F" : "#7B1E3F"}
                        stroke="#ffffff"
                        strokeWidth={2.5}
                        style={{ transition: "all 0.2s ease" }}
                      />
                      <circle
                        r={isActive ? 16 : 0}
                        fill="rgba(197,155,95,0.18)"
                        style={{ transition: "all 0.2s ease" }}
                      />
                    </g>
                  </Marker>
                );
              })}
            </ComposableMap>

            {/* Desktop preview */}
            <div className="mt-4 hidden md:block min-h-[88px] rounded-[20px] border border-[#e7ddd1] bg-white px-5 py-4 text-center shadow-sm">
              {active ? (
                <>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a7a68] font-semibold">
                    Region Preview
                  </p>
                  <h3 className="mt-2 text-xl [font-family:var(--font-playfair)] font-semibold text-[#3f3326]">
                    {active.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#6b5b4b]">
                    {active.label}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a7a68] font-semibold">
                    Region Preview
                  </p>
                  <p className="mt-2 text-sm text-[#6b5b4b]">
                    Hover over a marker to preview a region, then click to open
                    its wine pairing page.
                  </p>
                </>
              )}
            </div>

            {/* Mobile helper text */}
            <div className="mt-4 md:hidden rounded-[20px] border border-[#e7ddd1] bg-white px-5 py-4 text-center shadow-sm">
              <p className="text-sm text-[#6b5b4b]">
                For easier browsing on mobile, use the region buttons above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}