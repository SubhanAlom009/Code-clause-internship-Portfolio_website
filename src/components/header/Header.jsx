import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {

  return (
    <div className='flex justify-between gap-5 pb-4 sm:px-24'>
      <div className='flex flex-col items-center sm:gap-5 sm:flex-row'>
          <Link to={"/"} className='flex items-center gap-2 sm:gap-3'>
            <div className='w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] rounded-full bg-[#80D8DA]'></div>
            <h1 className='text-sm font-semibold sm:text-xl'>Your Name</h1>
          </Link>
          <p className='hidden sm:flex'>Data science engineer </p>
      </div>
      <div className='flex items-center text-sm sm:text-base sm:gap-1'>
          <NavLink to={'/resume'} className={({isActive})=>`px-2 border-r border-black transition-all ${isActive ? 'text-[#2A9192] font-semibold': ''} duration-200 hover:text-[#2A9192]`}>Resume</NavLink>
          <NavLink to={'/projects'} className={({isActive})=>`px-2 border-r border-black transition-all ${isActive ? 'text-[#2A9192] font-semibold': ''} duration-200 hover:text-[#2A9192]`}>Projects</NavLink>
      </div>
    </div>
  )
}

export default Header
