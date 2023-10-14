import React from 'react'
import logoLight from '../data/logoLight.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-r from-primary to-[#9400D4]'>
      <div className='lg:w-[1200px] mx-auto flex flex-col p-5 '>
        <div className='border-b-2 border-white grid grid-flow-row grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-7 lg:pb-4 gap-x-3 gap-y-3'>
            <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                <img src={logoLight} alt='logo light' />
                <p className='text-base text-white'>India's first platform dedicated to simplifying partner search</p>
            </div>

            <div className=' text-white text-sm'>
                <ul className='flex flex-col gap-3'>
                    <li className='font-semibold'>CONTACT</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className='text-white text-sm'>
                <ul className='flex flex-col gap-3'>
                    <li className='font-semibold'>CONNECT</li>
                    <li>Academy</li>
                    <li>Search</li>
                    <li>Research</li>
                    <li>Academy</li>
                </ul>
            </div>

            <div>
                <ul className='flex flex-col gap-3 text-white text-sm'>
                    <li className='font-semibold'>ABOUT</li>
                    <li>Blog</li>
                    <li>Article</li>
                </ul>
            </div>

            <div>
                <ul className='flex flex-col gap-3 text-white text-sm'>
                    <li className='font-semibold'>SUPPORT</li>
                    <li>Contact Us</li>
                    <li>Form</li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-3 text-white text-sm'>
                    <li className='font-semibold'>LEGAL</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Accessibility</li>
                </ul>
            </div>

        </div>
        <div className='flex flex-col gap-2 lg:flex-row justify-between mt-5'>
            <p className='text-base text-white'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            <div className='flex gap-4 text-white font-bold'>
                <BsFacebook />
                <AiFillTwitterCircle />
                <BsInstagram />
                <BsWhatsapp />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
