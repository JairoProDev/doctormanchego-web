import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/data/site";

const items = [
  { label: "Colegiatura", value: `CMP ${site.cmp}`, hint: "Registro público CMP" },
  { label: "Trayectoria", value: `${site.yearsPractice}+ años`, hint: "Ejercicio en Cusco" },
  { label: "Pacientes", value: "Adultos y niños", hint: "Medicina familiar" },
  { label: "Recepción", value: "Lu–Vi 5–10 p.m.", hint: "Cita previa" },
];

export function TrustStrip() {
  return (
    <div className="relative z-20 -mt-6 mx-auto max-w-5xl px-4">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delayMs={i * 50}>
            <li className="card-lift rounded-2xl border border-brand-navy/8 glass-panel px-5 py-5 text-center shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sage">
                {item.label}
              </span>
              <span className="mt-1 block font-serif text-xl font-bold text-brand-navy">
                {item.value}
              </span>
              <span className="mt-1 block text-[11px] text-brand-navy/50">{item.hint}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}