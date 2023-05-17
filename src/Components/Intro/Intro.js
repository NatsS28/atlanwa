import React from 'react'
import './Intro.css'
import Introimg from '../../images/intro.jpeg';

function Intro() {
  return (
      <div className='intro_contianer' id='shop'>
          <div className='left'>
              <img src={Introimg} alt=''/>
          </div>
          <div className='right'>
          </div>
    </div>
  )
}

export default Intro