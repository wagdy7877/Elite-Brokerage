import React from 'react'
import { NavLink } from 'react-router-dom';
import imgOne from'../img/photo-1545324418-cc1a3fa10c00.webp'
import imgTwo from'../img/photo-1222512918728675-ed5a9ecdebfd.webp'
import imgThree from'../img/photo-1533333333336376072261-38c75010e6c9.webp'

export default function Feature(props) {
    let isDark = props.Mode ;
  return (
    <>
        <div className={`p-5 feature ${isDark? 'bg-black text-white' : 'bg-white '}`}>
            <h2 className='text-center '>Featured Apartments</h2>
            <p className={`text-center  ${isDark? 'text-white-50' :'text-black-50'}`}>Discover our hand-picked selection of premium apartments</p>
            <div className="container">
                <div className="row mt-5">

                    <div className="col-md-4 my-4" data-aos="fade-up">
                        <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                            <img src={imgOne} className="img-fluid rounded-top-4" alt="House"/>
                            <div className="card-body p-4">
                                <h5 className="card-title mb-2">Modern Downtown Apartment $425,000</h5>
                                <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Central District</p>
                                <div className="d-flex justify-content-between">
                                <p><i className="fa-solid fa-bed"></i> 2 Beds </p>
                                <p><i className="fa-solid fa-bath"></i> 2 Baths </p>
                                <p><i className="fa-regular fa-square"></i> 1200 sqft </p>
                                </div>
                                <NavLink to="/listings"> <button className={`my-3 btn w-100 ' ${isDark?"btn-light":"btn-dark"}`}>View  Details</button> </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 my-4" data-aos="fade-up">
                        <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                            <img src={imgTwo} className="img-fluid rounded-top-4" alt="House"/>
                            <div className="card-body p-4">
                                <h5 className="card-title mb-2">Luxury Penthouse Suite $850,000</h5>
                                <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Riverside Area</p>
                                <div className="d-flex justify-content-between">
                                <p><i className="fa-solid fa-bed"></i> 3 Beds </p>
                                <p><i className="fa-solid fa-bath"></i> 2.5 Baths </p>
                                <p><i className="fa-regular fa-square"></i> 2000 sqft </p>
                                </div>
                                <NavLink to="/listings"> <button className={`my-3 btn w-100 ' ${isDark?"btn-light":"btn-dark"}`}> View Details</button> </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 my-4" data-aos="fade-up">
                        <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                            <img src={imgThree} className="img-fluid rounded-top-4" alt="House"/>
                            <div className="card-body p-4">
                                <h5 className="card-title mb-2">Cozy Studio Apartment $275,000</h5>
                                <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Riverside Area</p>
                                <div className="d-flex justify-content-between">
                                <p><i className="fa-solid fa-bed"></i> 1 Beds </p>
                                <p><i className="fa-solid fa-bath"></i> 1 Baths </p>
                                <p><i className="fa-regular fa-square"></i> 600 sqft </p>
                                </div>
                                <NavLink to="/listings"> <button className={`my-3 btn  w-100 ' ${isDark?"btn-light":"btn-dark"}`}> View Details</button> </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                <NavLink to="/listings"> <button className={`my-3 btn p-2 px-5 ' ${isDark?" btn-outline-secondary text-white":"btn-outline-dark "}`}> View Details</button> </NavLink>
                </div>

            </div>
        </div>
    </>
  )
}



