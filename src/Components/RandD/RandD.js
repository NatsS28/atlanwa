import React from 'react'
import '../BMS/BMS.css'
import './RandD.css'
import randdBack from '../../images/icon_section/randdback.png'

const myStyle = {
    backgroundImage: `url(${randdBack})`,
    height: '100vh',
    marginTop: '-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color:'black !important'
};

function RandD() {

    return (
        <div className='bms2' id='randD' style={myStyle}><div className='textContentbms'>
            {/* <h1 >Research and Development </h1>
            <h3>Driving Innovation Forward with InnovateR.
                Looking to push the boundaries of innovation? Explore our resources to make your ideas a reality</h3> */}
        </div>


            {/* <img src={bmsBack} alt='' /> */}
            {/* //   <img src={bmsBack2} alt='' />  */}
        </div>
    )
}

export default RandD