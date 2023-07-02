import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './AboutUsPage.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import AboutUsLanding from '../components/LandingComponents/AboutUsLanding'
import MeetTeam from '../components/MeetTeam/MeetTeam'

const AboutUsPage = () => {

  useEffect(() => {
    getAboutUsData()
  }, [])
  
  const [show,setShow] = useState(false)
  const [aboutData, setAboutData] = useState({})
  const backgroundBlur = (show) => {
    setShow(show)
    setBg(show)
  }
  const [bg,setBg] = useState(false)
  const getAboutUsData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/about-uses`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => setAboutData(data))
    .catch(error => console.log(error));
    }
  return (
    <div>
      <div className='bg-about-image bg-no-repeat px-6 lg:ps-14'>
        <Header setShow={backgroundBlur}/>
        <AboutUsLanding data={aboutData}/>
      </div>

      {/* <div className="bg-meet-image bg-auto bg-no-repeat mt-10">
        <MeetTeam />
      </div> */}

        
      <MeetTeam data={aboutData}/>
      <Footer />
    </div>
  )
}

export default AboutUsPage