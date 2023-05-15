/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["occ-0-3933-116.1.nflxso.net", "occ.a.nflxso.net"],
    allowFutureImage: true,
  },
};

module.exports = nextConfig;
