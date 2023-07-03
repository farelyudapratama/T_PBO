import React, { useState } from 'react';
import './dash.css'
import { adminPhoto } from '../assets';
import { ManageMember } from '../components';

const dashboardadmin = () => {
  const [selectedOption, setSelectedOption] = useState('Profile');
  const [adminIdState, setadminIdState] = useState("");
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    window.location.hash = option;
  };

  const handleLogout = () => {
    localStorage.removeItem('adminId');
    setadminIdState('');
    window.location.href = "/";
  };
  return (
    <div>
      <div className="dashboard">
        <p>
          <a>Admin Dashboard</a>
        </p>
      </div>
      <div className="sidebar">
        <div className="sidebar-options">
          <div
            className={`sidebar-option ${selectedOption === 'Profile' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Profile')}
            id="Profile"
          >
            Profile
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Manajemenbuku' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Manajemenbuku')}
            id="Manajemenbuku"
          >
            Manajemen Pustaka
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Manajemenanggota' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Manajemenanggota')}
            id='Manajemenanggota'
          >
            Manaejemen Anggota
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Laporan' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Laporan')}
            id='Laporan'
          >
            Pelaporan
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'logout' ? 'active' : ''}`}
            onClick={handleLogout}
            id='Logout'
          >
            LogOut
          </div>
        </div>
        <div className="sidebar-content">
          {selectedOption && (
            <div className="content">
              {selectedOption === 'Profile' && <Profile />}
              {selectedOption === 'Manajemenbuku' && <Manajemenbuku />}
              {selectedOption === 'Manajemenanggota' && <ManageMember />}
              {selectedOption === 'Laporan' && <Laporan />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
const Profile = () => {
  return <div>
    <div className="fotoprofile">
      <img src={adminPhoto} alt="admin" />
    </div>
    <div className="detail">
      <p>
        adminID: 0001
      </p>
      <p>
        Adminname: Admin0001
      </p>
    </div>
  </div>;
};

const Manajemenbuku = () => {
  return (
    <div>
      ManajemenBuku
    </div>
  );
};
const Laporan = () => {
  return (
    <div>
      Laporan
    </div>
  );
};

export default dashboardadmin