import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agende cita con el Dr. Víctor Manchego por WhatsApp 939 247 994 o envíe un mensaje. Wanchaq, Cusco.",
};

export default function ContactoPage() {
  return (
    <>
      <Section
        eyebrow="Citas"
        title="Contacto y agendamiento"
        description="La vía más rápida es WhatsApp. Recepción de lunes a viernes, 5:00 p.m. – 10:00 p.m."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl bg-brand-navy p-6 text-white">
              <h3 className="font-serif text-xl font-bold">WhatsApp del consultorio</h3>
              <p className="mt-2 text-2xl font-bold text-brand-gold">{site.phoneDisplay}</p>
              <p className="mt-2 text-sm text-brand-cream/70">
                Letrero en puerta (legacy): {site.phoneLegacyDisplay}
              </p>
              <div className="mt-6">
                <WhatsAppButton className="w-full sm:w-auto" label="Abrir WhatsApp" />
              </div>
            </div>
            <div className="rounded-2xl border border-brand-navy/10 bg-white p-6">
              <h3 className="font-serif text-lg font-bold text-brand-navy">Correo</h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-brand-teal hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div className="rounded-2xl border border-brand-navy/10 bg-white p-6">
              <h3 className="font-serif text-lg font-bold text-brand-navy">Qué escribir</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-navy/80">
                <li>Su nombre completo</li>
                <li>Motivo de consulta (breve)</li>
                <li>Edad si es para un niño</li>
                <li>Horario preferido</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-brand-navy">Formulario</h3>
            <p className="mt-2 text-sm text-brand-navy/65">
              Si prefiere correo, complete el formulario. También puede usar WhatsApp arriba.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" variant="soft" eyebrow="FAQ" title="Preguntas frecuentes">
        <FaqAccordion items={faqs} />
      </Section>
    </>
  );
}
