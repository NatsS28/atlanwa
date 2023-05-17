import React from 'react'
import './WeServe.css';
import { Tab, TabScrollButton } from '@mui/material';
import serviceLogo from '../images/serviceLogo.jpg';
import r1 from '../images/icon_section/robo_icons/robo1.webp';
import r2 from '../images/icon_section/robo_icons/robo2.webp';
import r3 from '../images/icon_section/robo_icons/robo3.webp';
import r4 from '../images/icon_section/robo_icons/robo4.webp';
import r5 from '../images/icon_section/robo_icons/robo5.webp';
import r6 from '../images/icon_section/robo_icons/robo6.webp';
import r7 from '../images/icon_section/robo_icons/robo7.webp';
import r8 from '../images/icon_section/robo_icons/robo7.jpeg';
import r9 from '../images/icon_section/robo_icons/robo8.jpeg';

function WeServe(props) {
    console.log(props.displayTime)
  return (
      <div className='three_DServe'>
          <h1 className='head_serve_single'>{props.displayTime == 2 ? "Our Solutions" : "We Serve"}</h1>
          <div className='icon'><TabScrollButton></TabScrollButton></div>
          <div className='scroll-container'>

              <div className='gridscroll'>
                  <img className='btmsec_img_single' src={r1} alt='' ></img>
                  <img className='btmsec_img_single' src={r2} alt='' />
                  <img className='btmsec_img_single' src={r3} alt='' />
                  <img className='btmsec_img_single' src={r4} alt='' />
                  <img className='btmsec_img_single' src={r5} alt='' />
                  <img className='btmsec_img_single' src={r6} alt='' />
                  <img className='btmsec_img_single' src={r7} alt='' />
                  <img className='btmsec_img_single' src={r8} alt='' />
                  <img className='btmsec_img_single' src={r9} alt='' />
              </div>
          </div>
      </div>
  )
}

export default WeServe