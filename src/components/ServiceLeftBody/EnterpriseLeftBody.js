import React,{useState, useEffect}from 'react'
import axios from 'axios'

const EnterpriseLeftBody = () => {
  const [enterpriseLeftData, setEnterpriseLeftData] = useState({})

  useEffect(() => {
    getEnterpriseLeftData()
  },[] )
  
  const getEnterpriseLeftData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/enterprise-left-bodies`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setEnterpriseLeftData(data)})
    .catch(error => console.log(error));
  }

  return (
    <div className='flex flex-col space-y-4'>
      <p className='font-poppin-thin text-sm text-left font-thin'>
        {enterpriseLeftData.body1}
      </p>
      <div className='flex flex-col space-y-2'>
        <h2 className='font-poppin-bold text-lg text-left'>{enterpriseLeftData.header}</h2>
        <p className='font-poppin-thin text-sm text-left font-thin'>{enterpriseLeftData.body2}</p>
        <ul className='ms-4 list-disc'>
          {enterpriseLeftData.enterpriseList?.map((list,index) => {
            return (<li className='font-poppin-thin text-sm font-thin' key={index}>{list}</li>)
          })}
        </ul>
      </div>
      <div className='flex flex-col space-y-2'>
        <h2 className='font-poppin-bold text-lg text-left'>{enterpriseLeftData.header2}</h2>
        <p className='font-poppin-thin text-sm text-left font-thin'>{enterpriseLeftData.body3}</p>
      </div>
    </div>
  )
}

export default EnterpriseLeftBody