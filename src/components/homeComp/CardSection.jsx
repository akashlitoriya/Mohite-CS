import React from 'react'
import CardData from '../../data/CardData.json'
import HighlightedText from '../HighlightedText'
const CardSection = () => {
  return (
    <div className='mt-3 sm:mt-20 md:mt-60 lg:mt-0 m-5'>
      <div className='lg:w-[1200px] mx-auto lg:min-h-[80vh] flex flex-col gap-5 lg:gap-12'>
        <div className='flex flex-col items-center'>
            <p className='text-3xl md:text-6xl font-bold'>Want to <HighlightedText text={"Join"}/> Us?</p>
            <p className='text-lg md:text-2xl text-center'>To remain with us, it is essential that you diligently follow the steps provided</p>
        </div>
        <div className='grid grid-flow-row grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-x-6 gap-y-6'>
            {
                CardData.map((card,index) => (
                    <div className='relative cardShadow rounded-[20px]' key={index}>
                        <div className='text-lg font-bold bg-gradient-to-r from-primary to-[#9700D3] w-[46px] p-3 text-white rounded-md text-center absolute -top-1 -left-2'>{index + 1}</div>
                        <div className='flex flex-col justify-center items-center gap-3 p-5'>
                            <p className='font-bold text-lg'>{card.heading}</p>
                            <p className='text-[16px] font-normal text-center'>{card.subheading}</p>
                            <div className='p-3 rounded-[10px] bg-[#F4F4F4] grid grid-flow-row grid-cols-2 grid-rows-2'>
                                <div className='text-lg font-bold text-primary'>
                                    Due Date
                                </div>
                                <div className='text-lg font-bold text-[#FF6666]'>Penalty Fees</div>    
                                <div>{card.cardRow}</div>
                                <div>{card.cardCol}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <p className='text-xs md:text-lg text-center md:text-start'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
        
      </div>
    </div>
  )
}

export default CardSection
