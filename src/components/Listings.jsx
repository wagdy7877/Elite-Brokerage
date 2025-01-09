import React from 'react'

import imgOne from'../img/photo-1545324418-cc1a3fa10c00.webp'
import imgOnee from'../img/photo-onee1484154218962-a197022b5858.webp'
import imgOneee from'../img/photo-oneee1502005229762-cf1b2da7c5d6.webp'
import imgWoman from'../img/photo-woman1494790108377-be9c29b29330.webp'

import imgTwo from'../img/photo-1222512918728675-ed5a9ecdebfd.webp'
import imgThree from'../img/photo-1533333333336376072261-38c75010e6c9.webp'


export default function Listings(props) {
  let isDark = props.Mode ;
  
  let Show = ()=>{
    document.getElementById('box').style.display ="block"

  }



  let Hide = ()=>{
    document.getElementById('box').style.display ="none"
  }



return (
  <>
      <div  className={`p-5 Listings ${isDark? 'bg-black text-white' : 'bg-white '}`}>
        <h2 className='text-center '>Featured Apartments</h2>
        <p className={`text-center  ${isDark? 'text-white-50' :'text-black-50'}`}>Discover our hand-picked selection of premium apartments</p>
        <div className="container ">
          <div className="row mt-5">
            
            <div className="col-md-4 my-4" data-aos="fade-up">
              <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                <img src={imgOne} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                <div className="card-body p-4">
                  <h5 className="card-title mb-2">Modern Downtown Apartment $425,000</h5>
                  <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Central District</p>
                  <div className="d-flex justify-content-between">
                  <p><i className="fa-solid fa-bed"></i> 2 Beds </p>
                  <p><i className="fa-solid fa-bath"></i> 2 Baths </p>
                  <p><i className="fa-regular fa-square"></i> 1200 sqft </p>
                  </div>
                  <button onClick={Show} className={`my-3 btn w-100 ' ${isDark?"btn-light":"btn-dark"}`}>View Details <i className="fa-solid fa-arrow-right ms-2"></i></button> 
                </div>
              </div>
            </div>

            <div className="col-md-4 my-4" data-aos="fade-up">
              <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                <img src={imgOnee} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                <div className="card-body p-4">
                  <h5 className="card-title mb-2">Modern Downtown Apartment $425,000</h5>
                  <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Central District</p>
                  <div className="d-flex justify-content-between">
                  <p><i className="fa-solid fa-bed"></i> 2 Beds </p>
                  <p><i className="fa-solid fa-bath"></i> 2 Baths </p>
                  <p><i className="fa-regular fa-square"></i> 1200 sqft </p>
                  </div>
                  <button onClick={Show} className={`my-3 btn w-100 ' ${isDark?"btn-light":"btn-dark"}`}>View Details <i className="fa-solid fa-arrow-right ms-2"></i></button> 
                </div>
              </div>
            </div>

            <div className="col-md-4 my-4" data-aos="fade-up">
              <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                <img src={imgOneee} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                <div className="card-body p-4">
                  <h5 className="card-title mb-2">Modern Downtown Apartment $425,000</h5>
                  <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Central District</p>
                  <div className="d-flex justify-content-between">
                  <p><i className="fa-solid fa-bed"></i> 2 Beds </p>
                  <p><i className="fa-solid fa-bath"></i> 2 Baths </p>
                  <p><i className="fa-regular fa-square"></i> 1200 sqft </p>
                  </div>
                  <button onClick={Show} className={`my-3 btn w-100 ' ${isDark?"btn-light":"btn-dark"}`}>View Details <i className="fa-solid fa-arrow-right ms-2"></i></button> 
                </div>
              </div>
            </div>

            <div className="col-md-4 my-4" data-aos="fade-up">
              <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                <img src={imgOneee} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                <div className="card-body p-4">
                  <h5 className="card-title mb-2">Modern Downtown Apartment $425,000</h5>
                  <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Central District</p>
                  <div className="d-flex justify-content-between">
                  <p><i className="fa-solid fa-bed"></i> 2 Beds </p>
                  <p><i className="fa-solid fa-bath"></i> 2 Baths </p>
                  <p><i className="fa-regular fa-square"></i> 1200 sqft </p>
                  </div>
                  <button onClick={Show} className={`my-3 btn w-100 ' ${isDark?"btn-light":"btn-dark"}`}>View Details <i className="fa-solid fa-arrow-right ms-2"></i></button> 
                </div>
              </div>
            </div>

            <div className="col-md-4 my-4" data-aos="fade-up">
              <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                <img src={imgOnee} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                <div className="card-body p-4">
                  <h5 className="card-title mb-2">Modern Downtown Apartment $425,000</h5>
                  <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Central District</p>
                  <div className="d-flex justify-content-between">
                  <p><i className="fa-solid fa-bed"></i> 2 Beds </p>
                  <p><i className="fa-solid fa-bath"></i> 2 Baths </p>
                  <p><i className="fa-regular fa-square"></i> 1200 sqft </p>
                  </div>
                  <button onClick={Show} className={`my-3 btn w-100 ' ${isDark?"btn-light":"btn-dark"}`}>View Details <i className="fa-solid fa-arrow-right ms-2"></i></button> 
                </div>
              </div>
            </div>

            <div className="col-md-4 my-4" data-aos="fade-up">
              <div className={`items border border-2 rounded-4 ${isDark?' bg-dark border-0' :'border-light-subtle shadow'}`}>
                <img src={imgOne} onClick={Show} className="img-fluid rounded-top-4" alt="House"/>
                <div className="card-body p-4">
                  <h5 className="card-title mb-2">Modern Downtown Apartment $425,000</h5>
                  <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> Central District</p>
                  <div className="d-flex justify-content-between">
                  <p><i className="fa-solid fa-bed"></i> 2 Beds </p>
                  <p><i className="fa-solid fa-bath"></i> 2 Baths </p>
                  <p><i className="fa-regular fa-square"></i> 1200 sqft </p>
                  </div>
                  <button onClick={Show} className={`my-3 btn w-100 ' ${isDark?"btn-light":"btn-dark"}`}>View Details <i className="fa-solid fa-arrow-right ms-2"></i></button> 
                </div>
              </div>
            </div>

          </div>            
        </div>

        <div className='row justify-content-center container' >
          <div   className={`box position-fixed rounded-3  col-md-8 col-10  ' ${isDark? 'bg-dark text-white border  border-secondary ' : 'bg-light shadow'}`} id='box'>
            <div className="container ">
            <div className={`text-end mt-4 close_icon ${isDark? 'text-white-50 close_icond' :'text-black-50 close_iconl'}`}>
            <i onClick={Hide} className="fa-solid fa-circle-xmark fs-4"></i>
            </div>
            <h4>Modern Downtown Apartment</h4>

            <div id="carouselExample" className="carousel slide my-3">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imgOne} className=" img-fluid d-block w-100 rounded-3" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={imgOnee} className=" img-fluid d-block w-100 rounded-3"  alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={imgOneee} className=" img-fluid d-block w-100 rounded-3"  alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <div className="p-1 bg-dark rounded-circle d-flex justify-content-center align-items-center">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </div>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <div className="p-1 bg-dark rounded-circle d-flex justify-content-center align-items-center">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </div>
                <span className="visually-hidden ">Next</span>
              </button>
            </div>
          
           <div className="row my-5">
            <div className="col-sm-8 " data-aos="fade-up">
              <h4 className='fw-bold'>$750,000</h4>
              <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}> <i className="fa-solid fa-location-dot"></i> 123 Downtown Ave, City Center </p>
              <div className="my-4 d-flex justify-content-evenly align-items-center pt-3 text-center bg-black rounded-3">
                <p className='text-light'><i className="fa-solid fa-bed"></i><br /> 4 Beds </p>
                <p className='text-light'><i className="fa-solid fa-bath"></i> <br /> 3 Baths </p>
                <p className='text-light'><i className="fa-regular fa-square"></i><br /> 1500 sqft </p>
                <p className='text-light'><i className="fa-solid fa-calendar-days"></i><br /> Built 2020 </p>
              </div>
              <h4>Description</h4>
              <p className= {`card-text ${isDark? 'text-white-50' :'text-black-50'}`}>Beautiful family home in a quiet suburban neighborhood. Features an open floor plan, gourmet kitchen, and large backyard.</p>
              <h4>Features</h4>
              <div className="row">
                <div className="col-6" data-aos="fade-up">
                  <ul className= {`${isDark? 'text-white-50' :'text-black-50'}`}>
                    <li >Open floor plan</li>
                    <li >OLarge backyard</li>
                    <li >Walk-in closets  </li>
                    <li >Smart home features  </li>
                  </ul>
                </div>
                <div className="col-6" data-aos="fade-up">
                  <ul className= {`${isDark? 'text-white-50' :'text-black-50'}`}>
                    <li >Gourmet kitchen  </li>
                    <li >Master suite  </li>
                    <li >Two-car garage  </li>
                    <li > Energy efficient  </li>
                  </ul>
                </div>
                
              </div>
            

  
            </div>
            <div className="col-sm-4 " data-aos="fade-up">

              <div className={`rounded p-3 ' ${isDark? 'bg-dark text-white border  border-secondary ' : 'bg-white border '}`}>
                <div className="d-flex">
                  <img src={imgWoman} className='rounded-circle me-3' style={{width:50 ,height:70 }} alt="imgClient" />
                  <div className="d-flex flex-column justify-content-center">
                    <h5>Sarah Johnson</h5>
                    <p className={`  ${isDark?"text-white-50":"text-black-50"}`}>CEO, Tech Innovations Inc.</p>
                  </div>
              </div>
              <button className={`btn form-control p-2 my-3 ' ${isDark?" btn-light text-black":"btn-dark "}`}><i className="fa-solid fa-phone me-1"></i> (555) 123-4567 </button>
              <button className={`btn form-control p-2 ' ${isDark?"btn-dark bg-black ":" btn-light text-black border"}`}><i className="fa-regular fa-envelope me-1"></i>  Contact Agent </button>
            </div>
            <h5 className='my-4'>Similar Properties</h5>

            <div className="row align-items-center my-4 Similar p-2 rounded-3">
              <div className="col-6" data-aos="fade-up">
                  <img src={imgOnee} style={{width:"70px" ,height:"70px"}} className="w-100 img-fluid rounded-3"  alt="..."/>
              </div>
              <div className="col-6" data-aos="fade-up">
                <p >Luxury Penthouse </p>
                <p>$1,200,000</p>
              </div>
            </div>
        
           
        
            <div className="row align-items-center my-4 Similar p-2 rounded-3">
              <div className="col-6" data-aos="fade-up">
                  <img src={imgOneee} style={{width:"70px",height:"70px"}} className="w-100 img-fluid rounded-3"  alt="..."/>
              </div>
              <div className="col-6" data-aos="fade-up">
                <p > Downtown Loft  </p>
                <p>    $680,000</p>
              </div>
            </div>

            <div className="row align-items-center my-4 Similar p-2 rounded-3">
              <div className="col-6" data-aos="fade-up">
                  <img src={imgOne} style={{width:"70px",height:"70px"}} className="w-100 img-fluid rounded-3"  alt="..."/>
              </div>
              <div className="col-6" data-aos="fade-up">
                <p > Downtown Loft  </p>
                <p>    $680,000</p>
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