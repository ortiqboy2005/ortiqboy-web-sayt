import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/img/logo.png'


function Header() {
  return (
    <div className='Header'>
      <div className="container">
        <div className="header_inner">
          
            
             <span> <Link><img className='logo_my' src={Logo} alt="" /></Link></span>
            
           
         
        </div>
      </div>
    </div>
  )
}

export default Header
