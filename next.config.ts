import type { NextConfig } from "next";

/** GitHub Pages project preview lives at /hustonarchery. Drop both when the apex domain is live. */
const previewBasePath = "/hustonarchery";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: previewBasePath,
  assetPrefix: previewBasePath,
};

export default nextConfig;
