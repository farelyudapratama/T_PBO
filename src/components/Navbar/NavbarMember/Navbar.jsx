import React, { useState } from "react";
import { logo, memberPhoto } from "../../../assets";
import "./Navbar.css";

const Navbar = (props) => {
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
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
          <a>Perpus Web Tes</a>
        </div>
        <div className="navbar-links-container">
          <div className="member-photo">
            <img src={memberPhoto} alt="member" />
          </div>
          <div className={`toggle ${isOpen ? "category-dropdown" : ""}`}>
            <div className="dropToggle" onClick={toggleDropdown}>
              <p>
                <a>Member</a>
              </p>
              <i className={`arrow ${isOpen ? "open" : ""}`}></i>
            </div>
            {isOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => selectCategory("Profil")}>
                  Profil
                </div>
                <div className="dropdown-item" onClick={() => selectCategory("Peminjaman")}>
                  Peminjaman
                </div>
                <div className="dropdown-item" onClick={() => selectCategory("Pengembalian")}>
                  Pengembalian
                </div>
                <div className="dropdown-item" onClick={() => selectCategory("Logout")}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;