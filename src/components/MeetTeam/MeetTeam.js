import React from 'react'
import meetteam from '../../assets/meetteamhalfcircle.svg'
import {motion} from 'framer-motion'
  

const MeetTeam = () => {

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
        duration: 1.3
      }
    }
  };

  return (
    <div className='flex justify-end mt-16'>
        <div className="relative"> 
           <img src={meetteam} alt="" className="w-full h-full object-cover"/> 
           <div className="absolute flex top-0 left-0 w-full h-full font-gotham-thin font-bold text-white text-center items-center justify-evenly ">
            <div>
            <motion.p  viewport={{ once: false, amount: 0.2 }} 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              animate={{ opacity: 1 }}
              className="text-8xl">24</motion.p>
              
              <motion.p  viewport={{ once: false, amount: 0.2 }} 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              animate={{ opacity: 1 }}
              className="text-2xl">IT Experts</motion.p>
            </div>
            <div>
            <motion.p  viewport={{ once: false, amount: 0.2 }} 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              animate={{ opacity: 1 }}
              className="text-8xl">28</motion.p>

              <motion.p  viewport={{ once: false, amount: 0.2 }} 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              animate={{ opacity: 1 }}
              className="text-2xl">Years Of Experience</motion.p>
            </div>
            <div>
            <motion.p  viewport={{ once: false, amount: 0.2 }} 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              animate={{ opacity: 1 }}
              className="text-8xl">2000</motion.p>
              
              <motion.p  viewport={{ once: false, amount: 0.2 }} 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              animate={{ opacity: 1 }}
              className="text-2xl">Satisfied Clients</motion.p>
            </div>
          </div>
        </div> 
        
    </div>
  )
}

export default MeetTeam