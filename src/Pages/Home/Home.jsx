import React from 'react'
import './Home.scss'
import banner from '../../assets/images/banner.png'
import google from '../../assets/images/google.svg'
import microsoft from '../../assets/images/microsoft.svg'
import airbnb from '../../assets/images/airbnb.svg'
import facebook from '../../assets/images/facebook.svg'
import spotify from '../../assets/images/spotify.svg'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import card4 from '../../assets/images/card4.png'
function Home() {
  return (
    <div className='home'>
      <div className="hero">
        <div className="container pt-5">
          <div className="wrapper d-flex justify-content-between align-items-center">
            <div className="left__side">
              <span className='home__span text-light fs-5'>WELCOME</span>
              <h2 className='home__title text-light fs-2 pt-2'>Lorem ipsum dolor sit <br /> amet consectetur</h2>
              <p className="home__text text-light fs-5 pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Suscipit nemo hic quos, ab, dolor aperiam nobis <br /> cum est eos error ipsum, voluptate culpa nesciunt <br /> delectus iste?</p>
              <button className='home__btn bg-light pt-2 pb-2 ps-5 pe-5'>Explore</button>
            </div>
            <div className="right__side">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="build pt-5">
        <div className="container">
          <p className='build__p text-center'>PARTNERS</p>
          <h2 className='build__title text-center fs-1'>Lorem ipsum dolor</h2>
          <p className="build__text fs-4 text-center">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
          <div className="networks">
            <ul className='build__list d-flex justify-content-between align-items-center'>
              <li>
                <img src={google} alt="" className='build__item' />
              </li>
              <li>
                <img src={microsoft} alt="" className='build__item' />
              </li>
              <li>
                <img src={airbnb} alt="" className='build__item' />
              </li>
              <li>
                <img src={facebook} alt="" className='build__item' />
              </li>
              <li>
                <img src={spotify} alt="" className='build__item' />
              </li>
            </ul>
          </div>
          <button className='build__btn mt-5 bg-dark border-0 ps-3 pe-3 pt-1 pb-1 text-light'>Learn More</button>
        </div>
      </div>
      <div className="build2 pt-5">
        <div className="container">
          <div className="build2__inner d-flex align-items-center">
            <div className="build2__img">
              <img className='build2__banner' src={banner2} alt="" />
            </div>
            <div className="build2__about">
              <h2 className='build2__title fs-2'>Lorem ipsum dolor sit <br /> amet consectetur.</h2>
              <p className="build2__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos <br /> error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <button className='build2__btn bg-dark border-0 ps-3 pe-3 pt-1 pb-1 text-light'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="build3">
        <div className="container">
        <div className="build3__inner d-flex justify-content-between align-items-center">
        <div className="build3__about">
              <h2 className='build3__title fs-2'>Lorem ipsum dolor sit <br /> amet consectetur.</h2>
              <p className="build3__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos <br /> error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <button className='build3__btn bg-dark border-0 ps-3 pe-3 pt-1 pb-1 text-light'>Learn More</button>
            </div>
            <div className="build3__img">
              <img src={banner3} alt="" />
            </div>
        </div>
        </div>
      </div>
      <div className="build4">
        <div className="container">
          <p className="build4__p text-center">TEAM</p>
          <h2 className='build4__title text-center fs-1'>Our Talents</h2>
          <p className="build4__text text-center fs-5">Lorem ipsum, dolor sit amet consectetur <br />
Suscipit nemo hic quos, ab,</p>
          <div className="my__cards">
          <ul className='build4__list d-flex justify-content-between align-items-center pt-3'>
            <li>
              <img className='my__card' src={card1} alt="" />
            </li>
            <li>
              <img className='my__card' src={card2} alt="" />
            </li>
            <li>
              <img className='my__card' src={card3} alt="" />
            </li>
            <li>
              <img className='my__card' src={card4} alt="" />
            </li>
          </ul>

          </div>
          <button className='build4__btn bg-dark border-0 ps-3 pe-3 pt-1 pb-1 text-light'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Home
