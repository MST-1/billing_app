import React from 'react'
import './checkout.css'
import paytm from '../../assets/Paytm_logo_PNG2.png'
import GooglePay from '../../assets/Google_Pay_logo_PNG3.png'
import PhonePay from '../../assets/PhonePe-Logo.wine.svg'

export const Checkout = () => {
  return (
    <div className='check_container'>
      
      
      
      <div className='payment_Options'>
      <h1 style={{color:"white"}}>Payment Options</h1>

        <div className='pay'>

       <img src={paytm} alt="" className='pay1'/>
       <img src={GooglePay} alt="" className='pay1'/>
       <img src={PhonePay} alt="" className='pay1'/>


        </div>
        <div className='pay'>
<a href="https://www.shift4shop.com/credit-card-logos.html"><img alt="Credit Card Logos" title="Credit Card Logos" src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-4.png" width="413" height="59" border="0" /></a>
</div>
        <div className='pay'><h2 style={{color:"#068FFF"}}>Pay On Delivery</h2> </div>
      </div>
      
      
      </div>
  )
}
