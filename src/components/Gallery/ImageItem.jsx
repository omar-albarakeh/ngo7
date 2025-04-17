// ImageItem.js
import { useState } from "react";
import "./Gallery.css";

export default function ImageItem({ src, alt }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="image-thumb"
        onClick={() => setModalOpen(true)}
      />
      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
          <img src={src} alt={alt} className="modal-content" />
        </div>
      )}
    </>
  );
}
