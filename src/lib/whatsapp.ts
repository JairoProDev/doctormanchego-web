import { site } from "@/data/site";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.phoneWhatsapp}?text=${encodeURIComponent(message)}`;
}

export function appointmentMessage(context?: string): string {
  const extra = context ? ` Me interesa: ${context}.` : "";
  return `Hola, quisiera agendar una cita en el consultorio del Dr. Manchego.${extra} Mi nombre es: `;
}
