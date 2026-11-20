#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
ASSETS="$ROOT/04-activos"
STOCK="$ROOT/../../../buscadis.com/scripts/data/dr-manchego-catalog"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images"
mkdir -p "$DEST"
cp "$ASSETS/foto-perfil-wa-dr-manchego-2026.jpg" "$DEST/hero-dr-manchego.jpg"
cp "$ASSETS/consultorio-y-equipos/sala-camilla-sabana-azul.jpg" "$DEST/sala-consultorio.jpg"
cp "$ASSETS/servicios/"*.jpg "$DEST/" 2>/dev/null || true
# normalized names handled in repo; re-run full copy from web setup if needed
echo "Sync mínimo listo en $DEST"
