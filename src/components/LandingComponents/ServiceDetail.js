import cx from '../../assets/cx-illu.svg'
import { useParams } from 'react-router-dom'
import CustomLeftBody from '../ServiceLeftBody/CustomLeftBody'
import DigitalLeftBody from '../ServiceLeftBody/DigitalLeftBody'
import CxLeftBody from '../ServiceLeftBody/CxLeftBody'
import IotLeftBody from '../ServiceLeftBody/IotLeftBody'
import CyberLeftBody from '../ServiceLeftBody/CyberLeftBody'
import ItLeftBody from '../ServiceLeftBody/ItLeftBody'
import EnterpriseLeftBody from '../ServiceLeftBody/EnterpriseLeftBody'

const ServiceDetail = ({header, rightBody = []}) => {

  const { service } = useParams()
  return (
    <div className='flex flex-col flex-y-10 p-12'>
      <h1 className={header ? `font-poppin-book text-3xl xl:text-5xl mb-6` : 'hidden'}>{ header ? header : `Diet`}</h1>
      <div className='flex xl:flex-row flex-col space-y-12 xl:space-y-0 xl:space-x-12'>
      
        {/* 
        right body
         */}

        <div className='w-2/3'>
          {
           service == "custom" ? <CustomLeftBody /> : null
          }
          {
            service == "digital" ? <DigitalLeftBody /> : null
          }
          {
            service == "cx" ? <CxLeftBody /> : null
          }
          {
            service == "iot" ? <IotLeftBody /> : null
          }
          {
            service == "cyber" ? <CyberLeftBody /> : null
          }
          {
            service == "it" ? <ItLeftBody /> : null
          }
          {
            service == "enterprise" ? <EnterpriseLeftBody /> : null
          }
        </div>

        {/* 
          left body
         */}

        <div className='w-2/3'>
          {
            rightBody.map((right,index) => {
              if(right.body.length > 5) {
                return (
                  <div key={index} className='mb-6'>
                      <h2 className='font-poppin-bold text-cyan-500 mb-4 text-xl xl:text-3xl'>{right.listNumber}</h2>
                      <h3 className='font-poppin-bold text-lg'>{right.header}</h3>
                      <ul className='list-disc px-6'>
                        {
                          right.body.map((element,index) => {
                          return <li key={index} className='font-poppin-thin font-thin font-sm'>{element}</li>
                        })
                        }
                      </ul>
                    </div>
                )
              } else if(right.body.length == 0) {
                return (
                  <img src={cx} alt="" />
                )
              }
              return (
                
                <div key={index} className='mb-6'>
                  <h2 className='font-poppin-bold mb-4 text-cyan-500 text-xl xl:text-3xl'>{right.listNumber}</h2>
                  <h3 className='font-poppin-bold text-lg'>{right.header}</h3>
                  {
                    right.body.map((element,index) => {
                     return <p key={index} className='font-poppin-thin font-thin font-sm'>{element}</p>
                    })
                  }
                </div>
              )
              
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail