import React from 'react'
import './Footer.scss'
import facebook2 from '../../assets/images/facebook2.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import pinterest from '../../assets/images/pinterest.svg'
import tiktok from '../../assets/images/tiktok.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import youtube from '../../assets/images/youtube.svg'
function Footer() {
  return (
    <footer className='mt-5 pb-5'>
      <div className="container">
        <div className="footer__inner d-flex justify-content-between align-items-center">
        <div className="social__networkings d-flex align-items-center pt-5">
            <a href="https://www.facebook.com/">
              <img src={facebook2} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img className='ms-3' src={instagram} alt="" />
            </a>
            <a href="https://www.x.com/">
              <img className='ms-3' src={twitter} alt="" />
            </a>
            <a href="https://www.pinterest.com/">
              <img className='ms-3' src={pinterest} alt="" />
            </a>
            <a href="https://www.tiktok.com/">
              <img className='ms-3' src={tiktok} alt="" />
            </a>
            <a href="https://www.whatsapp.com/">
              <img className='ms-3' src={whatsapp} alt="" />
            </a>
            <a href="https://www.youtube.com/">
              <img className='ms-3' src={youtube} alt="" />
            </a>
        </div>
        <div className="footer__about">
          <p className="footer__text pt-5 text-light">
          © Start, 2022. All rights reserved.
          </p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
