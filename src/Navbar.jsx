import React, { useState } from "react";

import lighticon from './img/buildings light.png'
import darkicon from './img/buildings dark.png'
import { NavLink } from 'react-router-dom'



export default function Navbar () {
  // State لتتبع الوضع الحالي
    const [isDarkMode, setIsDarkMode] = useState(true);
  
    // وظيفة لتبديل الوضع
    const toggleMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
  
    return (
      <>
        <nav className={isDarkMode?"navbar navbar-expand-lg navbar-dark bg-dark ":"navbar navbar-expand-lg bg-light navbar-Light "}>
          <div className="container-fluid p-1 ">
            <NavLink className="navbar-brand ms-3 d-flex align-items-center fw-bold" to="/"> <img src={isDarkMode? lighticon : darkicon} className='text-light me-1' style={{width:30}} alt="icon" />Elite Brokerage </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Services">Services</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Listings">Listings</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </li>
              </ul>
              {/* أيقونة لتغيير الوضع */}
              <button onClick={toggleMode} className="btn border-0">
                {isDarkMode ? (<i className="fas fa-sun text-light"></i>) : (<i className="fas fa-moon text-dark " ></i>)}
              </button>
                <NavLink to="/Contact" className="text-decoration-none"> <button className={isDarkMode? "btn text-light mx-3 btn_contact" :" btn mx-3 btn_contact text-dark"}>Contact Us</button> </NavLink>
                <NavLink to="/Listings" className="text-decoration-none"> <button className={isDarkMode? "btn btn-light me-3":"btn btn-dark me-3"} >View Listings</button> </NavLink>                        
            </div>
          </div>
        </nav>

      </>
    )
  }

