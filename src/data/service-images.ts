/** Rutas públicas alineadas con catalogo-web-buscadis (mismo criterio que seed Buscadis). */
export function catalogServiceImage(sku: string): string {
  if (sku === "drm-eco") {
    return "/images/fotos-reales/ecografo-mindray-dc70.webp";
  }
  return `/images/services/${sku}.webp`;
}