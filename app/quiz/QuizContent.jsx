"use client";

import React, { useState } from "react";

const adultQuiz = [
  {
    question: "Hva heter det supermassive sorte hullet i sentrum av Melkeveien?",
    options: ["Andromeda X", "Sagittarius A*", "Sirius B", "Betelgeuse"],
    answer: 1,
    explanation: "Sagittarius A* er det supermassive sorte hullet i sentrum av Melkeveien."
  },
  {
    question: "Hvilken planet i solsystemet har flest måner?",
    options: ["Jupiter", "Uranus", "Neptun", "Saturn"],
    answer: 3,
    explanation: "Saturn har flest bekreftede måner i solsystemet."
  },
  {
    question: "Hvor lang tid bruker solsystemet på én runde rundt Melkeveien?",
    options: ["1 million år", "225 millioner år", "1 milliard år", "25 000 år"],
    answer: 1,
    explanation: "Solsystemet bruker ca. 225 millioner år på én runde rundt Melkeveien."
  },
  {
    question: "Hvilken planet har en dag som er lengre enn et år?",
    options: ["Venus", "Jupiter", "Mars", "Pluto"],
    answer: 0,
    explanation: "Venus har en dag som er lengre enn et år."
  },
  {
    question: "Hva er et annet navn for en eksploderende stjerne?",
    options: ["Pulsar", "Quasar", "Supernova", "Asteroide"],
    answer: 2,
    explanation: "En eksploderende stjerne kalles en supernova."
  },
  {
    question: "Hvilken planet kalles 'jordens tvilling' på grunn av størrelse og sammensetning?",
    options: ["Venus", "Mars", "Merkur", "Neptun"],
    answer: 0,
    explanation: "Venus kalles jordens tvilling."
  },
  {
    question: "Hva er hovedforskjellen mellom en stjerne og en planet?",
    options: [
      "Stjerner produserer sitt eget lys, planeter reflekterer lys.",
      "Planeter er alltid større enn stjerner.",
      "Stjerner har ringer, planeter har ikke det.",
      "Planeter lyser sterkere enn stjerner."
    ],
    answer: 0,
    explanation: "Stjerner produserer sitt eget lys gjennom fusjon, planeter reflekterer bare lys."
  },
  {
    question: "Hva er navnet på den nest nærmeste stjernen til jorden etter solen?",
    options: ["Betelgeuse", "Proxima Centauri", "Sirius", "Vega"],
    answer: 1,
    explanation: "Proxima Centauri er den nest nærmeste stjernen."
  },
  {
    question: "Hvor mange lysår er det omtrent til sentrum av Melkeveien?",
    options: ["2 600 lysår", "26 000 lysår", "260 000 lysår", "2 600 000 lysår"],
    answer: 1,
    explanation: "Det er ca. 26 000 lysår til sentrum av Melkeveien."
  },
  {
    question: "Hva slags galakse er Melkeveien klassifisert som?",
    options: ["Elliptisk galakse", "Irregulær galakse", "Spiralgalakse", "Ringgalakse"],
    answer: 2,
    explanation: "Melkeveien er en spiralgalakse."
  }
];

