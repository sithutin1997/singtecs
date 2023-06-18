import React, { useEffect } from 'react'
import Header from './layout/Header'
import { useParams, useNavigate } from 'react-router-dom'
import './ServiceDetailPage.css'
import Footer from './layout/Footer'
import ServiceLanding from '../components/LandingComponents/ServiceLanding'
import QualityLanding from '../components/LandingComponents/QualityLanding'
import ServiceDetail from '../components/LandingComponents/ServiceDetail'

const ServiceDetailPage = () => {
  const navigate = useNavigate()

  const { service } = useParams()

  const headerContent = {
    custom : "Custom Web & Mobile Development",
    digital: "Digital Transformation",
    cx : "CX/UX Engineering",
    iot : "IoT and Cloud Computing",
    cyber : "Cyber Security",
    it : "IT Consultancy",
    enterprise: "Enterprise Service",
    diet : "Online Diet Consultant"
  }

  const subHeaderContent = {
    custom : "Creative Web and Mobile R&D",
    digital : "Manage Your Company With Ease",
    cx : "Designing For Complexity",
    iot : "Let Us Help You with Your Technology Needs. End-to-End Service.",
    cyber : "Secure Your Business from Every Angle",
    it : "IT Consultancy Tailored to Your Business Needs",
    enterprise : "Hidden Improvements In All Departments",
    diet : "To Eat is a Necessity, But to Eat Intelligently is an Art"
  }

  const bgImage = {
    custom : "bg-custom-service-page",
    digital : "bg-digital-service-page",
    cx : "bg-cx-service-page",
    iot : "bg-iot-service-page",
    cyber : "bg-cyber-service-page",
    it : "bg-it-service-page",
    enterprise : "bg-enterprise-service-page",
    diet : "bg-diet-service-page"
  }

  const detailHeader = {
    custom : "Custom Websites for a Kickstart",
    digital : "Why Digital Transformation?",
    cx : "User Experience Is Everything",
    iot : "What Can Be Done With Cloud Computing?",
    cyber : "Threat Anticipation",
    it : "Improve Your Business Process With an Extended IT Department",
    enterprise : "What is Enterprise Service Management (ETM)?",
    diet : false
  }

  const RightBody = {
    custom : [
      {
        listNumber : "01",
        header : "Saving On Costs",
        body: [
          "Unfortunately, many startup and major company fail in their venture due to low profits. This is despite having great expectation of the investment made. Part of the failure is attributed to engagement of poor business tactics such as negligence of web services.",
          "It should be known that website design and development is affordable. By properly structuring the content, the webmaster saves a lot of cost during web development. The cost saving aspect extends to the futuristic gains the website will bring to the business.",
          "Furthermore, the website reduces the distance covered to reach out to the customers. If one was to physically talk to potential customers then it would be resource intensive. It is here that web services come in. Moreover, cutting such extra costs means that the business is accruing more profit."
        ]
      }, {
        listNumber : "02",
        header : "Allowing ADs On The Website",
        body: [
          "Business owners must have come across the many ads been broadcasted on various website. Well, this is one of the intriguing ways a business venture can attract more profit. Basically, the company will be approached by other enterprises to have their ads run on the website.",
          "As part of marketing and advertising, the host website will charge a certain amount to have the advert. Subsequently, it is important to come up with a unique and renowned website. By focusing on this, the webmaster gets to place the website on the limelight.",
          "The big winners here are those whose website attracts more enterprises and ads."
        ]
      }
    ],
    digital : [
      {
        listNumber : "01",
        header : "Digital Transformation Consulting",
        body: ["While it might be a bit counter-intuitive to trust external experts with decisions about your organization, a fresh look at business processes can uncover hidden potential and help see new possibilities. We come equipped with knowledge about the industry, typical customer journey, and market dynamics."]
      },
      {
        listNumber : "02",
        header : "Current Status",
        body: [
          "We take a look at all the technology that is used at the moment. We examine existing solutions paying attention to their use and effectiveness, take into account what software is used by your clients and cooperators. Compatibility is vital.",
          "When we know everything about the current IT solutions implemented in your company, we are ready for the next step."
        ]
      },
      {
        listNumber : "03",
        header : "Digital Transformation Implementation",
        body : [
          "Digital transformation implementation is when the strategy comes to life. Digital transformation services that stay on paper don't bring results. Sure, planning is essential, but only moving past the brainstorming phase can enhance team experience.",
          "It's important to remember that the development phase can falsify some assumptions made at the planning phase. After all, digital transformation is all about flexibility and experiments."
        ]

      }
    ] ,
    cx : [
      {
        body: []
      }
    ] ,
    iot : [
      {
        listNumber : "01",
        header : "File Storage",
        body : [
          "There are several different ways of storing data. You can use your computer, hard drive, network file shares, etc. But what is unique about cloud storage? It gives you the ability to edit, download, or upload files anytime and anywhere as long as you have an internet connection."
        ]
      },
      {
        listNumber : "02",
        header : "Big Data Analytics",
        body : [
          "Data is everything nowadays. Big companies like yours use data to drive a successful business venture. During the collection of the data and processing it daily use computers or devices are not enough to perform well results.",
          "We provide big data analytics on cloud service providers like Amazon Web Services, Google Cloud, and Microsoft Azure and build a strategic system to ensure that your business efficiently can use any data available."
        ]
      },
      {
        listNumber : "03",
        header : "Data Backups and Archiving",
        body : [
          "In most cases if you don't use cloud services for backups and archiving, you will probably end up losing all your data. Your storage systems may be affected by disasters and can be easily destroyed.",
          "On the other hand most cloud providers are secure systems. You can not lose your data with a similar event on cloud storage."
        ]
      },
      {
        listNumber : "04",
        header : "Business Processes",
        body : [
          "If you are using business applications like Enterprise Resource Planning(ERP) or Customer Resource Management(CRM) you wish them to be independent from one computer or device.",
          "By using cloud services you may reach those applications from anywhere you want and taste the risk free way of managing your business data."
        ]
      }
    ],
    cyber : [
      {
        listNumber : "01",
        header : "Threat Hunting",
        body : [
          "According to Microsoft an attacker stays in your system for months before getting realized. We find the trigger, investigate, analyze and find a solution before it blows up your system."
        ]
      },
      {
        listNumber : "02",
        header : "Security Monitoring",
        body: [
          "We securely scan, monitor, and log every act on your system against all possible changes and vulnerabilities. Reporting and removing these vulnerabilities are our job to protect your system against all possible attacks. We log everything."
        ]
      },
      {
        listNumber : "03",
        header : "Incident Analysis",
        body : [
          "When someone attacked to your system it is important to evaluate the changes and loss data to."
        ]
      },
      {
        listNumber : "04",
        header : "Breach Management",
        body : [
          "If you are using business applications like Enterprise Resource Planning(ERP) or Customer Resource Management(CRM) you wish them to be independent from one computer or device.",
          "By using cloud services you may reach those applications from anywhere you want and taste the risk free way of managing your business data."
        ]
      }
    ] ,
    it : [
      {
        listNumber : "04",
        header : "Deliver",
        body : [
          "Once we handle the design we can draw a road map to effectively put your plan into real life. We take you to your desired place step by step."
        ]
      },
      {
        listNumber : "05",
        header : "Manage",
        body : [
          "We will be on-hand to help everytime you need whether it is a day to day management or top level support."
        ]
      }
    ],
    enterprise : [
      {
        listNumber : "01",
        header : "ESM Benefits?",
        body : [
          "Increasing productivity",
          "Minimazing Vaste",
          "Enhancing Visibility and Control", 
          "Sharpening the Competetive Edge",
          "Quickly Achieving Return of Investment",
          "Increasing Satisfaction of Users"
        ]
      },
      {
        listNumber: "02",
        header : "Some Quick Examples",
        body : [
          "Handling large volume of request in Customer Service",
          "Handling requests for leave, change, training, and staffing in HR.",
          "Approving payments, sending invoices and creating custom financial reports in Finance.",
          "Managing all processes together, tracking sales agents in Marketing and Sales.",
          "Managing legal documents",
          "Purchasing and Procurement",
          "Security",
          "Administration"
        ]
      }
    ],
    diet : [] ,
  }

  useEffect(() => {
    const serviceParams = ["custom","digital","cx","iot","cyber","it","enterprise","diet"]
    if(!serviceParams.includes(service)) {
      navigate("/notfound")
    }
  }, [])

  
  return (
    <div>
      <div className={`${bgImage[service]}  object-scale-down h-[450px] bg-auto bg-no-repeat px-14`}>
        <Header />
        <ServiceLanding firstHeader={headerContent[service]} secondHeader={subHeaderContent[service]}/>
      </div>
      { service == "diet" ? null : <ServiceDetail header={detailHeader[service]} rightBody={RightBody[service]}/>}
      < div className={`relative bg-quality-image object-scale-down bg-top bg-auto bg-no-repeat h-[560px] px-14`}>
         <QualityLanding />
      </div>
      <Footer />
    </div>
  )
}

export default ServiceDetailPage