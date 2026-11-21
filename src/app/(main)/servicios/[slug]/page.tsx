import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getServiceBySlug, services } from "@/data/services";
import { serviceLongCopyBySlug } from "@/data/service-long-copy";
import { publicPath, absoluteUrl } from "@/lib/paths";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: absoluteUrl(service.image) }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const longCopy = serviceLongCopyBySlug[slug];

  return (
    <article>
      <div className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Link
            href="/servicios"
            className="text-sm text-brand-gold hover:underline"
          >
            ← Todos los servicios
          </Link>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-brand-teal-light">
            {service.category}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">{service.title}</h1>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg ring-1 ring-brand-navy/10">
            <Image
              src={publicPath(service.image)}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-cream-dark ring-1 ring-brand-navy/10">
            <Image
              src={publicPath(service.secondaryImage)}
              alt={`Imagen complementaria de ${service.title.toLocaleLowerCase("es")}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="text-pretty text-lg leading-relaxed text-brand-navy/85">
            {service.description}
          </p>
          {longCopy ? (
            <div className="mt-6 space-y-4 whitespace-pre-line text-pretty text-base leading-relaxed text-brand-navy/80">
              {longCopy}
            </div>
          ) : null}
          <p className="mt-6 text-sm text-brand-navy/60">
            Los precios y la disponibilidad se confirman al agendar. La información de esta página
            no reemplaza la evaluación médica presencial.
          </p>
          <div id="agendar" className="mt-8 flex flex-wrap gap-3 scroll-mt-28">
            <WhatsAppButton context={service.title} label="Agendar este servicio" />
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full border border-brand-navy/20 px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-cream-dark"
            >
              Otras vías de contacto
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
