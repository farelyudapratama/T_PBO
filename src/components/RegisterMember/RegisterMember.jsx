import React, { useState } from 'react';
import './RegisterMember.css';
import { toast, ToastContainer } from 'react-toastify';

const RegisterMember = ({ isOpen, onClose }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Mohon masukkan nilai di ';
    if (id === null || id === '') {
      isproceed = false;
      errormessage += ' Username,';
    }
    if (nama === null || nama === '') {
      isproceed = false;
      errormessage += ' Nama Lengkap,';
    }
    if (password === null || password === '') {
      isproceed = false;
      errormessage += ' Password,';
    }
    if (email === null || email === '') {
      isproceed = false;
      errormessage += ' Email.';
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        isproceed = false;
        toast.warning('Mohon masukkan Email dengan benar');
      }
    }
    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, nama, password, email };
    if (IsValidate()) {
      fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(regobj),
      })
        .then(() => {
          toast.success('Pendaftaran Berhasil');

          // Reset form
          setId('');
          setPassword('');
          setNama('');
          setEmail('');
        })
        .catch(() => {
          toast.error('Gagal melakukan pendaftaran');
        });
    }
  };

  const handleClick = (e) => {
    if (e.target.classList.contains('register-member')) {
      onClose();
    }
  };

  return (
    <div className={`register-member ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <ToastContainer />
      <div className="containerForm">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Registrasi Anggota</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="colum">
                  <div className="form-group">
                    <label>Username</label>
                    <input value={id} onChange={(e) => setId(e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="colum">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                    />
                    <button type="button" className="show-password-button" onClick={toggleShowPassword}>
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
                <div className="colum">
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="colum">
                  <div className="form-group">
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterMember;
