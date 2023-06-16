import React from 'react'

const CxLeftBody = () => {
  return (
    <div className='flex flex-col space-y-6'>
      <p className='font-gotham-thin text-sm text-left'>We've incorporated best practices from over 20 years of experience and developed a mature framework that is optimized for all kinds of CX/UX projects—complex, international or mission-critical. Our customer-centered design process is scientifically designed to ensure maximum and measurable ROI.</p>
      <ul className='ms-4 list-disc'>
        <li className='font-gotham-thin text-sm'>Strategy & Innovation</li>
        <li className='font-gotham-thin text-sm'>Assessment</li>
        <li className='font-gotham-thin text-sm'>Research</li>
        <li className='font-gotham-thin text-sm'>User Centered Design</li>
        <li className='font-gotham-thin text-sm'>Feedback & Improvements</li>
      </ul>
    </div>
  )
}

export default CxLeftBody