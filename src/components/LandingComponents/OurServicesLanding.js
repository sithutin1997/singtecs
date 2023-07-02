import React from 'react'
import {motion} from 'framer-motion'

const OurServicesLanding = ({data}) => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.5
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 2
      }
    }
  };
    return (
      <motion.div 
      viewport={{ once: false, amount: 0.2 }} 
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      animate={{ opacity: 1 }}
      className='flex flex-col'>
        <h1 className='font-poppin-book xl:font-bold xl:text-5xl mt-20 mb-6 xl:text-black text-white text-4xl'>{data.header}</h1>
          <p className='font-poppin-thin text-lg xl:w-2/5 w-full xl:text-black text-white font-medium'>{data.body}</p>
      </motion.div>
    )
  }
  
  export default OurServicesLanding