// src/app/layout.js

import "./globals.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";

import NavBar from "./components/NavBar";
import CookieNotice from "./components/CookieNotice";
import GtagPageView from "./GtagPageView";

const GA_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-SRJRLWGF89";

const ChatWidget = dynamic(() => import("./components/ChatWidget"), {
  ssr: false,
});

const ClientPortal = dynamic(() => import("./components/ClientPortal"), {
  ssr: false,
});

export const metadata = {
  metadataBase: new URL("https://vinopairings.com"),

  title: {
    default: "Vino Pairings | Wine, Pairing & Everyday Elegance",
    template: "%s | Vino Pairings",
  },

  description:
    "Thoughtful wine pairing guides, wine regions, entertaining inspiration, and approachable guidance for enjoying wine with confidence.",

  openGraph: {
    type: "website",
    url: "https://vinopairings.com",
    siteName: "Vino Pairings",
    title: "Vino Pairings | Wine, Pairing & Everyday Elegance",
    description:
      "Thoughtful wine pairing guides, wine regions, entertaining inspiration, and approachable guidance for enjoying wine with confidence.",
    images: [
      {
        url: "/wineog.png",
        width: 1200,
        height: 630,
        alt: "Vino Pairings wine and entertaining inspiration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vino Pairings | Wine, Pairing & Everyday Elegance",
    description:
      "Thoughtful wine pairing guides, wine regions, entertaining inspiration, and approachable guidance for enjoying wine with confidence.",
    images: ["/wineog.png"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vino Pairings",
  url: "https://vinopairings.com",
  description:
    "Thoughtful wine pairing guides, wine regions, entertaining inspiration, and approachable guidance for enjoying wine with confidence.",
  publisher: {
    "@type": "Organization",
    name: "Stabile USA",
    url: "https://stabileusa.com",
  },
};

const footerExplore = [
  { label: "Wine Pairings", href: "/" },
  { label: "Wine Regions", href: "/regions" },
  { label: "Wine Tips", href: "/tips" },
  { label: "Sunday Wine", href: "/sunday" },
];

const footerGuides = [
  { label: "Corkscrew Guide", href: "/best-corkscrews" },
  { label: "Wine Glass Guide", href: "/best-wine-glasses" },
  { label: "Wine Gifts", href: "/wine-gifts-under-50" },
];

const footerAbout = [
  { label: "About", href: "/about" },
  { label: "History", href: "/history" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteSchema)}
        </Script>

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                  window.dataLayer.push(arguments);
                }

                window.gtag = window.gtag || gtag;

                gtag('js', new Date());

                gtag('config', '${GA_ID}', {
                  send_page_view: false
                });
              `}
            </Script>
          </>
        )}
      </head>

      <body className="bg-[#f8f4ee] text-[#46372f] antialiased">
        <NavBar />

        <main className="mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-6 md:py-10 lg:px-8">
          {children}
        </main>

        <footer className="mt-24 border-t border-[#d8c8ba] bg-[#eee6dc]">
          <div className="mx-auto max-w-6xl px-6 pb-10 pt-16 lg:px-8">
            {/* BRAND STATEMENT */}
            <div className="grid gap-12 border-b border-[#d2c1b2] pb-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9a7659]">
                  Vino Pairings
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl leading-[1.08] text-[#2d211c] md:text-5xl font-editorial">
                  Wine should feel{" "}
                  <span className="italic text-[#7d4a3d]">
                    approachable,
                  </span>{" "}
                  beautiful, and worth lingering over.
                </h2>

                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[#6d594c]">
                  Thoughtful pairing guides, wine regions, entertaining
                  inspiration, and simple rituals for enjoying wine with
                  confidence.
                </p>
              </div>

              <div className="lg:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7659]">
                  Correspondence
                </p>

                <a
                  href="mailto:hello@vinopairings.com"
                  className="mt-3 inline-block text-lg font-medium text-[#3a2c25] underline decoration-[#b79579]/60 underline-offset-4 transition hover:text-[#7d4a3d]"
                >
                  hello@vinopairings.com
                </a>
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
              <FooterColumn heading="Explore" links={footerExplore} />
              <FooterColumn heading="Guides" links={footerGuides} />
              <FooterColumn heading="About" links={footerAbout} />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7659]">
                  Stabile USA
                </p>

                <p className="mt-4 max-w-xs text-sm leading-7 text-[#6d594c]">
                  Vino Pairings is an independent digital publication within
                  the Stabile USA family of brands.
                </p>

                <a
                  href="https://stabileusa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#7d4a3d] transition hover:text-[#4f2f29]"
                >
                  Visit Stabile USA
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* LOWER FOOTER */}
            <div className="flex flex-col gap-5 border-t border-[#d2c1b2] pt-7 text-xs text-[#806d60] md:flex-row md:items-center md:justify-between">
              <p>
                © 2026 Vino Pairings. Please enjoy wine responsibly.
              </p>

              <nav
                aria-label="Legal navigation"
                className="flex flex-wrap gap-x-5 gap-y-2"
              >
                <Link
                  href="/privacy"
                  className="transition hover:text-[#7d4a3d]"
                >
                  Privacy
                </Link>

                <Link
                  href="/terms"
                  className="transition hover:text-[#7d4a3d]"
                >
                  Terms
                </Link>

                <a
                  href="https://pamelajterrell.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#7d4a3d]"
                >
                  Creator
                </a>
              </nav>
            </div>
          </div>
        </footer>

        {GA_ID && <GtagPageView />}
        <Analytics />

        <ClientPortal>
          <div
            style={{
              position: "relative",
              zIndex: 2147483647,
            }}
          >
            <ChatWidget />
          </div>
        </ClientPortal>

        <CookieNotice />
      </body>
    </html>
  );
}

function FooterColumn({ heading, links }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7659]">
        {heading}
      </p>

      <nav
        aria-label={`${heading} footer navigation`}
        className="mt-4 flex flex-col items-start gap-3"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-[#5f4d42] transition hover:text-[#7d4a3d]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}