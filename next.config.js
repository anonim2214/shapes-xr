/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  ignoreBuildErrors: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
