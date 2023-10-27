import React from 'react'
import './About.scss'
import { useLocation } from 'react-router-dom'
import img1 from '../../Assets/img/1.jpg'
import img2 from '../../Assets/img/2.jpg'
import img3 from '../../Assets/img/3.jpg'
import img4 from '../../Assets/img/4.jpg'
import img5 from '../../Assets/img/5.jpg'
import img6 from '../../Assets/img/6.jpg'
import img7 from '../../Assets/img/7.jpg'
import img8 from '../../Assets/img/8.jpg'
import img9 from '../../Assets/img/9.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


function About() {
  const location = useLocation().pathname
  return (
    <div className={location == '/about' ? 'about_darck' : 'About'}>
      <div className="container">
        <div className="about_inner">
        <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      > <div className='gl_img'>
       </div>
        <SwiperSlide><div className='img1'><img className='img11' src={img1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='img2'><img className='img22' src={img2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='img3'><img className='img33' src={img3} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='img4'><img className='img44' src={img4} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='img5'><img className='img55' src={img5} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='img6'><img className='img66' src={img6} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='img7'><img className='img77' src={img7} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='img8'><img className='img88' src={img8} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='img9'><img className='img99' src={img9} alt="" /></div></SwiperSlide>
      </Swiper>
    </>
         
             <div className="my_about">
              <p className='my_fullname'>Hi,my fullname is Abdurahmonov Ortiqboy. I am frontend developer in Uzbekistan. I am 18 years old.</p>
              <p className='my_inf'>I have finished my college this year. My favourite jobs are accounter, frontend developer, web designer. 
               I am interested in building wonderful websites and working on collaboration with other people that help me improve my knowledge and experience.</p>
               <p className='my_inf2'>I have been studying and practicing at Digital City in Andijan for 8 months. In the last 2 months, 
               I have practiced my knowledge by building a website with our team, the F-3 team.</p>
            </div>
         
        </div>
      </div>
    </div>
  )
}

export default About
