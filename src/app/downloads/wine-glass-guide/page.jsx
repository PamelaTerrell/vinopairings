export const metadata = {
  title: 'Wine Glass Guide Download | Vino Pairings',
  description: 'Download your Wine Glass Guide printable PDF.',
};

export default function WineGlassGuideDownloadPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-3">
        Your Wine Glass Guide
      </h1>

      <p className="text-gray-700 mb-6">
        Thank you for supporting Vino Pairings 🍷
      </p>

      <div className="bg-[#FDF7EF] border border-[#D8CFC4] rounded-xl shadow p-6">
        <p className="mb-4">
          Click below to download your high-resolution printable guide:
        </p>

        <a
          href="/downloads/Wine-Glass-Guide-Printable.pdf"
          download
          className="inline-block bg-[#C59B5F] text-white font-semibold py-2 px-6 rounded hover:brightness-95 transition"
        >
          Download Your Printable PDF
        </a>

        <p className="text-xs text-gray-500 mt-4">
          For personal use only. Please do not redistribute.
        </p>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Need help? Email{' '}
        <a
          href="mailto:pammyhoney@yahoo.com"
          className="underline"
        >
          pammyhoney@yahoo.com
        </a>
        .
      </p>
    </div>
  );
}