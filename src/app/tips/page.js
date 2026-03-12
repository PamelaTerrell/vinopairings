// src/app/tips/page.js
import Link from "next/link";
import VideoCard from "../components/VideoCard";

export const metadata = {
  title: "How to Use a Corkscrew | Wine Tips & Tutorials | Vino Pairings",
  description:
    "Learn how to open a wine bottle properly using a classic corkscrew. Elegant wine tips and tutorials from Vino Pairings.",
  alternates: { canonical: "/tips" },
  openGraph: {
    title: "How to Use a Corkscrew | Wine Tips & Tutorials",
    description:
      "A simple and elegant guide to opening a bottle of wine with a classic corkscrew.",
    type: "article",
    url: "https://vinopairings.com/tips",
  },
};

export default function TipsPage() {
  return (
    <div className="max-w-3xl space-y-10 text-[#3b2f2f]">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#2f241f] [font-family:var(--font-playfair)]">
          Opening a Bottle with Grace
        </h1>

        <div className="h-px w-24 bg-[#d8cfc4]" />

        <p className="max-w-2xl text-[18px] leading-8 text-[#6b5645]">
          A well-opened bottle sets the tone for the entire experience. In this
          short tutorial, learn the simple technique that makes using a classic
          corkscrew feel smooth, clean, and effortless.
        </p>
      </header>

      <VideoCard
        src="/wine-opener.mp4"
        poster="/wine-thumbnail.png"
        caption="A simple demonstration of opening a wine bottle with a classic corkscrew."
      />

      <section className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#6b5645]">
        <p>
          In this brief demonstration, Pamela shares a reliable way to remove
          the cork cleanly and without disturbing the wine. With just a little
          care and the right approach, opening a bottle becomes a small ritual
          that adds to the enjoyment of the moment.
        </p>

        <p>
          Whether you are new to wine or simply appreciate doing things with a
          bit more ease and intention, this method will help you open each
          bottle confidently and gracefully.
        </p>

        <p className="italic text-[#8a7463]">
          More wine tips and tutorials will be added soon. Cheers. 🍷
        </p>
      </section>

      <section className="rounded-2xl border border-[#d8cfc4] bg-[#fdf7ef] p-6 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#2f241f] [font-family:var(--font-playfair)]">
          Now that the bottle is open…
        </h2>

        <p className="mt-3 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
          Discover wines worth savoring and thoughtful pairings that elevate
          your next meal.
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex items-center rounded-lg bg-[#7a1e1e] px-5 py-3 text-white transition hover:opacity-90"
        >
          Explore Wine Pairings →
        </Link>
      </section>
    </div>
  );
}