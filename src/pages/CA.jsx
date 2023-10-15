import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import CAData from '../data/CA.json'
import {AiFillStar} from 'react-icons/ai'
import {FaCalendarDays} from 'react-icons/fa6'
import { Carousel } from 'react-responsive-carousel'
const CA = () => {
  const {id} = useParams();
  const [caData, setCAData] = useState();
  console.log(id)
  useEffect(()=>{
    for(let i = 0; i < CAData.length; i++){
      if(CAData.at(i).name === id.substring(1)){
        setCAData(CAData.at(i));
        break;
      }

    }
  },[])
  console.log(caData)
  if(!caData) {
    return <div>No CA found</div>
  }
  return (
    <div className='my-16 px-6'>
      <div className='lg:w-[1200px]  mx-auto grid grid-flow-col grid-rows-2 md:grid-rows-1 md:grid-flow-row md:grid-cols-2 gap-x-10 gap-y-10'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3'>
            <p className='text-4xl font-bold'>{caData.name}</p>
            <p className='text-lg font-normal'>
            I am here to provide my expertise in accounting and finance, which includes financial statements, economics, and auditing, all to assist you effectively
            </p>
            <div className='flex gap-1 items-center'>
              <AiFillStar className={`text-xl font-bold ${caData.rating >= 4 ? "text-green-500": "text-yellow-700"}`}/>
              <span className={`text-lg font-bold ${caData.rating >= 4 ? "text-green-500": "text-yellow-700"}`}>{caData.rating}</span>
              <span>{`(${caData.reviewCount})`}</span>
            </div>
          </div>
          <div className='flex flex-col gap-3 p-5 rounded-xl cardShadow'>
              <div className='flex justify-between'>
                <p className='text-lg'>{caData.taskComplexity}</p>
                <p className='text-2xl font-bold'>{caData.price}</p>
              </div>

              <div className='flex gap-1 text-lg items-center'>
                <FaCalendarDays className='font-bold text-blue-600'/>
                <span>{caData.deliveryTime}</span>
              </div>

              <div className='flex gap-5'>
                <button className='bg-primary px-5 py-3 rounded-lg text-white font-bold'>Request Proposal</button>
                <button className='border-[1px] border-primary rounded-lg px-5 py-3 font-bold text-primary'>Chat with me</button>
              </div>
          </div>

          <div className='p-5 rounded-xl cardShadow'>
            <p className='text-4xl font-bold'>What people say?</p>
            <Carousel showArrows={true}>
              <div className='flex flex-col gap-3'>
                <p>{caData.testimonial.text}</p>
                <p>~{caData.testimonial.author}</p>
              </div>
            </Carousel>
              
           
          </div>
        </div>
        <div className='flex flex-col gap-12'>
          <div className=''>
            <img src={caData.image} className='rounded-2xl'/>
          </div>
          <p className='text-4xl font-bold'>About {caData.name}</p>

          <div className='grid grid-flow-row grid-cols-3'>
            <div>
              <p className='uppercase text-base font-bold text-section'>From</p>
              <p className='uppercase text-base font-bold'>{caData.about.from}</p>
            </div>

            <div>
              <p className='uppercase text-base font-bold text-section'>Partner Since</p>
              <p className='uppercase text-base font-bold'>{caData.about.partnerSince}</p>
            </div>

            <div>
              <p className='uppercase text-base font-bold text-section'>Average Response time</p>
              <p className='uppercase text-base font-bold'>{caData.about.averageResponseTime}</p>
            </div>
          </div>

          <div>
            <p className='text-base font-bold text-section uppercase'>About</p>
            <p className='text-xl'>{caData.about.description}</p>
          </div>

          <div className='flex justify-between'>
            <div>
              <p className='uppercase font-bold text-base text-section'>Service/offers</p>
              <ul className='list-disc ml-6'>
                {
                  caData.about.services.map((item, index) => (
                    <li className='text-xl lg:my-3' key={index}>{item}</li>
                  ))
                }
              </ul>
            </div>
                
            <div>
            <p className='text-base font-bold text-section uppercase'>Why Me?</p>
                <ul className='ml-6 list-disc'>
                  {
                    caData.about.benefits.map((item,index) => (
                      <li className='text-xl lg:my-3'key={index}>{item}</li>
                    ))
                  }
                </ul>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default CA
