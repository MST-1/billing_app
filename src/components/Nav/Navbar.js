import React from 'react'
import LogoutButton from '../logout/LogoutButton.js'
import './Nav.css'
import img1 from '../../assets/facebook_profile_image.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='container'>
       <div className='logo'><Link to='Home'><img src={img1} alt="" /></Link></div>
       <div className='Cart'><Link to='cart'>CartBtn</Link></div>
       <div className='logout'><LogoutButton/></div>
        
    </div>
    
  )
}
