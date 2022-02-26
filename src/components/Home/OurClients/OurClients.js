import React from 'react';
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import four from './images/four.png';
import five from './images/five.png';
import six from './images/six.png';
import './OurClients.css';
const OurClients = () => {
  return (
    <div className="our-clients-wrapper">
      <div className="container">
        <h1 className="text-center pt-5 pb-2">OUR CLIENTS</h1>
        <div
          style={{
            backgroundColor: '#6EAD40',
            height: '5px',
            width: '150px',
            borderRadius: '5px',
            margin: '0 auto 50px',
          }}
        ></div>
        <div
          id="carouselExampleControls2"
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={one} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6">
                  <img src={two} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={three} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6">
                  <img src={four} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={five} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6">
                  <img src={six} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls2"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls2"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
