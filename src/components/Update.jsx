import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Update(props) {
    let isDark = props.Mode;
  return (
    <>
     <div className={`update pt-5 ${isDark? 'bg-black text-white' : 'bg-white'}`}>
        <div className="container-fluid">
            <div className="row d-flex justify-content-between">

                <div className="col-md-3 col-sm-6 my-5">
                    <div className="items text-center">
                      <i className={`fa-solid fa-arrow-trend-up fs-3 mb-3 rounded-circle ${isDark? 'bgicon_boxdark':'bgicon_boxlight bg-body-secondary'}`}></i>
                      <h3 className='fw-bold'>500+</h3>
                      <p>Successful Deals</p>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Transactions completed</p>
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6 my-5">
                    <div className="items text-center">
                      <i className={`fa-solid fa-house fs-3 mb-3 rounded-circle ${isDark? 'bgicon_boxdark':'bgicon_boxlight bg-body-secondary'}`}></i>
                      <h3 className='fw-bold'>25+</h3>
                      <p>Years Experience</p>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Transactions completed</p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 my-5">
                    <div className="items text-center">
                      <i className={`fa-solid fa-user-group fs-3 mb-3 rounded-circle ${isDark? 'bgicon_boxdark':'bgicon_boxlight bg-body-secondary'}`}></i>
                      <h3 className='fw-bold'>1000+</h3>
                      <p>Successful Deals</p>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Transactions completed</p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 my-5">
                    <div className="items text-center">
                      <i className={`fa-solid fa-award fs-3 mb-3 rounded-circle ${isDark? 'bgicon_boxdark':'bgicon_boxlight bg-body-secondary'}`}></i>
                      <h3 className='fw-bold'>15+</h3>
                      <p>Successful Deals</p>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Transactions completed</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="stay mt-5 ">
            <div className="row">
                <div  className={`m-auto p-5 col-md-6 col-sm-8 text-center ${isDark? 'bg-dark text-white' : 'bg-light'}`}  data-aos="fade-up" >
                    <h2 className='fw-bold'>Stay Updated</h2>
                    <p className={`my-4 fs-5 ${isDark?"text-white-50":"text-black-50"}`}>Subscribe to our newsletter for the latest market insights and exclusive opportunities</p>
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-8 my-2"  data-aos="fade-up" >
                            <input  className={`form-control p-2 ${isDark?" bg-black border border-secondary inp_black":"inp_light"}`} type="email" name="email" placeholder='Enter your email'/>
                        </div>
                        <div className="col-sm-4 my-2"  data-aos="fade-up" >

                            <button className={`btn form-control p-2 ' ${isDark?" btn-light text-black":"btn-dark "}`}>Subscribe </button>
                        </div>

                        </div>

                    </div>

                </div>
                <hr />
            </div>
        </div>
     </div>
    </>
  )
}
