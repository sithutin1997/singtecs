import React,{useRef} from 'react'
import custom from '../../assets/custom.png'
import iot from '../../assets/iot.png'
import cx from '../../assets/cx.png'
import digital from '../../assets/digital.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const WeDo = () => {

  const cardVariants = {
    offscreen: {
      x: 50,
      opacity: 0,
      rotateY: 50
    },
    onscreen: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 3
      }
      
    }
  };

  return (
    <motion.div 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.2 }}
    animate={{ x: 0, rotateX: 0 }}
    className='flex flex-col mx-24 py-14'>
      <h1 className='text-4xl font-poppin-light font-bold text-left mb-14'>What we do</h1>
      <div className='flex md:flex-row flex-col md:space-x-7 space-y-10 md:space-y-0 mb-16 md:mb-24'>
        <motion.div variants={cardVariants} className='flex flex-col space-y-2 md:space-y-1'>
          <img src={custom} alt="" />
          <p className='font-poppin-bold text-left'>Custom Web & </p>
          <p className='font-poppin-bold text-left'>Mobile Development</p>
        </motion.div>
        <motion.div variants={cardVariants} className='flex flex-col space-y-2 md:space-y-1'>
          <img src={digital} alt="" />
          <p className='font-poppin-bold text-left'>Digital</p>
          <p className='font-poppin-bold text-left'>Transformation</p>
        </motion.div>
        <motion.div variants={cardVariants} className='flex flex-col space-y-2 md:space-y-1'>
          <img src={cx} alt="" />
          <p className='font-poppin-bold text-left'>CX/UX </p>
          <p className='font-poppin-bold text-left'>Engineering</p>
        </motion.div>
        <motion.div variants={cardVariants} className='flex flex-col space-y-2 md:space-y-1'>
          <img src={iot} alt="" />
          <p className='font-poppin-bold text-left'>IoT and Cloud</p>
          <p className='font-poppin-bold text-left'>Computing</p>
        </motion.div>
      </div>
      <div className='text-center'>
        <button className='bg-transparent text-black py-2 px-4 border border-black rounded w-[12rem] font-poppin-bold'><Link to="/ourservices">View All Services</Link></button>
      </div>
    </motion.div>
  )
}

export default WeDo