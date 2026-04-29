// src/app/components/NavBar.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_GROUPS = [
  {
    label: "Learn",
    links: [
      { href: "/history", label: "Wine History" },
      { href: "/regions", label: "Wine Regions" },
      { href: "/tips", label: "Wine Tips" },
      { href: "/celestial-sips", label: "Celestial Sips" },
    ],
  },
  {
    label: "Essentials",
    links: [
      { href: "/best-corkscrews", label: "Corkscrews" },
      { href: "/best-wine-glasses", label: "Wine Glasses" },
      { href: "/wine-gifts-under-50", label: "Wine Gifts Under $50" },
    ],
  },
  {
    label: "Lifestyle",
    links: [
      { href: "/sunday", label: "Sunday Pairings" },
      { href: "/about", label: "About Pamela" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const navRef = useRef(null);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const groupIsActive = (group) => group.links.some((link) => isActive(link.href));

  useEffect(() => {
    const close = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };

    const esc = (e) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);

    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-[#d8cfc4]/80 bg-[#fdfaf3]/90 text-[#4b3f2f] shadow-sm backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-2xl font-semibold tracking-wide text-[#2f241f] md:text-3xl [font-family:var(--font-playfair)]">
            Vino Pairings
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#a37c58]">
            Wine · Food · Elegance
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-2 xl:flex" aria-label="Primary navigation">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive("/")
                ? "bg-[#6e2a2a] text-white shadow-sm"
                : "text-[#5f5144] hover:bg-[#f3eadf] hover:text-[#6e2a2a]"
            }`}
          >
            Home
          </Link>

          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenGroup(openGroup === group.label ? null : group.label)
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  groupIsActive(group)
                    ? "bg-[#6e2a2a] text-white shadow-sm"
                    : "text-[#5f5144] hover:bg-[#f3eadf] hover:text-[#6e2a2a]"
                }`}
                aria-expanded={openGroup === group.label}
              >
                {group.label} ▾
              </button>

              {openGroup === group.label && (
                <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-[#d8cfc4] bg-[#fdfaf3] p-2 shadow-xl">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpenGroup(null)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive(link.href)
                          ? "bg-[#6e2a2a] text-white"
                          : "text-[#4b3f2f] hover:bg-[#f3eadf] hover:text-[#6e2a2a]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/wine-gifts-under-50"
          className="hidden rounded-full border border-[#a37c58]/40 bg-white/70 px-5 py-2 text-sm font-semibold text-[#6e2a2a] shadow-sm transition hover:bg-[#f3eadf] xl:inline-block"
        >
          Gift Guide
        </Link>

        {/* Mobile / Tablet */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#d8cfc4] bg-white/70 px-4 py-2 text-sm font-semibold text-[#4b3f2f] shadow-sm transition hover:bg-[#f3eadf] xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#d8cfc4] bg-[#fdfaf3] px-5 py-5 shadow-lg xl:hidden">
          <nav className="grid gap-3" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive("/")
                  ? "bg-[#6e2a2a] text-white"
                  : "bg-white/70 text-[#4b3f2f] hover:bg-[#f3eadf]"
              }`}
            >
              Home
            </Link>

            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="rounded-2xl border border-[#d8cfc4] bg-white/60 p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#a37c58]">
                  {group.label}
                </p>

                <div className="grid gap-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isActive(link.href)
                          ? "bg-[#6e2a2a] text-white"
                          : "bg-[#fdfaf3] text-[#4b3f2f] hover:bg-[#f3eadf]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}