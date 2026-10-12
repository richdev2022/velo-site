import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* pin the tracing root to this project so standalone output stays at
     .next/standalone/server.js (no extra nesting), whatever the clone folder is named */
  outputFileTracingRoot: path.join(__dirname),
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
