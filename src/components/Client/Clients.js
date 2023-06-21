import React from 'react'
import './Clients.css'
import audi from '../../assets/audi.svg'
import auth from '../../assets/auth.svg'
import nec from '../../assets/nec.svg'
import raptor from '../../assets/raptor.svg'
import mandai from '../../assets/mandai.svg'
import alpsoft from '../../assets/alpsoft.svg'

const Clients = () => {
  return (
    <div className='bg-world-image bg-auto bg-right-top bg-no-repeat shadow-md xl:mx-24'>
      <div className='flex flex-col p-14 space-y-16'>
        <h1 className='text-4xl font-poppin font-bold xl:w-2/3 w-full text-left'>Our reputation is built on creating great outcomes for our clients</h1>
        <div className='flex flex-col space-y-10'>
          <div className='flex flex-col space-y-10 lg:flex-row lg:space-y-0 md:justify-between xl:space-y-0 xl:flex-row xl:space-x-28 px-16'>
            <div className='flex flex-row space-x-16'>
              <img src={auth} alt="" />
              <img src={nec} alt="" />
            </div>
            <div className='flex flex-row space-x-16'>
              <img src={raptor} alt="" />
              <img src={auth} alt="" />
            </div>
            <div className='flex flex-row space-x-16'>
              <img src={nec} alt="" />
            </div>
          </div>
          <div className='flex flex-col space-y-10 lg:flex-row xl:space-x-28 px-16'>
            <div className='flex flex-row space-x-16'>
              <img src={alpsoft} alt="" />
              <img src={mandai} alt="" />
            </div>
            <div className='flex flex-row space-x-16'>
              <img src={audi} alt="" />
              <img src={alpsoft} alt="" />
            </div>
            <div className='flex flex-row space-x-16'>

              <img src={mandai} alt="" />
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients