import { site } from "@/data/site";

const badges = [
  "Medicina familiar UNSAAC",
  "Radiología UNSAAC",
  "Maestría UNSA",
  "Doctor UNSA",
  "Investigación EsSalud 2024",
  "Docencia U. Andina",
  `CMP ${site.cmp}`,
  "Wanchaq · Cusco",
];

export function TrustMarquee() {
  const loop = [...badges, ...badges];
  return (
    <div className="overflow-hidden border-y border-brand-navy/8 bg-white py-3">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap px-4">
        {loop.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/55"
          >
            <span className="h-1 w-1 rounded-full bg-brand-gold" aria-hidden />
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}