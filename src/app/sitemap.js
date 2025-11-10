// =============================================
// File: src/app/sitemap.js
// =============================================
export default function sitemap() {
  const baseUrl = 'https://vinopairings.com';

  // Only include real, live routes
  const routes = [
    '/',
    '/about',
    '/history',
    '/regions',
    '/tips',
    '/sunday',
    '/celestial-sips',
    '/contact',
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.7,
  }));
}
