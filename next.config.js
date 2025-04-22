/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['warpcast.com', 'www.base.org', 'app.talentprotocol.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://warpcast.com',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://warpcast.com",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 