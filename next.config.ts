import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  turbopack: {
    root: __dirname,
  },
  // `output: "export"` has no Node server to run next/image's on-demand
  // optimization API against, so images are served as-is. next/image still
  // gives lazy loading, explicit width/height (no layout shift), and object-fit
  // via `fill` — the intrinsic-size handling this app actually needs.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
