// src/components/ReasonsAnimation.jsx
import React, { useEffect, useState } from 'react';
import './ReasonsAnimation.css';

const ReasonsAnimation = ({ onAnimationEnd }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Retrasa la aparición del título para que no sea instantánea
    const timer = setTimeout(() => {
      setShowTitle(true);
      // Ajusta este tiempo para que sea un poco más largo que la duración de la animación CSS
      // La animación CSS durará 4 segundos (typing) + 0.75s (blink-caret) = 4.75s.
      // Démosle un total de 5.5 segundos para que se vea completo.
      setTimeout(() => {
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }, 5500); // Duración total de la animación antes de llamar a onAnimationEnd
    }, 500); // 0.5 segundos de retraso inicial

    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="reasons-animation-container">
      {showTitle && (
        // Usamos <br /> para los saltos de línea y <span> para enfatizar "QUEDARME"
        <h1 className="reasons-title typewriter">
          12 <br />
          razones para <br />
          <span className="emphasized-quedarme">QUEDARME</span>
        </h1>
      )}
    </div>
  );
};

export default ReasonsAnimation;