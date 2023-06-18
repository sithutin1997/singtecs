import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const DropDownMenu = ({show}) => {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  }
  const [visible, setVisible] = useState(false)
  const [isOnDropDown, setIsDropDown] = useState(false)

  useEffect(() => {
    handleMouseEnter()
  }, [show,isOnDropDown])

  const handleMouseEnter = () => {
    if(isOnDropDown == false && show == false) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  
  return (
      <motion.div 
        onMouseEnter={()=> setIsDropDown(true)} onMouseLeave={()=> setIsDropDown(false)}
        animate= {visible ? 'open' : 'closed'}
        initial={false}
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
        className={visible ? `absolute top-12 w-full bg-black right-0 z-10 mt-6 h-2/5 flex flex-row ps-32  py-8 space-x-12` : `hidden`}>
        <motion.div className='flex flex-col text-left mt-8 me-12 space-y-4'>
          <motion.span variants={itemVariants} className='text-xl text-white font-poppin-light'><Link to={"/ourservices/custom"}>Custom Web & Mobile Development</Link></motion.span>
          <motion.span variants={itemVariants} className='text-xl text-white font-poppin-light'><Link to={"/ourservices/digital"}>Digital Transformation</Link></motion.span>
          <motion.span variants={itemVariants} className='text-xl text-white font-poppin-light'><Link to={"/ourservices/cx"}>CX/UX Engineering</Link></motion.span>
          <motion.span variants={itemVariants} className='text-xl text-white font-poppin-light'><Link to={"/ourservices/iot"}>IoT and Cloud Computing</Link></motion.span>
        </motion.div>
        <motion.div className='flex flex-col text-left mt-8 space-y-4'>
          <motion.span variants={itemVariants} className='text-xl text-white font-poppin-light'><Link to={"/ourservices/cyber"}>Cyber Security</Link></motion.span>
          <motion.span variants={itemVariants} className='text-xl text-white font-poppin-light'><Link to={"/ourservices/it"}>IT Consultancy</Link></motion.span>
          <motion.span variants={itemVariants} className='text-xl text-white font-poppin-light'><Link to={"/ourservices/enterprise"}>Enterprise Service</Link></motion.span>
          <motion.span variants={itemVariants} className='text-xl text-white font-poppin-light'><Link to={"/ourservices/diet"}>Online Diet Consultant</Link></motion.span>
        </motion.div>
      </motion.div>
    
  )
}

export default DropDownMenu