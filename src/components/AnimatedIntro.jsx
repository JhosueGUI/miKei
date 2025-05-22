import { motion } from "framer-motion";

export default function AnimatedIntro({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#ff4081" }}>
        Hola Kei, esto es solo para ti 💗
      </h1>
      <button
        onClick={onNext}
        style={{
          marginTop: 40,
          padding: "10px 20px",
          fontSize: "1.2rem",
          cursor: "pointer",
          borderRadius: 8,
          border: "none",
          backgroundColor: "#ff4081",
          color: "#fff",
        }}
      >
        Comenzar
      </button>
    </motion.div>
  );
}
