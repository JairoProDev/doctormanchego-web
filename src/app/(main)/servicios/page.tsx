import type { Metadata } from "next";
import { ServiciosClient } from "./ServiciosClient";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Consulta de medicina familiar, dolor, procedimientos, ecografía y terapias en el consultorio del Dr. Manchego, Wanchaq, Cusco.",
};

export default function ServiciosPage() {
  return <ServiciosClient services={services} />;
}
