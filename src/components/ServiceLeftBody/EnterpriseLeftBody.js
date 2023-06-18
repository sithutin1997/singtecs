import React from 'react'

const EnterpriseLeftBody = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <p className='font-poppin-thin text-sm text-left font-thin'>
        The name ETM(Enetprise Service Management) may sound new but the concept behind is not. Enterprise service management is applying IT management to other departments in an enterprise to improve efficiency and service delivery.
      </p>
      <div className='flex flex-col space-y-2'>
        <h2 className='font-poppin-bold text-lg text-left'>What Enterprise Service Management Includes?</h2>
        <p className='font-poppin-thin text-sm text-left font-thin'>It covers most of the daily part of an enterprise including:</p>
        <ul className='ms-4 list-disc'>
          <li className='font-poppin-thin text-sm font-thin'>Service Desks</li>
          <li className='font-poppin-thin text-sm font-thin'>Change and Incident Management Softwares</li>
          <li className='font-poppin-thin text-sm font-thin'>Self Service(Chatbots, Knowledgebase etc.)</li>
          <li className='font-poppin-thin text-sm font-thin'>Use of Automation</li>
        </ul>
      </div>
      <div className='flex flex-col space-y-2'>
        <h2 className='font-poppin-bold text-lg text-left'>Why Enterprise Service Management Instead of IT Service Management?</h2>
        <p className='font-poppin-thin text-sm text-left font-thin'>Enterprise Service Management is a concept that implements IT management process in every source that your company have. That is why it adds more value than regular IT management.</p>
      </div>
    </div>
  )
}

export default EnterpriseLeftBody