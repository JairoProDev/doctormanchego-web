import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    title: "Escriba por WhatsApp",
    body: "Cuéntenos el motivo y deje su nombre. No necesita formularios largos.",
  },
  {
    title: "Confirme cita",
    body: "Recepción propone día y hora dentro del horario de atención.",
  },
  {
    title: "Llegue a Vithamed",
    body: "Ascensor al 2.º piso. Traiga documentos previos si los tiene.",
  },
  {
    title: "Consulta y seguimiento",
    body: "Examen, explicación y plan; controles se agendan en la misma atención.",
  },
];

export function JourneySteps() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-4">
      <div
        className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent md:block"
        aria-hidden
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative list-none text-center md:text-left">
          <Reveal delayMs={i * 100}>
            <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy font-serif text-xl font-bold text-brand-gold shadow-lg md:mx-0">
              {i + 1}
            </span>
            <h3 className="mt-4 font-serif text-lg font-bold text-brand-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-navy/75">{s.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}