# Galaxy Explorer

Galaxy Explorer er en moderne, responsiv Next.js-applikasjon som lar deg utforske Melkeveien og vårt solsystem på en visuelt rik og vitenskapelig korrekt måte. Prosjektet er laget for å inspirere og informere om planeter, stjerner og verdensrommet, med ekte fakta og bilder fra NASA.

## Hovedfunksjoner

- **Planeter og stjerner:** Fakta, bilder og utforskning av solsystemets planeter og kjente stjerner i Melkeveien.
- **Dynamisk galleri:** Bildegalleri med modal-visning og navigasjon, basert på lokale bilder og/eller NASA-data.
- **Info-sider:** Moderne, rikt innhold om galaksen, universet og prosjektet.
- **Responsivt design:** Optimalisert for mobil, nettbrett og desktop.
- **Universell bakgrunn:** Animerte stjerner og kosmisk gradient gir en stemningsfull opplevelse.
- **Hamburgermeny:** Mobilvennlig navigasjon med animert X-ikon.
- **NASA Fun Fact:** Henter daglige eller tilfeldige fakta fra NASA APOD API og viser dem på planetside og stjerneside.
- **Bakgrunnsmusikk:** Spiller av remix.mp3 fra public-mappen automatisk etter første brukerinteraksjon.

## Teknologi
- **Next.js 15** (App Router)
- **React**
- **Tailwind CSS**
- **Ekte NASA-data/APOD API**
- **Dynamisk import av bilder fra /public/Gallery**

## Kom i gang
1. Klon repoet:
   ```bash
   git clone https://github.com/BJ-Kodehode/galaxy.git
   cd galaxy
   ```
2. Installer avhengigheter:
   ```bash
   npm install
   ```
3. Start utviklingsserver:
   ```bash
   npm run dev
   ```
4. Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## Mappestruktur
- `app/` – Next.js App Router, sider og komponenter
- `public/` – Bilder, remix.mp3 og statiske filer
- `app/components/` – Gjenbrukbare React-komponenter (Header, Footer, CosmicBackground, BackgroundMusic, etc.)
- `app/planets/` – PlanetsContent.jsx (planetside)
- `app/stars/` – StarsContent.jsx (stjerneside)
- `app/gallery/` – GalleryContent.jsx (bildegalleri)
- `app/info/` – InfoContent.jsx (info om galaksen)

## Spesielle funksjoner
- **Bakgrunnsmusikk:** remix.mp3 spilles automatisk etter første klikk/tastetrykk.
- **NASA Fun Fact:** Fakta hentes fra NASA APOD API og vises nederst på planetside og stjerneside.
- **Universell bakgrunn:** 3500+ animerte stjerner og kosmisk gradient på alle sider.

## Lisens
Dette prosjektet er kun for læring og ikke-kommersielt bruk. NASA-bilder og -data er offentlig tilgjengelig, men sjekk alltid kilde og bruksvilkår.

---

**Laget av Kodehode-teamet, 2025.**

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
