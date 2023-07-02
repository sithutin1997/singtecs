import React, { useEffect,useState } from 'react'
import Header from './layout/Header'
import { useParams, useNavigate } from 'react-router-dom'
import './ServiceDetailPage.css'
import axios from 'axios'
import Footer from './layout/Footer'
import ServiceLanding from '../components/LandingComponents/ServiceLanding'
import QualityLanding from '../components/LandingComponents/QualityLanding'
import ServiceDetail from '../components/LandingComponents/ServiceDetail'

const ServiceDetailPage = () => {
  const navigate = useNavigate()

  const { service } = useParams()

  const [serviceData,setServiceData] = useState({})
  const [rightBodyData, setRightBodyData] = useState({})
  const [headerContentData, setHeaderContentData] = useState({})
  const [subHeaderContentData, setSubHeaderContentData] = useState({})
  const [detailHeaderData, setDetailHeaderData] = useState({})
  useEffect(() => {
    getRightBodyData()
    getHeaderContentData()
    getSubHeaderContentData()
    getDetailHeaderData()
    getServiceData()
  }, [])
  
  useEffect(() => {
  }, [])
  
  const getServiceData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/service-pages`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => setServiceData(data))
    .catch(error => console.log(error));
    }


  const getRightBodyData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/right-bodies`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setRightBodyData(data)})
    .catch(error => console.log(error));
  }


  const getHeaderContentData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/header-contents`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setHeaderContentData(data.header)})
    .catch(error => console.log(error));
  }
  const getSubHeaderContentData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sub-header-contents`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setSubHeaderContentData(data.subHeaderContent)})
    .catch(error => console.log(error));
  }
  const getDetailHeaderData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/detail-headers`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => {setDetailHeaderData(data.detailHeader)})
    .catch(error => console.log(error));
  }

  const bgImage = {
    custom : "bg-custom-service-page",
    digital : "bg-digital-service-page",
    cx : "bg-cx-service-page",
    iot : "bg-iot-service-page",
    cyber : "bg-cyber-service-page",
    it : "bg-it-service-page",
    enterprise : "bg-enterprise-service-page",
    diet : "bg-diet-service-page"
  }

  useEffect(() => {
    const serviceParams = ["custom","digital","cx","iot","cyber","it","enterprise","diet"]
    if(!serviceParams.includes(service)) {
      navigate("/notfound")
    }
  }, [])

  
  return (
    <div>
      <div className={`${bgImage[service]}  object-scale-down h-[450px] bg-auto bg-no-repeat px-14`}>
        <Header />
        <ServiceLanding firstHeader={headerContentData[service]} secondHeader={subHeaderContentData[service]}/>
      </div>
      { service == "diet" ? null : <ServiceDetail header={detailHeaderData[service]} rightBody={rightBodyData[service]}/>}
      < div className={`relative bg-quality-image object-scale-down bg-top bg-auto bg-no-repeat h-[560px] px-14`}>
         <QualityLanding data={serviceData}/>
      </div>
      <Footer />
    </div>
  )
}

export default ServiceDetailPage