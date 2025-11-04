import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vattara-ad.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "vattara-user-image.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "vattara-img.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;
