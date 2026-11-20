import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { PublicationList } from "@/components/PublicationList";
import { PublicacionesClient } from "./PublicacionesClient";
import {
  academicPublications,
  blogPublications,
  publicationsCatalog,
  publicationsSorted,
} from "@/data/publications";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Publicaciones",
  description:
    "Artículos, tesis y notas del Dr. Víctor Manchego en Revista Peruana de Medicina Integrativa, repositorios UNSA/EsSalud y blog.",
};

export default function PublicacionesPage() {
  const all = publicationsSorted();
  const academic = academicPublications();
  const blog = blogPublications();

  return (
    <>
      <Section
        eyebrow="Investigación y divulgación"
        title="Publicaciones y escritos"
        description="Listado compilado desde Google Académico (búsqueda), ORCID, ALICIA/CONCYTEC, RPMI y el blog del doctor. Enlaces abren la fuente original."
      >
        <div className="mb-8 flex flex-wrap gap-3 text-sm">
          <a
            href={site.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand-navy/15 px-4 py-2 font-medium hover:bg-brand-cream-dark"
          >
            ORCID
          </a>
          <a
            href={site.googleScholarSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand-navy/15 px-4 py-2 font-medium hover:bg-brand-cream-dark"
          >
            Google Académico
          </a>
          <a
            href={site.aliciaAuthor}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand-navy/15 px-4 py-2 font-medium hover:bg-brand-cream-dark"
          >
            ALICIA (CONCYTEC)
          </a>
        </div>
        <p className="mb-8 text-xs leading-relaxed text-brand-navy/55">
          {publicationsCatalog.meta.notaFuentes}
        </p>
        <PublicacionesClient all={all} academic={academic} blog={blog} />
      </Section>

      <Section variant="soft" eyebrow="Notas" title="Divulgación (antes en Blogspot)">
        <PublicationList items={blog} />
        <p className="mt-6 text-sm text-brand-navy/65">
          Estas notas viven en{" "}
          <Link href="/notas/plantas-medicinales-medicina-integrativa" className="font-semibold text-brand-teal hover:underline">
            este sitio
          </Link>
          ; ya no usamos Blogspot como canal principal.
        </p>
      </Section>
    </>
  );
}
