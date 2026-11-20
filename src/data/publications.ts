import catalog from "./publications-catalog.json";

export type PublicationKind =
  | "articulo-revista"
  | "reporte-caso"
  | "revision-narrativa"
  | "tesis-doctorado"
  | "divulgacion-blog";

export type Publication = {
  id: string;
  kind: PublicationKind;
  titulo: string;
  resumen: string;
  venue: string;
  year: number;
  publicadaEn: string;
  url: string;
  doi?: string;
  autores: string;
  rol?: string;
};

export type PublicationsCatalog = {
  meta: {
    autor: string;
    orcid: string;
    busquedaGoogleAcademico: string;
    indiceAliciaConcytec: string;
    notaFuentes: string;
    compiladoEn: string;
  };
  items: Publication[];
};

export const publicationsCatalog = catalog as PublicationsCatalog;

export const publicationKindLabels: Record<PublicationKind, string> = {
  "articulo-revista": "Artículo",
  "reporte-caso": "Reporte de caso",
  "revision-narrativa": "Revisión",
  "tesis-doctorado": "Tesis doctoral",
  "divulgacion-blog": "Blog",
};

export function publicationsSorted(): Publication[] {
  return [...publicationsCatalog.items].sort(
    (a, b) => new Date(b.publicadaEn).getTime() - new Date(a.publicadaEn).getTime(),
  );
}

export function academicPublications(): Publication[] {
  return publicationsSorted().filter((p) => p.kind !== "divulgacion-blog");
}

export function blogPublications(): Publication[] {
  return publicationsSorted().filter((p) => p.kind === "divulgacion-blog");
}
