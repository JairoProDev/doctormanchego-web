# Dr. Víctor Manchego — sitio web (Next.js)

Sitio del consultorio en **Wanchaq, Cusco**. URL canónica de producción:

**https://doctormanchego.publicadis.com** (en vivo)

Deploy Vercel: proyecto **`drmanchego`** → `https://drmanchego.vercel.app`  
Puente: **`publicadis.com`** con `DRMANCHEGO_APP_URL=https://drmanchego.vercel.app`

Rutas legacy `/p/dr-victor-manchego` redirigen al subdominio canónico.

Perfil Buscadis: **https://buscadis.com/@dr-victor-manchego**

## Desarrollo local

```bash
cd clientes/drmanchego/web
npm install
cp .env.example .env.local
npm run dev
```

Local: [http://localhost:3000](http://localhost:3000) (sin `BASE_PATH`).

## Producción (Vercel)

### 1. Proyecto del sitio (`clientes/drmanchego/web`)

Variables:

| Variable | Valor |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://doctormanchego.publicadis.com` |
| `NEXT_PUBLIC_BASE_PATH` | *(vacío)* |

Deploy: `npx vercel --prod` desde esta carpeta.

### 2. Puente Publicadis (proyecto `publicadis.com` en Vercel)

Tras el deploy del sitio, en **Settings → Environment Variables** del proyecto Publicadis:

```
DRMANCHEGO_APP_URL=https://<tu-proyecto-dr-manchego>.vercel.app
```

Redeploy Publicadis. El host `doctormanchego.publicadis.com` reescribe al origen del app, igual que Agrilsur/Villa Chaco.

Rutas antiguas `/p/dr-victor-manchego` → redirect 308 a `https://doctormanchego.publicadis.com`.

### 3. DNS / dominios Vercel

En el proyecto **publicadis.com**, añadir `doctormanchego.publicadis.com` (o wildcard `*.publicadis.com` en DNS). Ver `publicadis.com/docs/CUTOVER-SUBDOMINIOS-PUBLICADIS.md`.

## Scripts

- `npm run dev` · `npm run build` · `npm run start`
