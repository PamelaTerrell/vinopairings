import Image from 'next/image';

export const metadata = {
  title: 'Wine Pairing Basics Guide Download | Vino Pairings',
  description: 'Download your Wine Pairing Basics Guide.',
};

export default function WinePairingBasicsGuideDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-10">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-3">
          Your Wine Pairing Basics Guide
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Thank you for supporting Vino Pairings 🍷
        </p>

        <div className="bg-white border border-[#D8CFC4] rounded-2xl shadow-md overflow-hidden">

          <Image
            src="/wine-pairing-basics-preview.png"
            alt="Wine Pairing Basics Guide preview"
            width={1400}
            height={1800}
            className="w-full h-auto"
          />

          <div className="p-6 text-center">

            <p className="mb-4">
              Click below to download your guide:
            </p>

            <a
              href="/downloads/wine-pairing-basics-guide.png"
              download
              className="inline-block bg-[#C59B5F] text-white font-semibold py-3 px-6 rounded hover:brightness-95 transition"
            >
              Download Your Guide
            </a>

            <p className="text-xs text-gray-500 mt-3">
              If your download does not start automatically, click the button again.
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}