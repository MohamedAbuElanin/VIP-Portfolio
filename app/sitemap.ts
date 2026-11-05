import { MetadataRoute } from "next";
import { projects } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const pages = ["", "/about", "/projects", "/services", "/skills", "/experience", "/contact", "/blog"];
  const entries: MetadataRoute.Sitemap = ["en", "ar"].flatMap((locale) => pages.map((page) => ({ url: `${base}/${locale}${page}`, changeFrequency: "weekly" as const, priority: page === "" ? 1 : .8 })));
  for (const locale of ["en", "ar"]) for (const project of projects) entries.push({ url: `${base}/${locale}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: .7 });
  return entries;
}
