import React,{useEffect, useRef} from 'react'
import meetteam from '../../assets/meetteamhalfcircle.svg'
import {motion,animate} from 'framer-motion'
  

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

  const itRef = useRef();
  const expRef = useRef();
  const clientRef = useRef();
  useEffect(() => {
    animate(0, 24, {
      duration: 2,
      speed: 2,
      onUpdate(value) {
        itRef.current.textContent = value.toFixed(0);
      }
    })
    animate(0, 24, {
      duration: 2,
      speed: 2,
      onUpdate(value) {
        expRef.current.textContent = value.toFixed(0);
      }
    })
    animate(0, 100, {
      duration: 1,
      speed: 2,
      onUpdate(value) {
        clientRef.current.textContent = value.toFixed(0);
      }
    })
  }, [])
  
  

  return (
    <div className='flex justify-end mt-16'>
        <div className="relative"> 
           <img src={meetteam} alt="" className="w-full h-full object-cover"/> 
           <div className="absolute flex top-0 left-0 w-full h-full font-poppin-thin font-bold text-white text-center items-center justify-evenly ">
            <div>
            <motion.p  viewport={{ once: false, amount: 0.2 }} 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="text-8xl"
              ref={itRef}></motion.p>
              
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
              className="text-8xl"
              ref={expRef}></motion.p>

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
              className="text-8xl"
              ref={clientRef}></motion.p>
              
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