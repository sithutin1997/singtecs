import React from 'react'

const CyberLeftBody = () => {
  return (
    <div className='flex flex-col space-y-6'>
      <p className='font-gotham-thin text-sm text-left'>We enable your organization with next-gen cyber security that anticipates threat.</p>
      <ul className='ms-4 list-disc'>
        <li className='font-gotham-thin text-sm'>We collect threat data from a variety of threat intelligence feeds</li>
        <li className='font-gotham-thin text-sm'>Analyze globally reported breaches and attacks</li>
        <li className='font-gotham-thin text-sm'>Recognize threats that are imminent</li>
        <li className='font-gotham-thin text-sm'>Validate and curate threat data for it make sense to you</li>
      </ul>
    </div>
  )
}

export default CyberLeftBody