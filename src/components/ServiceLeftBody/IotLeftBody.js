import React,{useState, useEffect}from 'react'
import axios from 'axios'

const IotLeftBody = () => {
  const [iotLeftData, setIotLeftData] = useState({})

  useEffect(() => {
    getIotLeftData()
  },[] )
  
  const getIotLeftData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/iot-left-bodies`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setIotLeftData(data)})
    .catch(error => console.log(error));
  }
  return (
    <div>
      <p className='font-poppin-thin text-sm text-left font-thin'>{iotLeftData.body}</p>
    </div>
  )
}

export default IotLeftBody