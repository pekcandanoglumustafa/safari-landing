import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif","image/webp"], deviceSizes:[360,480,640,828,1080,1200,1600], qualities:[70,80,82], minimumCacheTTL: 31536000 },
  experimental: { optimizeCss: true, inlineCss: true },
  compiler: { removeConsole: { exclude: ["error"] } },
};
export default nextConfig;
