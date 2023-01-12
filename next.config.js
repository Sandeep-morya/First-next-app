/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lumiere-a.akamaihd.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
