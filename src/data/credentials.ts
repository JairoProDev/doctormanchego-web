export type Credential = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
};

export const credentials: Credential[] = [
  {
    id: "c1",
    title: "Medicina familiar y comunitaria",
    issuer: "UNSAAC",
    year: "2011",
  },
  {
    id: "c-rad",
    title: "Especialista en radiología",
    issuer: "UNSAAC",
    year: "2026",
    image: "/images/premio-radiologia.jpg",
  },
  {
    id: "c2",
    title: "Maestro en Ciencias: Medicina",
    issuer: "UNSA (Universidad Nacional de San Agustín de Arequipa)",
    year: "2018",
    image: "/images/premio-maestro.jpg",
  },
  {
    id: "c3",
    title: "Grado de doctor",
    issuer: "UNSA (Universidad Nacional de San Agustín de Arequipa)",
    year: "2022",
    image: "/images/premio-doctor.jpg",
  },
  {
    id: "c4",
    title: "Secretario del Consejo Regional VI",
    issuer: "Colegio Médico del Perú, Cusco",
    year: "2018-2019",
  },
  {
    id: "c5",
    title: "Reconocimiento como docente (promoción Ad Aeternam)",
    issuer: "Universidad Andina del Cusco",
    year: "2021",
  },
  {
    id: "c6",
    title: "25 años de ejercicio",
    issuer: "Cuerpo Médico de EsSalud Cusco",
    year: "2025",
    image: "/images/premio-25-anios.jpg",
  },
  {
    id: "c7",
    title: "Primer lugar, V Concurso de Investigación",
    issuer: "Red Asistencial EsSalud Cusco",
    year: "2024",
    image: "/images/premio-investigacion.jpg",
  },
];

export const bioParagraphs = [
  "El Dr. José Víctor Manchego Enríquez es médico radiólogo y de familia en Cusco. Atiende en su consultorio de Wanchaq: la consulta, la familia, el dolor y los procedimientos que se resuelven en el mismo local.",
  "Es médico cirujano por la Universidad Nacional del Altiplano. Sus especialidades de medicina familiar y comunitaria y de radiología son de la UNSAAC. Obtuvo la maestría en Ciencias, mención Medicina, y el grado de doctor en la UNSA (Universidad Nacional de San Agustín de Arequipa). Tiene formación en medicina complementaria por la UNMSM (2012). Colegiatura pública CMP 36594.",
  "La Universidad Andina del Cusco le otorgó un reconocimiento por su labor docente en Medicina Humana (2021); las placas de ceremonia en consultorio no sustituyen el grado universitario de la UNSA.",
  "En el consultorio se examina, se explica la dolencia y, cuando corresponde, se orienta la alimentación. El dolor se atiende con desgatillamiento, infiltraciones y acupuntura. Uñero, callos, pie diabético, lavado de oídos y sangrado nasal se ven en consulta. Hay ecografía en el local.",
  "Si en su familia hablan de susto, wayra, sobreparto, kayka, mal de ojo o agarrado por la tierra, aquí se escucha y se examina junto con la evaluación médica.",
];
