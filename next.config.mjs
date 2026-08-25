/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  distDir: process.env.NEXT_DIST_DIR || ".next",
  staticPageGenerationTimeout: 300,
};

export default nextConfig;

export default nextConfig;
