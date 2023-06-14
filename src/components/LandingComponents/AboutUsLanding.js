import React from 'react'
import doublequote from '../../assets/doublequote.svg'
import thinking from '../../assets/thinking.png'

const AboutUsLanding = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative p-14 flex flex-col mb-14'>
        <img className="absolute right-52 top-44" src={doublequote} alt="" />
        <h1 className='font-gotham-light font-bold text-5xl text-white mt-20 mb-20'>About Us</h1>
        <h2 className='font-gotham-bold text-xl text-white mb-6'>Dedication to Success</h2>
        <p className='font-gotham-light text-lg text-white mb-6 w-2/3'>Improve efficiency, leverage tech, and provide better customer experiences with the modern technology services available all overthe world. Our skilled personnel, utilizing the latest processingsoftware, combined with decades of experience.</p>
        <p className='font-gotham-bold text-sm text-white'>Co-Founder- Manoj Kumar Rai (CEO), Narmeet Singh (CTO)</p>
      </div>
      <div className='flex flex-row justify-between px-14'>
        <img src={thinking} alt="" className='object-scale-down'/>
        <div className='w-2/4 flex flex-col space-y-4'>
          <p className='text-left font-gotham-thin text-black text-sm'>
            Singtechnologies is one of the leading IT consulting firms with a global footprint, based in Singapore. Our primary service is to help budding businesses and entrepreneurs like you 
            with premium consultation through our diverse strategies that implement a 
            cost-effective and scalable approach. Trusted by several organizations 
            looking to inculcate IT technologies in their day-to-day operations, our scope of services caters to companies across all sizes, from small and medium to even prominent corporates
            such as Fortune 500 companies. Our goal is to help businesses overcome operational hurdles by tactically helping them enable an IT-driven module in their businesses.
          </p>
            <p className='text-left font-gotham-thin text-black text-sm'>
            Our expert task force includes a qualified crew of IT professionals with vast knowledge and hands-on industry experience by their side, helping us create a platform where 
            new ideas are brainstormed every day. We rely 
            on our dynamic knowledge to integrate technology into emerging businesses that will fuel the future of tomorrow.
            </p>
            <p className='text-left font-gotham-thin text-black text-sm'>
            At Singtechnologies, we are not just looking at problem-solving. We want more upcoming companies to join the techno-rush of today as we create resilient services that add high value to our clients. Our scope of service includes but is not limited to digital transformation, cloud and platform services, full-stack developer, DevOps services, and much more!
            </p>
            <p className='text-left font-gotham-thin text-black text-sm'>
            We work around the clock strategizing solutions that would help our clients make the most of IT as we guarantee 100% customer satisfaction and unmatched consultation at every step of their progress.
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsLanding