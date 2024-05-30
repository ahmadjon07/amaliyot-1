import React from 'react'
import './Contact.scss'
function Contact() {
  return (
    <div className='contact'>
      <div className="container">
      <h2 className="contact__title text-center mt-4">Contact Us</h2>
      <p className="contact__text text-center fs-6">Lorem ipsum, dolor sit amet consectetur <br />
adipisicing elit.</p>
        <div className="contact__user d-flex justify-content-between align-items-center">
          <div className="contact__input">
          <p className="contact__p">Name</p>
          <input type="text"  className='contact__inp1'/>
          
          <p className="contact__p pt-3">Email</p>
          <input type="text"  className='contact__inp1'/>
          
          <p className="contact__p pt-3">Message</p>
          <input type="text" className='contact__inp2'/>
          <button className='contact__btn bg-dark text-light border-0'>Submit</button>
          </div>
          <div className="contact__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95775.98815933433!2d69.2420608!3d41.3958144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1717072901834!5m2!1sru!2s" className='map'></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
