export const metadata = {
  title: 'Disclosure | Vino Pairings',
  description: 'Affiliate and advertising disclosure for Vino Pairings.',
};

export default function DisclosurePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Disclosure</h1>

      <p className="mb-4">
        Vino Pairings participates in affiliate marketing programs and may
        earn commissions from qualifying purchases made through links on this
        website.
      </p>

      <p className="mb-4">
        Some links on this site may direct you to third-party websites,
        including wine brands, retailers, or partners. If you click these
        links, we may receive compensation at no additional cost to you.
      </p>

      <p className="mb-4">
        All wine recommendations and pairing suggestions are created
        independently based on pairing principles and editorial judgment.
        Compensation does not influence recommendations.
      </p>

      <p className="mb-4">
        Vino Pairings is intended for informational and educational purposes
        only. Please enjoy wine responsibly and follow local laws regarding
        alcohol consumption.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Questions? Contact us at{' '}
        <a
          href="mailto:pammyhoney@yahoo.com"
          className="underline"
        >
          pammyhoney@yahoo.com
        </a>.
      </p>
    </div>
  );
}