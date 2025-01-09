import React from 'react'
import { NavLink } from 'react-router-dom';


import darkicon from './img/buildings dark.png'
import lighticon from "./img/buildings light.png"


export default function Footer(props) {
  let isDark = props.Mode;

  return (
    <>
      <div className={`pt-2 ${isDark? 'bg-black text-white' : 'bg-white'}`}  > 
        <footer className=" text-center text-lg-start">
          <div className="container-fluid p-5">
            <div className="row">
              <div className="col-lg-3  col-md-6  mb-4 mb-md-0 d-flex flex-column align-items-center">
              <h5 className="text-uppercase  mb-0 ">
              <NavLink className="navbar-brand ms-3 d-flex align-items-center fw-bold" to="/"> <img src={isDark? lighticon : darkicon} className='text-light me-1' style={{width:30}} alt="icon" />Elite Brokerage </NavLink>
              </h5>
                <ul className="list-unstyled mb-0">
                  <li>
                  <p className={`my-2 ${isDark?"text-white-50":"text-black-50"}`}>Your trusted partner in finding your perfect home.</p>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-4">
                <h6 className="text-uppercase mb-0">Quick Links</h6>

                <ul className="list-unstyled mt-2">
                  <li>
                    <NavLink to="/about" className={`my-2 d-block text-decoration-none ${isDark?"text-white-50 fld":" fll text-black-50"}`}>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" className={`my-2 d-block text-decoration-none ${isDark?"text-white-50 fld":" fll text-black-50"}`}>Services </NavLink>
                  </li>
                  <li>
                    <NavLink to="/listings" className={`my-2 d-block text-decoration-none ${isDark?"text-white-50 fld":" fll text-black-50"}`}>Listings </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={`my-2 d-block text-decoration-none ${isDark?"text-white-50 fld":" fll text-black-50"}`}>Contact </NavLink>
                  </li>
                </ul>
                
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-uppercase mb-0">Legal</h6>

                <ul className="list-unstyled mt-2">
                  <li>
                    <NavLink to="/error" className={`my-2 d-block text-decoration-none ${isDark?"text-white-50 fld":" fll text-black-50"}`}>Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/error" className={`my-2 d-block text-decoration-none ${isDark?"text-white-50 fld":" fll text-black-50"}`}>Terms of Service </NavLink>
                  </li>
               
                </ul>
                
              </div>

     
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-uppercase mb-0">Contact</h6>

                <ul className="list-unstyled mt-2">
                  <li>
                    <p  className={`my-2 ${isDark? " text-white-50":" text-black-50"}`} >123 Business Ave New York, NY 10001 (123) 456-7890</p>
                  </li>
                  <li>
                    <a href="mailto:wego7877@gmail.com" className={`my-2 d-block text-decoration-none ${isDark?"text-white-50 fld":" fll text-black-50"}`}>Terms of Service </a>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </>
  )
}
