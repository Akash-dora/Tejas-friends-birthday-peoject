const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: { unoptimized: true },
  basePath: isProd ? '/Tejas-friends-birthday-peoject' : '',
  assetPrefix: isProd ? '/Tejas-friends-birthday-peoject/' : '',
};

module.exports = nextConfig;
