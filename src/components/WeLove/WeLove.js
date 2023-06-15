import React from 'react'
import welove from '../../assets/welove.png'
const WeLove = () => {
  return (
    <div className='flex flex-row mx-24 bg-slate-100'>
      <div className='flex flex-col py-14 ps-14'>
        <h1 className='font-gotham-book text-5xl w-2/3 text-left mb-14'>We would love to be your digital partner.</h1>
        <div className='flex flex-col space-y-4 w-1/2'>
          <input type="text" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Name'/>
          <input type="text" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Email'/>
          <input type="text" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Subject'/>
          <textarea type="text-area" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Type your message here'> </textarea>
          <button className='bg-transparent text-black py-2 px-4 border border-black rounded w-[12rem] font-gotham-bold'>Submit</button>
        </div>
      </div>
      <div>
        <img src={welove} alt="" />
      </div>
    </div>
  )
}

export default WeLove