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
import webImg from '../images/web.jpeg';
import androidImg from '../images/androidapp.jpeg'
import android2 from '../images/android2.png';
import android3 from '../images/android3.png';
import web3 from '../images/webImg3.png';
import web2  from '../images/websiteimg2.jpeg'

function WeServe(props) {
    console.log(props.displayTime)
  return (
      <div className='three_DServe'>
          <h1 className='head_serve_single'>{props.displayTime == 2 ? "Our Solutions" : "We Serve"}</h1>
          <div className='icon'><TabScrollButton></TabScrollButton></div>
          <div className='scroll-container'>

              <div className='gridscroll'>
                  <img className='btmsec_img_single' src={props.displayTime == 2 ? r1 : androidImg} alt='' ></img>
                  <img className='btmsec_img_single' src={props.displayTime == 2 ? r2 : webImg} alt='' />

                  <img className='btmsec_img_single' src={props.displayTime == 2 ? r4 : web2} alt='' />
                  <img className='btmsec_img_single' src={props.displayTime == 2 ? r5 : android3} alt='' />
                  <img className='btmsec_img_single' src={props.displayTime == 2 ? r2 : web3} alt='' />
                  {/* <img className='btmsec_img_single' src={r7} alt='' />
                  <img className='btmsec_img_single' src={r8} alt='' />
                  <img className='btmsec_img_single' src={r9} alt='' /> */}
              </div>
          </div>
      </div>
  )
}

export default WeServe