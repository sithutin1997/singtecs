import React,{useState, useEffect}from 'react'
import axios from 'axios'

const CxLeftBody = () => {

  const [cxLeftData, setCxLeftData] = useState({})

  useEffect(() => {
    getCxLeftData()
  },[] )
  
  const getCxLeftData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cx-left-bodies`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setCxLeftData(data)})
    .catch(error => console.log(error));
  }
  return (
    <div className='flex flex-col space-y-6'>
      <p className='font-poppin-thin text-sm text-left font-thin'>{cxLeftData.body}</p>
      <ul className='ms-4 list-disc'>
        {cxLeftData.cxList?.map((list,index) => {
          return (<li className='font-poppin-thin text-sm font-thin' key={index}>{list}</li>)
        })}
      </ul>
    </div>
  )
}

export default CxLeftBody