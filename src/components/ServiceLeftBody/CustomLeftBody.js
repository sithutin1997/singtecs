import React,{useEffect, useState} from 'react'
import custom from '../../assets/custom-illu.svg'
import axios from 'axios'
const CustomLeftBody = () => {
  const [customLeftData, setCustomLeftData] = useState({})

  useEffect(() => {
    getCustomLeftData()
  },[] )
  
  const getCustomLeftData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/custom-left-bodies`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setCustomLeftData(data)})
    .catch(error => console.log(error));
  }
  return (
    <div className='flex flex-col justify-between h-full pb-20'>
      <div className='flex flex-col space-y-6'>
        <h1 className='font-poppin-bold text-lg'>{customLeftData.header}</h1>
        <p className='font-poppin-thin font-thin text-sm'>{customLeftData.body}</p>
      </div>
      <img src={custom} className="object-scale-down text-left inline w-[342px] h-[200px]"alt="" />
    </div>
  )
}

export default CustomLeftBody