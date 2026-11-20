import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { credentials } from "@/data/credentials";
import { publicPath } from "@/lib/paths";

export function CredentialShowcase() {
  const withImages = credentials.filter((c) => c.image);

  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin]">
      <ul className="flex snap-x gap-5 pr-4">
        {withImages.map((c, i) => (
          <li key={c.id} className="w-[17rem] shrink-0 snap-start">
            <Reveal delayMs={i * 60}>
              <article className="card-lift overflow-hidden rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-brand-cream-dark">
                  <Image
                    src={publicPath(c.image!)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="272px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">
                    {c.title}
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-xs text-brand-navy/60">{c.issuer}</p>
                  <p className="mt-1 font-serif text-lg font-bold text-brand-navy">{c.year}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center">
        <Link
          href="/trayectoria"
          className="text-sm font-semibold text-brand-teal hover:underline"
        >
          Trayectoria completa y reconocimientos →
        </Link>
      </p>
    </div>
  );
}