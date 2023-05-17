import React from 'react'
import handShake from '../../images/handShake.png';
import './iconSection.css'
import { images } from '../../data/HeroSection';

function IconSection() {
  return (
      <div className='icon_section'>
              {images.map((section) => {
                  return (
                      <div className='child'>
                          
                          <a rel="noopener" target="_blank" href="#three_D">
                              <img className='icon_section_img' src={section.img} alt='logo' />
                          </a>
                          <h2>{section.name}</h2>
                      </div>
                  )
              })
                  
              }
    </div>
  )
}

export default IconSection