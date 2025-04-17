// Folder.js
import { useState } from "react";
import "./Gallery.css";

export default function Folder({ title, category, date, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="folder">
      <div className="folder-header" onClick={() => setOpen(!open)}>
        <div>
          <strong>{title}</strong> ({category}) -{" "}
          {new Date(date).toLocaleDateString()}
        </div>
        <div>{open ? "▲" : "▼"}</div>
      </div>
      {open && <div className="image-grid">{children}</div>}
    </div>
  );
}
