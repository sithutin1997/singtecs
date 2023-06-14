import React from 'react'
import './RightHeader.css'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import whatsapp from '../assets/whatsapp.svg'

const RightHeader = () => {
  return (
    <div className='bg-cover bg-no-repeat  h-80 w-96 bg-hero-image w-full pr-8'>
      <div className="flex flex-row justify-center gap-x-10 border-solid border-b border-b-white py-8">
        <span className='text-white'>About Us</span>
        <span className='text-white'>Our Services</span>
        <span className='text-white'>Get In Touch</span>
        <img src={facebook} alt="" className='object-scale-down'/>
        <img src={whatsapp} alt="" className='object-scale-down'/>
        <img src={linkedin} alt="" className='object-scale-down'/>
      </div>
    </div>
  )
}

export default RightHeader