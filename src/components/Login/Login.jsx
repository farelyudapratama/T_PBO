import React, { useState, useEffect } from 'react';
import { banner } from "../../assets";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

async function fetchUsers() {
  try {
    const response = await fetch('../../db.json'); // Ubah path sesuai lokasi file db.json
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return {};
  }
}

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    async function fetchUsersData() {
      const fetchedData = await fetchUsers();
      setUsers(fetchedData.users);
      setAdmin(fetchedData.admin);
    }

    fetchUsersData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      setIsLoggedIn(true);
      setUsername(user.nama);
      localStorage.setItem('memberId', user.id);
      onClose();
      window.location.href = '/member'; // Redirect ke halaman Member setelah login berhasil
    } else {
      const adminUser = admin.find((admin) => admin.email === email);
      if (adminUser && adminUser.password === password) {
        setIsLoggedIn(true);
        setUsername(adminUser.nama);
        localStorage.setItem('adminId', adminUser.id);
        onClose();
        window.location.href = '/admin'; // Redirect ke halaman Admin setelah login admin berhasil
      } else {
        alert('Login failed. Invalid email or password.');
      }
    }
  };

  const handleClick = (e) => {
    if (e.target.classList.contains('login-modal')) {
      onClose();
    }
  };

  return (
    <div className={`login-modal ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="loginpage">
        <div className="banner">
          <img className="gambar" src={banner} alt="Banner" />
        </div>
        <div className="separator"></div>
        <div className="loginvalue">
          <form action="">
            <h2>Login</h2>
            <div className="inputlogin">
              <i className='licon'><FontAwesomeIcon icon="envelope" /></i>
              <input
                type="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="inputlogin">
              <i className="licon"><FontAwesomeIcon icon="key" flip="horizontal" /></i>
              <input
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />Remember Me,
                <a href="#">Forget Password</a>
              </label>
            </div>
            {isLoggedIn ? (
              <div className="success">
                <span>Logged in successfully!</span>
                <span>Welcome, {username}!</span>
              </div>
            ) : (
              <button className='btn' type="submit" onClick={handleLogin}>
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
