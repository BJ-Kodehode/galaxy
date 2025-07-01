"use client";

export default function ContactContent() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">🛸 Kontakt Glaxen</h1>
      <p className="mb-4">Send oss et signal!<br/>
        Du trenger ikke morse, røyk eller flaskepost – vi svarer (nesten alltid) raskere enn lysets hastighet. Eller i hvert fall raskere enn kundeservice hos strømleverandøren din.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">🧪 Har du spørsmål om Glaxen?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Mistet du søvnen fordi du lurer på hva Glaxen egentlig er?</li>
        <li>Har du sett Glaxen i det fri og trenger bekreftelse?</li>
        <li>Eller vil du bare sende oss en koselig emoji og si hei? 👽</li>
      </ul>
      <p>Vi tåler det meste. Nesten.</p>
    </main>
  );
}
