import { siteUrl } from "@/data/site";

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export function publicPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export function absoluteUrl(path: string): string {
  const base = siteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const buscadisProfileUrl = "https://buscadis.com/@dr-victor-manchego";
