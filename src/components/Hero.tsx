import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { publicPath } from "@/lib/paths";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-soft to-brand-teal text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #c4a35a 0%, transparent 45%),
            radial-gradient(circle at 90% 10%, #2a8f9c 0%, transparent 40%)`,
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1fr_1.05fr] md:items-center md:py-20">
        <div className="order-2 md:order-1">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="text-brand-gold">CMP {site.cmp}</span>
            <span className="text-white/40">·</span>
            <span>{site.yearsPractice} años en Cusco</span>
            <span className="text-white/40">·</span>
            <span>Wanchaq</span>
          </div>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {site.name}
            <span className="mt-2 block text-xl font-normal text-brand-cream/90 sm:text-2xl">
              {site.tagline}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-brand-cream/85 sm:text-lg">
            {site.taglineSecondary}. Examina, explica y, cuando corresponde, resuelve en el mismo
            consultorio: dolor, procedimientos menores y ecografía.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButton label="Agendar por WhatsApp" />
            <Link
              href="/servicios"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Ver servicios
            </Link>
          </div>
          <p className="mt-6 text-sm text-brand-cream/60">
            Recepción: {site.receptionHours}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 md:max-w-none">
            <Image
              src={publicPath("/images/hero-dr-manchego.webp")}
              alt="Dr. Víctor Manchego, médico radiólogo y de familia en Cusco"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 320px, 45vw"
              priority
              quality={88}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-5 pt-16">
              <p className="text-sm font-medium text-brand-gold">Consultorio en Wanchaq</p>
              <p className="text-xs text-white/75">{site.addressLine}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
