import Image from "next/image";
import Link from "next/link";
import { publicPath } from "@/lib/paths";
import { IconUltrasound } from "@/components/icons/MedicalIcons";

const tiles: Array<{
  src: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
  badge?: string;
}> = [
  {
    src: "/images/services/drm-consulta.webp",
    alt: "Consulta de medicina familiar en el consultorio del Dr. Manchego",
    className: "col-span-2 row-span-2",
    sizes: "(max-width: 1024px) 100vw, 50vw",
    priority: true,
  },
  {
    src: "/images/fotos-reales/ecografo-mindray-dc70.webp",
    alt: "Ecógrafo Mindray DC70 en consultorio, Cusco",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 1024px) 50vw, 25vw",
    badge: "Equipo en el local",
  },
  {
    src: "/images/services/drm-infiltracion.webp",
    alt: "Procedimientos e infiltraciones con evaluación médica",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 1024px) 50vw, 25vw",
    badge: "Mismo piso",
  },
];

export function AboutClinicGallery() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-brand-gold/30 via-brand-teal/15 to-transparent blur-2xl" />
      <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
        {tiles.map((tile) => (
          <div
            key={tile.src}
            className={`relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-brand-navy/10 ${tile.className} ${
              tile.className.includes("row-span-2") ? "min-h-[280px] sm:min-h-[340px]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={publicPath(tile.src)}
              alt={tile.alt}
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
              sizes={tile.sizes}
              priority={tile.priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent" />
            {tile.badge ? (
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full glass-panel px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy">
                {tile.src.includes("ecografo") ? (
                  <IconUltrasound className="h-3.5 w-3.5 text-brand-teal" />
                ) : null}
                {tile.badge}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-brand-navy/65">
          Consulta, ecografía y procedimientos sin cambiar de edificio.
        </p>
        <Link
          href="/c/ecografia-cusco"
          className="text-xs font-bold uppercase tracking-widest text-brand-teal hover:text-brand-gold"
        >
          Ecografía en Wanchaq →
        </Link>
      </div>
    </div>
  );
}