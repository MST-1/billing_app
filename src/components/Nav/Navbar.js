import React from 'react'
import LogoutButton from '../logout/LogoutButton.js'
import './Nav.css'
import img1 from '../../assets/facebook_profile_image.png'
import { Link } from 'react-router-dom'
import CartLogo from '../../assets/cart-64.png'

export const Navbar = () => {
  return (
    <div className='container'>
       <div className='logo'><Link to='Home'><img src={img1} alt="" /></Link></div>
       <span style={{fontSize:'30px',color:'white',fontFamily:'cursive'}}>Shop Me</span>
       <div className='Cart'><Link to='cart' ><img src={CartLogo} alt="" style={{width:'50px'}}/></Link></div>
       
       <div className='logout' ><LogoutButton/></div>
        
    </div>
    
  )
}
