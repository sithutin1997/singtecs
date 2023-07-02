import React,{useState} from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './GetInTouch.css'
import Landing from '../components/GetInTouch/Landing'
import WeLove from '../components/WeLove/WeLove'

const GetInTouch = () => {
  const dataProps = {
    weLove: "We Love"
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
        <Landing />
        
      </div>
      <WeLove data={dataProps}/>
      <Footer />
    </div>
  )
}

export default GetInTouch