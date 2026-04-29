import Image from "next/image";

export const metadata = {
  title: "Sweet vs. Dry Wines Guide Download | Vino Pairings",
  description: "Download your Sweet vs. Dry Wines Guide printable PDF.",
};

export default function SweetDryWinesGuideDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f]">
      <section className="mx-auto max-w-2xl px-4 py-12">
        <div className="overflow-hidden rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_10px_30px_rgba(75,63,47,0.08)]">
          <header className="bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef] px-8 pb-8 pt-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6b57]">
              Vino Pairings
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-wide [font-family:var(--font-playfair)]">
              Your Sweet vs. Dry Wines Guide
            </h1>

            <p className="mt-4 leading-relaxed text-[#6b5b4b]">
              Thank you for supporting Vino Pairings 🍷
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
          </header>

          <section className="px-8 py-10">
            <div className="overflow-hidden rounded-2xl border border-[#d8cfc4] bg-white shadow-sm">
              <Image
                src="/dry-vs-sweet-preview.png"
                alt="Sweet vs. Dry Wines Guide preview"
                width={1400}
                height={1800}
                className="h-auto w-full"
              />

              <div className="p-6 text-center">
                <p className="text-[17px] leading-8 text-[#4b3f2f]">
                  Click below to download your high-resolution printable guide.
                </p>

                <a
                  href="/downloads/sweet-dry-wines-guide.pdf"
                  download
                  className="mt-6 inline-block rounded-full bg-[#7B1E3F] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                >
                  Download Your Printable PDF
                </a>

                <p className="mt-5 text-xs leading-6 text-[#7a6b57]">
                  For personal use only. Please do not redistribute.
                </p>
              </div>
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
          </section>
        </div>
      </section>
    </main>
  );
}