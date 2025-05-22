import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gallery from "../data/gallery";

export default function MemoryGallery({ onNext, onPrev }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🌸 Mi hermosa y pequeña amada 🌸</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        showIndicators={true}
        dynamicHeight={false}
        emulateTouch
        transitionTime={600}
      >
        {gallery.map(({ src, caption }, i) => (
          <div key={i} style={slideStyle}>
            <img src={src} alt={`Recuerdo ${i + 1}`} style={imageStyle} />
            <p style={captionStyle}>{caption}</p>
          </div>
        ))}
      </Carousel>
      <div style={navStyle}>
        <button onClick={onPrev} style={buttonStyle}>Atrás</button>
        <button onClick={onNext} style={buttonStyle}>Siguiente</button>
      </div>
    </div>
  );
}

// 🎨 Estilos
const containerStyle = {
  maxWidth: "700px",
  margin: "auto",
  textAlign: "center",
  padding: "40px 20px",
  fontFamily: "'Dancing Script', cursive",
};

const titleStyle = {
  fontSize: "2.3rem",
  marginBottom: "30px",
  color: "#ff4081",
};

const slideStyle = {
  backgroundColor: "#fff0f6",
  borderRadius: "20px",
  padding: "10px",
  boxShadow: "0 4px 20px rgba(255, 105, 135, 0.25)",
};

const imageStyle = {
  maxHeight: "400px",
  width: "auto",
  borderRadius: "15px",
  objectFit: "cover",
  margin: "0 auto",
};

const captionStyle = {
  background: "#ffccde",
  borderRadius: "10px",
  padding: "10px 15px",
  marginTop: "15px",
  fontSize: "1.1rem",
  color: "#880e4f",
};

const navStyle = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const buttonStyle = {
  padding: "10px 18px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#ff4081",
  color: "white",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.3s",
};
