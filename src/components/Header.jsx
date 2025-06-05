import React from 'react'
import logo from '../assets/Logo.png'

const Header = ({ title }) => {
  return (
    <header className='fixed flex w-full items-center justify-between p-4 lg:px-6 bg-dark-gray text-white shadow-lg'>
      <div>
        {/* <img src={logo} alt="logo na fioletowym tle exercise generator" className='w-[35px] h-[35px] rounded-2xl cursor-pointer'/> */}
      </div>
      <div>
        <h1 className='font-bold'>{title}</h1>
      </div>
      <div>
        {/* <i className="fa-regular fa-address-card text-main-purple cursor-pointer text-2xl"></i> */}
      </div>
    </header>
  )
}

export default Header
