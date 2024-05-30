import React from 'react'
import './Portfolio.scss'
import li01 from '../../assets/images/li01.png'
import li2 from '../../assets/images/li2.png'
import li3 from '../../assets/images/li3.png'
import li4 from '../../assets/images/li4.png'
import li5 from '../../assets/images/li5.png'
import li6 from '../../assets/images/li6.png'
import li7 from '../../assets/images/li7.png'
import li8 from '../../assets/images/li8.png'
function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="container">
        <p className="portfolio__p pt-4 fs-5 text-center">WORKS</p>
        <h2 className='portfolio__title text-center fs-1'>Portfolio</h2>
        <p className="portfolio__text text-center fs-4">Lorem ipsum, dolor sit amet consectetur <br />
adipisicing elit.</p>
          <div className="portfolio__inner d-flex align-items-center">
            <ul className="potfolio__list1">
              <li className="portfolio__item1">
                <img src={li01} alt="" />
              </li>
              <li className="portfolio__item1">
                <img src={li2} alt="" />
              </li>
              <li className="portfolio__item1">
                <img src={li3} alt="" />
              </li>
              <li className="portfolio__item1">
                <img src={li4} alt="" />
              </li>
            </ul>
            <ul className="potfolio__list2">
              <li className="portfolio__item2">
                <img src={li5} alt="" />
              </li>
              <li className="portfolio__item2">
                <img src={li6} alt="" />
              </li>
              <li className="portfolio__item2">
                <img src={li7} alt="" />
              </li>
              <li className="portfolio__item2">
                <img src={li8} alt="" />
              </li>
            </ul>
          </div>
          <button className='portfolio__btn ps-4 pe-4 pt-1 pb-1 bg-dark text-light border-0'>Learn More</button>
      </div>
    </div>
  )
}

export default Portfolio
