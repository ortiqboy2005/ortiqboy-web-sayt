import React from 'react'
import MY from '../../Assets/img/my.png'
import "./Hero.scss"
import { Link } from 'react-router-dom'



function Hero() {
  return (
    <div className='Hero'>
        <div className="container">
          <div className='hero_inner'>
            <span className='backgraund__left'></span>
            <span className='backgraund__right' ></span>
             <div className="logo"><img className='logo_img' src={MY} alt="" /></div>
             <div className='text_my'><h1>Hi, I am </h1><h1 className='text_name'>ABDURAHMONOV ORTIQBOY</h1>
           <p className='text__job'>Front-end Developer / BUHGALTER</p></div>
           <div className='hero__siklls'>
            <a href='https://t.me/Abduraxmanov010' target='_blank' className='telegram'><i class="bi bi-telegram"></i></a>
            <a href='https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1' target='_blank' className='mail'><i class="bi bi-at"></i></a>
            <a href='https://instagram.com/_abdurahmanov_010?igshid=YTQwZjQ0NmI0OA==' target='_blank' className='mail'><i class="bi bi-instagram"></i></a>
            <a href='https://github.com/ortiqboy2005' target='_blank' className='git'><i class="bi bi-github"></i></a>
            <a href='https://www.linkedin.com/in/oritqboy-abdurahmanov-05b44a298' target='_blank' className='in'><i class="bi bi-linkedin"></i></a>
            </div>
            <a href="/about"><button className='hero_buton'>More About Me</button></a>
          </div>
          
       
       
        </div>
        </div>
      
    
    
  )
}

export default Hero
