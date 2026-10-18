import type { NextConfig } from "next";

const basePath =
  typeof process.env.NEXT_PUBLIC_BASE_PATH === "string"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : (process.env.NODE_ENV === "production" ? "/My_portfolio" : "");

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  trailingSlash: true,
};

export default nextConfig;
