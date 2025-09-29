// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://vinopairings.com'),
  title: 'Vino Pairings',
  description: 'Find the perfect wine and dish pairing.',

  // ✅ Favicon & icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico']
  },

  manifest: '/site.webmanifest',
  themeColor: '#ffffff',

  alternates: {
    canonical: 'https://vinopairings.com',
  },

  openGraph: {
    type: 'website',
    url: 'https://vinopairings.com',
    title: 'Vino Pairings',
    description: 'Find the perfect wine and dish pairing.',
    siteName: 'Vino Pairings',
    images: [
      {
        url: '/wineog.png', // ✅ matches your file in /public
        width: 1200,
        height: 630,
        alt: 'Vino Pairings Wine Glass',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vino Pairings',
    description: 'Find the perfect wine and dish pairing.',
    images: ['/wineog.png'],
    creator: '@yourhandle',
  },

  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Vino Pairings',
      url: 'https://vinopairings.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://vinopairings.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        <Analytics />
      </body>
    </html>
  );
}
