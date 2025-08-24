// next.config.js
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // output: 'export', // keep commented if you don't want static export
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    unoptimized: true // needed if you use next/image with static export
  }
};

module.exports = withNextIntl(nextConfig);
