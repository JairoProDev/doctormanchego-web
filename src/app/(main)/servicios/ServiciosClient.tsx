"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import type { Service, ServiceCategory } from "@/data/services";
import { serviceCategories } from "@/data/services";

type Props = { services: Service[] };

export function ServiciosClient({ services }: Props) {
  const [category, setCategory] = useState<ServiceCategory | "Todos">("Todos");

  const filtered = useMemo(() => {
    const list =
      category === "Todos"
        ? services
        : services.filter((s) => s.category === category);
    return [...list].sort((a, b) => a.sort - b.sort);
  }, [category, services]);

  return (
    <>
      <PageHero
        eyebrow="Catálogo clínico"
        title="Servicios del consultorio"
        description="Filtre por área o explore los 20 servicios. Agende por WhatsApp indicando motivo y horario preferido."
      >
        <WhatsAppButton label="Agendar con recepción" />
      </PageHero>
      <Section variant="elevated" title="Explorar por categoría">
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrar por categoría"
        >
          <FilterChip
            active={category === "Todos"}
            onClick={() => setCategory("Todos")}
            label="Todos"
          />
          {serviceCategories.map((c) => (
            <FilterChip
              key={c}
              active={category === c}
              onClick={() => setCategory(c)}
              label={c}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-brand-navy/60">
          {filtered.length} servicio{filtered.length === 1 ? "" : "s"}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <Reveal key={s.slug} delayMs={(i % 6) * 40}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <WhatsAppButton label="Agendar cita" />
        </div>
      </Section>
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-brand-navy text-white shadow-sm"
          : "bg-white text-brand-navy ring-1 ring-brand-navy/10 hover:bg-brand-cream-dark"
      }`}
    >
      {label}
    </button>
  );
}
