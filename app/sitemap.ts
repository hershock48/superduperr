import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const BASE = "https://superduperdrinks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/shop", "/our-story", "/find-us", "/wholesale", "/rewards", "/news", "/contact"].map(
    (p) => ({ url: `${BASE}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 })
  );
  const productPages = products.map((p) => ({
    url: `${BASE}/product/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [...staticPages, ...productPages];
}
