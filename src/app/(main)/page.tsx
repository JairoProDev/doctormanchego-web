import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { bioParagraphs } from "@/data/credentials";
import { faqs } from "@/data/faq";
import { getFeaturedServices } from "@/data/services";
import { site } from "@/data/site";
import { publicPath } from "@/lib/paths";

export default function HomePage() {
  const featured = getFeaturedServices();

  return (
    <>
      <Hero />
      <TrustStrip />

      <Section
        eyebrow="Quién es"
        title="Un médico de familia que explica con claridad"
        description="Atención en Wanchaq para la consulta, la familia, el dolor y lo que se resuelve en el mismo local."
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-pretty leading-relaxed text-brand-navy/85">
            {bioParagraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-brand-navy/10">
            <Image
              src={publicPath("/images/sala-consultorio.webp")}
              alt="Sala de procedimientos del consultorio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/trayectoria"
            className="text-sm font-semibold text-brand-teal hover:underline"
          >
            Ver trayectoria y reconocimientos →
          </Link>
          <Link
            href="/publicaciones"
            className="text-sm font-semibold text-brand-teal hover:underline"
          >
            Publicaciones e investigación →
          </Link>
        </div>
      </Section>

      <Section
        variant="soft"
        eyebrow="Servicios"
        title="Lo que puede agendar en el consultorio"
        description="Precios y disponibilidad se confirman al escribir por WhatsApp. Sin promesas de resultado en esta web."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <ServiceCard key={s.slug} service={s} priority={i < 3} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/servicios"
            className="rounded-full bg-brand-navy px-8 py-3 text-sm font-semibold text-white hover:bg-brand-navy-soft"
          >
            Ver todos los servicios
          </Link>
          <WhatsAppButton />
        </div>
      </Section>

      <Section
        variant="navy"
        id="como-llegar"
        eyebrow="Cómo llegar"
        title="Segundo piso, Centro Médico Vithamed"
        description={site.entranceNote}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-brand-cream/85">
            <p className="text-lg font-medium text-white">{site.addressFull}</p>
            <p>Recepción: {site.receptionHours}</p>
            <p>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${site.phoneWhatsapp}`}
                className="font-semibold text-brand-gold hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <Link
              href="/ubicacion"
              className="inline-block text-sm font-semibold text-brand-gold hover:underline"
            >
              Mapa e indicaciones detalladas →
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
            <iframe
              title="Mapa del consultorio en Wanchaq, Cusco"
              src={site.mapsEmbedUrl}
              className="aspect-[4/3] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Preguntas frecuentes"
        title="Antes de escribir por WhatsApp"
        description="Respuestas breves. Si su caso es urgente, acuda a emergencias."
      >
        <FaqAccordion items={faqs} limit={5} />
        <p className="mt-6 text-center">
          <Link href="/contacto#faq" className="text-sm font-semibold text-brand-teal hover:underline">
            Ver todas las preguntas
          </Link>
        </p>
      </Section>
    </>
  );
}
