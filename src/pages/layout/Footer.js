import React from 'react'
import fb from '../../assets/foot-fb.svg'
import whatsapp from '../../assets/foot-what.svg'
import linkedin from '../../assets/foot-linkedin.svg'

const Footer = () => {
  return (
    <div className='flex flex-row mx-24 my-36 space-x-36'>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-gotham-bold text-left'>Our Services</h1>
        <div className='flex flex-row space-x-4'>
          <div className='flex flex-col text-left'>
            <span className='font-gotham-thin'>Custom Web & Mobile Development</span>
            <span className='font-gotham-thin'>Digital Transformation</span>
            <span className='font-gotham-thin'>CX/UX Engineering</span>
            <span className='font-gotham-thin'>CX/UX IoT and Cloud Computing</span>
          </div>
          <div className='flex flex-col text-left'>
            <span className='font-gotham-thin'>Cyber Security</span>
            <span className='font-gotham-thin'>IT Consultancy</span>
            <span className='font-gotham-thin'>Enterprise Service</span>
            <span className='font-gotham-thin'>Online Diet Consultant</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-gotham-bold text-left'>Contact</h1>
        <div className='flex flex-col text-left'>
          <span className='font-gotham-thin'>info@singtecs.com</span>
          <span className='font-gotham-thin'>8 Ubi Rd 2 #07-22, Zervex, Singapore</span>
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-gotham-bold text-left'>Follow Us</h1>
        <div className='flex flex-row space-x-4'>
          <img src={fb} alt="" />
          <img src={linkedin} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer