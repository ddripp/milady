import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className= "neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className= "w-4 h-4 object-contain" />
    </Link>
  </div>
)
  

const renderContent = {
    1: (
        <h1 className= "sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hello <span className="font-semibold"> milady </span>
        <br/>
        welcome to my world
        </h1>
    ),
    2: (
        <InfoBox
          text="Let's go shopping"
          link="https://www.walmart.com/ip/COPY-OF-DREAM-BABY-SLEEPER-WITH-HAT/649434077?sid=80fd1339-b8b4-405f-b7e5-aa2118a15440"
          btnText="Walmart"
        />
    ),
    3: (
        <InfoBox
          text="Let's go shopping"
          link="https://milady2611.myshopify.com"
          btnText="SHOPIFY"
        />
    ),
    4: (
        <InfoBox
          text="Place a personalized order"
          link="/contact"
          btnText="Contact"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo