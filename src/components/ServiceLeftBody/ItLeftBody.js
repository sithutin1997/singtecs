import React from 'react'

const ItLeftBody = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-col'>
        <h2 className='font-gotham-bold text-cyan-500 text-3xl'>01</h2>
        <h3 className='font-gotham-bold text-lg'>Analyze</h3>
        <p className='font-gotham-thin font-sm'>Before we start any project we take time to understand all needs of your business needs, vision, and most importantly the desired outcomes you have.</p>
      </div>
      <div className='flex flex-col'>
        <h2 className='font-gotham-bold text-cyan-500 text-3xl'>02</h2>
        <h3 className='font-gotham-bold text-lg'>Plan</h3>
        <p className='font-gotham-thin font-sm'>Planning is an important part of 5 step plan. In order to work within an harmony with your business we plan every step and evaluate the possible results. It allows in case of flexibility once we fully understand your business.</p>
      </div>
      <div className='flex flex-col'>
        <h2 className='font-gotham-bold text-cyan-500 text-3xl'>03</h2>
        <h3 className='font-gotham-bold text-lg'>Design</h3>
        <p className='font-gotham-thin font-sm'>We will bring everything that we have found during the analyzing and planning processes. Then we design the best solutions to achive your vision.</p>
      </div>
    </div>
  )
}

export default ItLeftBody