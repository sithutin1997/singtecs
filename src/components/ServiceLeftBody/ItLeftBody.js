import React,{useState, useEffect}from 'react'
import axios from 'axios'

const ItLeftBody = () => {
  const [itLeftData, setItLeftData] = useState({})

  useEffect(() => {
    getItLeftData()
  },[] )
  
  const getItLeftData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/it-left-bodies`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setItLeftData(data)})
    .catch(error => console.log(error));
  }
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-col'>
        <h2 className='font-poppin-bold text-cyan-500 text-3xl'>{itLeftData.listNumber1}</h2>
        <h3 className='font-poppin-bold text-lg'>{itLeftData.header1}</h3>
        <p className='font-poppin-thin font-sm font-thin'>{itLeftData.body1}</p>
      </div>
      <div className='flex flex-col'>
        <h2 className='font-poppin-bold text-cyan-500 text-3xl'>{itLeftData.listNumber2}</h2>
        <h3 className='font-poppin-bold text-lg'>{itLeftData.header2}</h3>
        <p className='font-poppin-thin font-sm font-thin'>{itLeftData.body2}</p>
      </div>
      <div className='flex flex-col'>
        <h2 className='font-poppin-bold text-cyan-500 text-3xl'>{itLeftData.listNumber3}</h2>
        <h3 className='font-poppin-bold text-lg'>{itLeftData.header3}</h3>
        <p className='font-poppin-thin font-sm font-thin'>{itLeftData.body3}</p>
      </div>
    </div>
  )
}

export default ItLeftBody