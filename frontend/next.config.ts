import type { NextConfig } from "next";
import path from "path";

const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  webpack: (config) => {
    const aliases = (config.resolve?.alias ?? {}) as Record<string, string>;

    config.resolve = {
      ...(config.resolve ?? {}),
      alias: {
        ...aliases,
        "@": path.resolve(__dirname),
      },
    };

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
