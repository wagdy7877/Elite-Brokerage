

import React, { useState , useEffect  } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الأنماط

// // pages
import Landing from './Landing';
import Services from './components/Services';
import Feature from './components/Feature';
import Client from "./components/Client";
import Update from "./components/Update";
import BgServices from "./components/BgServices";
import About from './components/About';
import Contact from './components/Contact';
import Listings from './components/Listings';
import Request from "./components/Request";
import Footer from './Footer';
import Team from "./components/Team";
// iscon
import lighticon from './img/buildings light.png'
import darkicon from './img/buildings dark.png'







export default function App() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة التأثير (اختياري)
      once: true, // تحديد ما إذا كان التأثير سيعمل مرة واحدة فقط (اختياري)
    });
  }, []);




      const [isDarkMode, setIsDarkMode] = useState(true);

      const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };
  return (
    
    <>

      <nav className={isDarkMode?"navbar navbar-expand-lg navbar-dark bg-dark sticky-top":"navbar navbar-expand-lg bg-light navbar-Light sticky-top" }>
        <div className="container-fluid p-1 fw-bold">
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
              <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/listings">Listings</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
           
            <button onClick={toggleMode} className="btn border-0">
              {isDarkMode ? (<i className="fas fa-sun text-light"></i>) : (<i className="fas fa-moon text-dark " ></i>)}
            </button>
              <NavLink to="/Contact" className="text-decoration-none"> <button className={isDarkMode? "btn text-light mx-3 btn_contact" :" btn mx-3 btn_contact text-dark"}>Contact Us</button> </NavLink>
              <NavLink to="/Listings" className="text-decoration-none"> <button className={isDarkMode? "btn btn-light me-3":"btn btn-dark me-3"} >View Listings</button> </NavLink>                        
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={
          <>
            <Landing Mode={isDarkMode} /> 
            <Services Mode={isDarkMode} /> 
            <Feature Mode={isDarkMode} /> 
            <Client Mode={isDarkMode} /> 
            <Update Mode={isDarkMode} /> 
          </>
        }/>

        <Route exact path="/about" element={
          <>
            <About Mode={isDarkMode}/>
            <Team Mode={isDarkMode}/>
          </>} />
          
        <Route exact path="/services" element={
          <>
             <BgServices Mode={isDarkMode} />
             <Services Mode={isDarkMode} />
             <Request Mode={isDarkMode} />
          </> 
        } />


        <Route exact path="/listings" element={<Listings Mode={isDarkMode} />} />

        <Route exact path="/contact" element={<Contact Mode={isDarkMode} />} />

      </Routes>
      <Footer Mode={isDarkMode} /> 
    
    </>
   
  )
}
