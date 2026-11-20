import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PillarsGrid } from "@/components/home/PillarsGrid";
import { CredentialShowcase } from "@/components/home/CredentialShowcase";
import { JourneySteps } from "@/components/home/JourneySteps";
import { PublicationTeaser } from "@/components/home/PublicationTeaser";
import { CtaPanel } from "@/components/home/CtaPanel";
import { Reveal } from "@/components/motion/Reveal";
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
      <TrustMarquee />

      <Section
        variant="elevated"
        eyebrow="Áreas de atención"
        title="Cuatro caminos claros hacia su cita"
        description="Cada enfoque tiene su propia página de información y agendado rápido."
      >
        <PillarsGrid />
      </Section>

      <Section
        eyebrow="Quién es"
        title="Ciencia, trato humano y continuidad en Cusco"
        description="Medicina de familia y radiología en un consultorio pensado para explicar, no para apurar."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-4 text-pretty text-base leading-relaxed text-brand-navy/85">
              {bioParagraphs.slice(0, 3).map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/trayectoria"
                className="rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm hover:border-brand-teal/40"
              >
                Trayectoria →
              </Link>
              <Link
                href="/publicaciones"
                className="rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm hover:border-brand-teal/40"
              >
                Investigación →
              </Link>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-brand-gold/25 to-brand-teal/20 blur-xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-brand-navy/10">
                <Image
                  src={publicPath("/images/sala-consultorio.webp")}
                  alt="Sala de procedimientos del consultorio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-center text-sm text-brand-navy/60">
                Procedimientos, dolor y ecografía en el mismo piso.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        variant="soft"
        eyebrow="Trayectoria visual"
        title="Formación que respalda cada consulta"
      >
        <CredentialShowcase />
      </Section>

      <Section
        eyebrow="Experiencia del paciente"
        title="Del primer mensaje al control de seguimiento"
        description="Un recorrido simple, pensado para reducir fricción."
      >
        <JourneySteps />
      </Section>

      <Section
        variant="soft"
        eyebrow="Servicios destacados"
        title="Lo que más se agenda en el consultorio"
        description="Precios y cupos se confirman al escribir. Sin promesas de resultado en esta web."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delayMs={i * 70}>
              <ServiceCard service={s} priority={i < 3} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/servicios"
            className="rounded-full bg-brand-navy px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-brand-navy-soft"
          >
            Explorar los 20 servicios
          </Link>
          <WhatsAppButton label="Agendar por WhatsApp" />
        </div>
      </Section>

      <Section
        variant="elevated"
        eyebrow="Evidencia"
        title="Investigación y publicación médica"
        description="Artículos, reportes y divulgación con rigor académico."
      >
        <PublicationTeaser />
      </Section>

      <Section
        variant="navy"
        id="como-llegar"
        eyebrow="Cómo llegar"
        title="Segundo piso, Centro Médico Vithamed"
        description={site.entranceNote}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 text-brand-cream/88">
              <p className="text-xl font-semibold text-white">{site.addressFull}</p>
              <ul className="space-y-2 text-sm">
                <li>Recepción: {site.receptionHours}</li>
                <li>
                  WhatsApp:{" "}
                  <a
                    href={`https://wa.me/${site.phoneWhatsapp}`}
                    className="font-semibold text-brand-gold hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </li>
              </ul>
              <Link
                href="/ubicacion"
                className="inline-flex text-sm font-semibold text-brand-gold hover:underline"
              >
                Indicaciones y mapa ampliado →
              </Link>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15">
              <iframe
                title="Mapa del consultorio en Wanchaq, Cusco"
                src={site.mapsEmbedUrl}
                className="aspect-[4/3] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Preguntas frecuentes"
        title="Antes de escribir por WhatsApp"
        description="Respuestas breves. Urgencias graves: acuda a emergencia."
      >
        <Reveal>
          <FaqAccordion items={faqs} limit={6} />
        </Reveal>
        <p className="mt-8 text-center">
          <Link href="/contacto#faq" className="text-sm font-semibold text-brand-teal hover:underline">
            Ver todas las preguntas →
          </Link>
        </p>
      </Section>

      <CtaPanel />
    </>
  );
}