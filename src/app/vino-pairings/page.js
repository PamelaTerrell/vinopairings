// ========================================
// File: src/app/vino-pairings/page.jsx (SERVER)
// ========================================
export const metadata = {
title: 'Vino Pairings – Best Wine & Food Matches | VinoPairings',
description: 'The definitive vino pairings guide: quick rules, pairing chart, and examples for pasta, steak, sushi, cheese, and more.',
alternates: { canonical: 'https://vinopairings.com/vino-pairings/' },
openGraph: {
type: 'article',
title: 'Vino Pairings – Best Wine & Food Matches',
url: 'https://vinopairings.com/vino-pairings/',
images: [{ url: '/wineog.png', width: 1200, height: 630, alt: 'Vino Pairings Wine Glass' }]
},
twitter: {
card: 'summary_large_image',
title: 'Vino Pairings – Best Wine & Food Matches',
description: 'Quick rules, pairing chart, and examples for pasta, steak, sushi, cheese, and more.',
images: ['/wineog.png']
}
};

export default function VinoPairingsPage() {
const faq = {
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "What is the best vino pairing for steak?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Full-bodied reds with tannin like Cabernet Sauvignon or Malbec pair well with rich, fatty steaks."
}
},
{
"@type": "Question",
"name": "What wine pairs with spicy food?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Off-dry whites like Riesling or Gewürztraminer balance heat with a touch of sweetness and aromatics."
}
}
]
};

return (
<article className="prose prose-lg max-w-3xl mx-auto px-4 py-8">
<h1>Vino Pairings: A Simple Guide to Matching Wine with Food</h1>
<p>
Use these quick rules and examples to choose the right wine for your meal. For a hands-on tool,
try the pairing finder on the <a href="/">homepage</a>.
</p>

<h2>Quick Rules</h2>
<ul>
<li>Acid cuts fat (<em>Sauvignon Blanc</em> ↔ goat cheese)</li>
<li>Tannin loves protein (<em>Cabernet Sauvignon</em> ↔ steak)</li>
<li>Sweet tames heat (<em>Off-dry Riesling</em> ↔ spicy dishes)</li>
<li>Match intensity (delicate dishes with lighter wines, bold dishes with fuller wines)</li>
</ul>

<h2>Classic Vino Pairings</h2>
<ul>
<li>Pasta Bolognese → Sangiovese or Montepulciano</li>
<li>Roast Chicken → Chardonnay or Viognier</li>
<li>Sushi → Riesling or Champagne</li>
<li>Blue Cheese → Port</li>
<li>Grilled Steak → Cabernet Sauvignon</li>
</ul>


<h2>Printable Chart</h2>
<p>Prefer a visual? Save or print our chart below.</p>
<img src="/winebasics.png" alt="Wine pairing chart" />

<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
/>
</article>
);
}
