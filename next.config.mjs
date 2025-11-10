/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/vino-pairings',
        destination: '/',
        permanent: true,
      },
      {
        source: '/vino-pairings/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
