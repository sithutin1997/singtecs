import React from 'react'
import './Header.css'
import logo from '../../assets/singtecLogo.png'
import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import DropDownMenu from '../../components/DropDownMenu'
import { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import burger from  '../../assets/burger-menu.svg'
import MobileDropDown from '../../components/MobileDropDown'

const Header = ({setShow}) => {
  
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false)

  useEffect(() => {
    handleMouseEnter(isMenu)
  }, [isMenu])
  
  const handleMouseEnter = ( value ) => {
    setIsDropdownVisible(value)
  }

  useEffect(() => {
    handleOnClick(isMobileMenu)
  }, [isMobileMenu])
  
  const handleOnClick = (value) => {
    setIsMobileMenu(value)
  }
  return (
      <div className="bg-no-repeat flex flex-row xl:items-center justify-between border-solid border-b border-b-white py-5 xl:h-auto">
        <div className='text-left w-1/3'>
          <Link to={"/"}>
            <img src={logo} alt="logo" className='object-scale-down' width={200}/>
          </Link>
        </div>
        <div className='xl:inline hidden w-2/4'>
          <div className="flex flex-row justify-end lg:pe-14 gap-x-10 ">
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? "font-poppin-book cursor-pointer text-blue-500" : "text-white font-poppin-book cursor-pointer")}>About Us</NavLink>

            <NavLink to={"/ourservices"} className={({ isActive }) => (isActive ? "relative font-poppin-book cursor-pointer text-blue-500" : "relative text-white font-poppin-book cursor-pointer")} onMouseEnter={()=>handleMouseEnter(true)} onMouseLeave={()=>handleMouseEnter(false)}>Our Services</NavLink>
            <DropDownMenu show={isDropdownVisible}/>

            <NavLink to={"/getintouch"} className={({ isActive }) => (isActive ? "font-poppin-book cursor-pointer text-blue-500" : "text-white font-poppin-book cursor-pointer")}>Get a free quote</NavLink>
            <img src={facebook} alt="" className='xl:object-scale-down xl:inline hidden'/>
            <img src={whatsapp} alt="" className='xl:object-scale-down xl:inline hidden'/>
            <img src={linkedin} alt="" className='xl:object-scale-down xl:inline hidden'/>
          </div>
        </div>
        <div className='xl:hidden'>
          <img src={burger} alt="" className='object-scale-down cursor-pointer' onClick={()=> handleOnClick(!isMobileMenu)}/>
        </div>
        <MobileDropDown showMenu={isMobileMenu} setOnClick={handleOnClick}/>
      </div>
  )
}

export default Header