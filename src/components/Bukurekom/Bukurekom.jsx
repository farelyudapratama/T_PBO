import React from 'react'
import './bukurekom.css'
import {buku1, buku2, buku3, buku4} from '../../assets'

const Bukurekom = () => {
  return (
    <div className="rekomAndNew">
      <div className="rekom-container">
        <div className="buku-wrapper">
          <img className="buku-img" src={buku1}></img>
          <div className="buku-category">Tes Kategori</div>
          <div className="buku-judul">Tes Judul</div>
          <div className="buku-penulis">Tes Penulis</div>
        </div>
        <div className="buku-wrapper">
          <img className="buku-img" src={buku2}></img>
          <div className="buku-category">Tes Kategori</div>
          <div className="buku-judul">Tes Judul</div>
          <div className="buku-penulis">Tes Penulis</div>
        </div>
        <div className="buku-wrapper">
          <img className="buku-img" src={buku3}></img>
          <div className="buku-category">Tes Kategori</div>
          <div className="buku-judul">Tes Judul</div>
          <div className="buku-penulis">Tes Penulis</div>
        </div>
        <div className="buku-wrapper">
          <img className="buku-img" src={buku4}></img>
          <div className="buku-category">Tes Kategori</div>
          <div className="buku-judul">Tes Judul</div>
          <div className="buku-penulis">Tes Penulis</div>
        </div>
      </div>
    </div>
  )
}

export default Bukurekom