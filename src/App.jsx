import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, Admin, Member, DashboardMember, DashboardAdmin} from './route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/member' element={<Member />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/dashboardmember' element={<DashboardMember />}></Route>
          <Route path='/dashboardadmin' element={<DashboardAdmin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App