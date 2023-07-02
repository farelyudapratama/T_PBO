import React from 'react'
import {NavbarAdmin, Search, Bukurekom, Bukudipinjam} from '../components';

const admin = () => {
  return (
    <div>
      <NavbarAdmin/>
        <Search/>
        <Bukurekom/>
        <Bukudipinjam/>
    </div>
  )
}

export default admin