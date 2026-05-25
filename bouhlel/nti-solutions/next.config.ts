import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH is set explicitly in .github/workflows/deploy.yml
// when building for GitHub Pages (/NTI-solutions-Tunisia-).
// Locally it's empty so the dev server works at localhost:3000.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  images: {
    unoptimized: true, // required for static export — next/image needs a server
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "http", hostname: "ntisolutions.com.tn" },
    ],
  },
};

export default nextConfig;
