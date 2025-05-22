import React, { useEffect, useRef } from "react";

const Petal = function (canvasWidth, canvasHeight) {
  this.x = Math.random() * canvasWidth;
  this.y = Math.random() * canvasHeight;
  this.radius = Math.random() * 7 + 2;
  this.speed = Math.random() * 1 + 0.5;
  this.angle = Math.random() * 2 * Math.PI;
  this.angularSpeed = 0.01 + Math.random() * 0.02;
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;

  this.update = () => {
    this.y += this.speed;
    this.x += Math.sin(this.angle) * 0.5;
    this.angle += this.angularSpeed;

    if (this.y > this.canvasHeight) {
      this.y = -this.radius;
      this.x = Math.random() * this.canvasWidth;
    }
  };

  this.draw = (ctx) => {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 192, 203, 0.7)";
    ctx.ellipse(this.x, this.y, this.radius, this.radius / 2, this.angle, 0, 2 * Math.PI);
    ctx.fill();
  };
};

export default function FallingPetals() {
  const canvasRef = useRef(null);
  const petals = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      petals.current = Array.from({ length: 50 }, () => new Petal(canvas.width, canvas.height));
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.current.forEach((petal) => {
        petal.update();
        petal.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
