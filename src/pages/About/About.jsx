import React from 'react'
import './About.scss'
import { useLocation } from 'react-router-dom'
import img1 from '../../Assets/img/1.jpg'
import img2 from '../../Assets/img/2.jpg'
import img3 from '../../Assets/img/3.jpg'
import img4 from '../../Assets/img/4.jpg'


function About() {
  const location = useLocation().pathname
  return (
    <div className={location== '/about'? 'about_darck': 'About'}>
      <div className="container">
        <div className="about_inner">
          <div className='gl_img'>
          <div className='img1'><img className='img11' src={img1} alt="" /></div>
          <div className='img2'><img className='img22' src={img2} alt="" /></div>
          <div className='img3'><img className='img33' src={img3} alt="" /></div>
          <div className='img4'><img className='img44' src={img4} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
