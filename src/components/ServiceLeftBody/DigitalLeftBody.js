import React,{useState, useEffect}from 'react'
import axios from 'axios'


const DigitalLeftBody = () => {
  const [digitalLeftData, setDigitalLeftData] = useState({})

  useEffect(() => {
    getDigitalLeftData()
  },[] )
  
  const getDigitalLeftData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/digital-left-bodies`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setDigitalLeftData(data)})
    .catch(error => console.log(error));
  }
  return (
    <div className='flex flex-col space-y-6'>
      <p className='font-poppin-thin text-sm text-left font-thin'>{digitalLeftData.body1}</p>
      <p className='font-poppin-thin text-sm text-left font-thin'>{digitalLeftData.body2}</p>
    </div>
  )
}

export default DigitalLeftBody