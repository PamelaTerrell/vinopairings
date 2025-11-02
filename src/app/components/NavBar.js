// src/app/components/NavBar.jsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/history', label: 'History' },
  { href: '/tips', label: 'Tips' },
  { href: '/sunday', label: 'Sunday' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const fontFamily = '"Palatino Linotype","Book Antiqua",Palatino,serif';
  const [open, setOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(LINKS.length);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const moreBtnRef = useRef(null);
  const itemRefs = useRef([]);
  const addItemRef = (el) => el && !itemRefs.current.includes(el) && itemRefs.current.push(el);
  const [moreOpen, setMoreOpen] = useState(false);

  const visibleLinks = useMemo(() => LINKS.slice(0, visibleCount), [visibleCount]);
  const overflowLinks = useMemo(() => LINKS.slice(visibleCount), [visibleCount]);

  useEffect(() => {
    if (!containerRef.current || !listRef.current) return;
    const ro = new ResizeObserver(() => {
      const containerWidth = containerRef.current.clientWidth;
      const brandWidth =
        containerRef.current.querySelector('[data-brand]')?.getBoundingClientRect().width || 0;
      const paddingGuard = 24;
      const budget = Math.max(containerWidth - brandWidth - paddingGuard, 0);
      const widths = itemRefs.current.map((el) => el.getBoundingClientRect().width);
      const moreWidth = (moreBtnRef.current?.getBoundingClientRect().width || 80) + 8;
      let used = 0,
        count = 0;
      for (let i = 0; i < widths.length; i++) {
        const guard = i < widths.length - 1 ? moreWidth : 0;
        if (used + widths[i] + guard <= budget) {
          used += widths[i];
          count++;
        } else break;
      }
      setVisibleCount(Math.max(1, count));
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      setOpen(false);
      setMoreOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="bg-[#a37c58] text-[#f9f6ef] border-b border-[#8b684a] shadow-md sticky top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
        <nav
          ref={containerRef}
          className="flex items-center justify-between gap-3 h-16"
          style={{ fontFamily }}
        >
          {/* Hamburger on left (mobile only) */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e2c48f] focus:ring-offset-[#a37c58]"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          {/* ✅ Brand centered on small screens, left-aligned on desktop */}
          <div
            data-brand
            className="text-2xl sm:text-3xl font-bold tracking-wide absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
          >
            <Link href="/" className="hover:text-[#e2c48f] transition-colors duration-300">
              Vino Pairings
            </Link>
          </div>

          {/* Desktop links (right) */}
          <div className="hidden sm:block min-w-0 ml-auto">
            <ul ref={listRef} className="flex items-center gap-6 whitespace-nowrap">
              {visibleLinks.map((link) => (
                <li key={link.href} ref={addItemRef}>
                  <Link
                    href={link.href}
                    className="hover:text-[#e2c48f] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {overflowLinks.length > 0 && (
                <li className="relative" ref={moreBtnRef}>
                  <button
                    type="button"
                    onClick={() => setMoreOpen((s) => !s)}
                    className="hover:text-[#e2c48f] transition-colors duration-300"
                  >
                    More ▾
                  </button>
                  {moreOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-[#f9f6ef] text-[#2b2b2b] shadow-lg ring-1 ring-black/5 overflow-hidden">
                      {overflowLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2 text-sm hover:bg-[#f2e9dd] hover:text-[#7a5a3f]"
                          onClick={() => setMoreOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              )}
            </ul>
          </div>
        </nav>

        {/* Mobile drawer */}
        {open && (
          <div
            className="sm:hidden border-t border-[#8b684a] bg-[#a37c58] text-[#f9f6ef]"
            style={{ fontFamily }}
          >
            <ul className="px-4 py-3 space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 hover:text-[#e2c48f] transition-colors duration-300"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
