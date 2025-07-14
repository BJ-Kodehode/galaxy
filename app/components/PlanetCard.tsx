import React from "react";

export interface PlanetCardProps {
  name: string;
  img: string;
  facts: string[];
  source?: string;
  onClick?: () => void;
  tabIndex?: number;
  ariaLabel?: string;
}

const PlanetCard: React.FC<PlanetCardProps> = ({
  name,
  img,
  facts,
  source = "Kilde: NASA",
  onClick,
  tabIndex = 0,
  ariaLabel,
}) => (
  <div
    className="bg-white/80 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition"
    onClick={onClick}
    tabIndex={tabIndex}
    aria-label={ariaLabel || `Detaljer for ${name}`}
  >
    <img
      src={img}
      alt={name}
      className="mb-2 sm:mb-4 rounded object-scale-down max-w-full max-h-40 sm:max-h-60"
      draggable={false}
      width={240}
      height={160}
      loading="lazy"
    />
    <h2 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800 text-center">
      {name}
    </h2>
    {facts.map((fact, i) => (
      <p className="text-gray-700 mb-1 sm:mb-2 text-center" key={i}>
        {fact}
      </p>
    ))}
    <p className="text-gray-700 text-xs sm:text-sm text-center">{source}</p>
  </div>
);

export default PlanetCard;
