import React, { useState, useEffect } from 'react';
import { logo, memberPhoto } from "../../../assets";
import "./navbar.css";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [memberIdState, setMemberIdState] = useState(""); // Tambahkan state memberIdState

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  useEffect(() => {
    // Ambil memberId dari penyimpanan lokal saat komponen Navbar dimuat
    const memberId = localStorage.getItem('memberId');
    setMemberIdState(memberId);
  }, []);

  const handleLogout = () => {
    // Hapus memberId dari penyimpanan lokal dan set state memberIdState menjadi kosong saat logout
    localStorage.removeItem('memberId');
    setMemberIdState('');
    window.location.href = "/";
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
                <a>{memberIdState ? memberIdState : "Member"}</a> {/* Tampilkan memberId jika ada, jika tidak tampilkan "Member" */}
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
                <div className="dropdown-item" onClick={handleLogout}> {/* Tambahkan event handler untuk logout */}
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
