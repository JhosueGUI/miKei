import React from 'react';
import './CharacterGuide.css';

const CharacterGuide = ({ isVisible }) => {
  return (
    <div className={`character-container ${isVisible ? 'visible' : ''}`}>
      <div className="character-body"></div>
      <div className="character-head"></div>
      <div className="character-arm left-arm"></div>
      <div className="character-arm right-arm"></div>
      <div className="character-heart"></div>
      <div className="speech-bubble">Toca aquí, cariño</div>
    </div>
  );
};

export default CharacterGuide;