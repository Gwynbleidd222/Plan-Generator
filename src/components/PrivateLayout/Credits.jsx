import React from 'react'
import { FaCheck } from "react-icons/fa";

const Credits = () => {
  return (
    <section className='max-w-7xl mx-auto  flex items-centr justify-center md:h-screen  flex-col text-white'>
        <div className=' text-center mt-20 space-y-8 p-4'>
          <h3 className='text-5xl md:text-6xl font-bold'>Zakup Kredytów</h3>
          <p className='text-xl text-medium-gray'>Kup kredyty aby móc generować plany treningowe i ćwiczenia</p>
        </div>
          <div className='grid grid-cols-1  p-4 md:grid-cols-3 gap-4 md:gap-8 pt-8'>
            <div className='box-1  bg-dark-gray p-6 mt-4 space-y-4 rounded-xl'>
                <h3 className='text-2xl'>Start</h3>
                <div className='flex items-center justify-between'>
                  <p className='text-5xl'>20zł</p>
                  <p className=''> 20 kredytów</p>
                </div>
                <p className='text-sm text-medium-gray'>20 kredytów pozwoli Ci wygenerować jeden plan treningowy lub 10 ćwiczeń</p>
                <button className='p-4 mt-2 w-full text-md flex items-center justify-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>Zakup</button>
                <ul className='space-y-4'>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>Dobre na start</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>Jeden plan treningowy</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>10 ćwiczeń</span>
                  </li>
                </ul>
            </div>
            <div className='box-1  bg-dark-gray p-6 mt-4 space-y-4 rounded-xl'>
                <h3 className='text-2xl'>Podstawa</h3>
                <div className='flex items-center justify-between'>
                  <p className='text-5xl'>50zł</p>
                  <p className=''> 60 kredytów</p>
                </div>
                <p className='text-sm text-medium-gray'>20 kredytów pozwoli Ci wygenerować jeden plan treningowy lub 10 ćwiczeń</p>
                <button className='p-4 mt-2 w-full text-md flex items-center justify-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>Zakup</button>
                <ul className='space-y-4'>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>Dobre na start</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>Jeden plan treningowy</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>10 ćwiczeń</span>
                  </li>
                </ul>
            </div>
            <div className='box-1  bg-dark-gray p-6 mt-4 space-y-4 rounded-xl'>
                <h3 className='text-2xl'>Premium</h3>
                <div className='flex items-center justify-between'>
                  <p className='text-5xl'>100zł</p>
                  <p className=''>120 kredytów</p>
                </div>
                <p className='text-sm text-medium-gray'>20 kredytów pozwoli Ci wygenerować jeden plan treningowy lub 10 ćwiczeń</p>
                <button className='p-4 mt-2 w-full text-md flex items-center justify-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>Zakup</button>
                <ul className='space-y-4'>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>Dobre na start</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>Jeden plan treningowy</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple'/>
                    <span className='text-medium-gray'>10 ćwiczeń</span>
                  </li>
                </ul>
            </div>
          </div>
    </section>
  )
}

export default Credits
