import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif","image/webp"], deviceSizes:[360,480,640,828,1080,1200], imageSizes:[96,160,256,384], qualities:[60,65,68,70,74,80], minimumCacheTTL: 31536000 },
  experimental: { optimizeCss: true, inlineCss: true },
  compiler: { removeConsole: { exclude: ["error"] } },
  async headers() {
    return [
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};
export default nextConfig;
