import React from 'react';
import MY from '../../Assets/img/my.png';
import "./Hero.scss";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const TextAnimation = {
  hidden: {
    x: -100,
    opacity:0,
  },
  visible: custom => ({
    x:0,
    opacity:1,
    transition: { delay:custom *0.5},
  })
};
const ImgAnimation = {
  hidden: {
    y: 100,
    opacity:0,
  },
  visible: custom => ({
    y:0,
    opacity:1,
    transition: { delay:custom *0.5},
  })
};

function Hero() {
  return (
    <motion.div initial='hidden' whileInView='visible' className='Hero'>
        <motion.div className="container">
          <motion.div initial='hidden' whileInView='visible' className='hero_inner'>
            <span className='backgraund__left'></span>
            <span className='backgraund__right' ></span>
             <div className="logo"><img className='logo_img' src={MY} alt="" /></div>
             <div className='text_my'><motion.h1 custom={1} variants={TextAnimation}>Hi, I am </motion.h1><motion.h1 custom={1} variants={TextAnimation} className='text_name'>ABDURAHMONOV ORTIQBOY</motion.h1>
            <motion.p custom={2} variants={TextAnimation} className='text__job'>Front-end Developer / BUHGALTER</motion.p></div>
           <div className='hero__siklls'>
            <a  href='https://t.me/Abduraxmanov010' target='_blank' className='telegram'><motion.i custom={1} variants={ImgAnimation} class="bi bi-telegram"></motion.i></a>
            <a href='https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1' target='_blank' className='mail'><motion.i custom={2} variants={ImgAnimation} class="bi bi-at"></motion.i></a>
            <a href='https://instagram.com/_abdurahmanov_010?igshid=YTQwZjQ0NmI0OA==' target='_blank' className='mail'><motion.i custom={3} variants={ImgAnimation} class="bi bi-instagram"></motion.i></a>
            <a href='https://github.com/ortiqboy2005' target='_blank' className='git'><motion.i custom={4} variants={ImgAnimation} class="bi bi-github"></motion.i></a>
            <a href='https://www.linkedin.com/in/oritqboy-abdurahmanov-05b44a298' target='_blank' className='in'><motion.i custom={5} variants={ImgAnimation} class="bi bi-linkedin"></motion.i></a>
            </div>
            <div className='buton_ab' >
            <a href="/about"><button className='hero_buton'><p className='buton_text'>More About Me</p></button></a>
            <i href="/about" class="bi bi-arrow-right-circle-fill"></i>
            </div>
          </motion.div>
          
       
       
        </motion.div>
        </motion.div>
      
    
    
  )
}

export default Hero
