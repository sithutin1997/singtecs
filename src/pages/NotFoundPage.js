import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './NotFoundPage.css'

const NotFoundPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/notfound")
  }, [])
  
  return (
    <div>
      <div className={`bg-not-found-image object-scale-down h-[450px] bg-auto bg-no-repeat px-14`}>
        <Header />
      </div>
      <div className='flex flex-col space-y-4 px-14'>
        <h1 className='font-poppin-book text-5xl'>404 not found</h1>
        <Link to={"/"} className='bg-transparent text-black text-xs py-1 px-1 border border-black rounded w-1/6 text-center py-6 font-poppin-bold'>Go To Home Page</Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundPage