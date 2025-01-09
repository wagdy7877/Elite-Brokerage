import React, { Component } from 'react'

export default class Contact extends Component {
  
  render() {
    let isDark = this.props.Mode;

    return (
      <>
       <div className={`contact py-5  container-fluid ${isDark? 'bg-dark text-white' : 'bg-white '}`}>
        <div className="row">
              <h2 className='mb-4 fw-bold'>Contact Us</h2>
          <div className="col-sm-6">
            <div className="items">

              <div className={`box mb-5 p-4 container rounded-3 ${isDark? 'bg-black' : 'bg-light '}`}>
                <h4 className='mb-4'>Contact Information</h4>
                <p className={` ${isDark? 'text-white-50' : 'text-black-50 '}`} ><i className="fa-solid fa-phone me-1"></i> (555) 123-4567 </p>
                <p className={` ${isDark? 'text-white-50' : 'text-black-50 '}`} ><i className="fa-regular fa-envelope"></i> contact@luxrealty.com </p>
                <p className={` ${isDark? 'text-white-50' : 'text-black-50 '}`} ><i className="fa-solid fa-location-dot"></i> 123 Luxury Lane, Beverly Hills, CA 90210</p>
                <p className='mt-4 mb-3 fs-5 '> <i className="fa-regular fa-clock"></i> Business Hours </p>
                <ul className={` ${isDark? 'text-white-50' : 'text-black-50 '}`}>
                  <li> Monday - Friday: 9:00 AM - 6:00 PM </li>
                  <li> Saturday: 10:00 AM - 4:00 PM </li>
                  <li> Sunday: Closed </li>
                </ul>
                <p className='mt-4 mb-3 fs-5 '> Follow Us</p>
                <div className="d-flex  fs-4 " >
                  <a href="https://www.facebook.com"  className={` ${isDark? 'text-white-50' : 'text-black-50 '}`}   target="_blank" ><i className="fab fa-facebook-square me-3"></i></a>
                  <a href="https://www.twitter.com" className={` ${isDark? 'text-white-50' : 'text-black-50 '}`} target="_blank"><i className="fab fa-twitter-square me-3"></i></a>
                  <a href="https://www.instagram.com" className={` ${isDark? 'text-white-50' : 'text-black-50 '}`} target="_blank"><i className="fab fa-instagram me-3"></i></a>
                  <a href="https://www.linkedin.com" className={` ${isDark? 'text-white-50' : 'text-black-50 '}`} target="_blank"><i className="fab fa-linkedin me-3"></i></a>
                </div>
          





              </div>
        
              <div className={`box p-4 container rounded-3 ${isDark? 'bg-black' : 'bg-light '}`}>
                <h4 className='mb-4'>Send Us a Message </h4>
                <form>
                  <input  className={`form-control my-4 p-2 ${isDark?" bg-dark border border-secondary inp_black":"inp_light"}`} type="text" name="text" placeholder='Your Name'/>
                  <input  className={`form-control my-4 p-2 ${isDark?" bg-dark border border-secondary inp_black":"inp_light"}`} type="email" name="email" placeholder='Email Address'/>
                  <input  className={`form-control my-4 p-2 ${isDark?" bg-dark border border-secondary inp_black":"inp_light"}`} type="number" name="number" placeholder='Phone Number'/>
                  <textarea className={`form-control my-4 p-1 ${isDark?" bg-dark border border-secondary inp_black":"inp_light"}`} rows="7" name="message" placeholder='Your Message'/>
                  <button className={`btn form-control p-2 ' ${isDark?" btn-light text-black":"btn-dark "}`}>Send Message </button>

                </form>
               
          

              </div>
        

            </div>
          </div>

          <div className="col-sm-6">
            <div className="items h-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d438283.2495977249!2d30.974702301074213!3d30.8842022956286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1736281463813!5m2!1sar!2seg"
            className='h-100 w-100 rounded-3' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>


        </div>
          
        </div>
      </>
    )
  }
}
