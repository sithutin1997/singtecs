import React, { useState } from 'react';

const HoverTest = () => {
//   const [isOpen, setIsOpen] = useState(false);

  
//   const [visible, setVisible] = useState(false)

//   const toggleMenu = () => {
//     setVisible(!visible);
//   };

  return (
    <ul className="absolute mt-10 w-full left-0 px-10 py-8 bg-black text-left shadow rounded grid grid-cols-2 gap-4">
        <li>
            <span className='px-4 py-2 text-xl text-white hover:bg-gray-600 font-gotham-light'>Custom Web & Mobile Development</span>
        </li>
        <li>
            <span className='px-4 py-2 text-xl text-white hover:bg-gray-600 font-gotham-light'>Digital Transformation</span>
        </li>
        <li>
            <span className='px-4 py-2 text-xl text-white hover:bg-gray-600 font-gotham-light'>CX/UX Engineering</span>
        </li>
        <li>
            <span className='px-4 py-2 text-xl text-white hover:bg-gray-600 font-gotham-light'>IoT and Cloud Computing</span>
        </li>
        <li>
            <span className='px-4 py-2 text-xl text-white hover:bg-gray-600 font-gotham-light'>Cyber Security</span>
        </li>
        <li>
            <span className='px-4 py-2 text-xl text-white hover:bg-gray-600 font-gotham-light'>IT Consultancy</span>
        </li>
        <li>
            <span className='px-4 py-2 text-xl text-white hover:bg-gray-600 font-gotham-light'>Enterprise Service</span>
        </li>
        <li>
            <span className='px-4 py-2 text-xl text-white hover:bg-gray-600 font-gotham-light'>Online Diet Consultant</span>
        </li>
  </ul>
  );
};

export default HoverTest;
