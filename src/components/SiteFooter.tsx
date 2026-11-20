import Link from "next/link";
import { site } from "@/data/site";
import { buscadisProfileUrl } from "@/lib/paths";

export function SiteFooter() {
  return (
    <footer className="no-print mt-auto border-t border-brand-gold/20 bg-gradient-to-b from-brand-navy to-[#081828] text-brand-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-xl font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-brand-cream/65">
            {site.taglineSecondary}
          </p>
          <p className="mt-3 text-xs text-brand-gold">CMP {site.cmp}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Consultorio
          </p>
          <p className="mt-3 text-sm leading-relaxed">{site.addressFull}</p>
          <p className="mt-2 text-sm text-brand-cream/70">{site.entranceNote}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Contacto
          </p>
          <p className="mt-3 text-sm">WhatsApp: {site.phoneDisplay}</p>
          <p className="mt-1 text-sm text-brand-cream/60">
            Letrero (legacy): {site.phoneLegacyDisplay}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 block text-sm underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Enlaces
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/servicios" className="hover:underline">
                Servicios
              </Link>
            </li>
            <li>
              <a
                href={site.social.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Doctoralia
              </a>
            </li>
            <li>
              <Link href="/publicaciones" className="hover:underline">
                Publicaciones
              </Link>
            </li>
            <li>
              <a
                href={buscadisProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Perfil Buscadis
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-brand-cream/45">
        © {new Date().getFullYear()} {site.legalName}. Información orientativa; no reemplaza la
        consulta médica.
      </div>
    </footer>
  );
}
