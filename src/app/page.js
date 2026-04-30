// ================================
// File: src/app/page.jsx (SERVER)
// ================================
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Vino Pairings | Wine Pairing Guides, Gifts & Entertaining Ideas",
  description:
    "Discover elegant wine and food pairings, beginner-friendly wine tips, wine gift guides, corkscrew tutorials, and entertaining essentials.",
  alternates: {
    canonical: "https://vinopairings.com/",
  },
  openGraph: {
    type: "website",
    url: "https://vinopairings.com/",
    title: "Vino Pairings | Wine Pairing Guides & Elegant Entertaining",
    description:
      "Find wine pairings, beginner wine tips, gift guides, corkscrew tutorials, and elegant entertaining ideas.",
    images: [
      {
        url: "/wineog.png",
        width: 1200,
        height: 630,
        alt: "Vino Pairings wine and food pairing guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vino Pairings | Wine Pairing Guides & Gifts",
    description:
      "Elegant wine pairings, beginner tips, gift guides, and entertaining ideas.",
    images: ["/wineog.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}