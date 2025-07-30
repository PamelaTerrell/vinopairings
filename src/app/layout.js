import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vino Pairings',
  description: 'Find the perfect wine and dish pairing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/winenavicon.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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

        <Analytics />
      </body>
    </html>
  );
}
