"use client";

import SearchAndFilter from '../components/SearchAndFilter';
import StarList from '../components/StarList';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function StarsContent() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-700 drop-shadow">Stjerner</h1>
      <div className="text-lg text-gray-800 max-w-3xl mx-auto bg-white/80 rounded-xl shadow-lg p-8 border border-yellow-200 space-y-4">
        <p>Det er et omfattende system som består av rundt 300 milliarder stjerner, med Solen som én blant disse, samt store mengder gass, støv og mørk materie.</p>
        <h2 className="text-2xl font-bold mb-2 text-yellow-800 mt-8">Stjernetegn</h2>
        <p>Stjernetegn er et begrep som innenfor spådomskunsten astrologi blir brukt om kvart av de tolv stjernebildene i Dyrekretsen. Astrologi er læren om forestilt forbindinger mellom himmellegemene og Jorden.</p>
        <p>Ut ifra posisjonen ulike planeter, stjerner og andre himmellegemer hadde på et bestemt tidspunkt og ståsted, hevder astrologer at de kan lage et bilde av hvordan menneske sine personligheter, talent, ressurser og muligheter har blitt påvirket av disse himmellegemene.</p>
        <p>Fødselsdatoen avgjør hvilket stjernetegn man er fødd i. Astrologer mener at dette stjernetegnet, fødested og himmellegemene sin anbringelse på fødselstidspunktet har innvirkning på mennesket.</p>
        <p>I astronomien fra oldtiden ble ekliptikken inndelt i tolv deler som Solte, Månen og planetene flyttet seg gjennom i løpet av året. Hver del à 30° fikk navn etter stjernebildene i Dyrekretsen. I oldtiden falt stjernetegn og stjernebilder sammen. På grunn av presesjon (en langsom endring i retningen til Jordens rotasjonsakse), er stjernetegnene nå forskjøvet slik at for eksempel Værens stjernetegn ligger i stjernebildet Fiskene.</p>
        <h2 className="text-2xl font-bold mb-2 text-yellow-800 mt-8">Vestlig astrologi</h2>
        <p>Moderne vestlig astrologi har grunnlaget sitt i prinsippene fra den egyptiske astronomen Klaudios Ptolemaios i år 140 evt., og er dermed basert på det antikke, geosentriske verdbildet (det ptolemeiske verdbildet).</p>
        <p>Himmellegemene som er av astrologisk betydning, er Sola, Månen, planetene (minus Jordene) og dem rundt 150 synlige stjernene i Dyrekretsen. Stjernene har blitt inndelt i tolv stjernetegn som har fått navn etter Dyrekretsens orientalsk-greske stjernebilder. På norsk heter de Væren (Væren), Tyren, Tvillingene (Tvillin-gene), Krepsen, Løven (Løven), Jomfrua (Jomfruen), Vekta (Vekten), Skorpionen, Skytteren (Skytten), Steinbukken, Vassmannen (Vannmannen) og Fiskene (Fiskene).</p>
        <p>Sola, Månen og planetene (med unntak av Pluto) beveger seg alltid innenfor Dyrekretsen, og deres posisjoner i Dyrekretsen, og i forhold til hverandre, blir sagt å avgjøre naturen på alle gitt tidspunkt.</p>
        <h2 className="text-2xl font-bold mb-2 text-yellow-800 mt-8">Dyrekretsen</h2>
        <p>Dyrekretsen er en sone på himmelkulen mens 18° bredte. Det er 9° på hver side av ekliptikken, også kalte dyrekretslinjen. Sola, Månen og de store planetene beveger seg alltid innenfor dette beltet, som er markert av tolv stjernebilder, hvor syv av disse har dyrenavn, av dette kommer navnet Dyrekretsen.</p>
        <p>I astrologi er stjernebildene i Dyrekretsen tilknyttet dem tolv stjernetegnene.</p>
        <p>I eldre tider ble ekliptikken inndelt i tolv like store deler på 30° hver, kalt himmeltegn eller Dyrekretsens tegn. Et himmellegemes lengde ble markert med antallet grader innenfor et bestemt tegn. Tegnene har samme navn og er gitt i samme orden som de tolv stjernebildene som ligger langs ekliptikken.</p>
        <p>Dyrekretsen er av babylonsk opprinnelse, men overlevert oss gjennom grekerne. I begynnelsen hadde man bare et lite antall himmeltegn, men etter hvert økete tallet, og han fikk trolig den endelige tolvdelingen sin på 500-tallet før vår tidsregning (fvt.).</p>
        <p>I oldtiden falt himmeltegn og stjernebilder sammen. På grunn av presesjon (en langsom endring i retningen til Jordens rotasjonsakse), er stjernetegnene nå forskjøven slik at for eksempel Værens tegn ligger i stjernebildet Fiskene.</p>
        <h2 className="text-2xl font-bold mb-2 text-yellow-800 mt-8">De tolv stjernetegnene</h2>
        <p>Opplistingen under vis hvilket karaktertrekk, kjønn, temperament, element og herskerplanet kvart av de tolv stjernetegnene ifølge astrologiske forestillinger skal representere.</p>
      </div>
    </main>
  );
}
