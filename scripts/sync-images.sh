#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
CATALOG="$ROOT/04-activos/servicios/catalogo-web-buscadis"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images"
mkdir -p "$DEST/services/portadas" "$DEST/fotos-reales"
cp "$CATALOG/portadas/"*.webp "$DEST/services/portadas/"
cp "$CATALOG/servicios/"*.webp "$DEST/services/"
cp "$CATALOG/pendientes-confirmacion/"*.webp "$DEST/services/"
cp "$CATALOG/fotos-reales/retrato-web.webp" "$DEST/hero-dr-manchego.webp"
cp "$CATALOG/fotos-reales/sala-procedimientos.webp" "$DEST/sala-consultorio.webp"
cp "$CATALOG/fotos-reales/ecografo-mindray-dc70.webp" "$DEST/fotos-reales/"
cp "$CATALOG/fotos-reales/avatar-buscadis.webp" "$DEST/fotos-reales/"
# Premios y fachada (sin cambio en esta pasada)
PREMIOS="$ROOT/04-activos/premios"
if [[ -d "$PREMIOS" ]]; then
  cp "$PREMIOS/2026_especialista-radiologia.jpg" "$DEST/premio-radiologia.jpg" 2>/dev/null || true
  cp "$PREMIOS/2018-06_maestro-ciencias-medicina.jpg" "$DEST/premio-maestro.jpg" 2>/dev/null || true
  cp "$PREMIOS/2022-07_grado-de-doctor.jpg" "$DEST/premio-doctor.jpg" 2>/dev/null || true
  cp "$PREMIOS/2025-08-07_25-anios.jpg" "$DEST/premio-25-anios.jpg" 2>/dev/null || true
  cp "$PREMIOS/2024-12_investigacion-primer-lugar.jpg" "$DEST/premio-investigacion.jpg" 2>/dev/null || true
fi
FACHADA="$ROOT/04-activos/consultorio-y-equipos"
if [[ -f "$FACHADA/fachada-banner.jpg" ]]; then
  cp "$FACHADA/fachada-banner.jpg" "$DEST/fachada-banner.jpg"
fi
echo "Imágenes WebP sincronizadas en $DEST"
