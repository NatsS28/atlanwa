import React from 'react'
import './Drone.css'
import droneBack from '../../images/droneback.jpeg'

const myStyle = {
    backgroundImage: `url(${droneBack})`,
    height: '100vh',
    width:'100%',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

function Drone() {

    return (
        <div className='bms2_drone' style={myStyle} id='drones'><div className='textContentdrone'>
            <h1 >Explore the sky with AeroVista and SkyViews </h1>
            <br></br><br></br>
            <h3><span className='whiteText'>Discover everything you need to know about drones -
                from reviews and comparisonsto the latest aerial photography techniques.</span> </h3>
            <h3><br></br>
                <span className='whiteText'>Experience unrivaled aerial views from a whole new perspective</span></h3>
        </div>


            {/* <img src={bmsBack} alt='' /> */}
            {/* //   <img src={bmsBack2} alt='' />  */}
        </div>
    )
}

export default Drone