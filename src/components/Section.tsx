import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
  children?: ReactNode;
  variant?: "default" | "navy" | "soft" | "elevated";
  id?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  className = "",
  children,
  variant = "default",
  id,
}: Props) {
  const bg =
    variant === "navy"
      ? "bg-brand-navy text-brand-cream"
      : variant === "soft"
        ? "bg-brand-cream-dark/60"
        : variant === "elevated"
          ? "bg-white"
          : "";
  const eyebrowColor =
    variant === "navy" ? "text-brand-gold" : "text-brand-teal";
  const titleColor = variant === "navy" ? "text-white" : "text-brand-navy";
  const descColor =
    variant === "navy" ? "text-brand-cream/75" : "text-brand-navy/70";

  return (
    <section id={id} className={`relative py-16 sm:py-24 ${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {variant === "elevated" ? <div className="section-divider mb-12 max-w-xs" aria-hidden /> : null}
        {eyebrow ? (
          <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${eyebrowColor}`}>
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`mt-2 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl ${titleColor}`}
        >
          {title}
        </h2>
        {description ? (
          <p className={`mt-4 max-w-2xl text-pretty text-lg leading-relaxed ${descColor}`}>
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
