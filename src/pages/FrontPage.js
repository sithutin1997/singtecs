import React from 'react'
import './FrontPage.css'
import Header from './layout/Header'
import Landing from '../components/LandingComponents/Landing'
import Clients from '../components/Client/Clients'
import WeDo from '../components/WeDo/WeDo'
import WeLove from '../components/WeLove/WeLove'
import Footer from './layout/Footer'
import { useState } from 'react'

const FrontPage = () => {
  const [show,setShow] = useState(false)
  const backgroundBlur = (show) => {
    setShow(show)
    setBg(show)
  }
  const [bg,setBg] = useState(false)
  return (
  <div>
    <div className={`bg-hero-image bg-cover xl:bg-auto bg-right bg-no-repeat h-[640px] px-6 lg:ps-14`}>
      <Header setShow={backgroundBlur} />
      <Landing showClass={bg ? `blur-sm bg-white/30` : ``}/>
    </div>
    <Clients />
    <WeDo />
    <WeLove />
    <Footer />
  </div>
  )
}

export default FrontPage