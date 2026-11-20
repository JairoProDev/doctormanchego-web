# Dr. Víctor Manchego — sitio web (Next.js)

Sitio del consultorio en **Wanchaq, Cusco**.

- **Canónico:** https://doctormanchego.publicadis.com
- **Perfil Buscadis:** https://www.buscadis.com/@dr-victor-manchego
- **Deploy:** Vercel team **Publicadis**, proyecto `doctormanchego`
- **Repo:** https://github.com/JairoProDev/doctormanchego-web

## Vercel (Publicadis)

| Variable | Valor |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://doctormanchego.publicadis.com` |

Build: `next build --webpack` (ver `package.json`).

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```