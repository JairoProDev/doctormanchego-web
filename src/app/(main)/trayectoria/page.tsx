import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { PublicationList } from "@/components/PublicationList";
import { credentials } from "@/data/credentials";
import { academicPublications } from "@/data/publications";
import { site } from "@/data/site";
import { publicPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Trayectoria",
  description:
    "Formación, reconocimientos y experiencia del Dr. Víctor Manchego, médico de familia en Cusco. CMP 36594.",
};

export default function TrayectoriaPage() {
  const withImages = credentials.filter((c) => c.image);

  return (
    <>
      <Section
        eyebrow="Confianza"
        title="Trayectoria y formación"
        description={`Más de ${site.yearsPractice} años de ejercicio en Cusco. Colegiatura CMP ${site.cmp}.`}
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {credentials.map((c) => (
            <li
              key={c.id}
              className="rounded-2xl border border-brand-navy/8 bg-white p-5 shadow-sm"
            >
              <p className="font-serif text-lg font-bold text-brand-navy">{c.title}</p>
              <p className="mt-1 text-sm text-brand-teal">{c.issuer}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-sage">
                {c.year}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="soft" eyebrow="Investigación" title="Publicaciones destacadas">
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-brand-navy/75">
          Artículos en Revista Peruana de Medicina Integrativa, tesis doctoral (UNSA) y notas de
          divulgación. Listado completo con enlaces a ORCID y Google Académico.
        </p>
        <PublicationList items={academicPublications().slice(0, 4)} compact />
        <p className="mt-8">
          <Link href="/publicaciones" className="text-sm font-semibold text-brand-teal hover:underline">
            Ver todas las publicaciones →
          </Link>
        </p>
      </Section>

      {withImages.length > 0 ? (
        <Section eyebrow="Galería" title="Reconocimientos">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {withImages.map((c) => (
              <figure
                key={c.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-navy/8"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={publicPath(c.image!)}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="p-4 text-sm">
                  <p className="font-semibold text-brand-navy">{c.title}</p>
                  <p className="text-brand-navy/65">{c.year}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
