import React from 'react'
import './BMS.css'
import bmsBack from '../../images/icon_section/opt.jpg'

const myStyle = {
    backgroundImage: `url(${bmsBack})`,
        height: '100vh',
    marginTop: '-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

function BMS2() {
    
    return (
        <div className='bms2' style={myStyle}><div className='textContentbms'>
            <h1 >Optimise Operational Efficiency </h1>
            <h3>Automate tasks such as lighting, HVAC, and security, and get real-time data analytics to streamline your building operations.</h3>
        </div>

           
            {/* <img src={bmsBack} alt='' /> */}
            {/* //   <img src={bmsBack2} alt='' />  */}
        </div>
    )
}

export default BMS2