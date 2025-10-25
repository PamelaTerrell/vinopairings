// Server component (default). We'll import a client component for the embed.
import InstagramEmbed from "../components/InstagramEmbed";

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
  // NOTE: Your layout already wraps children with <main className="max-w-2xl mx-auto p-4">
  // So keep this page content simple (no extra <main>). If you want wider content,
  // bump the layout’s max width to `max-w-3xl` later.
  return (
    <div className="space-y-4 text-[#3b2f2f]">
      <h1 className="text-3xl md:text-4xl font-bold">Wine Tips &amp; How-Tos</h1>

      <p className="text-lg leading-relaxed">
        Explore our favorite tips, tools, and tutorials to help you enjoy wine like a pro.
      </p>

      <InstagramEmbed
        url="https://www.instagram.com/reel/DQNB2mhDydY/"
        caption="How to use a classic corkscrew the clean, safe way."
      />

      <section className="space-y-3 text-[#5a4636]">
        <p>
          In this short video, Pamela demonstrates the easiest way to open a bottle of wine
          cleanly and safely — perfect for beginners and a handy refresher for everyone else.
        </p>
        <p>More tutorials coming soon — cheers! 🍷</p>
      </section>
    </div>
  );
}
