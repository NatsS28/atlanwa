import React from 'react'
import './WebMob.css'
import webapp from '../images/webapp.jpg';
import { Button } from '@mui/material';

function WebMob() {
    return (
        <div className='soln_web' id='web'>
           
            
            <img src={webapp} alt='laptop' />
            <div className='textSection_web'>
                <h1 className='headSoln_web'>Powerful web and mobile apps</h1>
                <h3>
                    we specialize in developing custom web and mobile apps to meet your unique business specifications. Our streamlined approach ensures that you get your app up and running in no time
                </h3>
                <Button className='btn_learn' size="small">Lets Make</Button>
            </div>
        </div>
    )
}

export default WebMob