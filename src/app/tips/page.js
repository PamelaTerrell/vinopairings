// src/app/tips/page.js
import Link from "next/link";
import TrackedVideoCard from "../components/TrackedVideoCard";
import TipsCTA from "../components/TipsCTA";

export const metadata = {
  title: "How to Use a Corkscrew | Wine Tips & Tutorials | Vino Pairings",
  description:
    "Learn how to open a wine bottle properly using a classic corkscrew, with simple wine-opening tips from Vino Pairings.",
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
    <div className="mx-auto max-w-3xl space-y-10 text-[#3b2f2f]">
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
          By Pamela Terrell · Updated April 2026
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

      <section className="rounded-2xl border border-[#d8cfc4] bg-white p-6 shadow-sm">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.18em] text-[#8a7463]">
            Recommended Wine Tool
          </p>

          <h2 className="text-2xl font-medium text-[#2f241f] md:text-3xl [font-family:var(--font-playfair)]">
            A Classic Waiter’s Corkscrew Is Still One of the Best Choices
          </h2>

          <p className="text-[17px] leading-8 text-[#6b5645]">
            For most home wine lovers, a waiter’s corkscrew is elegant,
            compact, affordable, and reliable. Look for one with a comfortable
            grip, a built-in foil cutter, a sturdy hinge, and a smooth spiral.
          </p>

          <div className="rounded-xl border border-[#eee2d6] bg-[#fdf7ef] p-5">
            <h3 className="font-medium text-[#2f241f]">
              Premium Waiter’s Corkscrew
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#6b5645]">
              A refined option for everyday wine opening, dinner parties, and
              gifting. Ideal if you want something simple, useful, and timeless.
            </p>

            <Link
  href="/best-corkscrews"
  className="mt-4 inline-block rounded-full bg-[#6e2a2a] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#8a3a3a]"
>
  Explore Corkscrew Guide →
</Link>
          </div>

          <p className="text-xs leading-6 text-[#8a7463]">
            Disclosure: As an Amazon Associate I earn from qualifying purchases.
            This page may contain affiliate links, which means Vino Pairings may
            earn a commission at no additional cost to you.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-[#d8cfc4] bg-[#fdf7ef] p-6 shadow-sm">
        <h2 className="text-2xl font-medium tracking-tight text-[#2f241f] md:text-3xl [font-family:var(--font-playfair)]">
          Now that the bottle is open…
        </h2>

        <p className="mt-3 max-w-2xl text-[17px] leading-8 text-[#6b5645]">
          Discover wines worth savoring and thoughtful pairings that elevate
          your next meal.
        </p>

        <div className="mt-5">
          <TipsCTA href="/">Explore Wine Pairings →</TipsCTA>
        </div>
      </section>
    </div>
  );
}