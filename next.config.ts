import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. ADD THIS LINE
  output: "standalone", 
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

export default nextConfig;
