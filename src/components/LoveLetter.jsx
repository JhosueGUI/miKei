import React from 'react';
import './LoveLetter.css';

const LoveLetter = ({ onContinue }) => {
  return (
    <div className="love-letter-container">
      <div className="letter-content">
        <h2 className="letter-heading">Mi amada Kei,</h2>
        <p className="letter-text">
          Hoy, en este día tan especial, quiero que sepas que eres la persona más maravillosa que he conocido. Tu risa es mi canción favorita y tu mirada, la luz que ilumina mis días.
          <br /><br />
          El tiempo a tu lado es un regalo, una aventura que atesoro con cada latido. Cada recuerdo que hemos creado es un tesoro que guardo con inmensa felicidad.
          <br /><br />
          Eres mi musa, mi confidente, mi compañera de vida. No hay palabras que puedan describir lo que siento por ti, pero sé que es un amor que crece y se fortalece cada día.
          <br /><br />
          Feliz cumpleaños, mi amor. Que la felicidad te siga en cada paso.
        </p>
        <p className="letter-signature">Con todo mi amor</p>
      </div>
      <button className="continue-button" onClick={onContinue}>
        Abrir la carta de la vida
      </button>
    </div>
  );
};

export default LoveLetter;