import React from 'react'
import './footer.css'
import img1 from '../../assets/facebook_profile_image.png'
export const Footer = () => {
  return (
    <div >
        <footer>
           <div className='footrow'>

            <div className='footcol'>
                <img src={img1} alt="" style={{width:"50px",height:"50px"}}/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quod voluptatem et fugiat ea, molestiae quam maxime a dolore obcaecati ipsum quidem tenetur eligendi praesentium optio officiis atque. Magnam, debitis?</p>
            </div>
            <div className='footcol'>
              <h3>Office</h3>
              <p>ITPL Road</p>
              <p>Whitefield , Noida</p>
              <p> Noida,PIN 201309, Uttar Pradesh</p>
              <p className='email-id'>  mst@outlook.com</p>
              <h4>+91-8285443123</h4>
            </div>
            <div className='footcol'>
              
              <ul>
                <li><h3>Link</h3></li>
                <li>Home</li></ul>
              <ul><li>Services</li></ul>
              <ul><li>About Us</li></ul>
              <ul><li>Features</li></ul>
              <ul><li>Contacts</li></ul>
            </div>
           
             
           </div>

        </footer>  
    </div>
  )
}
