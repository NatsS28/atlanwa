import React from 'react'
import './BMS.css'
import bmsBack from '../../images/icon_section/bmsback1.jpg'

function BMS() {
  return (
      <div className='bms' id='building'>
         <img src={bmsBack} alt='' />
          <div className='textContentbms'>
              <h1><span className='fr'>B</span>uilding <span className='fr'>M</span>anagement <span className='fr'>S</span>ystem</h1>
            <h3>Streamline Your Building Operations.</h3>
              <h4>Simplify building management with our automation tools and expert resources.</h4>
          </div>
        {/* //   <img src={bmsBack2} alt='' />  */}
      </div>
  )
}

export default BMS