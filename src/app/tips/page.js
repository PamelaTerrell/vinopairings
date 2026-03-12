// src/app/tips/page.js
import Link from "next/link";
import VideoCard from "../components/VideoCard";

export const metadata = {
  title: "How to Use a Corkscrew | Wine Tips & Tutorials | Vino Pairings",
  description:
    "Learn how to open a wine bottle properly using a classic corkscrew. Easy wine tips and tutorials from Vino Pairings.",
  alternates: { canonical: "/tips" },
  openGraph: {
    title: "How to Use a Corkscrew | Wine Tips & Tutorials",
    description:
      "Learn how to open a wine bottle the clean and safe way using a corkscrew.",
    type: "article",
    url: "https://vinopairings.com/tips",
  },
};

export default function TipsPage() {
  return (
    <div className="space-y-6 text-[#3b2f2f]">
      <h1 className="text-3xl md:text-4xl font-bold">
        Wine Tips: How to Open a Bottle with a Corkscrew
      </h1>

      <p className="text-lg leading-relaxed text-[#5a4636]">
        Learn simple wine tips and techniques to enjoy wine with confidence,
        starting with how to use a classic corkscrew the right way.
      </p>

      <VideoCard
        src="/wine-opener.mp4"
        poster="/wine-thumbnail.png"
        caption="How to use a classic corkscrew the clean, safe way."
      />

      <section className="space-y-3 text-[#5a4636] leading-relaxed">
        <p>
          In this short video, Pamela demonstrates the easiest way to open a bottle of
          wine using a classic corkscrew. This simple wine tutorial helps beginners avoid
          broken corks, spills, and frustration.
        </p>

        <p>
          Whether you are new to wine or just want a quick refresher, this easy technique
          will help you open your bottle cleanly and safely.
        </p>

        <p>More wine tutorials coming soon — cheers! 🍷</p>
      </section>

      <section className="rounded-2xl border border-[#d8cfc4] bg-[#fdf7ef] p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#3b2f2f]">
          Now that the bottle is open…
        </h2>

        <p className="mt-2 text-[#5a4636] leading-relaxed">
          Discover what wine pairs best with your meal and explore more wine
          inspiration on Vino Pairings.
        </p>

        <Link
          href="/"
          className="inline-flex mt-4 items-center rounded-lg bg-[#7a1e1e] px-5 py-3 text-white transition hover:opacity-90"
        >
          Explore Wine Pairings →
        </Link>
      </section>
    </div>
  );
}