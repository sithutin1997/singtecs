import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import axios from 'axios'

const Landing = ({data,showClass}) => {

  const [landingData,setLandingData] = useState({})
  useEffect(() => {
    getLandingData()
  }, [])
  
  const getLandingData = async() => {
    await axios.get('http://localhost:1337/api/landing-pages', {
      headers: { 'Authorization': 'Bearer 99ca2e8d7a4df4cacb396c019d34e5d0c921dd5b9ffe1aecfe57c25bc8dee48e05bf8176a1bd96d3dd8b8493f917daf901c443424e83193de3d40b27cb9b1b511e22f7b8d0d69eb62d9c4a9bf53e704ba3ca6c1781422e235ef9c8293ecf66097d0d10a61be810120fde51f976748b2b6e4264b51799e1ef994076df2be426d4' }
    }).then(response => response.data.data[0].attributes)
    .then(data => setLandingData(data))
    .catch(error => console.log(error));
    }

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
    <div className={`${showClass} flex flex-col content-start mt-20 xl:w-1/2 w-full space-y-8`}>
      <motion.h1  viewport={{ once: false, amount: 0.2 }} 
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      animate={{ opacity: 1 }}
      className='xl:text-7xl text-5xl text-left xl:text-black text-white font-poppin'>{data.header} {allLetters[letterIndex]}</motion.h1>

      <motion.p  viewport={{ once: false, amount: 0.2 }} 
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      animate={{ opacity: 1 }}
      className='text-left  w-full xl:w-2/3 font-light text-white xl:text-black font-poppin font-medium'>Welcome to Singtechnologies, where we believe that true success comes from empowering our clients with the right expertise and knowledge. We are not just a tech consultancy; we are your partners in growth, providing you with the tools and guidance you need to succeed in the long term.</motion.p>

      <motion.button  viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      animate={{ opacity: 1 }}
      className='bg-transparent xl:text-black text-white py-2 px-4 border xl:border-black border-white rounded w-[8rem] font-poppin-bold'>About us</motion.button>
    </div>
  )
}

export default Landing