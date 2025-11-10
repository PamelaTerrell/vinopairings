// ================================
// File: src/app/page.jsx (SERVER)
// ================================
import HomeClient from './HomeClient';

export const metadata = {
title: 'Vino Pairings – Simple Wine & Food Matches',
description: 'Discover easy, expert vino pairings for pasta, steak, sushi, cheese, and more.',
alternates: { canonical: 'https://vinopairings.com/' },
openGraph: {
type: 'website',
url: 'https://vinopairings.com/',
title: 'Vino Pairings',
description: 'Find the perfect wine and dish pairing.',
images: [{ url: '/wineog.png', width: 1200, height: 630, alt: 'Vino Pairings Wine Glass' }]
},
twitter: {
card: 'summary_large_image',
title: 'Vino Pairings',
description: 'Find the perfect wine and dish pairing.',
images: ['/wineog.png']
}
};

export default function Page() {
return <HomeClient />;
}