import React,{useState,useRef} from 'react'
import welove from '../../assets/welove.png'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './WeLove.css'

const WeLove = ({data}) => {

  const formRef = useRef();
  const captchaRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  })
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData)=> ({
      ...prevFormData,
      [name]: value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    emailjs.sendForm('service_up3u84z', 'template_b0eynp4', formRef.current, 'p1HpbCMU3P8X8hVR0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    // try {
    //   fetch("https://ev7w7ihhj6.execute-api.us-east-1.amazonaws.com/sendEmail", {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type" : "application/json"
    //   },
    //   body: JSON.stringify({
    //     senderName: "sisi",
    //     senderEmail: "sethu.tin@gmail.com",
    //     message: formData.message,
    //     subject: formData.subject,
    //   })
    // })
    // } catch (error) {
    //   console.log(error)
    // }
    
  }

  return (
    <div className='flex flex-col flex-col-reverse xl:flex-row m-10 lg:m-24 bg-slate-100'>
      <div className='flex flex-col py-14 w-full xl:ps-14 px-6'>
        <h1 className='font-poppin-book text-2xl xl:text-5xl w-full xl:w-2/3 text-left mb-14'>We would love to be your digital partner.</h1>
        <form onSubmit={handleSubmit} ref={formRef} className='flex flex-col space-y-4 w-full xl:w-1/2'>
          <input name="user_name" type="text" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Name'/>
          <input name="user_email" type="text" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Email'/>
          <input name="subject"type="text" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Subject'/>
          <textarea name="message" type="text-area" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'></textarea>
          <label for="services">Choose a service:</label>
          <select name="service" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'>
            <option value="Custom Web & Mobile Development">Custom Web & Mobile Development</option>
            <option value="Digital Transformation">Digital Transformation</option>
            <option value="CX/UX Engineering">CX/UX Engineering</option>
            <option value="IoT and Cloud Computing">IoT and Cloud Computing</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="IT Consultancy">IT Consultancy</option>
            <option value="Enterprise Service">Enterprise Service</option>
            <option value="Online Diet Consultant">Online Diet Consultant</option>
          </select> 
          <div className='w-1/2'>
            <ReCAPTCHA sitekey="6LdwUdMmAAAAAAhPaT0xYypLuiumIGkE9Hwae55V" ref={captchaRef}/>
          </div>
          <button className='bg-transparent text-black py-2 px-4 border border-black rounded w-[12rem] font-poppin-bold'>Submit</button>
        </form>
      </div>
      <div className='md:hidden xl:flex w-full h-1/3'>
        <img src={welove} className="w-full h-1/2 xl:h-full"alt="" />
      </div>
    </div>
  )
}

export default WeLove