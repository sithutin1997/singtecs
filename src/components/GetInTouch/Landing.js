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
      className='w-1/2 flex flex-col space-y-8'>
      <h1 className='font-poppin text-7xl'>Interested in working together?</h1>
      <p className='font-poppin font-thin text-xl mr-20'>Great! Let's get the conversation started. It's our job to see if we're the right web design and marketing agency for what you need. Sometimes we are, and sometimes we're not. Fill out the form below, and let's talk.</p>
      <p className='font-poppin font-thin text-xl'>*If we're not the right fit, we'll try to find someone who is.</p>
    </motion.div>
  )
}

export default Landing