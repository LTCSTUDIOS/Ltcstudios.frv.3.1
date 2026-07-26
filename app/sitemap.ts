import type { MetadataRoute } from "next";
import { site } from "./data/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/ltc-studios",
  "/marques",
  "/marques/seaklone",
  "/marques/wolfibeat",
  "/marques/tom-a-la-prod",
  "/services",
  "/projets",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date("2026-07-26"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/marques/") ? 0.8 : 0.7,
  }));
}
