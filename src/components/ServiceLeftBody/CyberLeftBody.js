import React from 'react'

const CyberLeftBody = () => {
  return (
    <div className='flex flex-col space-y-6'>
      <p className='font-poppin-thin text-sm text-left font-thin'>We enable your organization with next-gen cyber security that anticipates threat.</p>
      <ul className='ms-4 list-disc'>
        <li className='font-poppin-thin text-sm font-thin'>We collect threat data from a variety of threat intelligence feeds</li>
        <li className='font-poppin-thin text-sm font-thin'>Analyze globally reported breaches and attacks</li>
        <li className='font-poppin-thin text-sm font-thin'>Recognize threats that are imminent</li>
        <li className='font-poppin-thin text-sm font-thin'>Validate and curate threat data for it make sense to you</li>
      </ul>
    </div>
  )
}

export default CyberLeftBody