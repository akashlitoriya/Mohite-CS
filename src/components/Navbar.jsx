import React from 'react'
import logo from '../data/logo.png'

const Navbar = () => {
  
  return (
    <div>
      <div className='lg:w-[1200px] h-14  mx-auto flex justify-between items-center'>
        <div className='flex gap-5 justify-center items-center'>
            <div>
                <img src = {logo} alt='logo' className='h-[48px]'/>
            </div>
            <div>
                <ul className='flex gap-3 text-base font-bold'>
                    <li>Solutions</li>
                    <li>Features</li>
                    <li>Blogs</li>
                    <li>About</li>
                </ul>
            </div>
        </div>

        <div className='flex gap-3 h-[48px]'>
          <button className='border-[1.5px] border-primary text-base font-bold text-primary px-[20px] py-[10px] rounded-[10px]'>Login</button>
          <button className=' bg-primary text-base font-bold text-white px-[20px] py-[10px] rounded-[10px]'>Register</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
