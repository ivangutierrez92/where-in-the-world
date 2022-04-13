/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    domains: ['upload.wikimedia.org', 'flagcdn.com'],
  },
  productionBrowserSourceMaps: true,
  assetPrefix: '/where-in-the-world/',
  basePath: '/where-in-the-world',
};

module.exports = nextConfig;
