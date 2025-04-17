// Gallery.js
import { useState } from "react";
import Folder from "./Folder";
import ImageItem from "./ImageItem";
import "./Gallery.css";

const initialData = [
  {
    title: "Vacation 2024",
    category: "Travel",
    date: "2024-07-10",
    images: ["beach.jpg", "mountains.jpg"],
  },
  {
    title: "Family",
    category: "Personal",
    date: "2023-12-25",
    images: ["birthday.jpg", "dinner.jpg"],
  },
];

export default function Gallery() {
  const [folders, setFolders] = useState(initialData);
  const [sort, setSort] = useState("alphabetical");

  const handleUpload = (e, folderIndex) => {
    const files = Array.from(e.target.files);
    const updatedFolders = [...folders];

    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      updatedFolders[folderIndex].images.push(url);
    });

    setFolders(updatedFolders);
  };

  const sortedFolders = [...folders].sort((a, b) => {
    return sort === "alphabetical"
      ? a.title.localeCompare(b.title)
      : new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="gallery">
      <div className="controls">
        <label>Sort By: </label>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="alphabetical">A-Z</option>
          <option value="date">Newest First</option>
        </select>
      </div>

      {sortedFolders.map((folder, i) => (
        <div key={i}>
          <Folder
            title={folder.title}
            category={folder.category}
            date={folder.date}>
            {folder.images.map((img, j) => (
              <ImageItem key={j} src={img} alt={`Image ${j}`} />
            ))}
          </Folder>
          <input type="file" multiple onChange={(e) => handleUpload(e, i)} />
        </div>
      ))}
    </div>
  );
}
