import React from 'react'
import about from '../../assets/aboutus.png'

const QualityLanding = ({data}) => {
    return (
        <div className='absolute left-12 xl:left-24 bottom-6 bg-slate-100 py-6 xl:px-12 px-6 w-[250px] md:w-[460px] h-[400px] md:h-[300px] shadow-xl'>
        <div className='flex flex-col space-y-4'>
            <h1 className='font-poppin-light font-bold text-3xl text-left '>{data.subHeader}</h1>
            <p className='font-poppin-thin font-bold font-thin text-sm md:lg'>{data.qualityBody}</p>
            <button className='bg-transparent text-black text-m py-1 px-1 border border-black rounded w-[8rem] font-poppin-bold'>Get In Touch</button>
        </div>
      </div>
    )
  }
  
  export default QualityLanding