// app/history/page.js
export const metadata = {
  title: 'History of Wine • Vino Pairings',
  description:
    'From ancient vineyards to modern vintages — explore the rich history of wine through time.',
};

export default function History() {
  const historyPoints = [
    {
      period: '6000 BC',
      event: 'Earliest Evidence',
      description:
        'Archaeologists have found evidence of grape wine production in the region of modern-day Georgia, making it one of the oldest known alcoholic beverages.',
    },
    {
      period: '1500 BC',
      event: 'Ancient Egypt',
      description:
        'Wine was highly valued in Ancient Egypt, often associated with religious rituals and feasts for the elite.',
    },
    {
      period: '700 BC',
      event: 'Greek Influence',
      description:
        "The Greeks advanced viticulture and spread winemaking throughout their colonies, emphasizing wine’s cultural importance.",
    },
    {
      period: 'Roman Empire',
      event: 'Expansion and Innovation',
      description:
        'Romans perfected wine production, introduced new techniques, and expanded vineyards across Europe, laying foundations for modern winemaking.',
    },
    {
      period: 'Middle Ages',
      event: 'Monastic Preservation',
      description:
        'Monasteries preserved and improved winemaking knowledge, maintaining vineyards and producing wine primarily for religious ceremonies.',
    },
    {
      period: '19th Century',
      event: 'Phylloxera Crisis',
      description:
        'A devastating root louse, phylloxera, nearly wiped out European vineyards, leading to grafting techniques that saved the industry.',
    },
    {
      period: 'Modern Era',
      event: 'Global Renaissance',
      description:
        'Winemaking spread globally, with New World regions like California, Australia, and South America producing world-class wines.',
    },
  ];

  const brand = {
    cream: '#f9f6ef',
    parchment: '#fdfaf3',
    cocoa: '#4b3f2f',
    gold: '#a37c58',
    line: '#d8cfc4',
    burgundy: '#6e2a2a',
  };

  return (
    <main
      className="max-w-5xl mx-auto px-6 py-12 md:py-16"
      style={{ backgroundColor: brand.cream, color: brand.cocoa }}
    >
      <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide text-center text-burgundy mb-12">
        A Brief History of Wine
      </h1>

      <div className="space-y-12">
        {historyPoints.map(({ period, event, description }) => (
          <section
            key={period}
            className="border-l-4 border-gold pl-8 relative bg-white/70 rounded-xl shadow-sm py-6"
            style={{
              borderColor: brand.gold,
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
            }}
          >
            <span
              className="absolute -left-10 top-6 w-6 h-6 rounded-full border-4 shadow-md"
              style={{
                backgroundColor: brand.burgundy,
                borderColor: brand.cream,
              }}
            />
            <time className="block font-semibold text-lg mb-2 text-charcoal">
              {period}
            </time>
            <h2 className="text-2xl font-serif font-bold text-burgundy mb-2">
              {event}
            </h2>
            <p className="text-charcoal font-body leading-relaxed max-w-prose">
              {description}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
