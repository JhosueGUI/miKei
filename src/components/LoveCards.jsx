import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import cards from "../data/cards";

export default function LoveCards({ onPrev, onNext }) {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>💖 Mis Cartas de Amor 💖</h2>
      <Slider ref={setSliderRef} {...settings}>
        {cards.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={cardStyle}
          >
            <p style={textStyle}>{msg}</p>
          </motion.div>
        ))}
      </Slider>
      <div style={navStyle}>
        {/* Botones para controlar el slider */}
        <button onClick={() => sliderRef?.slickPrev()} style={iconButton}>
          <FaArrowLeft />
        </button>
        <button onClick={() => sliderRef?.slickNext()} style={iconButton}>
          <FaArrowRight />
        </button>
      </div>
      <div style={{ marginTop: 20 }}>
        {/* Botones para cambiar de vista usando las funciones externas */}
        <button onClick={onPrev} style={buttonStyle}>
          Atrás
        </button>
        <button onClick={onNext} style={buttonStyle}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

// 🎨 Estilos
const containerStyle = {
  maxWidth: 800,
  margin: "auto",
  textAlign: "center",
  padding: "40px 20px",
  fontFamily: "'Dancing Script', cursive",
};

const titleStyle = {
  marginBottom: 30,
  fontSize: "2.5rem",
  color: "#ff4081",
};

const cardStyle = {
  background: "#fff0f6",
  borderRadius: 20,
  padding: "40px 30px",
  margin: "0 15px",
  boxShadow: "0 6px 20px rgba(255, 105, 135, 0.3)",
  minHeight: 250,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const textStyle = {
  fontSize: "1.3rem",
  color: "#fff",
  whiteSpace: "pre-wrap",
  lineHeight: 1.7,
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: 30,
};

const iconButton = {
  backgroundColor: "#ff4081",
  border: "none",
  color: "white",
  fontSize: "1.3rem",
  padding: "10px 16px",
  borderRadius: "50%",
  cursor: "pointer",
};

const buttonStyle = {
  margin: "0 10px",
  padding: "8px 16px",
  borderRadius: 8,
  border: "none",
  backgroundColor: "#ff4081",
  color: "white",
  cursor: "pointer",
};
