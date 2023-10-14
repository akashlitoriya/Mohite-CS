import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import CAData from '../data/CA.json'
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
    return <div>No CA found with name {id}</div>
  }
  return (
    <div>
      CA Page

      <div>{id}</div>
    </div>
  )
}

export default CA
