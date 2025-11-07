/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/history',
        destination: '/about',
        permanent: false, // 302 = temporary, safe for SEO & testing
      },
    ];
  },
};

export default nextConfig;
