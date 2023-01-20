/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/player',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
