import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { allNotas, notaBySlug, notaCanonicalUrl } from "@/data/notas";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allNotas().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const nota = notaBySlug(slug);
  if (!nota) return {};
  return {
    title: nota.titulo,
    description: nota.resumen,
    alternates: { canonical: notaCanonicalUrl(slug) },
  };
}

function paragraphs(bodyMd: string): string[] {
  return bodyMd.split(/\n\n+/).filter(Boolean);
}

export default async function NotaPage({ params }: Props) {
  const { slug } = await params;
  const nota = notaBySlug(slug);
  if (!nota) notFound();

  const date = new Date(nota.publicadaEn).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Section
      eyebrow="Notas del doctor"
      title={nota.titulo}
      description={`Publicado el ${date}. Divulgación; no reemplaza una consulta médica.`}
    >
      <article className="prose prose-brand max-w-none space-y-4 text-brand-navy/90">
        {paragraphs(nota.bodyMd).map((p) => (
          <p key={p.slice(0, 48)} className="leading-relaxed">
            {p}
          </p>
        ))}
      </article>
      <p className="mt-10 text-sm text-brand-navy/60">
        ¿Quiere comentarlo en consulta?{" "}
        <a
          href={`https://wa.me/${site.phoneWhatsapp}`}
          className="font-semibold text-brand-teal hover:underline"
        >
          WhatsApp {site.phoneDisplay}
        </a>
      </p>
      <p className="mt-4">
        <Link href="/publicaciones" className="text-sm font-semibold text-brand-teal hover:underline">
          ← Todas las publicaciones
        </Link>
      </p>
    </Section>
  );
}
