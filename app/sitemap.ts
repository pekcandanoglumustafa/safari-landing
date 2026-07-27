import type { MetadataRoute } from "next";
import { PKGS } from "@/data";
const SITE = "https://www.nergistour.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: "weekly", priority: 1 },
    ...PKGS.map((p) => ({ url: `${SITE}/tur/${p.slug}`, changeFrequency: "weekly" as const, priority: 0.9 })),
  ];
}
