import Image from 'next/image';

export const metadata = {
  title: 'Sweet vs. Dry Wines Guide Download | Vino Pairings',
  description: 'Download your Sweet vs. Dry Wines Guide.',
};

export default function SweetDryWinesGuideDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-3">
          Your Sweet vs. Dry Wines Guide
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Thank you for supporting Vino Pairings 🍷
        </p>

        <div className="bg-white border border-[#D8CFC4] rounded-2xl shadow-md overflow-hidden">
          <Image
            src="/dry-vs-sweet-preview.png"
            alt="Sweet vs. Dry Wines Guide preview"
            width={1400}
            height={1800}
            className="w-full h-auto"
          />

          <div className="p-6 text-center">
            <p className="mb-4">
              Click below to download your guide:
            </p>

            <a
              href="/downloads/sweet-dry-wines-guide.pdf"
              download
              className="inline-block bg-[#7B1E3F] text-white font-semibold py-3 px-6 rounded hover:brightness-95 transition"
            >
              Download Your Guide
            </a>

            <p className="text-xs text-gray-500 mt-3">
              If your download does not begin right away, click the button again.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}