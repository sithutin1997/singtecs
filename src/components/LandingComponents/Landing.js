import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'

const Landing = ({showClass}) => {

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
        duration: 1
      }
    }
  };

  const allLetters = ["Engineers", "Designers", "Consultants", "Planners", "Technology Strategist"]

  const [letterIndex , setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIndex((prevVal) => prevVal < allLetters.length - 1 ? prevVal + 1 : 0);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={` ${showClass} flex flex-col content-start mt-20 w-1/2 space-y-8`}>
      <motion.h1  viewport={{ once: false, amount: 0.2 }} 
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      animate={{ opacity: 1 }}
      className='text-6xl text-left font-gotham-book'>We are {allLetters[letterIndex]}</motion.h1>

      <motion.p  viewport={{ once: false, amount: 0.2 }} 
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      animate={{ opacity: 1 }}
      className='text-left w-3/4 font-thin font-gotham-thin'>Welcome to Singtechnologies, where we believe that true success comes from empowering our clients with the right expertise and knowledge. We are not just a tech consultancy; we are your partners in growth, providing you with the tools and guidance you need to succeed in the long term.</motion.p>

      <motion.button  viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      animate={{ opacity: 1 }}
      className='bg-transparent text-black py-2 px-4 border border-black rounded w-[8rem] font-gotham-bold'>About us</motion.button>
    </div>
  )
}

export default Landing