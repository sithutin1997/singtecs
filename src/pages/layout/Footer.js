import React,{useState,useEffect} from 'react'
import fb from '../../assets/foot-fb.svg'
import whatsapp from '../../assets/foot-what.svg'
import linkedin from '../../assets/foot-linkedin.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Footer = () => {

  const [footerData, setFooterData] = useState({})

  useEffect(() => {
    getFooterData()
  },[] )
  
  const getFooterData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/footers`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setFooterData(data);})
    .catch(error => console.log(error));
  }
  return (
    <div className='border border-gray-300 border-t flex flex-col '>
      <div className=' flex flex-col lg:flex-row mx-24 mt-20 mb-10  space-y-16 lg:space-y-0 lg:space-x-36'>
        <div className='flex flex-col space-y-4'>
          <h1 className=' font-thin-bold text-left font-bold'>Our Services</h1>
          <div className='flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-4'>
            <div className='flex flex-col text-left'>
              {
                footerData.services ? (
                  <ul>
                    {
                    Object.entries(footerData.services).map(([key, value]) => {
                      return (<li className='font-poppin-thin font-thin' key={key}><Link to={`/ourservices/${key}`}>{value}</Link></li>)
                    })
                  }
                  </ul>
                ) : (<p>Loading data</p>)
              }
            </div>
            <div className='flex flex-col text-left'>
               {
                footerData.services2 ? (
                  <ul>
                    {
                    Object.entries(footerData.services2).map(([key, value]) => {
                      return (<li className='font-poppin-thin font-thin' key={key}><Link to={`/ourservices/${key}`}>{value}</Link></li>)
                    })
                  }
                  </ul>
                ) : (<p>Loading data</p>)
              }
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <h1 className='font-poppin-bold text-left font-bold'>Contact</h1>
          <div className='flex flex-col text-left'>
            <span className='font-poppin-thin font-thin'>{footerData.contact?.email}</span>
            <span className='font-poppin-thin font-thin'>{footerData.contact?.address}</span>
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <h1 className='font-poppin-bold text-left font-bold'>Follow Us</h1>
          <div className='flex flex-row space-x-4'>
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </div>
      <div className='m-10 text-center underline'>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </div>
    
  )
}

export default Footer