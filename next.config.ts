import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable cache components and partial prerendering
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
