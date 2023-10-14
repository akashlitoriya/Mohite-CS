import React, { useState } from 'react'
import HighlightedText from '../components/HighlightedText'
import hero1 from '../data/hero1.png'
import hero2 from '../data/hero2.png'
import hero3 from '../data/hero3.png'
import CardSection from '../components/homeComp/CardSection'
import InfoSection from '../components/homeComp/InfoSection'
import CAData from '../data/CA.json'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const [caSearched, setCASearched] = useState();
    const [searchText, setSearchText] = useState();
    const navigate = useNavigate();
    function handleSearch(search){
        let searched
        for(let i=0; i < CAData.length; i++){
            if(CAData.at(i).name.includes(search)){
                setCASearched(CAData.at(i));
                searched = CAData.at(i);
                break;
            }
        }
        
        //console.log(caSearched)
        navigate(`:${searched?.name}`)
    }
    
  return (
    <div className='lg:w-[1200px] mx-auto'>
        {/* Section-1  */}
      <div className='flex flex-col lg:flex-row justify-center items-center lg:min-h-[calc(100vh-7rem)] m-5'>
        <div className='flex gap-7 flex-col'>
            <p className='text-[65px] font-bold'>Find  <HighlightedText text={"Partners"} />(CAs)<br></br> available online</p>
            <p className='text-xl font-normal text-heroSubheading'><span className='font-bold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
            <div className='w-full'>
                <input type='text' className='rounded-l-[10px] border-[1px] border-heroSubheading p-3' placeholder='Search by name'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='rounded-r-[10px] bg-primary py-3 border-2 border-primary px-6 text-white font-bold' onClick={()=>handleSearch(searchText)}>Search</button>
            </div>
        </div>
        <div className='relative w-full  lg:w-[969px] h-[500px]'>
            <img src={hero1} alt='hero1' className='absolute top-20 left-0 w-1/3 lg:w-[180px]'/>
            <img src={hero2} alt="hero2" className='absolute top-16 left-1/3 w-1/3 lg:w-[180px]'/>
            <img src={hero3} alt='hero3' className='absolute top-20 left-2/3 w-1/3 lg:w-[180px]'/>
        </div>
      </div>

      {/* Section-2  */}
      <CardSection />

      {/*Section-3 */}
      <InfoSection />
    </div>
  )
}

export default Home
