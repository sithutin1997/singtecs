import React from 'react'
import logo from '../assets/logo.svg'

const LeftHeader = () => {
  return (
    <div className="w-full">
      <div className='flex flex-col'>
        <img src={logo} alt="logo" className='object-scale-down text-left' width={200}/>
        <div className='flex flex-col content-start'>
          <h1 className='text-4xl text-left'>We are engineers</h1>
          <p className='test-left'>Welcome to Singtechnologies, where we believe that true success comes from empowering our clients with the right expertise and knowledge. We are not just a tech consultancy; we are your partners in growth, providing you with the tools and guidance you need to succeed in the long term.</p>
          <button className='bg-transparent text-black py-2 px-4 border border-black rounded'>About us</button>
        </div>
      </div>
    </div>
  )
}

export default LeftHeader