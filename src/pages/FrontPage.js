import React from 'react'
import './FrontPage.css'
import Header from './layout/Header'
import Landing from '../components/LandingComponents/Landing'
import Clients from '../components/Client/Clients'
import WeDo from '../components/WeDo/WeDo'
import WeLove from '../components/WeLove/WeLove'
import Footer from './layout/Footer'
import { useState,useEffect } from 'react'
import axios from 'axios'


const FrontPage = () => {

  const [landingData,setLandingData] = useState({})
  useEffect(() => {
    getLandingData()
  }, [])
  
  const getLandingData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/landing-pages`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => setLandingData(data))
    .catch(error => console.log(error));
    }


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
      <Landing data={landingData} showClass={bg ? `blur-sm bg-white/30` : ``}/>
    </div>
    <Clients data={landingData} />
    <WeDo data={landingData}/>
    <WeLove data={landingData}/>
    <Footer />
  </div>
  )
}

export default FrontPage