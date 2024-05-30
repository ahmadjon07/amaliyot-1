import React from 'react'
import './Services.scss'
import check from '../../assets/images/check.svg'
function Services() {
  return (
    <div className='services'>
      <div className="container">
      <p className="services__p fs-4 text-center pt-4">PLANS</p>
      <h2 className='services__title text-center'>Our Services</h2>
      <p className="services__text text-center fs-6">Lorem ipsum, dolor sit amet consectetur <br />
adipisicing elit.</p>
        <ul className="services__list d-flex justify-content-between align-items-center">
          <li className="services__item">
            <div className="services__card">
              <p className="card__p text-center">Basic</p>
              <h2 className="card__title text-center">$100 <span>/month</span></h2>
              <p className="card__text text-center">Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit <br />nemo hic quos, ab, dolor aperiam</p>
              <div className="card__list ps-5 d-flex align-items-center pt-3">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-1">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>

            </div>
            <button className='services__btn text-light bg-dark ps-2 pe-2 '>Learn More</button>
          </li>
          <li className="services__item">
            <div className="services__card">
              <p className="card__p text-center">Plus</p>
              <h2 className="card__title text-center">$250 <span>/month</span></h2>
              <p className="card__text text-center">Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit <br /> nemo hic quos, ab, dolor aperiam</p>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              </div>
                  <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              
              </div>
            </div>
            <button className='services__btn text-light bg-dark ps-2 pe-2 '>Learn More</button>
          </li>
          <li className="services__item">
            <div className="services__card">
              <p className="card__p text-center">Pro</p>
              <h2 className="card__title text-center">$400 <span>/month</span></h2>
              <p className="card__text text-center">Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit <br /> nemo hic quos, ab, dolor aperiam</p>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              
              </div>
              <div className="card__list ps-5 d-flex align-items-center pt-2">
                <img src={check} alt="" />
                <p className='card__p ps-2 pt-3'>Lorem ipsum, dolor sit </p>
              
              </div>
            </div>
             <button className='services__btn text-light bg-dark ps-2 pe-2 '>Learn More</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Services
