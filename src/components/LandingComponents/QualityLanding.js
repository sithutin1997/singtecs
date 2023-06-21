import React from 'react'
import about from '../../assets/aboutus.png'

const QualityLanding = () => {
    return (
        <div className='absolute left-12 xl:left-24 bottom-6 bg-slate-100 py-6 xl:px-12 px-6 w-[460px] h-[300px] shadow-xl'>
        <div className='flex flex-col space-y-4'>
            <h1 className='font-poppin-light font-bold text-3xl text-left '>Quality Assured</h1>
            <p className='font-poppin-thin font-bold font-thin text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dictum mattis. Phasellus sodales nec leo nec accumsan. Morbi fermentum nulla in leo consequat, at ultricies ante sollicitudin.</p>
            <button className='bg-transparent text-black text-m py-1 px-1 border border-black rounded w-[8rem] font-poppin-bold'>Get In Touch</button>
        </div>
      </div>
    )
  }
  
  export default QualityLanding