# Galaxy Explorer

Galaxy Explorer er en moderne, responsiv Next.js-applikasjon som lar deg utforske Melkeveien og vårt solsystem på en visuelt rik og vitenskapelig korrekt måte. Prosjektet er laget for å inspirere og informere om planeter, stjerner og verdensrommet, med ekte fakta og bilder fra NASA.

## Hovedfunksjoner

- **Planeter og stjerner:** Fakta, bilder og utforskning av solsystemets planeter og kjente stjerner i Melkeveien.
- **Dynamisk galleri:** Bildegalleri med modal-visning og navigasjon, basert på lokale bilder og/eller NASA-data.
- **Quiz:** Interaktiv quiz for voksne og barn. Man må svare før man kan gå videre, og får poengsum til slutt.
- **Meme-funksjon:** Skjult meme-modus med bilde/lyd, aktiveres med Konami-kode.
- **Info-sider:** Moderne, rikt innhold om galaksen, universet og prosjektet.
- **Responsivt design:** Optimalisert for mobil, nettbrett og desktop.
- **Universell bakgrunn:** Animerte stjerner og kosmisk gradient gir en stemningsfull opplevelse.
- **Hamburgermeny:** Mobilvennlig navigasjon med animert X-ikon.
- **NASA Fun Fact:** Henter daglige eller tilfeldige fakta fra NASA APOD API og viser dem på planetside og stjerneside.

## Spesielle funksjoner

- **Quiz:** Man må svare før man kan trykke "Neste spørsmål". Poengsum vises etter siste spørsmål, og man kan prøve igjen.
- **Meme-modus:** Skjult meme-funksjon med bilde/lyd, aktiveres med Konami-kode.
- **NASA Fun Fact:** Fakta hentes fra NASA APOD API og vises nederst på planetside og stjerneside.
- **Universell bakgrunn:** 3500+ animerte stjerner og kosmisk gradient på alle sider.
- **Tailwind CSS for styling**

## Mappestruktur

- `app/` – Next.js App Router, sider og komponenter
- `public/` – Bilder, svg-filer og statiske filer
- `app/components/` – Gjenbrukbare React-komponenter (Header, MemeSlider, BackgroundMusic, PlanetCard, etc.)
- `app/planets/` – PlanetsContent.jsx (planetside)
- `app/stars/` – StarsContent.jsx (stjerneside)
- `app/gallery/` – GalleryContent.jsx (bildegalleri)
- `app/quiz/` – QuizContent.jsx (quiz med scoring og svarlogikk)

## figma link:
https://www.figma.com/design/phZ8b0czdjJROE1CnNxyaq/Galaxen?node-id=0-1&t=ypVf1b0Sqxdv3a3f-1

## vercel link

https://galaxy-gamma-three.vercel.app/


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

Du kan redigere innholdet ved å endre filene i `app/`-mappen. Siden oppdateres automatisk ved lagring.

## Lær mer

- [Next.js Dokumentasjon](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy på Vercel

Den enkleste måten å publisere appen på er via [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Se [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for mer info.

## Lisens
Dette prosjektet er kun for læring og ikke-kommersielt bruk. NASA-bilder og -data er offentlig tilgjengelig, men sjekk alltid kilde og bruksvilkår.

---

**Laget av Kodehode-teamet, 2025.**
