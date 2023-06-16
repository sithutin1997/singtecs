import React,{useState} from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './OurServicesPage.css'
import OurServicesLanding from '../components/LandingComponents/OurServicesLanding'
import WeOffer from '../components/WeOffer/WeOffer'
import QualityLanding from '../components/LandingComponents/QualityLanding'

const OurServices = () => {
    const [show,setShow] = useState(false)
    const backgroundBlur = (show) => {
      setShow(show)
      setBg(show)
    }
    const [bg,setBg] = useState(false)
    return (
      <div>
        <div className={`bg-service-image object-scale-down bg-auto bg-right-top bg-no-repeat h-[500px] px-14`}>
          <Header setShow={backgroundBlur} />
          <OurServicesLanding/>
        </div>
        <WeOffer />
        < div className={`relative bg-quality-image object-scale-down bg-top bg-auto bg-no-repeat h-[560px] px-14`}>
          <QualityLanding />
        </div>
        <Footer />
      </div>
    )
  }
  
  export default OurServices