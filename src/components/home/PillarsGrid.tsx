import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import {
  IconFamily,
  IconProcedure,
  IconPulse,
  IconUltrasound,
} from "@/components/icons/MedicalIcons";

const pillars = [
  {
    title: "Consulta integral",
    body: "Examen, explicación y plan de cuidado para adultos y niños.",
    href: "/c/consulta-medica-cusco",
    icon: IconFamily,
    accent: "from-brand-teal/15 to-brand-teal/5",
  },
  {
    title: "Ecografía en el local",
    body: "Estudios ecográficos con equipo del consultorio y continuidad médica.",
    href: "/c/ecografia-cusco",
    icon: IconUltrasound,
    accent: "from-brand-gold/20 to-brand-gold/5",
  },
  {
    title: "Dolor y recuperación",
    body: "Desgatillamiento e infiltraciones cuando la evaluación lo indica.",
    href: "/c/alivio-del-dolor",
    icon: IconPulse,
    accent: "from-brand-navy/10 to-brand-navy/5",
  },
  {
    title: "Procedimientos con cita",
    body: "Uñero, oídos, nariz y cuidados en sala equipada.",
    href: "/c/procedimientos-consultorio",
    icon: IconProcedure,
    accent: "from-brand-sage/20 to-brand-sage/5",
  },
];

export function PillarsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p, i) => {
        const Icon = p.icon;
        return (
          <Reveal key={p.title} delayMs={i * 80}>
            <Link
              href={p.href}
              className={`card-lift group flex h-full flex-col rounded-2xl border border-brand-navy/8 bg-gradient-to-br ${p.accent} p-6`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-teal shadow-sm ring-1 ring-brand-navy/8 transition group-hover:text-brand-gold">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-brand-navy group-hover:text-brand-teal">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/75">{p.body}</p>
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-teal group-hover:text-brand-gold">
                Ver enfoque →
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}