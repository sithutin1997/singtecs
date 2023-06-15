import React from 'react'
import './Header.css'
import logo from '../../assets/singtecLogo.png'
import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import DropDownMenu from '../../components/DropDownMenu'
import { useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import white from '../../assets/white-logo.svg'

const Header = ({setShow}) => {
  const location = useLocation()
  const [visible,setVisible] = useState(false)
  return (
      <div className='flex flex-row items-center border-solid border-b border-b-white py-5'>
        <div className='text-left w-1/2'>
          <Link to={"/"}>
            <img src={logo} alt="logo" className='object-scale-down' width={200}/>
          </Link>
        </div>
        <div className='w-1/2'>
          <div className="flex flex-row justify-center gap-x-10 ">
            <Link to={"/about"}className='text-white font-gotham-book cursor-pointer'>About Us</Link>
            <span className='text-white font-gotham-book cursor-pointer' onClick={()=> {setVisible(!visible); setShow(!visible)}}>Our Services</span>
            <Link to={"/getintouch"}className='text-white font-gotham-book cursor-pointer'>Get a free quote</Link>
            <img src={facebook} alt="" className='object-scale-down'/>
            <img src={whatsapp} alt="" className='object-scale-down'/>
            <img src={linkedin} alt="" className='object-scale-down'/>
          </div>
        </div>
        <DropDownMenu show={visible}/>
      </div>
  )
}

export default Header