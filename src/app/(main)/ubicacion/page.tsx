import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { publicPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Ubicación",
  description:
    "Cómo llegar al consultorio del Dr. Manchego: Av. Túpac Amaru D2A, 2.º piso, Centro Médico Vithamed, Wanchaq, Cusco.",
};

export default function UbicacionPage() {
  return (
    <>
      <Section
        eyebrow="Wanchaq, Cusco"
        title="Dónde está el consultorio"
        description={site.entranceNote}
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-brand-navy">Dirección</h3>
              <p className="mt-2 text-brand-navy/85">{site.addressFull}</p>
            </div>
            <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-brand-navy">Horario de recepción</h3>
              <p className="mt-2 text-brand-navy/85">{site.receptionHours}</p>
              <p className="mt-2 text-sm text-brand-navy/60">
                La cita con el doctor se confirma por WhatsApp.
              </p>
            </div>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-brand-navy/85">
              <li>Llegue a la entrada del Centro Médico Vithamed en Av. Túpac Amaru.</li>
              <li>Suba en ascensor al segundo piso.</li>
              <li>Busque el consultorio del Dr. Manchego (no confundir con el tercer piso).</li>
            </ol>
            <div className="flex flex-wrap gap-3">
              <WhatsAppButton label="Pedir indicaciones por WhatsApp" />
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-brand-navy/20 px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-cream-dark"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-brand-navy/10">
              <iframe
                title="Mapa Google Maps"
                src={site.mapsEmbedUrl}
                className="aspect-square w-full border-0 sm:aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-brand-navy/10">
              <Image
                src={publicPath("/images/fachada-banner.jpg")}
                alt="Banner en la puerta del consultorio, segundo piso"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
