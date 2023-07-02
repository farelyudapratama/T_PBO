import React from 'react'
import {NavbarHome, Search, Bukurekom, Bukudipinjam} from '../components';

const home = () => {
  return (
    <div>
        <NavbarHome/>
        <Search/>
        <Bukurekom/>
        <Bukudipinjam/>
    </div>
  )
}

export default home