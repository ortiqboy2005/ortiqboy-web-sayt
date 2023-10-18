import React from 'react'
import MY from '../../Assets/img/my.png'
import "./Hero.scss"
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div className='Hero'>
        <div className="container">
        <ul className='logo_kl'>
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
        <div className="logo"><img src={MY} alt="" /></div>
        <div className='hero_background_father'>
          <span className='hero_background'></span>
          
        </div>
        </div>
      
    </div>
  )
}

export default Hero
