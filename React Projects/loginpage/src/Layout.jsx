import React, { useEffect, useState } from 'react'
import Nav from "./components/pages/Nav"
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer'
import { ThemeProvider } from './components/contexts/themeContext'

const Layout = () => {

  const [themeMode, setThemeMode ] = useState('light');

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    const html = document.documentElement;
    if(themeMode == 'dark'){
      html.classList.remove('dark')
    }
    else{
      html.classList.add('dark')
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
    <div className='flex flex-col min-h-screen w-full'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
    </ThemeProvider >
  )
}

export default Layout
