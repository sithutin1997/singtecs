import React,{useState,useEffect} from 'react'
import close from '../assets/close.svg'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const MobileDropDown = ({showMenu,setOnClick}) => {

  const cardVariants={
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
      x: 500,
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  }
  
  const handleOnClick = (value) => {
    setOnClick(value)
  }

  return (
    <motion.div 
    animate= {showMenu ? 'open' : 'closed'}
    initial={false}
    variants={cardVariants}
    className={showMenu == true ? `z-10 absolute top-0 left-0 w-full bg-white h-full border-solid border-b border-b-black` : `hidden`}>
      <img src={close} alt="" className='absolute top-6 right-6 cursor-pointer' onClick={()=> handleOnClick(false)}/>
      <ul className='p-16 space-y-16'>
        <li className='text-2xl font-poppin'><Link to={"/about"}>About Us</Link></li>
        <li className='text-2xl font-poppin'><Link to={"/ourservices"}>Our Services</Link></li>
        <li className='text-2xl font-poppin'><Link to={"/getintouch"}>Get a free quote</Link></li>
      </ul>
    </motion.div>
  )
}

export default MobileDropDown