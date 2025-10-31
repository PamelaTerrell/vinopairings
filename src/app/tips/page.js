// src/app/tips/page.js
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
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#3b2f2f]">
        Wine Tips &amp; How-Tos
      </h1>

      <p className="text-lg leading-relaxed text-[#5a4636]">
        Explore our favorite tips, tools, and tutorials to help you enjoy wine like a pro.
      </p>

      {/* Local MP4 Video */}
      <div className="rounded-2xl overflow-hidden bg-[#faf8f5] border border-[#e3d9cd] shadow-md">
        <video
          src="/wine-opener.mp4"
          controls
          playsInline
          preload="metadata"
          poster="/wine-thumbnail.png" 
          className="w-full h-auto"
        >
          Sorry, your browser doesn’t support embedded videos.
        </video>

        {/* Caption */}
        <div className="px-4 py-3 text-sm italic text-[#5a4636] bg-[#f7f3ef] border-t border-[#e3d9cd]">
          How to use a classic corkscrew the clean, safe way.
        </div>
      </div>

      {/* Description */}
      <section className="space-y-3 text-[#5a4636] leading-relaxed">
        <p>
          In this short video, Pamela demonstrates the easiest way to open a bottle of wine
          cleanly and safely — perfect for beginners and a handy refresher for everyone else.
        </p>
        <p>
          More tutorials coming soon — from glassware basics to food pairings and tasting tips.
          Cheers! 🍷
        </p>
      </section>
    </div>
  );
}
