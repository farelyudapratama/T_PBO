import React, { useState, useEffect  } from 'react';
import { banner } from "../../assets";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

async function fetchUsers() {
  try {
    const response = await fetch('../../../tes.json');
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
}


const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    async function fetchUsersData() {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    }

    fetchUsersData();
  }, []);
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
  
    // Logika untuk memproses login berdasarkan email dan password
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      // Login berhasil
      setIsLoggedIn(true);
      setUsername(user.username);
      onClose();
    } else {
      // Kombinasi email dan password tidak valid
      alert('Login failed. Invalid email or password.');
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
          <img className="gambar"src={banner} alt="Banner" />
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
              <div className="loggedin">
                {username === 'MemberName' ? (
                  <img src={memberProfileImage} alt="Member Profile" className="profile-image" />
                ) : (
                  <img src={adminProfileImage} alt="Admin Profile" className="profile-image" />
                )}
                <span>{username}</span>
              </div>
            ) : (
              <button className="btn" type="submit"  onClick={handleLogin}>
                Log in
              </button>
            )}
            <div className="register">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;