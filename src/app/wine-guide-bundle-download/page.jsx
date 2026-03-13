import Image from 'next/image';

export const metadata = {
  title: 'Wine Guide Bundle Download | Vino Pairings',
  description: 'Download your complete Wine Guide Bundle.',
};

export default function WineGuideBundleDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-10">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-3">
          Your Wine Guide Bundle
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Thank you for supporting Vino Pairings 🍷
        </p>

        <div className="bg-white border border-[#D8CFC4] rounded-2xl shadow-md p-6 text-center">

          <p className="mb-6">
            Your bundle includes all three guides. Click below to download each one.
          </p>

          <div className="flex flex-col gap-4 items-center">

            <a
              href="/downloads/wine-glass-guide-printable.pdf"
              download
              className="inline-block bg-[#C59B5F] text-white font-semibold py-3 px-6 rounded hover:brightness-95 transition"
            >
              Download Wine Glass Guide
            </a>

            <a
              href="/downloads/sweet-dry-wines-guide.pdf"
              download
              className="inline-block bg-[#7B1E3F] text-white font-semibold py-3 px-6 rounded hover:brightness-95 transition"
            >
              Download Sweet vs Dry Wines Guide
            </a>

            <a
              href="/downloads/wine-pairing-basics-guide.pdf"
              download
              className="inline-block bg-[#C59B5F] text-white font-semibold py-3 px-6 rounded hover:brightness-95 transition"
            >
              Download Wine Pairing Basics Guide
            </a>

          </div>

          <p className="text-xs text-gray-500 mt-4">
            If a download does not start automatically, click the button again.
          </p>

        </div>
      </div>
    </main>
  );
}