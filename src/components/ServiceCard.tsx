import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { publicPath } from "@/lib/paths";

type Props = { service: Service; priority?: boolean };

export function ServiceCard({ service, priority }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-navy/8 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-cream-dark">
        <Image
          src={publicPath(service.image)}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-teal shadow-sm">
          {service.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-brand-navy">
          <Link href={`/servicios/${service.slug}`} className="hover:text-brand-teal">
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/75 line-clamp-3">
          {service.description}
        </p>
        <Link
          href={`/servicios/${service.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-brand-teal hover:underline"
        >
          Más información →
        </Link>
      </div>
    </article>
  );
}
