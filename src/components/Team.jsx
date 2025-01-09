import React, { Component } from 'react'

import img11 from'../img/photo-womanone1573496359142-b8d87734a5a2.avif'
import img22 from'../img/manooooo.avif'
import img33 from'../img/photo-womannnnnnnnnnnnnnnn1580489944761-15a19d654956.avif'

export default class Team extends Component {
  render() {
    let isDark = this.props.Mode;

    let Show = ()=>{

    }

    return (
      <>
        <div className={`team py-5 ${isDark? 'bg-black text-white' : 'bg-white'}`}>
          <div className="text-center mb-5">
            <h2>Our Team</h2>
            <p className={`${isDark?"text-white-50":"text-black-50"}`}> Meet the dedicated professionals who make finding your dream home possible.</p>
          </div>

          <div className="container-fluid">

            <div className="row mt-5">

              <div className="col-xl-3 col-sm-6 my-4"  data-aos="fade-up" >
                <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                  <img src={img11} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                  <div className="card-body p-4">
                    <h3 className="card-title mb-2">Sarah Johnson </h3>
                    <p>CEO & Founder</p>
                    <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> With over 15 years in real estate, Sarah leads our team with vision and expertise. She's passionate about helping families find their perfect homes.</p>
                    <div className=" p-3">
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-regular fa-envelope pe-2"></i> sarah.j@elitebrokerage.com </p>
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-solid fa-phone pe-2"></i>+1 (555) 123-4567 </p>
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-brands fa-linkedin pe-2"></i> LinkedIn Profile </p>
                  
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 my-4"  data-aos="fade-up" >
                <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                  <img src={img22} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                  <div className="card-body p-4">
                    <h3 className="card-title mb-2">Sarah Johnson </h3>
                    <p>CEO & Founder</p>
                    <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> With over 15 years in real estate, Sarah leads our team with vision and expertise. She's passionate about helping families find their perfect homes.</p>
                    <div className=" p-3">
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-regular fa-envelope pe-2"></i> sarah.j@elitebrokerage.com </p>
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-solid fa-phone pe-2"></i>+1 (555) 123-4567 </p>
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-brands fa-linkedin pe-2"></i> LinkedIn Profile </p>
                  
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-xl-3 col-sm-6 my-4"  data-aos="fade-up" >
                <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                  <img src={img33} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                  <div className="card-body p-4">
                    <h3 className="card-title mb-2">Sarah Johnson </h3>
                    <p>CEO & Founder</p>
                    <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> With over 15 years in real estate, Sarah leads our team with vision and expertise. She's passionate about helping families find their perfect homes.</p>
                    <div className=" p-3">
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-regular fa-envelope pe-2"></i> sarah.j@elitebrokerage.com </p>
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-solid fa-phone pe-2"></i>+1 (555) 123-4567 </p>
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-brands fa-linkedin pe-2"></i> LinkedIn Profile </p>
                  
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 my-4"  data-aos="fade-up" >
                <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                  <img src={img22} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                  <div className="card-body p-4">
                    <h3 className="card-title mb-2">Sarah Johnson </h3>
                    <p>CEO & Founder</p>
                    <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> With over 15 years in real estate, Sarah leads our team with vision and expertise. She's passionate about helping families find their perfect homes.</p>
                    <div className=" p-3">
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-regular fa-envelope pe-2"></i> sarah.j@elitebrokerage.com </p>
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-solid fa-phone pe-2"></i>+1 (555) 123-4567 </p>
                    <p className={`p-2 rounded-3 ${isDark?'hovdark' :'hovlight'}`}><i class="fa-brands fa-linkedin pe-2"></i> LinkedIn Profile </p>
                  
                    </div>
                  </div>
                </div>
              </div>

            </div> 

          </div>

          <div className={`certifications my-5 py-5 ${isDark? 'bg-dark text-white' : 'bg-white'}`}>
            <div className="text-center mb-5">
              <h2>Credentials & Certifications</h2>
              <p className={`${isDark?"text-white-50":"text-black-50"}`}> Our commitment to excellence is backed by industry-recognized credentials and certifications.</p>
            </div>

            <div className="container-fluid">
              <div className="row my-5">

                <div className="col-md-4 my-4"  data-aos="fade-up" >
                  <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
                  <i className={isDark?"fa-solid fa-award fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-award mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
                    <h4 className="mb-3">Licensed Real Estate Brokerage </h4>
                    <p className={isDark?"text-white-50":"text-black-50"}>Fully licensed and regulated by the State Real Estate Commission</p>
                  </div>
                </div>

                <div className="col-md-4 my-4"  data-aos="fade-up" >
                  <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
                  <i className={isDark?"fa-regular fa-star fs-4 mb-3 bgicon_boxdark rounded":"fa-regular fa-star mb-3 fs-4  bgicon_boxlight  bg-body-secondary rounded"}></i>
                    <h4 className="mb-3">National Association of Realtors® </h4>
                    <p className={isDark?"text-white-50":"text-black-50"}>Fully licensed and regulated by the State Real Estate Commission</p>
                  </div>
                </div>

                <div className="col-md-4 my-4"  data-aos="fade-up" >
                  <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
                  <i className={isDark?"fa-regular fa-circle-check fs-4 mb-3 bgicon_boxdark rounded":"fa-regular fa-circle-check mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
                    <h4 className="mb-3">Certified Residential Specialist (CRS) </h4>
                    <p className={isDark?"text-white-50":"text-black-50"}>Fully licensed and regulated by the State Real Estate Commission</p>
                  </div>
                </div>
              
              </div>
            </div>


            <div className={`py-5 ${isDark? 'bg-dark text-white' : 'bg-light'}`}>
              
            <div className="text-center mb-5">
              <h2>Credentials & Certifications</h2>
            </div>
            <div className="container-fluid">
              <div className="row my-3 justify-content-center">
                <div className="col-xl-6 col-md-8 col-10"  data-aos="fade-up" >
                  <div className={`items p-3 rounded-4 d-flex  align-items-center  justify-content-between   ${isDark? 'bg-black text-white' : 'bg-white border'}`}>
                    <div className="txts">
                      <h6>Real Estate License </h6>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>State Real Estate Commission</p>
                    </div>
                    <div className="txte">
                     <h5>2010 </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-3 justify-content-center">
                <div className="col-xl-6 col-md-8 col-10"  data-aos="fade-up" >
                  <div className={`items p-3 rounded-4 d-flex  align-items-center  justify-content-between   ${isDark? 'bg-black text-white' : 'bg-white border'}`}>
                    <div className="txts">
                      <h6>Real Estate License </h6>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>State Real Estate Commission</p>
                    </div>
                    <div className="txte">
                     <h5>2015 </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-3 justify-content-center">
                <div className="col-xl-6 col-md-8 col-10"  data-aos="fade-up" >
                  <div className={`items p-3 rounded-4 d-flex  align-items-center  justify-content-between   ${isDark? 'bg-black text-white' : 'bg-white border'}`}>
                    <div className="txts">
                      <h6>Real Estate License </h6>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>State Real Estate Commission</p>
                    </div>
                    <div className="txte">
                     <h5>2012 </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-3 justify-content-center">
                <div className="col-xl-6 col-md-8 col-10"  data-aos="fade-up" >
                  <div className={`items p-3 rounded-4 d-flex  align-items-center  justify-content-between   ${isDark? 'bg-black text-white' : 'bg-white border'}`}>
                    <div className="txts">
                      <h6>Real Estate License </h6>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>State Real Estate Commission</p>
                    </div>
                    <div className="txte">
                     <h5>2018 </h5>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            </div>



          </div>


          <div className="update">
            <div className="text-center my-5">
              <h2>Industry Experience</h2>
              <p className={`${isDark?"text-white-50":"text-black-50"}`}>Over a decade of excellence in real estate, serving thousands of satisfied clients.</p>
            </div>
            <div className="container-fluid">
              <div className="row d-flex justify-content-between">
                <div className="col-md-3 col-sm-6 my-5"  data-aos="fade-up" >
                        <div className="items text-center">
                          <i className={`fa-solid fa-house fs-3 mb-3 rounded-circle ${isDark? 'bgicon_boxdark':'bgicon_boxlight bg-body-secondary'}`}></i>
                          <h3 className='fw-bold'>1000+</h3>
                          <p className={`${isDark?"text-white-50":"text-black-50"}`}>Properties Sold
                          </p>
                        </div>
                </div>

                <div className="col-md-3 col-sm-6 my-5"  data-aos="fade-up" >
                    <div className="items text-center">
                      <i className={`fa-solid fa-user-group fs-3 mb-3 rounded-circle ${isDark? 'bgicon_boxdark':'bgicon_boxlight bg-body-secondary'}`}></i>
                      <h3 className='fw-bold'>5000+</h3>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Happy Clients </p>
                    </div>
                </div>


                <div className="col-md-3 col-sm-6 my-5"  data-aos="fade-up" >
                    <div className="items text-center">
                      <i className={`fa-solid fa-arrow-trend-up fs-3 mb-3 rounded-circle ${isDark? 'bgicon_boxdark':'bgicon_boxlight bg-body-secondary'}`}></i>
                      <h3 className='fw-bold'>$1B+</h3>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>in Sales Volume </p>
                    </div>
                </div>
      
                <div className="col-md-3 col-sm-6 my-5"  data-aos="fade-up" >
                    <div className="items text-center">
                      <i className={`fa-regular fa-clock fs-3 mb-3 rounded-circle ${isDark? 'bgicon_boxdark':'bgicon_boxlight bg-body-secondary'}`}></i>
                      <h3 className='fw-bold'>13+</h3>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Years Experience
                      </p>
                    </div>
                </div>
              </div>
            </div>
            
          </div>














          <div className={`certifications   ${isDark? 'bg-dark text-white' : 'bg-white'}`}>
         

         

            <div className={`py-5 ${isDark? 'bg-black text-white' : 'bg-white'}`}>
              
            <div className="text-center mb-5">
              <h2>Our Specialties</h2>
            </div>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="my-3  col-md-6 col-10">
                  <div className={`items p-3 rounded-4   ${isDark? 'bg-dark text-white' : ' shadow'}`}>
                    <div className="txt">
                      <h4>Luxury Apartments </h4>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Expertise in high-end residential properties with premium amenities.</p>
                    </div>
                   
                  </div>
                </div>
              {/* </div> */}

              {/* <div className="row my-3 justify-content-center"> */}
                <div className=" my-3 col-md-6 col-10">
                  <div className={`items p-3 rounded-4   ${isDark? 'bg-dark text-white' : ' shadow'}`}>
                    <div className="txts">
                      <h4>First-Time Buyers </h4>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Dedicated support for those entering the property market.</p>
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="my-3 col-md-6 col-10">
                  <div className={`items p-3 rounded-4   ${isDark? 'bg-dark text-white' : ' shadow'}`}>
                    <div className="txts">
                      <h4>Investment Properties </h4>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Strategic guidance for property investment opportunities.</p>
                    </div>
                  
                  </div>
                </div>
              {/* </div> */}

              {/* <div className="row my-3 justify-content-center"> */}
                <div className=" my-3 col-md-6 col-10">
                  <div className={`items p-3 rounded-4   ${isDark? 'bg-dark text-white' : ' shadow'}`}>
                    <div className="txts">
                      <h4>
                      Urban Living </h4>
                      <p className={`${isDark?"text-white-50":"text-black-50"}`}>Specialized knowledge of city center and metropolitan properties.</p>
                    </div>
               
                  </div>
                </div>
              </div>

            </div>

            </div>



          </div>




        </div>        
      </>
    )
  }
}
