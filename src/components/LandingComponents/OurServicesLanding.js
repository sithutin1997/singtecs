import React from 'react'
import {motion} from 'framer-motion'

const OurServicesLanding = () => {
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
        <h1 className='font-poppin-book xl:font-bold xl:text-5xl mt-14 mb-6 xl:text-black text-white text-4xl'>Our Services</h1>
          <p className='font-poppin-thin text-md xl:w-2/5 w-full xl:text-black text-white font-medium'>Singtechnologies offers a wide range of consulting services to serve a variety of businesses and clients. Whether you’re a small, local business or a multinational corporation, we can help you reach new levels of success. Get in touch with us today to learn more about our services and what our team can do for you.</p>
      </motion.div>
    )
  }
  
  export default OurServicesLanding