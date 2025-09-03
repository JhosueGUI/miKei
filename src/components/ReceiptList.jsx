import React, { useState } from 'react';
import Receipt from './Receipt';
import CharacterGuide from '../CharacterGuide.jsx'; // Importa el nuevo componente
import './ReceiptList.css';

const reasonsData = [
  { number: 12, reason: "Y la última, porque eres simplemente tú, mi persona favorita para siempre." },
  { number: 11, reason: "Porque me inspiras a ser una mejor persona cada día." },
  { number: 10, reason: "Por las pequeñas sorpresas que me hacen sonreír." },
  { number: 9, reason: "Por la paz que siento cuando estoy a tu lado." },
  { number: 8, reason: "Porque contigo, el tiempo vuela y a la vez se siente eterno." },
  { number: 7, reason: "Por cada abrazo que me hace sentir en casa." },
  { number: 6, reason: "Por la forma en que me miras, como si fuera la única persona en el mundo." },
  { number: 5, reason: "Porque tu apoyo incondicional me hace sentir invencible." },
  { number: 4, reason: "Por las veces que me haces reír hasta que me duele el estómago." },
  { number: 3, reason: "Tu sonrisa es mi razón favorita para existir." },
  { number: 2, reason: "Porque me haces sentir amado sin necesidad de palabras." },
  { number: 1, reason: "Porque haces que todo sea más hermoso cuando estás cerca." },
];
const ReceiptList = () => {
  const [printedCount, setPrintedCount] = useState(0);

  const handleScreenClick = () => {
    if (printedCount < reasonsData.length) {
      setPrintedCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div className="receipt-list-container" onClick={handleScreenClick}>
      <div className="printer-top"></div>
      <div className="receipt-area">
        {/* El personaje solo se mostrará si printedCount es 0 */}
        <CharacterGuide isVisible={printedCount === 0} />
        
        {reasonsData.slice(0, printedCount).map((data, index) => (
          <React.Fragment key={data.number}>
            <Receipt
              number={data.number}
              reason={data.reason}
            />
            {index < printedCount - 1 && <div className="perforation-line"></div>}
          </React.Fragment>
        ))}
      </div>
      <div className="printer-bottom"></div>
    </div>
  );
};

export default ReceiptList;