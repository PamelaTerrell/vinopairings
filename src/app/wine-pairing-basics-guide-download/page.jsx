import Image from "next/image";

export const metadata = {
  title: "Wine Pairing Basics Guide Download | Vino Pairings",
  description: "Download your Wine Pairing Basics Guide printable PDF.",
};

export default function WinePairingBasicsGuideDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="overflow-hidden rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_10px_30px_rgba(75,63,47,0.08)]">
          {/* Header */}
          <header className="bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef] px-8 pb-8 pt-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6b57]">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-wide md:text-5xl [font-family:var(--font-playfair)]">
              Your Wine Pairing Basics Guide
            </h1>

            <p className="mt-4 text-base leading-relaxed text-[#6b5b4b] md:text-lg">
              Thank you for supporting Vino Pairings 🍷
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </header>

          {/* Body */}
          <section className="px-8 py-10">
            <div className="overflow-hidden rounded-2xl border border-[#d8cfc4] bg-white shadow-sm">
              {/* Preview */}
              <Image
                src="/wine-pairing-basics-guide.png"
                alt="Wine Pairing Basics Guide preview"
                width={1400}
                height={1800}
                className="h-auto w-full"
              />

              {/* Content */}
              <div className="p-8 text-center">
                <p className="text-[17px] leading-8 text-[#5f5144]">
                  Click below to download your high-resolution printable guide.
                </p>

                <a
                  href="/downloads/wine-pairing-basics-guide.pdf"
                  download
                  className="mt-6 inline-block rounded-full bg-[#C59B5F] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                >
                  Download Your Printable PDF
                </a>

                <p className="mt-5 text-xs leading-6 text-[#7a6b57]">
                  For personal use only. Please do not redistribute.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="mt-8 rounded-2xl border border-[#d8cfc4] bg-[#f9f6ef] px-6 py-5">
              <p className="text-sm text-[#5f5144]">
                Need help? Email{" "}
                <a
                  href="mailto:hello@vinopairings.com"
                  className="font-medium text-[#6e2a2a] underline underline-offset-4 hover:text-[#8a3a3a]"
                >
                  hello@vinopairings.com
                </a>
                .
              </p>
            </div>

            {/* Footer Note */}
            <p className="mt-8 text-center text-sm leading-7 text-[#857563]">
              This guide is designed to help you quickly understand classic wine
              pairings so you can choose wines with more confidence for meals,
              gatherings, and everyday enjoyment.
            </p>

            <div className="mt-6 text-center">
              <a
                href="/printable-guides"
                className="text-sm font-medium text-[#6e2a2a] underline underline-offset-4 hover:text-[#8a3a3a]"
              >
                ← Browse More Printable Guides
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}