import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const DropdownMenu = ({
  label,
  items,
  name,
  isMobile,
  activeDropdown,
  setActiveDropdown,
  handleDropdown,
  closeMenu,
  currentPath,
}) => {
  const isOpen = activeDropdown === name;

  const toggleDropdown = () => {
    if (isMobile) {
      handleDropdown(name);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      handleDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  return (
    <div
      className={`dropdown ${isOpen ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span
        className="dropdown-toggle"
        tabIndex={0}
        onClick={toggleDropdown}
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}>
        {label}
      </span>

      <div
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        role="menu"
        aria-label={label}>
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={`dropdown-item ${
              currentPath === item.path ? "active" : ""
            }`}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
