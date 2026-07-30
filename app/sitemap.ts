import type { MetadataRoute } from "next";
import { PKGS } from "@/data";
const SITE = "https://www.sidequadbuggy.com";
const L = ["", "/en", "/de", "/ru", "/pl"];
export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const l of L) {
    out.push({ url: `${SITE}${l || "/"}`, changeFrequency: "weekly", priority: 1 });
    out.push({ url: `${SITE}${l}/sss`, changeFrequency: "monthly", priority: 0.8 });
    out.push({ url: `${SITE}${l}/iletisim`, changeFrequency: "monthly", priority: 0.8 });
    for (const p of PKGS) out.push({ url: `${SITE}${l}/tur/${p.slug}`, changeFrequency: "weekly", priority: 0.9 });
  }
  return out;
}
