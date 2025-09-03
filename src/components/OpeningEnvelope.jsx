import React, { useState, useEffect } from 'react';
import './OpeningEnvelope.css';

const OpeningEnvelope = ({ onAnimationEnd }) => {
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpening(false);
      onAnimationEnd();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={`envelope-container ${isOpening ? 'show' : 'hide'}`}>
      <div className="envelope">
        <div className="flap"></div>
        <div className="body"></div>
        <div className="letter"></div>
      </div>
    </div>
  );
};

export default OpeningEnvelope;