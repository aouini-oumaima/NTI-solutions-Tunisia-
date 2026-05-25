import type { NextConfig } from "next";

// When building in GitHub Actions, we need the basePath for the project page URL.
// Locally (dev/build without CI) the basePath is empty so the site works at localhost:3000.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const BASE_PATH = isGitHubActions ? "/NTI-solutions-Tunisia-" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  // Expose basePath to all components so raw <img> tags can also prepend it
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true, // required for static export — next/image optimization needs a server
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "http", hostname: "ntisolutions.com.tn" },
    ],
  },
};

export default nextConfig;
