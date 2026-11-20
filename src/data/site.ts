export const site = {
  name: "Dr. Víctor Manchego",
  legalName: "Consultorio del Dr. José Víctor Manchego Enríquez",
  tagline: "Médico radiólogo y de familia en Cusco",
  taglineSecondary:
    "Medicina familiar y radiología (UNSAAC) · Dolor · Procedimientos en el mismo local",
  cmp: "36594",
  addressLine: "Av. Túpac Amaru D2A, 2.º piso",
  district: "Wanchaq",
  city: "Cusco",
  country: "Perú",
  addressFull: "Av. Túpac Amaru D2A, 2.º piso, Wanchaq, Cusco, Perú",
  entranceNote:
    "Entrada por el Centro Médico Vithamed: suba en ascensor al segundo piso. No es la inmobiliaria del tercer piso.",
  email: "drvictormanchego@gmail.com",
  emailConsultorio: "drmancehgoconsultorio@gmail.com",
  phoneDisplay: "939 247 994",
  phoneLegacyDisplay: "984 555 531",
  phoneWhatsapp: "51939247994",
  receptionHours: "Lunes a viernes, 5:00 p.m. – 10:00 p.m.",
  mapsQuery: "Centro Médico Vithamed, Av. Túpac Amaru, Wanchaq, Cusco",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Centro+M%C3%A9dico+Vithamed+Av+T%C3%BApac+Amaru+Wanchaq+Cusco&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Centro+M%C3%A9dico+Vithamed+Av+T%C3%BApac+Amaru+Wanchaq+Cusco",
  yearsPractice: 25,
  orcid: "https://orcid.org/0000-0002-1145-8928",
  googleScholarSearch:
    "https://scholar.google.com/scholar?q=Jose+Victor+Manchego+Enriquez",
  aliciaAuthor:
    "https://alicia.concytec.gob.pe/vufind/Author/Home?author=Manchego+Enr%C3%ADquez%2C+Jos%C3%A9",
  social: {
    doctoralia:
      "https://www.doctoralia.pe/jose-victor-manchego-enriquez/medico-familiar-especialista-en-medicina-natural/cusco",
    youtube: "https://www.youtube.com/@dr.victormanchego1989",
  },
} as const;

export function siteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return "https://doctormanchego.publicadis.com";
}
