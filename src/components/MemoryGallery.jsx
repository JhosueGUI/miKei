import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gallery from "../data/gallery";

export default function MemoryGallery({ onNext, onPrev }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Galería de Recuerdos</h2>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {gallery.map(({ src, caption }, i) => (
          <div key={i}>
            <img src={src} alt={`Recuerdo ${i + 1}`} />
            <p className="legend">{caption}</p>
          </div>
        ))}
      </Carousel>
      <div style={{ marginTop: 20 }}>
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

const buttonStyle = {
  margin: "0 10px",
  padding: "8px 16px",
  borderRadius: 8,
  border: "none",
  backgroundColor: "#ff4081",
  color: "white",
  cursor: "pointer",
};
