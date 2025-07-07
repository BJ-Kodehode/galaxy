
import React from "react";
import "./CosmicBackground.css";

// Lager 120 "ekte" stjerner med tilfeldig posisjon og størrelse
function generateStars(count = 3500) {
  const colors = [
    '#fff',           // hvit
    '#ffe9c4',        // gulhvit
    '#bcd0ff',        // blåhvit
    '#ffd6f6',        // rosa
    '#f7f7ff',        // svak hvit
    '#c4e1ff',        // blå
    '#fffbe0',        // svak gul
    '#ffe4b5',        // oransjeaktig
    '#e0eaff',        // svak blå
  ];
  const stars = [];
  for (let i = 0; i < count; i++) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 1.8 + 0.7; // px
    const opacity = Math.random() * 0.5 + 0.5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Ca 1/3 av stjernene blinker
    const twinkle = Math.random() < 0.33;
    const twinkleDuration = (Math.random() * 2 + 1.5).toFixed(2); // 1.5s - 3.5s
    stars.push(
      <div
        key={i}
        className={"cosmic-star" + (twinkle ? " twinkle-star" : "")}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          background: color,
          boxShadow: `0 0 6px 1px ${color}88, 0 0 1.5px 0.5px #bcd0ff99`,
          animationDuration: twinkle ? `${twinkleDuration}s` : undefined,
        }}
      />
    );
  }
  return stars;
}

export default function CosmicBackground() {
  return (
    <div className="bg-cosmic" aria-hidden="true">
      {generateStars(120)}
    </div>
  );
}
