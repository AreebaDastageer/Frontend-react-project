import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_offer.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
         <h1>Exclusive</h1>
         <h1>Offers For You</h1>
         <p>ONLY ON BEST SELLER PRODUCTS</p>
         <button>Check Now!</button>
        </div>
         <div className='offers-left'>
            <img src={exclusive_image}></img>
        </div>
    </div>
  )
}

export default Offers
