import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({
  // Add markdown plugins here, if you want
  extension: /\.(md|mdx)$/,
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // output: 'export',
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true, // needed if you use next/image with static export
  },
};

// Wrap with both plugins
export default withNextIntl(
  withMDX(nextConfig)
);