// src/app/tips/page.js

import Link from "next/link";
import TrackedVideoCard from "../components/TrackedVideoCard";
import TipsCTA from "../components/TipsCTA";

export const metadata = {
  title: "How to Use a Corkscrew | Wine Tips & Tutorials | Vino Pairings",
  description:
    "Learn how to open a wine bottle properly using a classic corkscrew, with simple wine-opening tips from Vino Pairings.",
  alternates: {
    canonical: "/tips",
  },
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
    <div className="mx-auto max-w-3xl space-y-10 text-[#3b2f2f]">
      {/* HEADER */}
      <header className="space-y-5">
        <p className="text-sm uppercase tracking-[0.22em] text-[#8a7463]">
          Wine Tips & Tutorials
        </p>

        <h1 className="text-4xl font-medium tracking-tight text-[#2f241f] md:text-5xl [font-family:var(--font-playfair)]">
          How to Use a Corkscrew Gracefully
        </h1>

        <div className="h-px w-24 bg-[#d8cfc4]" />

        <p className="max-w-2xl text-[18px] leading-8 text-[#6b5645]">
          Opening a bottle of wine should feel simple, smooth, and confident.
          This short tutorial shows you how to use a classic corkscrew without
          crumbling the cork, struggling with the foil, or feeling unsure at the
          table.
        </p>

        <p className="text-sm text-[#8a7463]">
          By Pamela Terrell · Updated August 2026
        </p>
      </header>

      {/* VIDEO */}
      <TrackedVideoCard
        src="/wine-opener.mp4"
        poster="/wine-thumbnail.png"
        caption="A simple demonstration of opening a wine bottle with a classic corkscrew."
        videoTitle="How to Use a Corkscrew"
        pagePath="/tips"
      />

      {/* TUTORIAL COPY */}
      <section className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#6b5645]">
        <p>
          A well-opened bottle sets the tone for the entire wine experience.
          With the right corkscrew and a steady approach, removing the cork
          becomes less of a task and more of a small ritual.
        </p>

        <p>
          The key is to cut the foil cleanly, center the spiral, twist slowly,
          and lift with control. You do not need to rush or force it. A little
          patience helps preserve the cork and keeps the presentation elegant.
        </p>

        <p>
          This method is especially helpful if you are new to wine, hosting
          guests, or simply want to feel more confident opening a bottle at
          home.
        </p>
      </section>

      {/* BEGINNER OPENER GUIDE */}
      <section className="rounded-2xl border border-[#d8cfc4] bg-white p-6 shadow-sm">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.18em] text-[#8a7463]">
            Wine Essentials
          </p>

          <h2 className="text-2xl font-medium text-[#2f241f] md:text-3xl [font-family:var(--font-playfair)]">
            Need the Right Corkscrew First?
          </h2>

          <p className="text-[17px] leading-8 text-[#6b5645]">
            If you are new to opening wine, the right tool can make the process
            feel much easier. Our beginner-friendly guide explains the most
            common corkscrew styles and helps you understand which options are
            simplest and most comfortable to use.
          </p>

          <div className="rounded-xl border border-[#eee2d6] bg-[#fdf7ef] p-5">
            <h3 className="font-medium text-[#2f241f]">
              Best Wine Opener for Beginners
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#6b5645]">
              Learn about wing corkscrews, waiter&apos;s corkscrews, lever
              openers, electric options, and other beginner-friendly tools for
              opening wine with confidence.
            </p>

            <Link
              href="/best-wine-opener-for-beginners"
              className="mt-4 inline-block rounded-full bg-[#6e2a2a] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#8a3a3a]"
            >
              View Beginner Wine Opener Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="rounded-2xl border border-[#d8cfc4] bg-[#fdf7ef] p-6 shadow-sm">
        <h2 className="text-2xl font-medium tracking-tight text-[#2f241f] md:text-3xl [font-family:var(--font-playfair)]">
          Now that the bottle is open…
        </h2>

        <p className="mt-3 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
          Discover approachable wine pairings and practical guidance for
          choosing what to pour with your next meal.
        </p>

        <div className="mt-5">
          <TipsCTA href="/">
            Explore Wine Pairings →
          </TipsCTA>
        </div>
      </section>
    </div>
  );
}