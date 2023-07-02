import React,{useState,useEffect} from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './OurServicesPage.css'
import OurServicesLanding from '../components/LandingComponents/OurServicesLanding'
import WeOffer from '../components/WeOffer/WeOffer'
import QualityLanding from '../components/LandingComponents/QualityLanding'
import axios from 'axios'

const OurServices = () => {
    const [show,setShow] = useState(false)
    const [serviceData,setServiceData] = useState({})
    const backgroundBlur = (show) => {
      setShow(show)
      setBg(show)
    }

    useEffect(() => {
      getServiceData()
    }, [])
    
    const getServiceData = async() => {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/service-pages`, {
        headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
      }).then(response => response.data.data[0].attributes)
      .then(data => setServiceData(data))
      .catch(error => console.log(error));
      }
    const [bg,setBg] = useState(false)
    return (
      <div>
        <div className={`bg-service-image object-scale-down bg-cover xl:bg-auto bg-right-top bg-no-repeat h-[500px] px-14`}>
          <Header setShow={backgroundBlur} />
          <OurServicesLanding data={serviceData}/>
        </div>
        <WeOffer data={serviceData} />
        <div className={`relative bg-quality-image object-scale-down bg-top bg-auto bg-no-repeat h-[560px] px-14`}>
          <QualityLanding data={serviceData}/>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default OurServices