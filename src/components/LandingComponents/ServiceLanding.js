import React from 'react'

const ServiceLanding = ({ firstHeader, secondHeader }) => {
  return (
    <div className='flex flex-col space-y-8'>
      <h1 className='font-poppin-light font-bold text-5xl text-white mt-20'>{firstHeader}</h1>
      <p className='font-poppin-light text-2xl text-white mb-6 w-2/3'>{secondHeader}</p>
    </div>
  )
}

export default ServiceLanding