import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ini akan disable ESLint selama build dan dev
  ignoreDuringBuilds: true,
};

export default nextConfig;
