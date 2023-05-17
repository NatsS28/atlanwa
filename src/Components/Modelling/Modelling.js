import React from 'react'
import modellingBack from '../../images/icon_section/robo_icons/modelling.jpeg'
import './Modelling.css'

const myStyle = {
    backgroundImage: `url(${modellingBack})`,
    height: '100vh',
    marginTop: '-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

function Modelling() {

    return (
        <div className='modelling' style={myStyle}><div className='textContentModelling'>
            <h1 >Optimise Operational Efficiency </h1>
            <h3>Automate tasks such as lighting, HVAC, and security, and get real-time data analytics to streamline your building operations.</h3>
        </div>


            {/* <img src={bmsBack} alt='' /> */}
            {/* //   <img src={bmsBack2} alt='' />  */}
        </div>
    )
}

export default Modelling