import React, { useState, useEffect } from 'react';
import RegisterMember from '../RegisterMember/RegisterMember';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageMember = () => {
  const [members, setMembers] = useState([]);
  const [showKomponen, setShowKomponen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [refreshMembers, setRefreshMembers] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(10);

  useEffect(() => {
    fetchMembers();
  }, [refreshMembers]);

  const fetchMembers = async () => {
    try {
      const response = await fetch('http://localhost:8000/users');
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Failed to fetch members:', error);
    }
  };

  const deleteMember = async (id) => {
    try {
      await fetch(`http://localhost:8000/users/${id}`, {
        method: 'DELETE',
      });
      const updatedMembers = members.filter((member) => member.id !== id);
      setMembers(updatedMembers);
      toast.success('Anggota berhasil dihapus');
    } catch (error) {
      console.error('Failed to delete member:', error);
      toast.error('Gagal menghapus anggota');
    }
  };

  const handleDelete = (id) => {
    deleteMember(id);
  };

  const handleEdit = (member) => {
    setSelectedMember(member);
    setShowKomponen(true);
  };

  const handleClick = () => {
    setShowKomponen(true);
    setSelectedMember(null);
  };

  const handleCloseForm = () => {
    setShowKomponen(false);
    setSelectedMember(null);
  };

  const handleRefresh = () => {
    setRefreshMembers(!refreshMembers);
  };

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ToastContainer />
      <div className={`btn${showKomponen ? ' active' : ''}`} onClick={handleClick}>
        Tambah Anggota
      </div>
      {showKomponen && (
        <RegisterMember
          isOpen={showKomponen}
          onClose={handleCloseForm}
          selectedMember={selectedMember}
          onRefresh={handleRefresh}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentMembers.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>
              <td>{member.id}</td>
              <td>{member.nama}</td>
              <td>{member.email}</td>
              <td>
                <button onClick={() => handleEdit(member)}>Edit</button>
                <button onClick={() => handleDelete(member.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {members.length > membersPerPage && (
          <div>
            {Array(Math.ceil(members.length / membersPerPage))
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMember;
