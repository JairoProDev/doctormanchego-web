import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export function CtaPanel() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 mesh-hero" aria-hidden />
      <div className="grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="rounded-[1.75rem] border border-white/15 glass-panel-dark p-8 text-center text-white sm:p-12 lg:p-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-gold">
            Su siguiente paso
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance sm:text-4xl">
            Agende en minutos por WhatsApp
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-brand-cream/80">
            Indique el motivo de consulta y su nombre. Recepción confirma día y horario:{" "}
            {site.receptionHours}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton label="Escribir a recepción" className="!px-8 !py-3.5" />
            <Link
              href="/contacto"
              className="inline-flex rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Otras vías de contacto
            </Link>
          </div>
          <p className="mt-6 text-xs text-brand-cream/50">
            Centro Médico Vithamed · 2.º piso · {site.addressLine}
          </p>
        </div>
      </div>
    </section>
  );
}