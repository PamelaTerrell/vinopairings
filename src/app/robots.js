export default function robots() {
const baseUrl = 'https://vinopairings.com';
return {
rules: [
{
userAgent: '*',
allow: '/',
},
],
sitemap: `${baseUrl}/sitemap.xml`,
};
}