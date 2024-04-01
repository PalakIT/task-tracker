import React, { useEffect, useState, useContext } from 'react'
import { themeContext } from '../context/ThemeContext'
const Navbar = () => {

  const { theme, toggleTheme } = useContext(themeContext)

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    toggleTheme()
  }

  return (
    <div className='flex justify-between  max-[370px]:py-0  max-[370px]:items-center  max-[370px]:h-16 py-8 pb-12 px-20 h-20 border-b dark:border-slate-700 border-slate-300 max-[1000px]:px-5' >
      <p className='cursor-pointer  max-[370px]:text-xs ' ><i class="fa-solid fa-check-double"></i>&nbsp;task_tracker</p>
      <button onClick={handleThemeSwitch} >
        {theme == "light" ? <span className='text-xs flex items-center rounded-full' ><i className="fa-regular fa-sun text-xl  max-[370px]:text-sm"></i>&nbsp;light</span> : <span className='text-xs flex items-center rounded-full' ><i className="fa-regular fa-moon text-xl"></i>&nbsp;dark</span>}
      </button>
    </div>
  )
}

export default Navbar