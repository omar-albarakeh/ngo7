import React from "react";
import "./Gallery.css";

const ProjectCard = ({ title, description, imgUrl, onClick }) => (
  <div className="project-card" onClick={onClick}>
    <img src={imgUrl} alt={title} className="card-img" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ProjectCard;
