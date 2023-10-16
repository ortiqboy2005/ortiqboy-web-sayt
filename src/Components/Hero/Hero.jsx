import React from 'react'
import MY from '../../Assets/img/my.png'
import "./Hero.scss"


function Hero() {
  return (
    <div className='Hero'>
        <div className="container"></div>
        <div className="logo"><img src={MY} alt="" /></div>
        
      
    </div>
  )
}

export default Hero
