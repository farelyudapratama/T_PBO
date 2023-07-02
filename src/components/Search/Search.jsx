import React, { useState } from "react";
import "./search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="gep">
      <div className="search">
        <i className="licon"><FontAwesomeIcon icon="magnifying-glass"/></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="category-dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          <a>Category</a>
          <i className={`arrow ${isOpen ? "open" : ""}`}></i>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => selectCategory("Option 1")}>
              Option 1
            </div>
            <div className="dropdown-item" onClick={() => selectCategory("Option 2")}>
              Option 2
            </div>
            <div className="dropdown-item" onClick={() => selectCategory("Option 3")}>
              Option 3
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
