import type { NextConfig } from "next";

// When building in GitHub Actions, we need the basePath for the project page URL.
// Locally (dev/build without CI) the basePath is empty so the site works at localhost:3000.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubActions ? "/NTI-solutions-Tunisia-" : "",
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
