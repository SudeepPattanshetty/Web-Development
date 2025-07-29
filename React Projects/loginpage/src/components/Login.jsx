import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='bg-gray-800 text-white flex flex-col justify-center items-center p-10 box-inline box-inline shadow-lg shadow-gray-900 rounded-lg '>
        <form action="/">
        <div className=' flex'>
            <label htmlFor="email" className='text-xl text-sky-400 font-medium'>
            Email: 
            </label>
            <input type="email" name='email' id='email' className='w-50 ml-20 outline outline-white focus:invalid:outline-red-600 p-1 rounded-lg text-md font-serif focus:outline focus:outline-sky-500' placeholder='Email' />
        </div>
        <div className=' flex mt-6'>
            <label htmlFor="password" className='text-xl text-sky-400 font-medium'>
                Password: 
            </label>
            <input type="password" name='password' id='password' className='w-50 outline outline-white ml-10 focus:invalid:outline-red-600 p-1 rounded-lg text-md font-serif focus:outline focus:outline-sky-500' placeholder='Password' />
        </div>
        <button type="submit" className='box mt-10 shadow-sky-700 shadow-lg w-60 ml-12 h-10 rounded-sm m-2 text-xl bg-sky-400 text-gray-900 font-serif hover:bg-sky-600'>Login</button>
        </form>
        <p className='text-white text-md m-1'>Create an account: <NavLink to={'/signup'}>Sign Up</NavLink></p>
      </div>
    </>
  )
}

export default Login
