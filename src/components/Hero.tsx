import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { publicPath } from "@/lib/paths";
import { IconShield, IconUltrasound } from "@/components/icons/MedicalIcons";
import { HeroStats } from "@/components/home/HeroStats";
import { WhatsAppButton } from "./WhatsAppButton";

const quickLinks = [
  { href: "/c/ecografia-cusco", label: "Ecografía" },
  { href: "/c/consulta-medica-cusco", label: "Consulta" },
  { href: "/c/alivio-del-dolor", label: "Dolor" },
  { href: "/servicios", label: "Catálogo completo" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden mesh-hero text-white">
      <div className="grain absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl animate-hero-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-brand-teal-light/20 blur-3xl animate-hero-float"
        style={{ animationDelay: "-3s" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-12 md:pb-14 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 glass-panel-dark px-4 py-1.5 text-xs font-medium">
              <span className="text-shimmer text-shimmer-animated font-bold">CMP {site.cmp}</span>
              <span className="text-white/35">·</span>
              <span>Radiólogo y de familia</span>
              <span className="text-white/35">·</span>
              <span>Wanchaq, Cusco</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl xl:text-[3.4rem]">
              Atención médica con calma, claridad y continuidad
              <span className="mt-3 block text-lg font-normal text-brand-cream/88 sm:text-xl">
                {site.name} · {site.tagline}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-brand-cream/82 sm:text-lg">
              {site.taglineSecondary}. Consulta, familia, dolor, procedimientos y ecografía en un
              solo consultorio — sin perder el hilo de su historial clínico.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <WhatsAppButton
                label="Agendar cita ahora"
                className="!px-7 !py-3.5 !text-base shadow-xl shadow-black/20"
              />
              <Link
                href="/ubicacion"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-brand-gold/50 hover:bg-white/15"
              >
                <IconPin />
                Cómo llegar a Vithamed
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/90 transition hover:border-brand-gold/40 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-brand-cream/55">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Recepción: {site.receptionHours}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-brand-gold/30 via-transparent to-brand-teal-light/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl ring-1 ring-white/20">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={publicPath("/images/hero-dr-manchego.webp")}
                  alt="Dr. Víctor Manchego, médico radiólogo y de familia en Cusco"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5 pt-24">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                    Consultorio privado
                  </p>
                  <p className="mt-1 text-sm text-white/85">{site.addressLine}</p>
                </div>
                <div className="glass-panel-dark flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-white/90">
                  <IconUltrasound className="h-5 w-5 text-brand-gold" />
                  Ecógrafo en el local
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-8 hidden max-w-[11rem] rounded-xl glass-panel p-3 shadow-xl md:block lg:-left-8">
              <div className="flex items-center gap-2 text-brand-navy">
                <IconShield className="h-5 w-5 text-brand-teal" />
                <span className="text-xs font-semibold leading-tight">
                  Maestría y doctorado en medicina
                </span>
              </div>
            </div>
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}

function IconPin() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
