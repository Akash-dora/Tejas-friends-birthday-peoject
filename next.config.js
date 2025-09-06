// next.config.js
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Tejas-friends-birthday-peoject' : '',
  assetPrefix: isProd ? '/Tejas-friends-birthday-peoject/' : '',
}

module.exports = nextConfig
