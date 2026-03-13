import Image from 'next/image';

export const metadata = {
  title: 'Wine Guide Bundle Download | Vino Pairings',
  description: 'Download your complete Wine Guide Bundle.',
};

export default function WineGuideBundleDownloadPage() {
  return (
    <main className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] px-4 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-3">
          Your Wine Guide Bundle
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Thank you for supporting Vino Pairings 🍷
        </p>

        <div className="bg-white border border-[#D8CFC4] rounded-2xl shadow-md p-6">

          <div className="flex justify-center mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#7B1E3F] text-white">
              Bundle Included
            </span>
          </div>

          <p className="text-center mb-8 text-gray-700">
            Your bundle includes all three guides. Click any guide below to download.
          </p>

          <div className="grid gap-6">

            {/* Wine Glass Guide */}
            <div className="border border-[#D8CFC4] rounded-xl overflow-hidden shadow-sm bg-[#FDF7EF]">
              <Image
                src="/wine-glass-guide-preview.png"
                alt="Wine Glass Guide preview"
                width={1200}
                height={1600}
                className="w-full h-auto"
              />

              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg mb-2">
                  Wine Glass Guide
                </h3>

                <a
                  href="/downloads/wine-glass-guide.pdf"
                  download
                  className="inline-block bg-[#C59B5F] text-white font-semibold py-2 px-6 rounded hover:brightness-95 transition"
                >
                  Download Guide
                </a>
              </div>
            </div>


            {/* Sweet vs Dry */}
            <div className="border border-[#D8CFC4] rounded-xl overflow-hidden shadow-sm bg-[#FDF7EF]">
              <Image
                src="/dry-vs-sweet-preview.png"
                alt="Sweet vs Dry Wines preview"
                width={1200}
                height={1600}
                className="w-full h-auto"
              />

              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg mb-2">
                  Sweet vs. Dry Wines Guide
                </h3>

                <a
                  href="/downloads/sweet-dry-wines-guide.pdf"
                  download
                  className="inline-block bg-[#7B1E3F] text-white font-semibold py-2 px-6 rounded hover:brightness-95 transition"
                >
                  Download Guide
                </a>
              </div>
            </div>


            {/* Pairing Guide */}
            <div className="border border-[#D8CFC4] rounded-xl overflow-hidden shadow-sm bg-[#FDF7EF]">
              <Image
                src="/wine-pairing-basics-preview.png"
                alt="Wine Pairing Basics preview"
                width={1200}
                height={1600}
                className="w-full h-auto"
              />

              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg mb-2">
                  Wine Pairing Basics Guide
                </h3>

                <a
                  href="/downloads/wine-pairing-basics-guide.pdf"
                  download
                  className="inline-block bg-[#C59B5F] text-white font-semibold py-2 px-6 rounded hover:brightness-95 transition"
                >
                  Download Guide
                </a>
              </div>
            </div>

          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            If your download does not start automatically, click the button again.
          </p>

        </div>
      </div>
    </main>
  );
}