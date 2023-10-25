import React from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../Assets/img/logo.png'


function Header() {
  const location = useLocation().pathname
  return (
  <div className="container">
    <div className='Header'>
        <div className="header_inner">
        <ul className={location!= '/'? 'logo_kl2': 'logo_kl'}>
          <li>
          <Link to="/" className='link_1'>Home</Link>
          </li>
          <li>
              <Link to="/about" className='link_2'>About me</Link>
            </li>
            <li>
              <Link className='link_3'>Skills</Link>
            </li>
            <li>
              <Link className='link_4'>Portfolio</Link>
            </li>
            <li>
              <Link className='link_5'>Cantact me</Link>
            </li>
          </ul>
           <span> <Link><img className='logo_my' src={Logo} alt="" /></Link></span>
          
        </div>
      </div>
    </div>
  )
}

export default Header
