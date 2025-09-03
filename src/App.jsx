// src/App.jsx
import React, { useState } from 'react';
import ReceiptList from './components/ReceiptList';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import BirthdayAnimation from './components/BirthdayAnimation.jsx';
import LoveLetter from './components/LoveLetter.jsx';
import ReasonsAnimation from './components/ReasonsAnimation.jsx';
import LeaveAnimation from './components/LeaveAnimation.jsx';
import FinalMessage from './components/FinalMessage.jsx';
import PhotoCollage from './components/PhotoCollage.jsx'; // 👈 Importa el nuevo componente
import './App.css';

function App() {
  const [phase, setPhase] = useState('birthday');

  // ... (funciones de manejador de fases, sin cambios) ...
  const particlesInit = async (main) => { await loadSlim(main); };
  const particlesLoaded = (container) => {};
  const handleBirthdayAnimationEnd = () => { setPhase('letter'); };
  const handleContinueToReasons = () => { setPhase('reasons-animation'); };
  const handleReasonsAnimationEnd = () => { setPhase('main-app'); };
  const handleContinueToLeaveAnimation = () => { setPhase('leave-animation'); };
  
  // Cambia este manejador para que avance al collage
  const handleLeaveAnimationEnd = () => {
    setPhase('final-message');
  };

  // 👈 Nuevo manejador para avanzar al collage después del mensaje final
  const handleFinalMessageEnd = () => {
    setPhase('photo-collage');
  };

  return (
    <div>
      {/* ... (Fases 1 a 4, sin cambios) ... */}
      {phase === 'birthday' && (<BirthdayAnimation onAnimationEnd={handleBirthdayAnimationEnd} />)}
      {phase === 'letter' && (<LoveLetter onContinue={handleContinueToReasons} />)}
      {phase === 'reasons-animation' && (<ReasonsAnimation onAnimationEnd={handleReasonsAnimationEnd} />)}
      {phase === 'main-app' && (
        <div className="app-container">
          <header className="app-header">
            <div className="header-content">
              <h1 className="main-title">A mi querida Kei</h1>
              <div className="signature-container">
                <p className="signature-text">
                  Mi amor por ti es como la carta que nunca se olvida.
                </p>
              </div>
            </div>
          </header>
          <ReceiptList />
          <div className="button-container">
            <button 
              className="next-button"
              onClick={handleContinueToLeaveAnimation}
            >
              Continuar
            </button>
          </div>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: { color: { value: "#fce4ec" } },
              fpsLimit: 60,
              particles: { color: { value: ["#ff69b4", "#f0b4d4", "#fce4ec"] }, links: { enable: false }, move: { direction: "bottom-left", enable: true, outModes: { default: "out" }, random: true, speed: 1, straight: false, }, number: { density: { enable: true, area: 800, }, value: 50, }, opacity: { value: 0.5 }, shape: { type: "circle" }, size: { value: { min: 2, max: 5 } },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}

      {/* Fase 5: Animación de "irme" */}
      {phase === 'leave-animation' && (
        <LeaveAnimation onAnimationEnd={handleLeaveAnimationEnd} />
      )}

      {/* Fase 6: Mensaje final */}
      {phase === 'final-message' && (
        // Añade un temporizador al FinalMessage para que avance al collage
        <FinalMessage onAnimationEnd={handleFinalMessageEnd} />
      )}

      {/* 👈 Fase 7: Collage de fotos */}
      {phase === 'photo-collage' && (
        <PhotoCollage />
      )}
    </div>
  );
}

export default App;