// src/app/tips/page.js
import Link from "next/link";
import TrackedVideoCard from "../components/TrackedVideoCard";
import TipsCTA from "../components/TipsCTA";

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

      <TrackedVideoCard
        src="/wine-opener.mp4"
        poster="/wine-thumbnail.png"
        caption="A simple demonstration of opening a wine bottle with a classic corkscrew."
        videoTitle="How to Use a Corkscrew"
        pagePath="/tips"
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

      {/* Affiliate Promotion Section */}
      <section className="rounded-2xl border border-[#d8cfc4] bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.18em] text-[#8a7463]">
            Recommended Tool
          </p>

          <h2 className="text-2xl md:text-3xl font-medium text-[#2f241f] [font-family:var(--font-playfair)]">
            Our Favorite Elegant Corkscrew
          </h2>

          <p className="text-[17px] leading-8 text-[#6b5645]">
            A quality corkscrew makes opening wine smoother, faster, and more
            enjoyable. We recommend choosing one with a comfortable grip,
            sturdy hinge, and clean foil cutter.
          </p>

          <div className="rounded-xl bg-[#fdf7ef] p-5 border border-[#eee2d6]">
            <p className="font-medium text-[#2f241f]">
              Premium Waiter’s Corkscrew
            </p>
            <p className="mt-2 text-sm leading-7 text-[#6b5645]">
              Sleek, reliable, and perfect for home entertaining or gifting.
            </p>

            <a
              href="YOUR_AFFILIATE_LINK_HERE"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-[#2f241f] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View Corkscrew →
            </a>
          </div>

          <p className="text-xs text-[#8a7463] leading-6">
            Disclosure: This page may contain affiliate links. If you purchase
            through them, Vino Pairings may earn a commission at no additional
            cost to you.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-[#d8cfc4] bg-[#fdf7ef] p-6 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#2f241f] [font-family:var(--font-playfair)]">
          Now that the bottle is open…
        </h2>

        <p className="mt-3 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
          Discover wines worth savoring and thoughtful pairings that elevate
          your next meal.
        </p>

        <TipsCTA href="/">Explore Wine Pairings →</TipsCTA>
      </section>
    </div>
  );
}