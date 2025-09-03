import React, { useEffect, useState } from 'react';
import './LeaveAnimation.css'; // Crearemos este nuevo archivo CSS

const LeaveAnimation = ({ onAnimationEnd }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Retrasa la aparición del título
    const timer = setTimeout(() => {
      setShowTitle(true);
      // Démosle unos segundos para que se muestre antes de terminar
      setTimeout(() => {
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }, 5500); // 5.5 segundos, similar a la animación anterior
    }, 500);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="leave-animation-container">
      {showTitle && (
        <h1 className="leave-title typewriter">
          1 <br />
          razon para <br />
          <span className="emphasized-leave">IRME</span>
        </h1>
      )}
    </div>
  );
};

export default LeaveAnimation;