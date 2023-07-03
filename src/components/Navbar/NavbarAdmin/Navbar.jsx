import React, { useEffect, useState } from "react";
import { logo, adminPhoto } from "../../../assets";
import "./navbar.css";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [adminIdState, setadminIdState] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };
  useEffect(() => {
    // Ambil adminId dari penyimpanan lokal saat komponen Navbar dimuat
    const adminId = localStorage.getItem('adminId');
    setadminIdState(adminId);
  }, []);

  const handleLogout = () => {
    // Hapus adminId dari penyimpanan lokal dan set state adminIdState menjadi kosong saat logout
    localStorage.removeItem('adminId');
    setadminIdState('');
    window.location.href = "/";
  };
  const clickDashboard = () =>{
    window.location.href = "/DashboardAdmin";
  }
  return (
    <div className="navbar">
    <div className="navbar-links">
      <div className="navbar-links-logo">
        <img src={logo} alt="logo" />
        <a>Perpus Web Tes</a>
      </div>
      <div className="navbar-links-container">
        <div className="admin-photo">
          <img src={adminPhoto} alt="admin" />
        </div>
        <div className={`toggle ${isOpen ? "category-dropdown" : ""}`}>
          <div className="dropToggle" onClick={toggleDropdown}>
            <p>
              <a>{adminIdState ? adminIdState : "admin"}</a>
            </p>
            <i className={`arrow ${isOpen ? "open" : ""}`}></i>
          </div>
          {isOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={clickDashboard}>
                Dashboard
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
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
