import type { Publication } from "@/data/publications";
import { publicationKindLabels } from "@/data/publications";

type Props = {
  items: Publication[];
  compact?: boolean;
};

export function PublicationList({ items, compact }: Props) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-brand-navy/60">No hay publicaciones en esta categoría.</p>
    );
  }

  return (
    <ul className="space-y-4">
      {items.map((p) => (
        <li
          key={p.id}
          className="rounded-2xl border border-brand-navy/8 bg-white p-5 shadow-sm transition hover:border-brand-teal/30"
        >
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-teal">
            <span>{publicationKindLabels[p.kind]}</span>
            <span className="text-brand-navy/30">·</span>
            <span className="text-brand-sage">{p.year}</span>
            {!compact && p.rol ? (
              <>
                <span className="text-brand-navy/30">·</span>
                <span className="normal-case text-brand-navy/55">{p.rol.replace(/-/g, " ")}</span>
              </>
            ) : null}
          </div>
          <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-brand-navy">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal hover:underline"
            >
              {p.titulo}
            </a>
          </h3>
          {!compact ? (
            <>
              <p className="mt-1 text-sm font-medium text-brand-navy/70">{p.venue}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/75">{p.resumen}</p>
              {p.doi ? (
                <a
                  href={p.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-semibold text-brand-teal hover:underline"
                >
                  DOI →
                </a>
              ) : null}
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
