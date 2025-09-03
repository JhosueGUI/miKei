// src/components/FinalMessage.jsx
import React, { useEffect } from 'react';
import './FinalMessage.css';

// Añade onAnimationEnd como prop
const FinalMessage = ({ onAnimationEnd }) => {
  useEffect(() => {
    // Después de que el mensaje se muestre por un tiempo, llama a onAnimationEnd
    const timer = setTimeout(() => {
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }, 4000); // Muestra el mensaje por 4 segundos

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="final-message-container">
      <h1 className="final-message-text">
        No hay ninguna razon para irme
      </h1>
    </div>
  );
};

export default FinalMessage;