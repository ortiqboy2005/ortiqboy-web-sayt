import React from 'react'
import './About.scss'
import { useLocation } from 'react-router-dom'

function About() {
  const location = useLocation().pathname
  return (
    <div className={location== '/about'? 'about_darck': 'About'}>
      sadas
    </div>
  )
}

export default About
