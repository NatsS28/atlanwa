import React from 'react'
import './Soln.css';
import laptop from '../images/laptop.jpeg';

function Soln() {
  return (
      <div className='soln'>
          <img src={laptop} alt='laptop' />
          <div className='textSection'>
              <h1 className='headSoln'>Comprehensive it solutions</h1>
              <h3>
                  With IT Hub Apps, you can access a broad range of IT solutions tailored to meet your business needs. From software development to network support, we have everything you need to keep your business running smoothly.
              </h3>
          </div>
      </div>
  )
}

export default Soln