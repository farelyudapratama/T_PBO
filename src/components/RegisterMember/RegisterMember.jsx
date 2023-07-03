import React, { useState } from 'react';
import './RegisterMember.css';
import { toast, ToastContainer } from 'react-toastify';

const RegisterMember = ({ isOpen, onClose, selectedMember, onRefresh}) => {
  const [id, setId] = useState(selectedMember ? selectedMember.id : '');
  const [password, setPassword] = useState(selectedMember ? selectedMember.password : '');
  const [nama, setNama] = useState(selectedMember ? selectedMember.nama : '');
  const [email, setEmail] = useState(selectedMember ? selectedMember.email : '');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateInput = () => {
    let isValid = true;
    let errorMessage = 'Mohon masukkan nilai di ';

    if (!id) {
      isValid = false;
      errorMessage += 'Username, ';
    }
    if (!nama) {
      isValid = false;
      errorMessage += 'Nama Lengkap, ';
    }
    if (!password) {
      isValid = false;
      errorMessage += 'Password, ';
    }
    if (!email) {
      isValid = false;
      errorMessage += 'Email. ';
    }

    if (!isValid) {
      toast.warning(errorMessage);
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isValid = false;
      toast.warning('Mohon masukkan Email dengan benar');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    const memberData = { id, nama, password, email };

    const requestOptions = {
      method: selectedMember ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memberData),
    };

    const apiUrl = selectedMember ? `http://localhost:8000/users/${selectedMember.id}` : 'http://localhost:8000/users';

    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (response.ok) {
          toast.success(`${selectedMember ? 'Update' : 'Pendaftaran'} Berhasil`);

          setId('');
          setPassword('');
          setNama('');
          setEmail('');
          onRefresh()

          // onClose();
        } else {
          toast.error(`Gagal melakukan ${selectedMember ? 'Update' : 'pendaftaran'}`);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error(`Gagal melakukan ${selectedMember ? 'Update' : 'pendaftaran'}`);
      });
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
                {selectedMember ? 'Update' : 'Register'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterMember;
