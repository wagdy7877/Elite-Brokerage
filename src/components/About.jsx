import React, { Component } from 'react'

export default class About extends Component {
  
  
  render() {

    let isDark = this.props.Mode;

    return (
      <>
      <div className={`about py-5 ${isDark? 'bg-dark text-white' : 'bg-white'}`}>
        <div className="text-center mb-5">
        <h2>Our Mission</h2>
        <p className={` m-auto w-50  ${isDark?"text-white-50":"text-black-50"}`}> To empower individuals and families in their journey to find the perfect home through innovative solutions, exceptional service, and unwavering commitment to their success.</p>
        </div>
        <h2 className="text-center">Our Values</h2>

        <div className="container-fluid">
        <div className="row my-5">

          <div className="col-md-4 my-4">
            <div className={isDark?"items  box_dark text-white p-4  shadow rounded":"items box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-regular fa-heart fs-4 mb-3 bgicon_boxdark rounded":"fa-regular fa-heart mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3"> Client-Centric</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>We put our clients' needs first, ensuring personalized service that exceeds expectations.</p>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className={isDark?"items box_dark text-white p-4  shadow rounded":"items box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-record-vinyl fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-record-vinyl mb-3 fs-4  bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3"> Excellence</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>We strive for excellence in every interaction, transaction, and relationship.</p>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className={isDark?"items box_dark text-white p-4  shadow rounded":"items box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-user-group fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-user-group mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Community</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>We build lasting relationships within our community, fostering trust and collaboration.</p>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className={isDark?"items  box_dark text-white p-4  shadow rounded":"items box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-solid fa-shield fs-4 mb-3 bgicon_boxdark rounded":"fa-solid fa-shield mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Integrity</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>We maintain the highest standards of honesty and ethical conduct in all our dealings.</p>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className={isDark?"items  box_dark text-white p-4  shadow rounded":"items box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-regular fa-lightbulb fs-4 mb-3 bgicon_boxdark rounded":"fa-regular fa-lightbulb  mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Innovation</h4>
              <p className={isDark?"text-white-50":"text-black-50"}>We embrace new technologies and ideas to provide cutting-edge solutions.</p>
            </div>
          </div>
          
          <div className="col-md-4 my-4">
            <div className={isDark?"items box_dark text-white p-4  shadow rounded":"items box_light p-4 shadow-sm rounded "}>
            <i className={isDark?"fa-regular fa-gem fs-4 mb-3 bgicon_boxdark rounded":"fa-regular fa-gem mb-3 fs-4 bgicon_boxlight  bg-body-secondary rounded"}></i>
              <h4 className="mb-3">Quality </h4>
              <p className={isDark?"text-white-50":"text-black-50"}>We deliver premium service and maintain exceptional standards in everything we do.</p>
            </div>
          </div>
        
        </div>
      </div>

      </div>
      </>
    )
  }
}
