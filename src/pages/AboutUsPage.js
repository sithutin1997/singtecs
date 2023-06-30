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
    <div>
      <div className='bg-about-image bg-no-repeat px-6 lg:ps-14'>
        <Header setShow={backgroundBlur}/>
        <AboutUsLanding />
      </div>

      {/* <div className="bg-meet-image bg-auto bg-no-repeat mt-10">
        <MeetTeam />
      </div> */}

        
      <MeetTeam />
      <Footer />
    </div>
  )
}

export default AboutUsPage