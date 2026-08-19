import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const paths = [
  "/",
  "/frameworks/",
  "/3d-aiming/",
  "/clicker/",
  "/front-arm/",
  "/wind/",
  "/foundations/",
  "/coaching/",
  "/contact/",
  "/school/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
