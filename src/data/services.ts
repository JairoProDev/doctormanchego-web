import { catalogServiceMedia } from "./service-images";

export type ServiceCategory =
  | "Consulta"
  | "Familia"
  | "Dolor"
  | "Procedimientos"
  | "Ecografía"
  | "Terapias";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  description: string;
  image: string;
  secondaryImage: string;
  featured?: boolean;
  sort: number;
};

export const serviceCategories: ServiceCategory[] = [
  "Consulta",
  "Familia",
  "Dolor",
  "Procedimientos",
  "Ecografía",
  "Terapias",
];

export const services: Service[] = [
  {
    slug: "consulta-medicina-familiar",
    title: "Consulta de medicina familiar",
    category: "Consulta",
    description:
      "Examen, explicación de la dolencia y orientación del cuidado. Atiende adultos y niños. El control de seguimiento se agenda en la misma consulta.",
    ...catalogServiceMedia("drm-consulta"),
    featured: true,
    sort: 1,
  },
  {
    slug: "orientacion-nutricional",
    title: "Orientación nutricional",
    category: "Consulta",
    description: "Plan de alimentación dentro de la consulta, a partir del examen.",
    ...catalogServiceMedia("drm-nutricion"),
    sort: 2,
  },
  {
    slug: "orientacion-familiar",
    title: "Orientación familiar",
    category: "Familia",
    description:
      "Consejería a la pareja y a la familia en cada etapa: matrimonios recientes, hijos escolares, adolescentes, nido vacío y crisis familiares.",
    ...catalogServiceMedia("drm-familia"),
    featured: true,
    sort: 3,
  },
  {
    slug: "visita-domicilio",
    title: "Visita a domicilio",
    category: "Familia",
    description:
      "Visita a la familia en casa, con cita y según disponibilidad. Escriba la dirección y el motivo.",
    ...catalogServiceMedia("drm-domicilio"),
    sort: 4,
  },
  {
    slug: "medicina-tradicional-andina",
    title: "Medicina tradicional andina",
    category: "Familia",
    description:
      "En la consulta se escuchan y se examinan el susto, el wayra, el sobreparto, el kayka, el mal de ojo y el agarrado por la tierra. Esa escucha va junto con la evaluación médica.",
    ...catalogServiceMedia("drm-andina"),
    sort: 5,
  },
  {
    slug: "desgatillamiento-muscular",
    title: "Desgatillamiento muscular",
    category: "Dolor",
    description: "Trabajo de puntos musculares dolorosos en el consultorio.",
    ...catalogServiceMedia("drm-desgatillo"),
    featured: true,
    sort: 6,
  },
  {
    slug: "infiltraciones",
    title: "Infiltraciones",
    category: "Dolor",
    description:
      "Infiltraciones para el dolor. Cuando corresponde, se apoyan en la ecografía del consultorio.",
    ...catalogServiceMedia("drm-infiltracion"),
    featured: true,
    sort: 7,
  },
  {
    slug: "acupuntura-terapia-neural",
    title: "Acupuntura y terapia neural",
    category: "Dolor",
    description:
      "Acupuntura y terapia neural, también llamada acupuntura alemana, en el consultorio.",
    ...catalogServiceMedia("drm-acupuntura"),
    sort: 8,
  },
  {
    slug: "auriculopuntura",
    title: "Auriculopuntura",
    category: "Terapias",
    description:
      "Auriculopuntura en consulta. La carta de puntos es del consultorio; no es una guía para aplicársela en casa.",
    ...catalogServiceMedia("drm-auriculo"),
    sort: 9,
  },
  {
    slug: "unero-callos-pie-diabetico",
    title: "Uñero, callos y pie diabético",
    category: "Procedimientos",
    description: "Uñero, callos y cuidado del pie diabético, en el consultorio y con cita.",
    ...catalogServiceMedia("drm-unero"),
    sort: 10,
  },
  {
    slug: "lavado-oidos",
    title: "Lavado de oídos",
    category: "Procedimientos",
    description: "Lavado de oídos en el consultorio.",
    ...catalogServiceMedia("drm-oidos"),
    sort: 11,
  },
  {
    slug: "sangrado-nasal",
    title: "Cauterización por sangrado nasal",
    category: "Procedimientos",
    description: "Cauterización por hemorragia nasal, en el consultorio y con cita.",
    ...catalogServiceMedia("drm-nariz"),
    sort: 12,
  },
  {
    slug: "ecografia",
    title: "Ecografía",
    category: "Ecografía",
    description:
      "Ecografía en el consultorio. El letrero también nombra estudios ginecoobstétricos y Doppler: el tipo de estudio y la entrega del informe se confirman al agendar.",
    ...catalogServiceMedia("drm-eco"),
    featured: true,
    sort: 13,
  },
  {
    slug: "plantas-medicinales",
    title: "Plantas medicinales",
    category: "Terapias",
    description:
      "Fitoterapia dentro de la consulta: infusiones, cocimientos, emplastos, pomadas, tinturas y extractos. No sustituye la evaluación médica.",
    ...catalogServiceMedia("drm-plantas"),
    sort: 14,
  },
  {
    slug: "homeopatia",
    title: "Homeopatía",
    category: "Terapias",
    description:
      "Homeopatía entre las terapias del consultorio. Se explica en la consulta, junto con las opciones de la medicina convencional.",
    ...catalogServiceMedia("drm-homeopatia"),
    sort: 15,
  },
  {
    slug: "flores-de-bach",
    title: "Flores de Bach",
    category: "Terapias",
    description: "Terapia floral de Bach. Se orienta dentro de la consulta.",
    ...catalogServiceMedia("drm-bach"),
    sort: 16,
  },
  {
    slug: "ozonoterapia",
    title: "Ozonoterapia",
    category: "Terapias",
    description: "Ozonoterapia con el equipo del consultorio. La indicación se define en la cita.",
    ...catalogServiceMedia("drm-ozono"),
    sort: 17,
  },
  {
    slug: "plasma-rico-plaquetas",
    title: "Plasma rico en plaquetas",
    category: "Terapias",
    description:
      "Plasma rico en plaquetas cuando la indicación corresponde. Se confirma al agendar.",
    ...catalogServiceMedia("drm-prp"),
    sort: 18,
  },
  {
    slug: "nutraceuticos",
    title: "Nutricéuticos",
    category: "Terapias",
    description:
      "Consta entre las terapias del consultorio. Se confirma al agendar. No es un anuncio de productos.",
    ...catalogServiceMedia("drm-nutraceuticos"),
    sort: 19,
  },
  {
    slug: "terapias-ortomoleculares",
    title: "Terapias ortomoleculares",
    category: "Terapias",
    description:
      "Consta entre las terapias del consultorio. Se confirma al agendar, sin atribuir un resultado.",
    ...catalogServiceMedia("drm-orto"),
    sort: 20,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured).sort((a, b) => a.sort - b.sort);
}
