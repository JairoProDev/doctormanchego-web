import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import type { LandingConfig } from "@/data/landings";
import { publicPath } from "@/lib/paths";
import { LandingStickyCta } from "./LandingStickyCta";

type Props = {
  landing: LandingConfig;
  whatsappHref: string;
};

function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function LandingTemplate({ landing, whatsappHref }: Props) {
  return (
  <div id="contenido" className="pb-20 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-brand-navy/10 bg-brand-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="font-serif text-sm font-bold text-brand-navy sm:text-base">
            Dr. Víctor Manchego
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-brand-navy/60 sm:inline">CMP {site.cmp}</span>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#20bd5a] sm:inline-flex sm:items-center sm:gap-2"
            >
              <WaIcon className="h-4 w-4" />
              Agendar
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a6b7a55,_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16 lg:gap-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              {landing.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.65rem]">
              {landing.headline}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              {landing.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#20bd5a] hover:shadow-xl"
              >
                <WaIcon />
                {landing.primaryCta}
              </a>
              <Link
                href={`/servicios/${landing.relatedServiceSlug}`}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Más detalle del servicio
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/70">
              {landing.trustBullets.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-gold" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15">
              <Image
                src={publicPath(landing.heroImage)}
                alt={landing.heroImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-4 pt-12">
                <p className="text-xs text-white/80">{landing.proofLine}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-navy/8 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-serif text-2xl font-bold text-brand-navy">Por qué agendar aquí</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {landing.benefits.map((b) => (
              <article
                key={b.title}
                className="rounded-2xl border border-brand-navy/8 bg-brand-cream/50 p-6 shadow-sm"
              >
                <h3 className="font-semibold text-brand-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/75">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream-dark/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-serif text-2xl font-bold text-brand-navy">Cómo agendar</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {landing.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-brand-navy/75">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-serif text-2xl font-bold text-brand-navy">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-brand-navy/10 rounded-2xl border border-brand-navy/10 bg-white">
          {landing.faqs.map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="cursor-pointer list-none font-medium text-brand-navy marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {f.q}
                  <span className="text-brand-gold transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center md:flex-row md:text-left">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-gold/50">
            <Image
              src={publicPath("/images/fotos-reales/avatar-buscadis.webp")}
              alt=""
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div className="flex-1">
            <p className="font-serif text-xl font-bold">Dr. José Víctor Manchego Enríquez</p>
            <p className="mt-2 text-sm text-white/80">
              Médico de familia y radiólogo · CMP {site.cmp} · {site.addressFull}
            </p>
            <p className="mt-1 text-sm text-brand-gold">Recepción: {site.receptionHours}</p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#20bd5a]"
          >
            <WaIcon />
            {landing.primaryCta}
          </a>
        </div>
      </section>

      <footer className="border-t border-brand-navy/10 bg-brand-cream py-8 text-center text-xs text-brand-navy/55">
        <p>
          Información general; no reemplaza evaluación presencial.{" "}
          <Link href="/" className="text-brand-teal underline-offset-2 hover:underline">
            Sitio completo del consultorio
          </Link>
        </p>
      </footer>

      <LandingStickyCta href={whatsappHref} label={landing.primaryCta} />
    </div>
  );
}