import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const DropDownMenu = ({show = false}) => {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  }
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(show == false) {
      setTimeout(() => {
        setVisible(false)
      }, 300);
    } else {
      setVisible(true)
    }
    console.log(show)
  }, [show])
  
  return (
    <motion.div 
      initial={false}
      animate={show ? 'open' : 'closed'}
      onMouseEnter={()=> setVisible(true)}
      variants={{
        open: {
          opacity: 1,
          x: 0 ,
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
          }
        },
        closed: {
          clipPath: "inset(10% 50% 90% 50% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
          }
        }
      }}
      className={visible ? `absolute w-full bg-black right-0 z-10 mt-12 h-1/3 flex flex-row ps-32 py-8 space-x-12` : `hidden`}>
      <motion.div className='flex flex-col text-left mt-8 me-12 space-y-4'>
        <motion.span variants={itemVariants} className='text-xl text-white font-gotham-light'>Custom Web & Mobile Development</motion.span>
        <motion.span variants={itemVariants} className='text-xl text-white font-gotham-light'>Digital Transformation</motion.span>
        <motion.span variants={itemVariants} className='text-xl text-white font-gotham-light'>CX/UX Engineering</motion.span>
        <motion.span variants={itemVariants} className='text-xl text-white font-gotham-light'>IoT and Cloud Computing</motion.span>
      </motion.div>
      <motion.div className='flex flex-col text-left mt-8 space-y-4'>
        <motion.span variants={itemVariants} className='text-xl text-white font-gotham-light'>Cyber Security</motion.span>
        <motion.span variants={itemVariants} className='text-xl text-white font-gotham-light'>IT Consultancy</motion.span>
        <motion.span variants={itemVariants} className='text-xl text-white font-gotham-light'>Enterprise Service</motion.span>
        <motion.span variants={itemVariants} className='text-xl text-white font-gotham-light'>Online Diet Consultant</motion.span>
      </motion.div>
    </motion.div>
  )
}

export default DropDownMenu