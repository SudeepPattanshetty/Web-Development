import React from 'react'
import Nav from "./components/pages/Nav"
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full '>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
