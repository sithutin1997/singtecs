import React from 'react'
import {motion} from 'framer-motion'

const Landing = () => {
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
      <h1 className='font-poppin xl:text-black text-white text-5xl xl:text-7xl'>Interested in working together?</h1>
      <p className='font-poppin font-medium text-md text-white xl:text-black xl:text-xl mr-20'>Great! Let's get the conversation started. It's our job to see if we're the right web design and marketing agency for what you need. Sometimes we are, and sometimes we're not. Fill out the form below, and let's talk.</p>
      <p className='font-poppin font-medium text-white xl:text-black text-md xl:text-xl'>*If we're not the right fit, we'll try to find someone who is.</p>
    </motion.div>
  )
}

export default Landing