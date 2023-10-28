import React from 'react'
import './Skillis.scss'
import { Form } from 'react-router-dom'
import img1 from '../../Assets/img/Figma.png'
import img2 from '../../Assets/img/CSS3_logo.svg.png'
import img3 from '../../Assets/img/html5.png'
import img4 from '../../Assets/img/JavaScript-logo.png'
import img5 from '../../Assets/img/Bootstra.png'
import img6 from '../../Assets/img/sass.png'
import img7 from '../../Assets/img/git-icon.png'
import img8 from '../../Assets/img/reacti.png'


function Skillis() {
  return (
    <div className='Skillis'>
      <div className="container">
        <div className="Skillis_inner">
          <div className="my_skils">
            <h1 className='my_s'>MY Skills</h1>
            <p className='skls_text' >USING NOW:</p>
          </div>
          <div className="skils_img">
            <img className='img_f' src={img1} alt="" />
            <img className='img_c' src={img2} alt="" />
            <img className='img_h' src={img3} alt="" />
            <img className='img_j' src={img4} alt="" />
            <img className='img_b' src={img5} alt="" />
            <img className='img_s' src={img6} alt="" />
            <img className='img_g' src={img7} alt="" />
            <img className='img_r' src={img8} alt="" />

          </div>

        </div>
      </div>
    </div>
  )
}

export default Skillis