const kidsQuiz = [
  {
    question: "Hva heter planeten vi bor på?",
    options: ["Mars", "Jorden", "Jupiter"],
    answer: 1,
    explanation: "Vi bor på planeten Jorden."
  },
  {
    question: "Hvilken planet er rød og kalles 'den røde planeten'?",
    options: ["Mars", "Venus", "Jorden", "Saturn"],
    answer: 0,
    explanation: "Mars kalles den røde planeten."
  },
  {
    question: "Hva lyser sterkest på himmelen om dagen?",
    options: ["Månen", "Solen", "Stjernene", "Mars"],
    answer: 1,
    explanation: "Solen lyser sterkest på himmelen om dagen."
  },
  {
    question: "Hvilken planet har ringer rundt seg?",
    options: ["Saturn", "Venus", "Pluto", "Jupiter"],
    answer: 0,
    explanation: "Saturn har tydelige ringer rundt seg."
  },
  {
    question: "Hva heter den største planeten i solsystemet?",
    options: ["Jupiter", "Mars", "Jorden", "Venus"],
    answer: 0,
    explanation: "Jupiter er den største planeten i solsystemet."
  },
  {
    question: "Hva er en stjerne laget av?",
    options: ["Stein", "Gass og ild", "Metall", "Vann"],
    answer: 1,
    explanation: "Stjerner består hovedsakelig av hydrogen og helium (gass og ild)."
  },
  {
    question: "Hvilken planet er kjent for å være dekket av skyer og ha syre i atmosfæren?",
    options: ["Venus", "Jorden", "Mars", "Saturn"],
    answer: 0,
    explanation: "Venus er kjent for sin tette atmosfære og skyer av svovelsyre."
  },
  {
    question: "Hvor mange planeter finnes i solsystemet vårt?",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explanation: "Det finnes åtte planeter i solsystemet vårt."
  },
  {
    question: "Hva kalles den banen planetene følger rundt solen?",
    options: ["Omløpsbane", "Stjernevei", "Ringbane", "Solsti"],
    answer: 0,
    explanation: "Banen kalles en omløpsbane."
  },
];

export default function QuizContent() {
  const [quizType, setQuizType] = useState("adult");
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const quiz = quizType === "adult" ? adultQuiz : kidsQuiz;
  const current = quiz[step];

  function handleOption(idx) {
    setSelected(idx);
    setShowAnswer(true);
  }

  function next() {
    setStep((s) => (s + 1 < quiz.length ? s + 1 : 0));
    setSelected(null);
    setShowAnswer(false);
  }

  return (
    <main className="container mx-auto py-8 px-2 max-w-2xl">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-700 drop-shadow">Quiz: Utforsk Melkeveien</h1>
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setQuizType("adult")}
          className={`px-4 py-2 rounded font-bold ${quizType === "adult" ? "bg-blue-700 text-white" : "bg-gray-200 text-blue-700"}`}>Voksne</button>
        <button onClick={() => setQuizType("kids")}
          className={`px-4 py-2 rounded font-bold ${quizType === "kids" ? "bg-yellow-500 text-white" : "bg-gray-200 text-yellow-700"}`}>Barn</button>
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-yellow-200 mb-4">
        <h2 className="text-xl font-bold mb-4 text-yellow-800">{current.question}</h2>
        {current.options.length > 0 && (
          <div className="flex flex-col gap-2 mb-4">
            {current.options.map((opt, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded border text-left transition-all duration-150
                  ${selected === idx && showAnswer
                    ? (idx === current.answer
                        ? "bg-green-200 border-green-600 text-green-900"
                        : "bg-red-200 border-red-600 text-red-900")
                    : "bg-yellow-50 border-yellow-300 hover:bg-yellow-100 text-yellow-900"}`}
                disabled={showAnswer}
                onClick={() => handleOption(idx)}
              >
                {String.fromCharCode(65 + idx)}) {opt}
              </button>
            ))}
          </div>
        )}
        {showAnswer && (
          <div className="mt-2 p-3 rounded bg-yellow-100 border border-yellow-300 text-yellow-900">
            <b>Fasit:</b> {current.options.length > 0 && current.answer !== null ? `${String.fromCharCode(65 + current.answer)}) ${current.options[current.answer]}` : current.explanation}
            <br />
            <span className="text-sm">{current.explanation}</span>
            {/* Ekstra info fra NASA APOD hvis tilgjengelig */}
            {quizType === "adult" && window && window.funFactFromStarsPage && (
              <>
                <hr className="my-2" />
                <span className="text-xs text-gray-700 block"><b>NASA APOD:</b> {window.funFactFromStarsPage.title}<br />{window.funFactFromStarsPage.explanation}</span>
              </>
            )}
          </div>
        )}
        <button
          className="mt-6 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
          onClick={next}
        >
          Neste spørsmål
        </button>
      </div>
    </main>
  );
}
