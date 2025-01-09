import React , {  useEffect  }  from 'react'

import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الأنماط

export default function Services(props) {
  let isDark = props.Mode ;

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة التأثير (اختياري)
      once: true, // تحديد ما إذا كان التأثير سيعمل مرة واحدة فقط (اختياري)
    });
  }, []);

  return (
    <>
    <div className={isDark?"services bg-black py-5":"services bg-white py-5"}>
      <h2 className={isDark?"text-center text-white my-3":"text-center text-black my-3"}>Our Services</h2>
      <p className={isDark?"text-center text-white-50 ":"text-center text-black-50"}>Comprehensive support throughout your apartment buying journey</p>
      <div className="container-fluid">
        <div className="row my-5">

          <div className="col-md-4 my-4 " data-aos="fade-up" > 
            <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-magnifying-glass fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-magnifying-glass mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Property Search</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>Access our extensive database of apartments with advanced filters to find your perfect match</p>
            </div>
          </div>

          <div className="col-md-4 my-4" data-aos="fade-up" >
            <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-house fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-house mb-3 fs-4  bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Virtual Tours</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>Take virtual tours of apartments from the comfort of your home before scheduling in-person visits</p>
            </div>
          </div>

          <div className="col-md-4 my-4" data-aos="fade-up">
            <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-calculator fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-calculator mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Mortgage Calculator</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>Calculate your monthly payments and explore financing options with our easy-to-use tools</p>
            </div>
          </div>

          <div className="col-md-4 my-4" data-aos="fade-up">
            <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-headset fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-headset mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">24/7 Support</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>Our dedicated team is always available to answer your questions and provide guidance</p>
            </div>
          </div>

          <div className="col-md-4 my-4" data-aos="fade-up">
            <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-file-arrow-up fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-file-arrow-up  mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Document Assistance</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>Get expert help with all paperwork and legal documents required for your purchase</p>
            </div>
          </div>

          <div className="col-md-4 my-4" data-aos="fade-up">
            <div className={isDark?"items text-center box_dark text-white p-4  shadow rounded":"items text-center box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-key fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-key mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Move-in Support</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>Seamless support from purchase completion to getting the keys to your new home</p>
            </div>
          </div>


        
        
        </div>
      </div>


    </div>


      
    </>
  )
}
