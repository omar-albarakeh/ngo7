import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const LogoSwitcher = ({ interval = 3000, className = "" }) => {
  const logos = [
    {
      src: "./images/logo/logo1.png",
      alt: "Logo 1",
      width: 120,
      height: 40,
    },
    {
      src: "./images/logo/logo2.png",
      alt: "Logo 2",
      width: 120,
      height: 40,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [logos.length, interval]);

  return (
    <Link to="/" className={`logo-switcher ${className}`}>
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className={`switch-logo ${index === currentIndex ? "active" : ""}`}
          width={logo.width}
          height={logo.height}
        />
      ))}
    </Link>
  );
};

export default LogoSwitcher;
