import React from 'react'
import {motion} from 'framer-motion'

const Landing = ({data}) => {
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
      className='xl:w-1/2 w-full flex flex-col mt-12 xl:mt-0 space-y-8'>
      <h1 className='font-poppin xl:text-black text-white text-5xl xl:text-7xl'>{data.header}</h1>
      <p className='font-poppin font-medium text-md text-white xl:text-black xl:text-xl mr-20'>{data.body}</p>
      <p className='font-poppin font-medium text-white xl:text-black text-md xl:text-xl'>{data.find}</p>
    </motion.div>
  )
}

export default Landing