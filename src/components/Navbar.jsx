import React, { useState } from 'react'
import logo from '../data/logo.png'
import {ImCross} from 'react-icons/im'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className=''>
      <div className='lg:w-[1200px] h-14  mx-auto flex items-center justify-between md:justify-normal gap-6 relative p-5'>
        <div>
          <img src = {logo} alt='logo' className='h-[48px]'/>
        </div>
        <div className={`flex gap-5 w-full md:justify-between bg-slate-400 flex-col md:flex-row items-center z-30 h-screen md:h-fit justify-center text-center md:static transition-all duration-300 ${toggleMenu? "absolute top-0 left-0" : "absolute top-0 left-0 -translate-y-full md:translate-y-0 md:bg-white"}`}>
          <div>
            <ul className='flex gap-3 flex-col md:flex-row text-base font-bold'>
              <li>Solutions</li>
              <li>Features</li>
              <li>Blogs</li>
              <li>About</li>
            </ul>
          </div>

          <div className='flex flex-col md:flex-row gap-3 h-[48px]'>
            <button className='border-[1.5px] border-primary text-base font-bold text-primary px-[20px] py-[10px] rounded-[10px]'>Login</button>
            <button className=' bg-primary text-base font-bold text-white px-[20px] py-[10px] rounded-[10px]'>Register</button>
          </div>
          
        </div>
        <button className={`block z-50 md:hidden`} onClick={()=> setToggleMenu(!toggleMenu)}>
            {
              !toggleMenu? (<AiOutlineMenu className='font-bold text-lg'/>):(<ImCross />)
            }
        </button>
        

      </div>
    </div>
  )
}

export default Navbar
