import notasJson from "./notas-blog-migradas.json";
import { siteUrl } from "./site";

export type NotaMigrada = {
  id: string;
  slug: string;
  titulo: string;
  publicadaEn: string;
  resumen: string;
  bodyMd: string;
};

const data = notasJson as { items: NotaMigrada[] };

export function allNotas(): NotaMigrada[] {
  return data.items;
}

export function notaBySlug(slug: string): NotaMigrada | undefined {
  return data.items.find((n) => n.slug === slug);
}

export function notaCanonicalUrl(slug: string): string {
  return `${siteUrl()}/notas/${slug}`;
}
