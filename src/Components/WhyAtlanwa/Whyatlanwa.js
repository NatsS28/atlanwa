import React from 'react'
import './WhyAtlanwa.css';
import student from '../../images/icon_section/student.jpeg'
import secure from '../../images/icon_section/secure_payment.png'
import offer from '../../images/icon_section/offer.png'

function Whyatlanwa() {
  return (
      <div className='why_container'>
          <h1 className='why_container_head'>Why Atlanwa</h1>
          <div className='contents'>
              <div className='headText_why'>
                  <img src={student} alt='cretifid' className='why_img1'/>
                  <h3 className='head'>Certified Installation</h3>
                  <div className='tail_container'>
                      <h5 className='tail_why'>Once you place order on Atlanwa your
                          installation request will be generated
                          post-delivery and our expert engineers
                          will guide you through user manual</h5>
                  </div>
              </div>
              <div className='headText'>
                  <img src={secure} alt='secure' className='why_img1' />
                  <h3 className='head'>Secure Payments</h3>
                  <div className='tail_container'>
                      <h5 className='tail_why'>Your Data security & privacy is our priority.
                          Pay securely through 128 bit encrypted
                          payment gateway. We support credit cards,
                          net banking and debits cards.</h5>
                  </div>
              </div>
              <div className='headText'>
                  <img src={offer} alt='offers' className='why_img1' />
                  <h3 className='head'>Exclusive Offers</h3>
                  <div className='tail_container'>
                      <h5 className='tail_why'>Now enjoy the benefits of LG
                          exclusive offers. Subscribe LG.com
                          to remain updated on latest offers</h5>
                  </div>
              </div>
         </div>

    </div>
  )
}

export default Whyatlanwa