import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/img/logo.png'


function Header() {
  return (
    <div className='Header'>
      <div className="container">
        <div className="header_inner">
          <ul className='link_gl'>
            <li>
              <Link><img className='logo_my' src={Logo} alt="" /></Link>
            </li>
            <li>
              <Link className='link_2'>About me</Link>
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
        </div>
      </div>
    </div>
  )
}

export default Header
