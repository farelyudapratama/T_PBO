import React from 'react'
import './bukudipinjam.css'

const Bukudipinjam = () => {
  const books = [
    { title: 'Buku 1', author: 'Reno', category: 'Fiksi', status: 'Tersedia' },
    { title: 'Buku 2', author: 'Rino', category: 'Pyscologic', status: 'Tersedia' },
    { title: 'Buku 3', author: 'Rano', category: 'Misteri', status: 'Sedang Dipinjam' },
    { title: 'Buku 4', author: 'Runo', category: 'Fiksi', status: 'Tersedia' },
    { title: 'Buku 5', author: 'Rono', category: 'Fiksi', status: 'Di Ruang Baca Saja' },
    { title: 'Buku 6', author: 'Rini', category: 'Fiksi', status: 'Tersedia' },
    { title: 'Buku 7', author: 'Roni', category: 'Fiksi', status: 'Tersedia' },
  ]

  return (
    <div className="book-list">
      <table>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Kategori</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Bukudipinjam