import { catalogServiceImage } from "./service-images";

export type LandingConfig = {
  slug: string;
  campaignId: string;
  waTopic: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  heroImageAlt: string;
  primaryCta: string;
  trustBullets: string[];
  benefits: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  proofLine: string;
  relatedServiceSlug: string;
};

const sharedTrust = [
  "CMP 36594",
  "Wanchaq, Cusco",
  "Citas por WhatsApp 939 247 994",
];

export const landings: LandingConfig[] = [
  {
    slug: "ecografia-cusco",
    campaignId: "landing-ecografia",
    waTopic: "ecografía en consultorio",
    metaTitle: "Ecografía en Cusco | Mismo consultorio, médico radiólogo",
    metaDescription:
      "Agende estudios ecográficos en Wanchaq con el Dr. Manchego: equipo en el local, explicación clara del informe y continuidad de cuidado. WhatsApp 939 247 994.",
    eyebrow: "Estudios ecográficos · Wanchaq",
    headline: "Ecografía en consultorio, con quien conoce su historial",
    subheadline:
      "No tiene que ir a otro piso ni repetir su historia con desconocidos. El estudio se realiza aquí, con ecógrafo del consultorio, y el informe se conversa en la misma atención médica.",
    heroImage: catalogServiceImage("drm-eco"),
    heroImageAlt: "Ecógrafo Mindray del consultorio del Dr. Manchego en Cusco",
    primaryCta: "Agendar ecografía por WhatsApp",
    trustBullets: [...sharedTrust, "Formación en radiología (UNSAAC)"],
    benefits: [
      {
        title: "Todo en un solo lugar",
        body: "Recepción, estudio y orientación médica en el Centro Médico Vithamed, segundo piso. Entrada por ascensor.",
      },
      {
        title: "Informe que se entiende",
        body: "Como médico de familia y con trayectoria en radiología, el Dr. explica hallazgos en lenguaje claro y qué pasos vienen después.",
      },
      {
        title: "Tipos de estudio según necesidad",
        body: "El tipo de ecografía y los plazos del informe se confirman al agendar. Si el estudio requiere preparación, se indica antes de la cita.",
      },
    ],
    steps: [
      { title: "Escriba por WhatsApp", body: "Indique el motivo del estudio y sus datos de contacto." },
      { title: "Confirme día y preparación", body: "Recepción de lunes a viernes, 5:00 p.m. – 10:00 p.m." },
      { title: "Asista con su orden", body: "Traiga documentos previos si los tiene; el resto se ve en consulta." },
    ],
    faqs: [
      {
        q: "¿Necesito orden médica?",
        a: "En la mayoría de casos sí. Si tiene dudas, escriba por WhatsApp con una foto de su orden o el motivo de consulta.",
      },
      {
        q: "¿Cuánto demora el informe?",
        a: "Depende del tipo de estudio. Se confirma al agendar; no publicamos plazos únicos porque varían.",
      },
      {
        q: "¿Atienden gineco-obstétrico y Doppler?",
        a: "El consultorio contempla varios tipos de ecografía. Al agendar se define si corresponde en este local.",
      },
    ],
    proofLine: "Médico radiólogo y de familia · 25 años de ejercicio · Consultorio en Av. Túpac Amaru D2A",
    relatedServiceSlug: "ecografia",
  },
  {
    slug: "consulta-medica-cusco",
    campaignId: "landing-consulta",
    waTopic: "consulta de medicina familiar",
    metaTitle: "Consulta médica en Cusco | Dr. Manchego, Wanchaq",
    metaDescription:
      "Consulta integral de medicina familiar en Wanchaq: adultos y niños, orientación clara y seguimiento en el mismo consultorio. Agende por WhatsApp.",
    eyebrow: "Medicina familiar · Citas en Wanchaq",
    headline: "Una consulta donde le escuchan y le explican el plan",
    subheadline:
      "Examen clínico, contexto de su dolencia y pasos concretos de cuidado. Atiende familias en Cusco con horario de tarde, de lunes a viernes.",
    heroImage: catalogServiceImage("drm-consulta"),
    heroImageAlt: "Consulta de medicina familiar con el Dr. Manchego",
    primaryCta: "Pedir cita de consulta",
    trustBullets: sharedTrust,
    benefits: [
      {
        title: "Adultos y niños",
        body: "Atención familiar en un mismo espacio, con continuidad si regresa por controles.",
      },
      {
        title: "Tiempo para preguntas",
        body: "La consulta prioriza entender su molestia y qué puede hacer hoy, sin reemplazar urgencias hospitalarias.",
      },
      {
        title: "Puerta a otros servicios",
        body: "Dolor, procedimientos menores o ecografía se coordinan aquí cuando corresponde, sin derivaciones innecesarias.",
      },
    ],
    steps: [
      { title: "WhatsApp", body: "Cuéntenos el motivo breve y su nombre." },
      { title: "Horario", body: "Lunes a viernes, 5:00 p.m. – 10:00 p.m." },
      { title: "Consultorio", body: "Centro Médico Vithamed, 2.º piso, Wanchaq." },
    ],
    faqs: [
      {
        q: "¿Es urgencia?",
        a: "No. Si hay dolor pecho, falta de aire severa o sangrado intenso, acuda a emergencia. Este consultorio es cita programada.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El honorario se informa al agendar. No publicamos tarifos fijas en la web.",
      },
      {
        q: "¿Primera vez?",
        a: "Indíquelo al escribir; llegue unos minutos antes para registro en recepción.",
      },
    ],
    proofLine: "CMP 36594 · Médico de familia y radiólogo · Cusco",
    relatedServiceSlug: "consulta-medicina-familiar",
  },
  {
    slug: "alivio-del-dolor",
    campaignId: "landing-dolor",
    waTopic: "dolor muscular o articular",
    metaTitle: "Dolor muscular en Cusco | Desgatillamiento e infiltraciones",
    metaDescription:
      "Atención para dolor muscular y articular en consultorio: desgatillamiento e infiltraciones guiadas cuando corresponde. Agende en Wanchaq.",
    eyebrow: "Dolor · Consultorio",
    headline: "Cuando el dolor muscular le quita el día, hay opciones en consultorio",
    subheadline:
      "Desgatillamiento muscular e infiltraciones en el mismo local. La indicación es personal: primero evaluación, luego se define el procedimiento.",
    heroImage: catalogServiceImage("drm-desgatillo"),
    heroImageAlt: "Atención por dolor muscular en consultorio",
    primaryCta: "Consultar por mi dolor",
    trustBullets: [...sharedTrust, "Infiltraciones con apoyo ecográfico cuando aplica"],
    benefits: [
      {
        title: "Puntos gatillo y tensión",
        body: "Trabajo focal en musculatura dolorosa con técnica en consultorio.",
      },
      {
        title: "Infiltraciones indicadas",
        body: "Cuando la evaluación lo amerita, con apoyo del ecógrafo del consultorio.",
      },
      {
        title: "Plan de seguimiento",
        body: "Orientación sobre reposo, movimiento y control en consultas posteriores.",
      },
    ],
    steps: [
      { title: "Describa su dolor", body: "Zona, tiempo y qué lo empeora, por WhatsApp." },
      { title: "Evaluación presencial", body: "No se agenda procedimiento sin examen en consulta." },
      { title: "Procedimiento si corresponde", body: "Se explica riesgos y cuidados el mismo día o en cita dedicada." },
    ],
    faqs: [
      {
        q: "¿Duele el desgatillamiento?",
        a: "Puede haber molestia transitoria. Se conversa antes y se adapta la sesión.",
      },
      {
        q: "¿En cuántas sesiones?",
        a: "Depende del caso. No se promete un número fijo sin evaluación.",
      },
      {
        q: "¿Sustituye fisioterapia?",
        a: "Puede complementar otros cuidados; no es lo mismo que rehabilitación completa en otro centro.",
      },
    ],
    proofLine: "Atención médica integral · Procedimientos en sala del consultorio",
    relatedServiceSlug: "desgatillamiento-muscular",
  },
  {
    slug: "procedimientos-consultorio",
    campaignId: "landing-procedimientos",
    waTopic: "procedimiento en consultorio",
    metaTitle: "Procedimientos en consultorio | Cusco Wanchaq",
    metaDescription:
      "Uñero, lavado de oídos y cauterización nasal por cita en el consultorio del Dr. Manchego. WhatsApp para agendar.",
    eyebrow: "Procedimientos menores · Con cita",
    headline: "Procedimientos en consultorio, sin filas de emergencia",
    subheadline:
      "Uñero, callos, lavado de oídos y cauterización por sangrado nasal se atienden con cita en sala equipada del consultorio.",
    heroImage: catalogServiceImage("drm-unero"),
    heroImageAlt: "Procedimientos menores en consultorio médico",
    primaryCta: "Agendar procedimiento",
    trustBullets: sharedTrust,
    benefits: [
      {
        title: "Sala lista",
        body: "Camilla e instrumental en el mismo piso de Vithamed.",
      },
      {
        title: "Pie diabético y uñero",
        body: "Cuidado con evaluación previa; no es podología estética.",
      },
      {
        title: "Oídos y nariz",
        body: "Lavado de oídos y cauterización nasal según indicación médica.",
      },
    ],
    steps: [
      { title: "Escriba el motivo", body: "Uñero, oído tapado, sangrado nasal, etc." },
      { title: "Cita en tarde", body: "Horario de recepción lu–vi 5–10 p.m." },
      { title: "Instrucciones claras", body: "Cuidados en casa al terminar el procedimiento." },
    ],
    faqs: [
      {
        q: "¿Puedo ir sin cita?",
        a: "Mejor agendar: el consultorio trabaja con horario de recepción definido.",
      },
      {
        q: "¿Traigo algo?",
        a: "Documentos de salud si los tiene; el resto se indica al confirmar cita.",
      },
      {
        q: "¿Es para niños?",
        a: "Depende del procedimiento y la edad. Pregunte por WhatsApp.",
      },
    ],
    proofLine: "Procedimientos con evaluación médica previa",
    relatedServiceSlug: "unero-callos-pie-diabetico",
  },
];

export function getLandingBySlug(slug: string): LandingConfig | undefined {
  return landings.find((l) => l.slug === slug);
}

export function getAllLandingSlugs(): string[] {
  return landings.map((l) => l.slug);
}