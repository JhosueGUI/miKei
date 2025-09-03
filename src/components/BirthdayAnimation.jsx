// src/components/BirthdayAnimation.jsx
import React, { useState, useEffect } from 'react';
import './BirthdayAnimation.css';

const BirthdayAnimation = ({ onAnimationEnd }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Simula la duración de la animación
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationEnd(); // Llama a la función que oculta este componente
    }, 4000); // 4 segundos para que la animación termine

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={`birthday-container ${isAnimating ? 'show' : 'hide'}`}>
      <div className="confetti-container">
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
      </div>
      <div className="birthday-message">
        <h1 className="message-title">¡Feliz Cumpleaños Kei!</h1>
        <p className="message-text">Que este día esté lleno de amor y alegría.</p>
      </div>
    </div>
  );
};

export default BirthdayAnimation;