import React from 'react'
import custom from '../../assets/custom-illu.svg'

const CustomLeftBody = () => {
  return (
    <div className='flex flex-col justify-between h-full pb-20'>
      <div className='flex flex-col space-y-6'>
        <h1 className='font-gotham-bold text-lg'>What is Web Design and Development</h1>
        <p className='font-gotham-thin text-sm'>What is Web Design and Development? Web design and development is an umbrella term that describes the process of creating a website. Like the name suggests, it involves two major skill sets: web design and web development. Web design determines the look and feel of a website, while web development determines how it functions. Because there isn’t always a hard line that separates the two roles, the titles are often used interchangeably. As the web continues to evolve, so do the roles. How a Website Helps Your Business Make Profits?</p>
      </div>
      <img src={custom} className="object-scale-down text-left inline w-[342px] h-[200px]"alt="" />
    </div>
  )
}

export default CustomLeftBody