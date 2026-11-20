import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/data/site";
import { absoluteUrl } from "@/lib/paths";
import { medicalBusinessJsonLd, physicianJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Dr. Víctor Manchego | Médico de familia en Cusco",
    template: "%s | Dr. Víctor Manchego",
  },
  description:
    "Consultorio del Dr. Víctor Manchego en Wanchaq, Cusco. Medicina familiar, dolor, procedimientos y ecografía. Citas por WhatsApp 939 247 994.",
  openGraph: {
    title: "Dr. Víctor Manchego — Tu médico de confianza en Cusco",
    description:
      "Medicina familiar, dolor, procedimientos y ecografía en Wanchaq. Citas por WhatsApp.",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/hero-dr-manchego.webp"),
        width: 800,
        height: 800,
        alt: "Dr. Víctor Manchego",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [physicianJsonLd(), medicalBusinessJsonLd()];
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
