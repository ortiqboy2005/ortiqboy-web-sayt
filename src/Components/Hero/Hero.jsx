import React from 'react'
import MY from '../../Assets/img/my.png'
import "./Hero.scss"



function Hero() {
  return (
    <div className='Hero'>
        <div className="container">
          <div className='hero_inner'>
            <span className='backgraund__left'>.</span>
            <span className='backgraund__right' >.</span>
             <div className="logo"><img className='logo_img' src={MY} alt="" /></div>
          </div>
          
       
       
        </div>
        </div>
      
    
    
  )
}

export default Hero
