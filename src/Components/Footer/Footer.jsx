import React from 'react'
import './Footer.css'
import footer_logo from'../Assets/hero.png'
import instagram_icon from'../Assets/instagram_icon.png'
import pinterest_icon from'../Assets/pintester_icon.png'
import whatsapp_icon from'../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo}/>
        <p>GlobalMart</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Contact</li>
        <li>Offices</li>
      </ul>
      <div className='footer-social-icons'>
        {/* <div className='footer-icons-container'>
          <img src={footer_logo}/>
        </div> */}
         <div className='footer-icons-container'>
          <img src={instagram_icon}/>
        </div>
         <div className='footer-icons-container'>
          <img src={pinterest_icon}/>
        </div>
         <div className='footer-icons-container'>
          <img src={whatsapp_icon}/>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>CopyRight @ 2025 - All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
