import React from 'react'
import custom from '../../assets/custom.png'
import iot from '../../assets/iot.png'
import cx from '../../assets/cx.png'
import digital from '../../assets/digital.png'
import cyber from '../../assets/CyberSecurity.png'
import it from '../../assets/ITConsultancy.png'
import enterprise from '../../assets/EnterpriseService.png'
import online from '../../assets/OnlineDietConsultant.png'

import {motion} from 'framer-motion'

const WeOffer = () => {

    const cardVariants = {
      offscreen: {
        x: 1000,
      },
      onscreen: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          bounce: 0,
          duration: 1
        }
      }
    };
  
    return (
      <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      animate={{ x: 0 }}
      className='flex flex-col mx-14 py-14'>
        <h1 className='text-4xl font-gotham-light font-bold text-left mb-14'>What we offer</h1>
        <div className='flex flex-col space-y-2'>
            <div className='flex flex-row space-x-7 mb-10'>
                <motion.div variants={cardVariants} className='flex flex-col space-y-1'>
                    <img src={custom} alt="" />
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <p className='font-gotham-bold text-left'>Custom Web & </p>
                            <p className='font-gotham-bold text-left'>Mobile Development</p>
                        </div>
                        <div className='mt-1'>
                            <button className='bg-transparent text-black text-xs py-1 px-1 border border-black rounded w-[5rem] font-gotham-bold'>Learn More</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={cardVariants} className='flex flex-col space-y-1'>
                    <img src={digital} alt="" />
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <p className='font-gotham-bold text-left'>Digital</p>
                            <p className='font-gotham-bold text-left'>Transformation</p>
                        </div>
                        <div className='mt-1'>
                            <button className='bg-transparent text-black text-xs py-1 px-1 border border-black rounded w-[5rem] font-gotham-bold'>Learn More</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={cardVariants} className='flex flex-col space-y-1'>
                    <img src={cx} alt="" />
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <p className='font-gotham-bold text-left'>CX/UX </p>
                            <p className='font-gotham-bold text-left'>Engineering</p>
                        </div>
                        <div className='mt-1'>
                            <button className='bg-transparent text-black text-xs py-1 px-1  border border-black rounded w-[5rem] font-gotham-bold'>Learn More</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={cardVariants} className='flex flex-col space-y-1'>
                    <img src={iot} alt="" />
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <p className='font-gotham-bold text-left'>IoT and Cloud</p>
                            <p className='font-gotham-bold text-left'>Computing</p>
                        </div>
                        <div className='mt-1'>
                            <button className='bg-transparent text-black text-xs py-1 px-1 border border-black rounded w-[5rem] font-gotham-bold'>Learn More</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className='flex flex-col space-y-2'>
            <div className='flex flex-row space-x-7 mb-10'>
                <motion.div variants={cardVariants} className='flex flex-col space-y-1'>
                <img src={cyber} alt="" />
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col space-y-1'>
                        <p className='font-gotham-bold text-left'>Cyber</p>
                        <p className='font-gotham-bold text-left'>Security</p>
                    </div>
                    <div className='mt-1'>
                        <button className='bg-transparent text-black text-xs py-1 px-1 border border-black rounded w-[5rem] font-gotham-bold'>Learn More</button>
                    </div>
                </div>
                </motion.div>
                <motion.div variants={cardVariants} className='flex flex-col space-y-1'>
                    <img src={it} alt="" />
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <p className='font-gotham-bold text-left'>IT</p>
                            <p className='font-gotham-bold text-left'>Consultancy</p>
                        </div>
                        <div className='mt-1'>
                            <button className='bg-transparent text-black text-xs py-1 px-1 border border-black rounded w-[5rem] font-gotham-bold'>Learn More</button>
                        </div>
                    </div>
                    
                </motion.div>
                <motion.div variants={cardVariants} className='flex flex-col space-y-1'>
                    <img src={enterprise} alt="" />
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <p className='font-gotham-bold text-left'>Enterprise </p>
                            <p className='font-gotham-bold text-left'>Service</p>
                        </div>
                        <div className='mt-1'>
                            <button className='bg-transparent text-black text-xs py-1 px-1 border border-black rounded w-[5rem] font-gotham-bold'>Learn More</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={cardVariants} className='flex flex-col space-y-1'>
                    <img src={online} alt="" />
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <p className='font-gotham-bold text-left'>Online Diet</p>
                            <p className='font-gotham-bold text-left'>Consultant</p>
                        </div>
                        <div className='mt-1'>
                            <button className='bg-transparent text-black text-xs py-1 px-1 border border-black rounded w-[5rem] font-gotham-bold'>Learn More</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </motion.div>
    )
  }
  
  export default WeOffer