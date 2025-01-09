import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Landing(props) {

  let isDark = props.Mode ;
  return (
    <>
    <div className="landing d-flex flex-column justify-content-center align-items-center">
      <div className="col-md-5 text-center">
        <h1 className="text-light  fw-bold"  data-aos="fade-up"  >Find Your Dream Apartment Today</h1>
        <p className="text-light fs-5 my-4"  data-aos="fade-up"  >Discover the perfect living space with our extensive collection of premium apartments.
          From cozy studios to luxurious penthouses, we have your ideal home waiting.
        </p>
            <button  data-aos="fade-up"  className={isDark?"btn btn-light mx-3 p-2 px-4":"btn btn-dark mx-3 p-2 px-4"}> Get Started </button>
            <button  data-aos="fade-up"  className={isDark?"text-light border border-dark btn mx-3 p-2 px-4":"text-light border border-light btn mx-3 p-2 px-4"}> Get Started </button>
      </div>

    </div>


    </>
  );
}


