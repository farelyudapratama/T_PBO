import React, { useState } from "react";
import { logo } from "../../../assets";
import "./navbar.css";
import LoginModal from "../../Login/Login";

const Navbar = (props) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
          <a>Perpus Web Tes</a>
        </div>
        <div className="navbar-links-container">
          <p>
            <a onClick={openLoginModal}>Login</a>
          </p>
        </div>
      </div>

      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      )}
    </div>
  );
};

export default Navbar;
