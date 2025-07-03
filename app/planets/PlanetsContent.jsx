"use client";

import SearchAndFilter from '../components/SearchAndFilter';
import PlanetList from '../components/PlanetList';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PlanetsContent() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 drop-shadow">Planetene i Melkeveien</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Merkur */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Merkur.jpg" alt="Merkur" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Merkur</h2>
          <p className="text-gray-700 mb-2">Merkur er den innerste og minste planeten i solsystemet. Den er bare litt større enn Månen, og er i likhet med Venus, Jorda og Mars en steinplanet.</p>
          <p className="text-gray-700 mb-2">Planeten er gråfarget og tildekket av kratre, og ligner dermed på Månen i utseende. Det er observert tegn til is i kratre i polområdene som aldri blir truffet av sollys.</p>
          <p className="text-gray-700 mb-2">Siden Merkur er så nærme Sola, kan vi bare se den på himmelen like etter solnedgang eller like før soloppgang.</p>
          <p className="text-gray-700">Merkur har ingen måner.</p>
        </div>
        {/* Venus */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Venus.jpg" alt="Venus" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Venus</h2>
          <p className="text-gray-700 mb-2">Venus er den andre planeten regnet fra Sola. Den er den sjette største planeten i solsystemet, så vidt mindre enn Jorda. Den er i likhet med Merkur, Jorda og Mars en steinplanet.</p>
          <p className="text-gray-700 mb-2">Avstanden mellom Venus og Sola er litt over halvparten av avstanden mellom Jorda og Sola. Venus er den planeten som kommer nærmest Jorda og var den første planeten vi sendte romfartøy til.</p>
          <p className="text-gray-700 mb-2">Venus er den varmeste planeten i solsystemet, noe som skyldes den tykke atmosfæren. Planeten er dekket av et tett skylag. På overflaten finnes tusenvis av vulkaner.</p>
          <p className="text-gray-700 mb-2">Venus roterer «baklengs» rundt seg selv, sammenlignet med de fleste andre planetene i solsystemet. Den roterer også veldig sakte, noe som gir den det lengste døgnet blant planetene, tilsvarende 243 jorddøgn.</p>
          <p className="text-gray-700 mb-2">Venus er den planeten som lyser sterkest på himmelen vår. Den kan av og til være synlig om dagen. Når Venus observeres fra Jorda, står den alltid i nærheten av Sola og kan derfor sees som «aftenstjerne» på vesthimmelen eller som «morgenstjerne» på østhimmelen, avhengig av hvor Venus befinner seg i forhold til Jorda.</p>
          <p className="text-gray-700">Venus har ingen måner, men den har en kvasimåne oppdaget i 2002 som har fått navnet 524522 Zoozve. Den kalles kvasimåne fordi den egentlig er en asteroide med nesten den samme omløpstid rundt Sola som Venus. Sett fra Venus ser den ut til å gå i bane rundt Venus.</p>
        </div>
        {/* Jorden */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Jorden.jpg" alt="Jorden" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Jorden</h2>
          <p className="text-gray-700 mb-2">Jorden er den femte største av planetene i vårt solsystem og den tredje planeten regnet fra Solen. Den er en steinplanet.</p>
          <p className="text-gray-700 mb-2">Jorden har tilnærmet form som en kule. Den går rundt Solen i en ellipseformet bane (eksentrisitet 0,0167) med en midlere hastighet på 29,8 kilometer i sekundet og bruker et siderisk år (365,2564 døgn) på et omløp. Jordens middelavstand fra Solen er 149,6 millioner km, det samme som 1 astronomisk enhet. Den minste avstanden, perihel på 147,1 millioner km, forekommer cirka 3. januar. Den største, aphel på 152,1 millioner km, forekommer cirka 3. juli.</p>
          <p className="text-gray-700 mb-2">Jorden dreier seg rundt en akse som danner en vinkel på 66° 33ʹ med banens plan, ekliptikken. Rotasjonstiden i forhold til stjernehimmelen er 23 timer 56 min 4,09 s (det sideriske døgn). Hastigheten ved ekvator er 465 meter i sekundet. Aksen peker mot himmelens poler. Den gjør små svingninger, idet himmelpolen går rundt i en tilnærmet sirkel med radius 9,21 buesekunder i løpet av 18,6 år (nutasjonen). Samtidig går himmelpolen langsomt rundt i en sirkel med radius 23° 27ʹ omkring ekliptikkens pol. Omløpstiden, presesjonen, er 26 000 år. Aksen ligger heller ikke helt fast i forhold til Jorden. De to punktene der aksen «stikker igjennom» (Nordpolen og Sydpolen) beveger seg innenfor et område på cirka 12 x 12 meter.</p>
          <p className="text-gray-700 mb-2">Jordens aksehelling er årsak til årstidenes skiftning. Aksehellingen varierer fra 21,5 til 24,5 grader med en periode på 41 000 år. Jordbanens form varierer fra nær en sirkel til svakt elliptisk (eksentrisitet fra 0 til 0,068) med en periode på cirka 100 000 år. Jugoslaven Milutin Milanković lanserte på 1920-tallet en teori om at presesjonen, nutasjonen og endringene i Jordens aksehelling og baneform vil medføre tilsvarende langsiktige endringer i Solens innstråling og dermed i temperaturen på Jorden. Disse såkalte Milanković-syklusene er trolig hovedårsaken til istidene.</p>
          <p className="text-gray-700 mb-2">Jordens størrelse og form ble tidligere bestemt ved gradmålinger. Et stykke av en meridianbue måles ved triangulering mens bredden for endepunktene bestemmes astronomisk. Av buelengden og vinkelen finner man da krumningsradiusen. Jorden er med stor tilnærmelse en omdreiningsellipsoide, flattrykt ved polene. Den internasjonale jordellipsoide, WGS84, basert på moderne målinger med satellitter og radioteleskoper med nøyaktigheter i centimeterområdet, gir standardverdiene som brukes ved satellittnavigasjon og til reduksjon av observasjonsdata. Geoidens avvik fra rotasjonsellipsoiden er liten. Jorden er svakt pæreformet. Sydpolen er omkring 25 meter nærmere ekvatorplanet enn jordellipsoidens pol, mens Nordpolen er omkring 20 meter fjernere.</p>
          <p className="text-gray-700">Jorden har én måne.</p>
        </div>
        {/* Mars */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Mars.jpg" alt="Mars" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Mars</h2>
          <p className="text-gray-700 mb-2">Mars er den fjerde planeten regnet fra Sola. Den er den syvende største planeten i solsystemet og har litt over halvparten så stor omkrets som Jorda. Den er i likhet med Merkur, Venus og Jorda en steinplanet.</p>
          <p className="text-gray-700 mb-2">Planetens avstand fra Sola er rundt 1,5 ganger Jordas avstand. Mars er den planeten i solsystemet vi har utforsket med flest romfartøy.</p>
          <p className="text-gray-700 mb-2">Overflaten er tørr og har en karakteristisk rød farge som skyldes ruststøv. Mars har en tynn atmosfære som i hovedsak består av karbondioksid.</p>
          <p className="text-gray-700 mb-2">Geologiske formasjoner på planetens overflate tyder på at det kan ha vært vann på overflaten tidligere i planetens historie, noe som kan bety at det kan ha eksistert liv der. Det spekuleres i om mikroorganismer kan ha overlevd under bakken, men det er foreløpig ikke funnet tegn til nåværende eller tidligere liv på Mars.</p>
          <p className="text-gray-700">Mars har to kjente måner: Phobos og Deimos.</p>
        </div>
        {/* Jupiter */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Juptier.jpg" alt="Jupiter" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Jupiter</h2>
          <p className="text-gray-700 mb-2">Jupiter er den femte planeten regnet fra Sola, og den største planeten i solsystemet. Den er i likhet med Saturn, Uranus og Neptun en gassplanet.</p>
          <p className="text-gray-700 mb-2">Jupiters masse er vel dobbelt så stor som massen til alle de andre planetene i solsystemet til sammen, men den har knapt en tusendel av Solas masse.</p>
          <p className="text-gray-700 mb-2">Den er den mest lyssterke planeten på himmelen etter Venus. Det mest karakteristiske trekket ved Jupiter er Den store røde flekken, som er en storm større enn Jorda som har pågått i flere hundre år.</p>
          <p className="text-gray-700">Jupiter har 79 kjente måner og en ring.</p>
        </div>
        {/* Saturn */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Saturn.jpg" alt="Saturn" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Saturn</h2>
          <p className="text-gray-700 mb-2">Saturn er den sjette planeten regnet fra Sola, og den nest største av planetene i solsystemet. Den er i likhet med Jupiter, Uranus og Neptun en gassplanet.</p>
          <p className="text-gray-700 mb-2">Planeten er unik med sitt enorme og spektakulære ringsystem. Ringene består av Saturn har (per 2024) 146 kjente måner hvorav kun 63 har fått navn. Den største, Titan, er den eneste månen i solsystemet med en tykk atmosfære og den eneste månen, utenom vår egen, vi har landet et romfartøy på.</p>
        </div>
        {/* Uranus */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Uranus.jpg" alt="Uranus" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Uranus</h2>
          <p className="text-gray-700 mb-2">Uranus er den sjuende av planetene regnet fra Sola, og den tredje største planeten i solsystemet. Uranus er i likhet med Jupiter, Saturn og Neptun en gassplanet, nærmere bestemt en iskjempe.</p>
          <p className="text-gray-700 mb-2">Fra Jorda er Uranus så vidt synlig med det blotte øyet, i kikkert sees den som en liten grønnlig skive uten detaljer. Planeten ble oppdaget i 1781 av William Herschel.</p>
          <p className="text-gray-700">Uranus har 28 kjente måner og 13 ringer.</p>
        </div>
        {/* Neptun */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Nptun.jpg" alt="Neptun" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Neptun</h2>
          <p className="text-gray-700 mb-2">Neptun er den åttende og ytterste av planetene i solsystemet, og den fjerde største. Den er, i likhet med Jupiter, Saturn og Uranus, en gassplanet, nærmere bestemt en iskjempe.</p>
          <p className="text-gray-700 mb-2">Neptun er den eneste planeten i solsystemet som ikke er synlig med det blotte øyet, men den synes i teleskop som en liten, blå skive. Den ble oppdaget i 1846.</p>
          <p className="text-gray-700">Neptun har et svakt ringsystem og 16 kjente måner, hvor Triton er den største.</p>
        </div>
      </div>
    </main>
  );
}
