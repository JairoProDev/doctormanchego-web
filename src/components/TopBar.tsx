import { site } from "@/data/site";

export function TopBar() {
  return (
    <div className="no-print bg-brand-navy text-brand-cream/90 text-xs sm:text-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2.5 sm:justify-between">
        <span className="inline-flex items-center gap-1.5">
          <span className="font-medium text-brand-gold" aria-hidden>
            CMP
          </span>
          <span>{site.cmp}</span>
          <span className="hidden text-brand-cream/40 sm:inline">·</span>
          <span className="hidden sm:inline">{site.receptionHours}</span>
        </span>
        <a
          href={`mailto:${site.email}`}
          className="hidden items-center gap-1.5 underline-offset-2 hover:underline sm:inline-flex"
        >
          {site.email}
        </a>
        <a
          href={`https://wa.me/${site.phoneWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-brand-gold hover:underline"
        >
          WhatsApp {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
