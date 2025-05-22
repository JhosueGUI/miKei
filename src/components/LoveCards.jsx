import Slider from "react-slick";
import cards from "../data/cards";

export default function LoveCards({ onNext, onPrev }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Cartas de Amor</h2>
      <Slider {...settings}>
        {cards.map((msg, i) => (
          <div
            key={i}
            style={{
              background: "#ffd6e8",
              borderRadius: 15,
              padding: 30,
              margin: "0 10px",
              boxShadow: "0 4px 15px rgba(255, 64, 129, 0.3)",
              minHeight: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
            }}
          >
            {msg}
          </div>
        ))}
      </Slider>
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
