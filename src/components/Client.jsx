import React from 'react'
import imgWoman from'../img/photo-woman1494790108377-be9c29b29330.webp'
import imgWomanTwo from'../img/photo-woman2221438761681033-6461ffad8d80.webp'
import imgMan from'../img/photo-man1472099645785-5658abf4ff4e.webp'

export default function Client(props) {
    let isDark = props.Mode ;
  return (
    <>
    <div className={`client pt-5 ${isDark?"bg-dark":"bg-light"}`}>
        <div className="txt text-center">
            <h1 className={` ${isDark?"text-white":"text-black"}`}>Client Testimonials</h1>
            <p className={`  ${isDark?"text-white-50":"text-black-50"}`}>Hear what our clients have to say about their experience working with us</p>
        </div>
        <div className="container-fluid py-5">
            <div className="row ">
                
                <div className="col-md-4 mt-4" data-aos="fade-up">
                    <div  className={`items rounded-4 p-4 d-flex flex-column justify-content-around  ${isDark?"bg-black text-white":"bg-white text-black"}`}>
                    <i className="fa-solid fa-quote-right fs-1" ></i>
                    <p className={`${isDark?"text-white-50":"text-black-50"}`}>"Working with Elite Brokerage was a game-changer for our business acquisition.
                         Their expertise and guidance were invaluable."</p>
                    <div className="d-flex">
                        <img src={imgWoman} className='rounded-circle me-3' style={{width:50 ,height:50 }} alt="imgClient" />
                        <div className="d-flex flex-column justify-content-center">
                            <h5>Sarah Johnson</h5>
                            <p className={`  ${isDark?"text-white-50":"text-black-50"}`}>CEO, Tech Innovations Inc.</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-4 mt-4" data-aos="fade-up">
                    <div  className={`items rounded-4 p-4 d-flex flex-column justify-content-around ${isDark?"bg-black text-white":"bg-white text-black"}`}>
                    <i className="fa-solid fa-quote-right fs-1" ></i>
                    <p className={` ${isDark?"text-white-50":"text-black-50"}`}>"The team's professionalism and market knowledge helped us secure the perfect location for our expansion."</p><br/>
                    <div className="d-flex">
                        <img src={imgMan} className='rounded-circle me-3' style={{width:50 ,height:50 }} alt="imgClient" />
                        <div className="d-flex flex-column justify-content-center">
                            <h5>Michael Chen</h5>
                            <p className={`  ${isDark?"text-white-50":"text-black-50"}`}>Founder, GrowthWorks</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-4 mt-4" data-aos="fade-up">
                    <div  className={`items rounded-4 p-4 d-flex flex-column justify-content-around ${isDark?"bg-black text-white":"bg-white text-black"}`}>
                    <i className="fa-solid fa-quote-right fs-1" ></i>
                    <p className={` ${isDark?"text-white-50":"text-black-50"}`}>"Their attention to detail and commitment to our success made all the difference in our business sale."</p><br/>
                    <div className="d-flex">
                        <img src={imgWomanTwo} className='rounded-circle me-3' style={{width:50 ,height:50 }} alt="imgClient" />
                        <div className="d-flex flex-column justify-content-center">
                            <h5>Emily Rodriguez</h5>
                            <p className={`  ${isDark?"text-white-50":"text-black-50"}`}>Former Owner, Retail Solutions</p>
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
