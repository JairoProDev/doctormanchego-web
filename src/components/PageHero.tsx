import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-brand-navy/8 bg-gradient-to-br from-brand-navy via-brand-navy-soft to-brand-teal text-white">
      <div className="grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
        {eyebrow ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-pretty text-lg text-brand-cream/80">{description}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}