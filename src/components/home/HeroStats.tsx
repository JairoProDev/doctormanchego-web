"use client";

import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { site } from "@/data/site";

const stats = [
  { label: "Años de práctica", value: site.yearsPractice, suffix: "+" },
  { label: "Colegiatura CMP", value: Number(site.cmp), suffix: "" },
  { label: "Servicios en catálogo", value: 20, suffix: "" },
  { label: "Horas de recepción", value: 5, suffix: " días/sem" },
];

export function HeroStats() {
  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <li
            key={s.label}
            className="rounded-2xl glass-panel-dark px-4 py-4 text-center transition hover:bg-white/10"
          >
            <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
              {s.label.includes("CMP") ? (
                <span>CMP {s.value}</span>
              ) : s.label.includes("días") ? (
                <span>L–V</span>
              ) : (
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              )}
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-brand-cream/55">
              {s.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}