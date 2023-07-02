import React,{useState, useEffect}from 'react'
import axios from 'axios'

const CyberLeftBody = () => {

  const [cyberLeftData, setCyberLeftData] = useState({})

  useEffect(() => {
    getCyberLeftData()
  },[])
  
  const getCyberLeftData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cyber-left-bodies`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setCyberLeftData(data)})
    .catch(error => console.log(error));
  }
  return (
    <div className='flex flex-col space-y-6'>
      <p className='font-poppin-thin text-sm text-left font-thin'>{cyberLeftData.body}</p>
      <ul className='ms-4 list-disc'>
        {cyberLeftData.cyberList?.map((list,index) => {
          return (<li className='font-poppin-thin text-sm font-thin' key={index}>{list}</li>)
        })}
      </ul>
    </div>
  )
}

export default CyberLeftBody