import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/img/logo.png'


function Header() {
  return (<div className="container">
    <div className='Header'>
        <div className="header_inner">
        <ul className='logo_kl'>
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
           <div className='text_my'><h1>Hi, I am </h1><h1 className='text_name'>ABDURAHMONOV ORTIQBOY</h1>
           <p className='text__job'>Front-end Developer / BUHGALTER</p></div>
        </div>
      </div>
    </div>
  )
}

export default Header
