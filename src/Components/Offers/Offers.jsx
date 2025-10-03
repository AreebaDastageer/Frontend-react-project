import React from 'react'
import exclusive_offer from'../Assets/exclusive_offer.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive </h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check now!</button>
        </div>
        <div className='offers-right'>
         <img src={exclusive_offer}/>
        </div>
      
    </div>
  )
}

export default Offers
