import { site } from "@/data/site";

const items = [
  { label: "Colegiatura", value: `CMP ${site.cmp}` },
  { label: "Trayectoria", value: `${site.yearsPractice}+ años` },
  { label: "Atención", value: "Adultos y niños" },
  { label: "Recepción", value: "5 p.m. – 10 p.m." },
];

export function TrustStrip() {
  return (
    <div className="border-y border-brand-navy/8 bg-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-brand-navy/8 sm:grid-cols-4">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col items-center justify-center bg-white px-4 py-5 text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sage">
              {item.label}
            </span>
            <span className="mt-1 font-serif text-lg font-bold text-brand-navy">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
