import { useState, useEffect, useRef } from "react";
import ProjectCard from "./Gallerycards";
import "./Gallery.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("2025");
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const touchStartX = useRef(null);

  const campaigns = {
    2025: [
      {
        title: "SOS Gaza",
        description: "Emergency humanitarian aid and relief for Gaza residents.",
        images: [
          "/images/WaterGaza2024/img1.jpg",
          "/images/WaterGaza2024/img2.jpg",
        ],
      },
      // other campaigns...
    ],
    // other years...
  };

  const handleCardClick = (images) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setLoaded(false);
  };

  const handlePrev = () => {
    setLoaded(false);
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setLoaded(false);
    setCurrentImageIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImages.length === 0) return;
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImages]);

  // Swipe (Touch) Navigation
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  return (
    <section className="project" id="projects">
      <div className="container">
        <h2>Our Donation Campaigns</h2>
        <p>
          Explore our ongoing and past initiatives focused on humanitarian aid
          and development. Click on any project to view more.
        </p>

        <ul className="tab-nav">
          {["2025", "2024", "2023"].map((year) => (
            <li
              key={year}
              className={activeTab === year ? "active" : ""}
              onClick={() => setActiveTab(year)}
            >
              {year}
            </li>
          ))}
        </ul>

        <div className="tab-content">
          <div className="row">
            {campaigns[activeTab].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgUrl={project.images[0]}
                onClick={() => handleCardClick(project.images)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for displaying images */}
      {selectedImages.length > 0 && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>

            <div className="modal-image">
              <img
                src={selectedImages[currentImageIndex]}
                alt={`Gallery ${currentImageIndex}`}
                onLoad={() => setLoaded(true)}
                className={loaded ? "loaded" : ""}
              />
              <div className="image-counter">
                {currentImageIndex + 1} / {selectedImages.length}
              </div>
            </div>

            <div className="modal-nav">
              <button onClick={handlePrev} aria-label="Previous image">
                &#8592;
              </button>
              <button onClick={handleNext} aria-label="Next image">
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
