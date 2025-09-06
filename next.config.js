// filepath: c:\Users\webil\Downloads\birthday-site-v2-main\next.config.js
// ...existing code...
const nextConfig = {
  // Remove this line:
  // output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Tejas-friends-birthday-peoject' : '',
  assetPrefix: isProd ? '/Tejas-friends-birthday-peoject/' : '',
}

module.exports = nextConfig
