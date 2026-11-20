import { site } from "@/data/site";
import { siteUrl } from "@/data/site";

export function physicianJsonLd() {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${url}/#physician`,
    name: site.legalName,
    alternateName: site.name,
    description: site.taglineSecondary,
    url,
    image: `${url}/images/hero-dr-manchego.jpg`,
    telephone: `+${site.phoneWhatsapp}`,
    email: site.email,
    medicalSpecialty: ["FamilyMedicine", "Radiology"],
    identifier: {
      "@type": "PropertyValue",
      name: "CMP",
      value: site.cmp,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: site.district,
      addressRegion: site.city,
      addressCountry: "PE",
    },
    areaServed: { "@type": "City", name: "Cusco" },
    sameAs: [
      site.social.doctoralia,
      `${url}/publicaciones`,
      site.orcid,
      site.social.youtube,
    ],
  };
}

export function medicalBusinessJsonLd() {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${url}/#business`,
    name: `Consultorio ${site.name}`,
    url,
    telephone: `+${site.phoneWhatsapp}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "22:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: site.district,
      addressRegion: site.city,
      addressCountry: "PE",
    },
  };
}
