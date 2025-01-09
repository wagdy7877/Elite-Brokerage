import React, { Component } from 'react'

export default class Request extends Component {
  render() {
    let isDark=this.props.Mode

    return (
      <>
      <div className={`request  py-5 ${isDark? 'bg-black text-white' : 'bg-white'}`}>
        <div className="container">
            <div className="text-center">
              <h2>Request Our Services</h2>
              <p className={`${isDark?"text-white-50":"text-black-50"}`} >Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            <form>
                <div className="row container justify-content-center">
                    <div   className={` col-lg-7 col-md-10  my-5 p-4 shadow rounded-3  ${isDark? 'bg-dark text-white' : ''}`}>
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="items">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control mt-2 mb-3" placeholder="Name" id='name' required/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="items">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' className="form-control mt-2 mb-3" placeholder="your@email.com" required/>
                                </div>
                            </div> 

                        </div>

                        <div className="row">

                            <div className="col-sm-6">
                                <div className="items">
                                    <label htmlFor="Phone">Phone</label>
                                    <input type="tel" className="form-control mt-2 mb-3" placeholder="Your Phone Number" id='Phone' required/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="items">
                                    <label htmlFor="email">Service Type</label>
                                    <select className="form-select mt-2" aria-label="Default select example">
                                    <option disabled hidden selected>Select a services </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div> 

                        </div>

                        <div className="row">

                            <div className="col-12">
                                <div className="items">
                                    <label htmlFor="email">Budget Range </label>
                                    <select className="form-select mt-2 mb-3" aria-label="Default select example">
                                        <option disabled hidden selected>Select your budget range </option>
                                        <option value="1">$100,000 - $300,000</option>
                                        <option value="2">$300,000 - $500,000 </option>
                                        <option value="3">$500,000 - $1,000,000</option>
                                    </select>
                                </div>
                            </div> 

                        </div>

                        <div className="row">                        

                            <div className="col-12">
                                <div className="items">
                                <label htmlFor="email">Budget Range </label>
                                <textarea  className="form-control p-2 mt-2 mb-3" rows="5" name="message" placeholder='Your Message'/>
                                </div>
                            </div> 

                        </div>
                        <button className={`btn form-control p-2 my-4 ' ${isDark?"btn-light ":" btn-dark "}`}>Submit Request  </button>


                    </div>
                </div>
            </form>
   
        </div>
      </div>
      </>
    )
  }
}
