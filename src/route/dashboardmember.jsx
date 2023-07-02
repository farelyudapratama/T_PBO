import React, { useState } from 'react';
// import {NavbarHome, Search, Bukurekom, Bukudipinjam} from '../components';
import './dash.css'
import { memberPhoto } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buku1, buku2, buku3, buku4 } from '../assets'

const dashboardmember = () => {
  const [selectedOption, setSelectedOption] = useState('Profile');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="dashboard">
        <p>
          <a>Member Dashboard</a>
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
            className={`sidebar-option ${selectedOption === 'Peminjaman' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Peminjaman')}
          >
            Peminjaman
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Pengembalian' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Pengembalian')}
          >
            Pengembalian
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Setting' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Setting')}
          >
            LogOut
          </div>
        </div>
        <div className="sidebar-content">
          {selectedOption && (
            <div className="content">
              {selectedOption === 'Profile' && <Profile />}
              {selectedOption === 'Peminjaman' && <Peminjaman />}
              {selectedOption === 'Pengembalian' && <Pengembalian />}
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
        UserId: 0001
      </p>
      <p>
        Username: Member001
      </p>
    </div>
  </div>;
};

const Peminjaman = () => {
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
    <div>
      <div className="gep">
        <div className="search">
          <i className="licon"><FontAwesomeIcon icon="magnifying-glass" /></i>
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
      <div className="rekomAndNew">
        <div className="rekom-container">
          <div className="buku-wrapper">
            <img className="buku-img" src={buku1}></img>
            <div className="buku-category">Tes Kategori</div>
            <div className="buku-judul">Tes Judul</div>
            <div className="buku-penulis">Tes Penulis</div>
            <button className='btn'>Pinjam</button>
          </div>
          <div className="buku-wrapper">
            <img className="buku-img" src={buku2}></img>
            <div className="buku-category">Tes Kategori</div>
            <div className="buku-judul">Tes Judul</div>
            <div className="buku-penulis">Tes Penulis</div>
            <button className='btn'>Pinjam</button>
          </div>
          <div className="buku-wrapper">
            <img className="buku-img" src={buku3}></img>
            <div className="buku-category">Tes Kategori</div>
            <div className="buku-judul">Tes Judul</div>
            <div className="buku-penulis">Tes Penulis</div>
            <button className='btn'>Pinjam</button>
          </div>
          <div className="buku-wrapper">
            <img className="buku-img" src={buku4}></img>
            <div className="buku-category">Tes Kategori</div>
            <div className="buku-judul">Tes Judul</div>
            <div className="buku-penulis">Tes Penulis</div>
            <button className='btn'>Pinjam</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pengembalian = () => {
  const books = [
    { title: 'Buku 3', author: 'Rano', category: 'Misteri', kembalikansebelum: '2 hari lagi' },
  ]
  return <div className='pengembalian'>
    <p>Buku yang sedang anda pinjam</p>
    <table>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Kategori</th>
            <th>Kembalikan sebelum</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.kembalikansebelum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>;
};
export default dashboardmember