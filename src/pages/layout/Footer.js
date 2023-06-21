import React from 'react'
import fb from '../../assets/foot-fb.svg'
import whatsapp from '../../assets/foot-what.svg'
import linkedin from '../../assets/foot-linkedin.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border border-gray-300 border-t'>
      <div className=' flex flex-col xl:flex-row mx-24 mt-20 mb-36  space-y-16 xl:space-y-0 xl:space-x-36'>
        <div className='flex flex-col space-y-4'>
          <h1 className=' font-thin-bold text-left font-bold'>Our Services</h1>
          <div className='flex xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-4'>
            <div className='flex flex-col text-left'>
              <span className='font-poppin-thin font-thin'><Link to={"/ourservices/custom"}>Custom Web & Mobile Development</Link></span>
              <span className='font-poppin-thin font-thin'><Link to={"/ourservices/digital"}>Digital Transformation</Link></span>
              <span className='font-poppin-thin font-thin'><Link to={"/ourservices/cx"}>CX/UX Engineering</Link></span>
              <span className='font-poppin-thin font-thin'><Link to={"/ourservices/iot"}>IoT and Cloud Computing</Link></span>
            </div>
            <div className='flex flex-col text-left'>
              <span className='font-poppin-thin font-thin'><Link to={"/ourservices/cyber"}>Cyber Security</Link></span>
              <span className='font-poppin-thin font-thin'><Link to={"/ourservices/it"}>IT Consultancy</Link></span>
              <span className='font-poppin-thin font-thin'><Link to={"/ourservices/enterprise"}>Enterprise Service</Link></span>
              <span className='font-poppin-thin font-thin'><Link to={"/ourservices/diet"}>Online Diet Consultant</Link></span>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <h1 className='font-poppin-bold text-left font-bold'>Contact</h1>
          <div className='flex flex-col text-left'>
            <span className='font-poppin-thin font-thin'>info@singtecs.com</span>
            <span className='font-poppin-thin font-thin'>8 Ubi Rd 2 #07-22, Zervex, Singapore</span>
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
    </div>
    
  )
}

export default Footer