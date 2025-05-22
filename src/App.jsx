import React, { useState } from "react";
import AnimatedIntro from "./components/AnimatedIntro";
import LoveCards from "./components/LoveCards";
import MemoryGallery from "./components/MemoryGallery";
import BackgroundMusic from "./components/BackgroundMusic";
import Timeline from "./components/Timeline";
import FallingPetals from "./components/FallingPetals";
import TypingLetter from "./components/TypingLetter";

export default function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((s) => (s < 5 ? s + 1 : s));
  const prevStep = () => setStep((s) => (s > 0 ? s - 1 : s));

  return (
    <>
      <FallingPetals />
      <BackgroundMusic />
      <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
        {step === 0 && <AnimatedIntro onNext={nextStep} />}
        {step === 1 && <LoveCards onNext={nextStep} onPrev={prevStep} />}
        {step === 2 && <MemoryGallery onNext={nextStep} onPrev={prevStep} />}
        {step === 3 && <Timeline onNext={nextStep} onPrev={prevStep} />}
        {step === 4 && <TypingLetter onPrev={prevStep} />}
      </div>
    </>
  );
}
