import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <nav className='w-full h-auto p-4 bg-gray-800 text-white  flex justify-around items-center'>
        <div className='bg-red-400 p-2 rounded-lg mr-40'>Your Logo</div>
        <div className='w-200 flex justify-evenly text-lg font-semibold text-sky-400'>
        <p>Home</p>
        <p>About</p>
        <p>Contact Us</p>
        </div>
        <div className='flex justify-evenly w-40'>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/signup'} >Sign Up</NavLink>
        </div>
      </nav>
      <div className='bg-gray-600 min-h-screen text-white text-4xl flex items-center justify-center'>
        Home Page
      </div>
    </div>
  )
}

export default Home
