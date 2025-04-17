import React, { useState, useEffect, useRef } from "react";
import "./cardSlider3d.css";
import useSliderImages from "./cardSliderData"; // <- note: it's a hook!

const CardSlider = () => {
  const images = useSliderImages(); // ✅ call the hook here
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);
  const totalSlides = images.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(goToNext, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, currentIndex]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const getCircularStyle = (index) => {
    const angleStep = ((360 / totalSlides) * Math.PI) / 180;
    const angle =
      angleStep * ((index - currentIndex + totalSlides) % totalSlides);
    const radius = 400;

    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    const scale = index === currentIndex ? 0.8 : 0.6;
    const brightness = index === currentIndex ? 1 : 0.6;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      zIndex: Math.round(z),
      filter: `brightness(${brightness})`,
      opacity: z < 0 ? 0.3 : 1,
      transition: "all 0.7s ease",
    };
  };

  return (
    <div className="slider-container">
      <h1 className="slider-heading">🌍 Donate to Causes That Matter 🌍</h1>

      <div
        className="slider-wrapper"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={getCircularStyle(index)}>
            <img src={image.src} alt={image.title} className="slide-image" />
            <div className="slide-overlay">
              <span className="slide-title">{image.title}</span>
            </div>
            {index === currentIndex && <div className="slide-glow" />}
          </div>
        ))}

        <button className="slider-arrow prev" onClick={goToPrev}>
          &lt;
        </button>
        <button className="slider-arrow next" onClick={goToNext}>
          &gt;
        </button>
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
