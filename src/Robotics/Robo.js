import React from 'react'
import './Robo.css'
import robo from '../images/robotics.jpeg';
import '../Components/Soln.css'

function Robo() {
    return (
        <div className='soln_web_robo' id='robotics'>

            {/* <div className='textSection_web_robo'>
                <h1 className='headSoln_web_robo'>ROBOTICS</h1>
                <h3>
                    <span className='secondary_text'>Revolutionize Manufacturing with
                        Robotic Automation.</span><br></br><br></br><br></br>

                    Robotic automation is transforming manufacturing processes. Find out how our robots are building the future today.
                </h3>
            </div> */}
            <div className='textSection_robo'>
                <h1 className='headSoln'>ROBOTICS</h1>
                <h3>
                    Revolutionize Manufacturing with
                    Robotic Automation.Robotic automation is transforming manufacturing processes   
                </h3>
            </div>
            <img src={robo} alt='robo' className='robo_main_img' />
            {/* <img src={robo2} alt='robo' className='robo_main_img' /> */}
        </div>
    )
}

export default Robo