import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import musicFile from "../../public/audio/love-song.mp3";

export default function BackgroundMusic() {
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const soundInstance = new Howl({
      src: [musicFile],
      loop: true,
      volume: 0.3,
    });
    setSound(soundInstance);

    return () => {
      soundInstance.unload();
    };
  }, []);

  const togglePlay = () => {
    if (!sound) return;

    if (playing) {
      sound.pause();
      setPlaying(false);
    } else {
      sound.play();
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={togglePlay}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        padding: "10px 15px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: playing ? "#ff4081" : "#ccc",
        color: "white",
        cursor: "pointer",
        fontSize: "1.2rem",
      }}
      aria-label="Toggle background music"
    >
      {playing ? "🔊" : "🔈"}
    </button>
  );
}
