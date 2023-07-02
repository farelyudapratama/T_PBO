import React from 'react'
import {NavbarMember, Search, Bukurekom, Bukudipinjam} from '../components';

const member = () => {
  return (
    <div>
      <NavbarMember/>
      <Search/>
      <Bukurekom/>
      <Bukudipinjam/>
    </div>
  )
}

export default member