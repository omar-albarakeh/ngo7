import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import "./cardSlider3d.css";
import useSliderImages from "./cardSliderData";

const CardSlider = () => {
  const images = useSliderImages();
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

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

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

  useEffect(() => {
    const handleResize = () => setCurrentIndex((prev) => prev);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCircularStyle = (index) => {
    const screenWidth = window.innerWidth;

    let radius, scaleFocused, scaleOthers;
    if (screenWidth <= 480) {
      radius = 200;
      scaleFocused = 1;
      scaleOthers = 0.75;
    } else if (screenWidth <= 768) {
      radius = 300;
      scaleFocused = 0.9;
      scaleOthers = 0.7;
    } else {
      radius = 420;
      scaleFocused = 0.85;
      scaleOthers = 0.6;
    }

    const scale = index === currentIndex ? scaleFocused : scaleOthers;
    const brightness = index === currentIndex ? 1 : 0.6;

    const angleStep = ((360 / totalSlides) * Math.PI) / 180;
    const angle =
      angleStep * ((index - currentIndex + totalSlides) % totalSlides);

    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      zIndex: Math.round(z),
      filter: `brightness(${brightness})`,
      opacity: z < 0 ? 0.2 : 1,
      transition: "all 0.7s ease",
      willChange: "transform, opacity",
    };
  };

  return (
    <div className="slider-container">
      <h1 className="slider-heading">🌍 Donate to Causes That Matter 🌍</h1>

      <div
        className="slider-wrapper"
        {...handlers}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={getCircularStyle(index)}>
            <img
              src={image.src}
              alt={image.title}
              className="slide-image"
              loading="lazy"
            />
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
