// ================================
// File: src/app/page.jsx (SERVER)
// ================================
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Wine Pairing Made Easy | Food & Wine Guides | Vino Pairings",
  description:
    "Make wine pairing easy with approachable food and wine guides, beginner-friendly wine tips, corkscrew tutorials, and elegant entertaining inspiration.",

  alternates: {
    canonical: "https://vinopairings.com/",
  },

  openGraph: {
    type: "website",
    url: "https://vinopairings.com/",
    title: "Wine Pairing Made Easy | Vino Pairings",
    description:
      "Approachable food and wine pairings, beginner wine tips, corkscrew help, and elegant entertaining inspiration.",
    images: [
      {
        url: "/wineog.png",
        width: 1200,
        height: 630,
        alt: "Vino Pairings food and wine pairing guides",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wine Pairing Made Easy | Vino Pairings",
    description:
      "Approachable wine pairings, beginner tips, corkscrew help, and entertaining inspiration.",
    images: ["/wineog.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}