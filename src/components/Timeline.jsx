import dayjs from "dayjs";
import timeline from "../data/timeline";
import { motion } from "framer-motion";

export default function Timeline({ onNext, onPrev }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Nuestra Historia</h2>
      <div style={{ textAlign: "left", maxWidth: 600, margin: "auto" }}>
        {timeline.map(({ date, title, description }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            style={{
              marginBottom: 25,
              borderLeft: "3px solid #ff4081",
              paddingLeft: 15,
            }}
          >
            <strong>{dayjs(date).format("DD MMM YYYY")}</strong>
            <h4 style={{ margin: "5px 0" }}>{title}</h4>
            <p>{description}</p>
          </motion.div>
        ))}
      </div>
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
