import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bricocompacto",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
