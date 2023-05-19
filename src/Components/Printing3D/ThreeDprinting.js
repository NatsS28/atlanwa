import React from 'react'
import './ThreeDprinting.css';
import threeD_alone from '../../images/threeDprinter.jpg'
import { Button } from '@mui/material';

function ThreeDprinting() {
  return (
      <div className='three_D' id='three_D'>
          <div className='left'>
              <h1 className='head_threeD'>3D Printing</h1>
              <h3 className='tail'>Streamline your workflow with 3D Printing</h3>
              <h4 className='subText'>With TechPrint, you can bring your ideas to life in minutes. Our 3D printing technology saves time and money while maintaining the accuracy of your designs.</h4>
              <Button className='btn_learn' size="small">Lets Print</Button>
 
                  <div class="ball">
                  </div>
                  <div class="shadow"></div>

          </div>
          <div className='right'>
              <img src={threeD_alone} alt='' className='img_threeD'/>
          </div>
    </div>
  )
}

export default ThreeDprinting