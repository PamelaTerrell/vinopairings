import Image from 'next/image';

export const metadata = {
  title: 'Wine Pairing Basics Guide Download | Vino Pairings',
  description: 'Download your Wine Pairing Basics Guide.',
};

export default function WinePairingBasicsGuideDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-10 md:py-14">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <header className="text-center">

          <h1 className="text-3xl md:text-4xl font-semibold [font-family:var(--font-playfair)] mb-3">
            Your Wine Pairing Basics Guide
          </h1>

          <p className="text-[#6b5b4b] text-lg mb-6">
            Thank you for supporting Vino Pairings 🍷
          </p>

          <div className="mx-auto mb-8 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />

        </header>

        {/* Card */}
        <div className="bg-white border border-[#D8CFC4] rounded-2xl shadow-lg overflow-hidden">

          {/* Preview Image */}
          <Image
            src="/wine-pairing-basics-guide.png"
            alt="Wine Pairing Basics Guide preview"
            width={1400}
            height={1800}
            className="w-full h-auto"
          />

          {/* Content */}
          <div className="p-8 text-center">

            <p className="text-lg mb-6 text-[#5f5144]">
              Click below to download your printable guide.
            </p>

            <a
              href="/downloads/wine-pairing-basics-guide.pdf"
              download
              className="inline-block bg-[#C59B5F] text-white font-semibold py-3 px-8 rounded-lg hover:brightness-95 transition"
            >
              Download Your Guide
            </a>

            <p className="text-sm text-gray-500 mt-4">
              If your download does not start automatically, click the button again.
            </p>

          </div>

        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-[#857563] mt-8 leading-relaxed">
          This guide is designed to help you quickly understand classic wine
          pairings so you can choose wines with more confidence.
        </p>

      </div>

    </main>
  );
}