// src/app/tips/page.js
import VideoCard from "../components/VideoCard";

export const metadata = {
  title: "Wine Tips & How-Tos | Vino Pairings",
  description:
    "Learn wine tips and techniques — from using a corkscrew to pairing the perfect glass.",
  alternates: { canonical: "/tips" },
  openGraph: {
    title: "Wine Tips & How-Tos",
    description: "Quick, useful tutorials to help you enjoy wine like a pro.",
    type: "article",
    url: "https://vinopairings.com/tips",
  },
};

export default function TipsPage() {
  return (
    <div className="space-y-6 text-[#3b2f2f]">
      <h1 className="text-3xl md:text-4xl font-bold">Wine Tips &amp; How-Tos</h1>

      <p className="text-lg leading-relaxed text-[#5a4636]">
        Explore our favorite tips, tools, and tutorials to help you enjoy wine like a pro.
      </p>

      <VideoCard
        src="/wine-opener.mp4"
        poster="/wine-thumbnail.png"
        caption="How to use a classic corkscrew the clean, safe way."
      />

      <section className="space-y-3 text-[#5a4636] leading-relaxed">
        <p>
          In this short video, Pamela demonstrates the easiest way to open a bottle of wine
          cleanly and safely — perfect for beginners and a handy refresher for everyone else.
        </p>
        <p>More tutorials coming soon — cheers! 🍷</p>
      </section>
    </div>
  );
}
