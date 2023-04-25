/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://medical-fast:8000/:path*' // Proxy to Backend
      }
    ]
  }
}

