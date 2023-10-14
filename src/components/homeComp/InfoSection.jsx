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
    <div className='lg:mt-16'>
      <div className='lg:w-[1200px] min-h-[80vh] mx-auto  flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-1/2 flex flex-col gap-5'>
          <p className='text-6xl font-bold'>
          <HighlightedText text={"All-in-One"}/> platform<br></br>that Makes Easier
          </p>

          <p className='text-xl font-normal'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>

          <div className='grid grid-flow-row grid-cols-2 grid-rows-2 gap-x-6 gap-y-6'>
            <div className='flex flex-row gap-2'>
              <img src={icon1} />
              <div className='text-lg font-normal'>
                <span className='font-bold'>SEARCH</span> for vital company information 
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <img src={icon2} />
              <div className='text-lg font-normal'>
                <span className='font-bold'>CONNECT</span> with the resources to meet your business needs 
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <img src={icon3} />
              <div className='text-lg font-normal'>
                <span className='font-bold'>RESEARCH</span> and generate reports that drive growth
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <img src={icon4} />
              <div className='text-lg font-normal'>
                <span className='font-bold'>ACADEMY</span> to give you the skills for success in your career
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className='relative w-[260px]'>
            <img src={blob1} />
            <img src={info1} className='absolute top-0 left-0 rounded-b-full w-[200px]'/>
          </div>
          <div className='relative w-[260px]'>
            <img src={blob2} />
            <img src = {info2} className='absolute top-0 left-[27px] w-[200px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
