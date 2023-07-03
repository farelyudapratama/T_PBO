import React, { useState } from 'react';
import RegisterMember from '../RegisterMember/RegisterMember';

const ManageMember = () => {
  const [showKomponen, setShowKomponen] = useState(false);

  const handleClick = () => {
    setShowKomponen(true);
  };

  const handleCloseForm = () => {
    setShowKomponen(false);
  };

  return (
    <div>
      <div className={`btn${showKomponen ? ' active' : ''}`} onClick={handleClick}>
        Tambah Anggota
      </div>
      {showKomponen && (
        <RegisterMember isOpen={showKomponen} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default ManageMember;
