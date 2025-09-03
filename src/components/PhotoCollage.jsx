// src/components/VideoCollage.jsx
import React, { useEffect, useState } from 'react';
import './VideoCollage.css'; // Crearemos un nuevo CSS para videos

// Importa tus archivos de video aquí
import video1 from '../assets/collage/video1.mp4';
import video2 from '../assets/collage/video2.mp4';
import video3 from '../assets/collage/video3.mp4';
import video4 from '../assets/collage/video4.mp4';
// Añade más imports si tienes más videos

const videos = [
  { id: 1, src: video1, alt: 'Recuerdo 1' },
  { id: 2, src: video2, alt: 'Recuerdo 2' },
  { id: 3, src: video3, alt: 'Recuerdo 3' },
  { id: 4, src: video4, alt: 'Recuerdo 4' },
  // Añade más objetos para cada uno de tus videos
];

const VideoCollage = () => {
  const [showCollage, setShowCollage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCollage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`video-collage-container ${showCollage ? 'fade-in' : ''}`}>
      <h2 className="collage-title">Nuestros Momentos Inolvidables</h2>
      <div className="collage-grid">
        {videos.map(video => (
          <div key={video.id} className="collage-item">
            <video 
              src={video.src} 
              alt={video.alt} 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="metadata"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCollage;