 import React from 'react'
import {Outlet} from 'react-router-dom';
import NavBar from '../components/Navbar';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'


function MainLayout() {
  return (
      <> 
      <NavBar />
      <Outlet />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
  
      </>
  )
}

export default MainLayout
 