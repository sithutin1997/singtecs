import React from 'react'
import about from '../../assets/aboutus.png'

const QualityLanding = () => {
    return (
        <div className='absolute left-24 bottom-20 bg-slate-100 py-6 px-20 w-[550px]  '>
        <div className='flex flex-col space-y-4'>
            <h1 className='font-gotham-light font-bold text-3xl text-left '>Quality Assured</h1>
            <p className='font-gotham-thin font-bold text-black text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dictum mattis. Phasellus sodales nec leo nec accumsan. Morbi fermentum nulla in leo consequat, at ultricies ante sollicitudin.</p>
            <button className='bg-transparent text-black text-m py-1 px-1 border border-black rounded w-[8rem] font-gotham-bold'>Get In Touch</button>
        </div>
      </div>
    )
  }
  
  export default QualityLanding