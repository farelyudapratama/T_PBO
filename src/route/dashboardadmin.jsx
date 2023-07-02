import React, { useState } from 'react';
// import {NavbarHome, Search, Bukurekom, Bukudipinjam} from '../components';
import './dash.css'
import { memberPhoto } from '../assets';
import { ManageMember } from '../components';

const dashboardadmin = () => {
  const [selectedOption, setSelectedOption] = useState('Profile');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
          >
            Profile
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Manajemenbuku' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Manajemenbuku')}
          >
            Manajemen Pustaka
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Manajemenanggota' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Manajemenanggota')}
          >
            Manaejemen Anggota
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Laporan' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Laporan')}
          >
            Pelaporan
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'logout' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Setting')}
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
      <img src={memberPhoto} alt="member" />
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