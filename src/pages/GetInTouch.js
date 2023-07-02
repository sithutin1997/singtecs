import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './GetInTouch.css'
import Landing from '../components/GetInTouch/Landing'
import WeLove from '../components/WeLove/WeLove'

const GetInTouch = () => {
  const dataProps = {
    weLove: "We Love"
  }
  const [freeQuote,setFreeQuote] = useState({})

  useEffect(() => {
    getGreeQuoteData()
  }, [])
  
  const getGreeQuoteData = async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-in-touch-pages`, {
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}` }
    }).then(response => response.data.data[0].attributes)
    .then(data => setFreeQuote(data))
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
      <div className={`bg-touch-image object-scale-down bg-cover xl:bg-auto bg-right-top bg-no-repeat h-[640px] px-6 lg:ps-14`}>
        <Header setShow={backgroundBlur} />
        <Landing data={freeQuote}/>
        
      </div>
      <WeLove data={dataProps}/>
      <Footer />
    </div>
  )
}

export default GetInTouch