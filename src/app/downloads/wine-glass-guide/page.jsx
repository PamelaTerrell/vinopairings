export const metadata = {
  title: "Wine Glass Guide Download | Vino Pairings",
  description: "Download your Wine Glass Guide printable PDF.",
};

export default function WineGlassGuideDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_10px_30px_rgba(75,63,47,0.08)] overflow-hidden">
          <header className="px-8 pt-10 pb-8 text-center bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef]">
            <p className="text-sm uppercase tracking-[0.22em] text-[#7a6b57] font-medium">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-wide [font-family:var(--font-playfair)]">
              Your Wine Glass Guide
            </h1>

            <p className="mt-4 text-[#6b5b4b] leading-relaxed">
              Thank you for supporting Vino Pairings 🍷
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </header>

          <section className="px-8 py-10">
            <div className="rounded-2xl border border-[#d8cfc4] bg-white p-6 shadow-sm text-center">
              <p className="text-[17px] leading-8 text-[#4b3f2f]">
                Click below to download your high-resolution printable guide.
              </p>

              <a
                href="/downloads/wine-glass-guide.pdf"
                download
                className="mt-6 inline-block rounded-full bg-[#a37c58] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Download Your Printable PDF
              </a>

              <p className="mt-5 text-xs leading-6 text-[#7a6b57]">
                For personal use only. Please do not redistribute.
              </p>
            </div>

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

            <div className="mt-8 text-center">
              <a
                href="/"
                className="text-sm font-medium text-[#6e2a2a] underline underline-offset-4 hover:text-[#8a3a3a]"
              >
                ← Return to Vino Pairings
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}