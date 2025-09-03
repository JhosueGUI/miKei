import React from 'react';
import './Receipt.css';

// Aceptamos la prop 'className'
const Receipt = ({ number, reason, className }) => {
  return (
    // Agregamos la clase al contenedor principal del recibo
    <div className={`receipt-container ${className}`}>
      <div className="receipt">
        <div className="receipt-header">
          <span>RECIBO DE CUMPLEAÑOS</span>
          <span>No. {number} de 12</span>
        </div>
        <div className="receipt-content">
          <div className="reason-label">
            RAZÓN #{number}
          </div>
          <p className="reason-text">{reason}</p>
        </div>
        <div className="receipt-footer">
          <p className="footer-text">
            *Gracias por tu compra: has recibido un gasto de amor*<br />
            CANTIDAD DE ARTÍCULOS: 1<br />
            TOTAL: AMOR INFINITO<br />
            Esta compra no tiene fecha de caducidad, es para siempre.<br />
            ATENTAMENTE: TU PERSONA FAVORITA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;