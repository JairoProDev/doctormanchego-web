import { site } from "@/data/site";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.phoneWhatsapp}?text=${encodeURIComponent(message)}`;
}

export function appointmentMessage(context?: string): string {
  const extra = context ? ` Me interesa: ${context}.` : "";
  return `Hola, quisiera agendar una cita en el consultorio del Dr. Manchego.${extra} Mi nombre es: `;
}

export type CampaignTracking = {
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
};

export function landingWhatsAppMessage(
  waTopic: string,
  campaignId: string,
  tracking?: CampaignTracking,
): string {
  const parts = [
    `Hola, vi la página sobre ${waTopic} en doctormanchego.publicadis.com.`,
  ];
  if (tracking?.utm_campaign?.trim()) {
    parts.push(`Campaña: ${tracking.utm_campaign.trim()}.`);
  } else if (tracking?.utm_source?.trim()) {
    parts.push(`Origen: ${tracking.utm_source.trim()}.`);
  } else {
    parts.push(`Referencia web: ${campaignId}.`);
  }
  parts.push("Quisiera agendar una cita. Mi nombre es: ");
  return parts.join(" ");
}
