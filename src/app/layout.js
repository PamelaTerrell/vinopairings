// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import GtagPageView from './GtagPageView';
import dynamic from 'next/dynamic';

// Fonts (define BEFORE use)
const inter = Inter({ subsets: ['latin'] });

// Env (fallback is fine for local)
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-SRJRLWGF89';

// Client-only components (no SSR)
const ChatWidget = dynamic(() => import('./components/ChatWidget'), { ssr: false });
const ClientPortal = dynamic(() => import('./components/ClientPortal'), { ssr: false });

export const metadata = {
  metadataBase: new URL('https://vinopairings.com'),
  title: 'Vino Pairings',
  description: 'Find the perfect wine and dish pairing.',
  openGraph: {
    type: 'website',
    url: 'https://vinopairings.com',
    title: 'Vino Pairings',
    description: 'Find the perfect wine and dish pairing.',
    images: [{ url: '/wineog.png', width: 1200, height: 630, alt: 'Vino Pairings Wine Glass' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vino Pairings',
    description: 'Find the perfect wine and dish pairing.',
    images: ['/wineog.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Perf for GA */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* JSON-LD */}
        <Script id="website-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Vino Pairings',
            url: 'https://vinopairings.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://vinopairings.com/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })}
        </Script>

        {/* GA4 */}
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

      <body className={`${inter.className} bg-white text-gray-800`}>
        <NavBar />
        <main className="max-w-2xl mx-auto p-4">{children}</main>

        <footer className="w-full p-4 mt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Vino Pairings · Created by{' '}
          <a
            href="https://pamelajterrell.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Pamela J. Terrell
          </a>
        </footer>

        {GA_ID && <GtagPageView />}
        <Analytics />

        {/* Mount widget outside SSR tree to avoid hydration diffs */}
        <ClientPortal>
          <div style={{ position: 'relative', zIndex: 2147483647 }}>
            <ChatWidget />
          </div>
        </ClientPortal>
      </body>
    </html>
  );
}
