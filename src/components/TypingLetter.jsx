import React, { useEffect, useState } from "react";

const message = `Querida Kei,

Quería que supieras cuánto significas para mí. Cada momento contigo es un regalo, y esta pequeña sorpresa es solo una muestra de todo lo que siento.

Con todo mi amor,
Jhosue`;

export default function TypingLetter({ onPrev }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div style={{ whiteSpace: "pre-wrap", fontFamily: "'Courier New', Courier, monospace", fontSize: 18 }}>
      <h2>Carta Final</h2>
      <p>{displayedText}</p>
      <button
        onClick={onPrev}
        style={{
          marginTop: 20,
          padding: "8px 16px",
          borderRadius: 8,
          border: "none",
          backgroundColor: "#ff4081",
          color: "white",
          cursor: "pointer",
        }}
      >
        Atrás
      </button>
    </div>
  );
}
