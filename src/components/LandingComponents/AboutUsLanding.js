import React, { useEffect } from 'react'
import doublequote from '../../assets/doublequote.svg'
import thinking from '../../assets/thinking.png'
import { motion } from 'framer-motion'

const AboutUsLanding = ({data}) => {
  const cardVariants = {
    offscreen: {
      x:300,
      rotateY: 150,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 2
      }
    }
  };
  return (
    <div className='flex flex-col'>
      <div className='relative xl:p-14 flex flex-col mb-32 xl:mb-14'>
        <img className="absolute right-0 top-36 xl:right-52 xl:top-44" src={doublequote} alt="" />
        <h1 className='font-poppin-light font-bold text-5xl text-white mt-20 mb-20'>{data.header}</h1>
        <h2 className='font-poppin-bold text-lg xl:text-xl text-white mb-6'>{data.subHeader}</h2>
        <p className='font-poppin-light text-md xl:text-lg text-white mb-6 w-full xl:w-2/3'>{data.headerBody}</p>
        <p className='font-poppin-bold font-bold text-sm text-white'>{data.speaker}</p>
      </div>
      <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      animate={{ x: 0 }}
      className='flex flex-col xl:flex-row justify-between xl:px-14'>
        <motion.img variants={cardVariants}
        src={thinking} alt="" className='object-scale-down'/>
        <motion.div 
        variants={cardVariants}
        className='xl:w-2/4 w-full flex flex-col space-y-4'>
          <p className='text-left font-poppin-thin text-black text-sm font-thin mt-6 xl:mt-0'>
            {data.body1}
          </p>
            <p className='text-left font-poppin-thin text-black text-sm font-thin'>
            {data.body2}
            </p>
            <p className='text-left font-poppin-thin text-black text-sm font-thin'>
            {data.body3}
            </p>
            <p className='text-left font-poppin-thin text-black text-sm font-thin'>
            {data.body4}
            </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutUsLanding