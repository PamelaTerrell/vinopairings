// src/app/layout.js
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import GtagPageView from "./GtagPageView";
import dynamic from "next/dynamic";
import CookieNotice from "./components/CookieNotice";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-SRJRLWGF89";

const ChatWidget = dynamic(() => import("./components/ChatWidget"), {
  ssr: false,
});

const ClientPortal = dynamic(() => import("./components/ClientPortal"), {
  ssr: false,
});

export const metadata = {
  metadataBase: new URL("https://vinopairings.com"),
  title: {
    default: "Vino Pairings | Wine Pairing Guides & Elegant Wine Tips",
    template: "%s | Vino Pairings",
  },
  description:
    "Elegant wine pairing guides, wine tips, entertaining ideas, and thoughtfully selected wine accessories.",
  openGraph: {
    type: "website",
    url: "https://vinopairings.com",
    siteName: "Vino Pairings",
    title: "Vino Pairings | Wine Pairing Guides & Elegant Wine Tips",
    description:
      "Discover elegant wine pairing guides, wine tips, entertaining ideas, and thoughtfully selected wine accessories.",
    images: [
      {
        url: "/wineog.png",
        width: 1200,
        height: 630,
        alt: "Vino Pairings wine glass and elegant wine pairing inspiration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vino Pairings | Wine Pairing Guides & Elegant Wine Tips",
    description:
      "Elegant wine pairing guides, wine tips, entertaining ideas, and thoughtfully selected wine accessories.",
    images: ["/wineog.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Vino Pairings",
            url: "https://vinopairings.com",
            description:
              "Elegant wine pairing guides, wine tips, entertaining ideas, and thoughtfully selected wine accessories.",
          })}
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
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        )}
      </head>

      <body className={`${inter.className} bg-[#f9f6ef] text-[#4b3f2f]`}>
        <NavBar />

        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>

        <footer className="mt-12 border-t border-[#d8cfc4] bg-[#fdfaf3] px-6 py-8 text-center text-sm text-[#6b5b4b]">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="font-medium text-[#4b3f2f]">
              Vino Pairings
            </p>

            <p>
              Elegant wine pairing guides, wine tips, and thoughtfully selected
              entertaining inspiration.
            </p>

            <p className="text-xs leading-6 text-[#7a6b57]">
              As an Amazon Associate I earn from qualifying purchases.
            </p>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap justify-center gap-x-4 gap-y-2"
            >
              <a href="/disclosure" className="underline underline-offset-4 hover:text-[#6e2a2a]">
                Affiliate Disclosure
              </a>

              <a href="/privacy" className="underline underline-offset-4 hover:text-[#6e2a2a]">
                Privacy Policy
              </a>

              <a href="/tips" className="underline underline-offset-4 hover:text-[#6e2a2a]">
                Wine Tips
              </a>

              <a
                href="https://pamelajterrell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#6e2a2a]"
              >
                Created by Pamela J. Terrell
              </a>
            </nav>

            <p className="text-xs text-[#8a7a68]">
              &copy; 2026 Vino Pairings. Please enjoy wine responsibly.
            </p>
          </div>
        </footer>

        {GA_ID && <GtagPageView />}
        <Analytics />

        <ClientPortal>
          <div style={{ position: "relative", zIndex: 2147483647 }}>
            <ChatWidget />
          </div>
        </ClientPortal>

        <CookieNotice />
      </body>
    </html>
  );
}