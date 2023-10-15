import React from 'react'
import HighlightedText from '../HighlightedText'
import icon1 from '../../data/icon1.png'
import icon2 from '../../data/icon2.png'
import icon3 from '../../data/icon3.png'
import icon4 from '../../data/icon4.png'
import blob1 from '../../data/blob1.png'
import blob2 from '../../data/blob2.png'
import info1 from '../../data/info1.png'
import info2 from '../../data/info2.png'
const InfoSection = () => {
  return (
    <div className='mt-12 lg:mt-16 p-5'>
      <div className='lg:w-[1200px] min-h-[80vh] mx-auto  flex flex-col md:flex-row gap-4'>
        <div className='lg:w-1/2 flex flex-col gap-5'>
          <p className='text-4xl text-center md:text-start md:text-6xl font-bold'>
          <HighlightedText text={"All-in-One"}/> platform<br></br>that Makes Easier
          </p>

          <p className='text-sm text-center md:text-start md:text-xl font-normal'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>

          <div className='grid grid-flow-row grid-cols-2 grid-rows-2 gap-x-6 gap-y-6'>
            <div className='flex flex-row gap-2'>
              <img src={icon1} className='w-[35px] h-[35px]'/>
              <div className='text-lg font-normal'>
                <span className='font-bold'>SEARCH</span> for vital company information 
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <img src={icon2} className='w-[35px] h-[35px]'/>
              <div className='text-lg font-normal'>
                <span className='font-bold'>CONNECT</span> with the resources to meet your business needs 
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <img src={icon3} className='w-[35px] h-[35px]'/>
              <div className='text-lg font-normal'>
                <span className='font-bold'>RESEARCH</span> and generate reports that drive growth
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <img src={icon4} className='w-[35px] h-[35px]'/>
              <div className='text-lg font-normal'>
                <span className='font-bold'>ACADEMY</span> to give you the skills for success in your career
              </div>
            </div>

          </div>
        </div>
        <div className='relative w-full min-h-[620px] md:min-h-full md:w-1/2 flex justify-center'>
          <div className='flex flex-col gap-3 items-end absolute top-14 left-0 md:left-20'>
            <p className='p-3 rounded-l-full rounded-tr-full bg-[#EFD9F9] text-xs w-fit'>Hey, check out loreumipsum services. </p>
            <p className='p-3 rounded-l-full rounded-tr-full bg-[#EFD9F9] text-xs w-fit'>I learned from their videos, got my first job. </p>
            <p className='p-3 rounded-l-full rounded-tr-full bg-[#EFD9F9] text-xs w-fit'>You won't be disappointed with their services. </p>
          </div>
          <div className='flex flex-col gap-3 items-start top-80 right-28 md:right-1/3 md:top-56 absolute'>
            <p className='p-3 rounded-r-full rounded-tl-full bg-[#5c69d96a] text-xs w-fit'>Hey, there my friend</p>
            <p className='p-3 rounded-r-full rounded-tl-full bg-[#5c69d96a] text-xs w-fit'>What's up buddy</p>
          </div>
          <div className='absolute top-0 right-0'>
            <div className='relative w-[260px]'>
              <img src={blob1} />
              <img src={info1} className='absolute top-0 left-0 rounded-b-full w-[200px]'/>
            </div>
          </div>
          <div className='absolute bottom-10 left-0'>
            <div className='relative w-[260px]'>
              <img src={blob2} />
              <img src = {info2} className='absolute top-0 left-[27px] w-[200px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
