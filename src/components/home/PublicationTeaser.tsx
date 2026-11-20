import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import {
  academicPublications,
  publicationKindLabels,
  type Publication,
} from "@/data/publications";

function TeaserCard({ pub, delayMs }: { pub: Publication; delayMs: number }) {
  return (
    <Reveal delayMs={delayMs}>
      <article className="card-lift flex h-full flex-col rounded-2xl border border-brand-navy/8 bg-white p-5 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">
          {publicationKindLabels[pub.kind]} · {pub.year}
        </p>
        <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-brand-navy line-clamp-2">
          {pub.titulo}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/70 line-clamp-3">
          {pub.resumen}
        </p>
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm font-semibold text-brand-teal hover:underline"
        >
          Leer en fuente →
        </a>
      </article>
    </Reveal>
  );
}

export function PublicationTeaser() {
  const picks = academicPublications().slice(0, 3);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {picks.map((p, i) => (
        <TeaserCard key={p.id} pub={p} delayMs={i * 90} />
      ))}
      <Reveal delayMs={280} className="lg:col-span-3">
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-dashed border-brand-gold/40 bg-brand-gold/5 px-6 py-5">
          <p className="text-center text-sm text-brand-navy/80">
            Más de una década en investigación, docencia y publicación científica.
          </p>
          <Link
            href="/publicaciones"
            className="rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-soft"
          >
            Ver publicaciones
          </Link>
        </div>
      </Reveal>
    </div>
  );
}