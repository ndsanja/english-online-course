import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ini akan disable ESLint selama build dan dev
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
