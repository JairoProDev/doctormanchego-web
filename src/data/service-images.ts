export function catalogServiceImage(sku: string): string {
  return `/images/services/portadas/${sku}.webp`;
}

export function catalogServiceMedia(sku: string) {
  return {
    image: catalogServiceImage(sku),
    secondaryImage: sku === "drm-eco"
      ? "/images/fotos-reales/ecografo-mindray-dc70.webp"
      : `/images/services/${sku}.webp`,
  };
}
