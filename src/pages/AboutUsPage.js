import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './AboutUsPage.css'
import { useState } from 'react'
import thinking from '../assets/thinking.png'
import AboutUsLanding from '../components/LandingComponents/AboutUsLanding'
import MeetTeam from '../components/MeetTeam/MeetTeam'

const AboutUsPage = () => {
  const [show,setShow] = useState(false)
  const backgroundBlur = (show) => {
    setShow(show)
    setBg(show)
  }
  const [bg,setBg] = useState(false)

  return (
    <div className='bg-about-image bg-auto bg-no-repeat h-[640px] px-14'>
      <Header setShow={backgroundBlur}/>
      <AboutUsLanding />
      <MeetTeam />
      <Footer />
    </div>
  )
}

export default AboutUsPage