import type { MetadataRoute } from "next";
import { getAllLandingSlugs } from "@/data/landings";
import { services } from "@/data/services";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const staticPaths = [
    "",
    "/servicios",
    "/trayectoria",
    "/publicaciones",
    "/notas/plantas-medicinales-medicina-integrativa",
    "/notas/secuelas-covid-19",
    "/ubicacion",
    "/contacto",
  ];
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.75,
  }));

  for (const slug of getAllLandingSlugs()) {
    entries.push({
      url: `${base}/c/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  for (const s of services) {
    entries.push({
      url: `${base}/servicios/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
