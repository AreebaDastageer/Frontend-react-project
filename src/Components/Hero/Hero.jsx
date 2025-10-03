import React from 'react'
import './Hero.css'
import hero from'../Assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
     <div className='hero-left'>
      <div className='main'>
       <h2>GlobalMart</h2>
       <p>Your One-Stop Destination for Fashion & Lifestyle!</p> 
      </div>
      <div className='info'>
      Discover the latest in clothing, trendy shoes, stylish home accessories, and smart gadgets all in one place. At GlobalMart, we bring you quality, variety, and affordability to match your lifestyle. Shop smarter, live better!
      </div>
     </div>
     <div className='hero-right'>
    <img src={hero}/>
     </div>
    </div>
  )
}

export default Hero
