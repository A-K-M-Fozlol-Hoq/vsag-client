import React from 'react';
import start from './images/start.jpg';
import extend from './images/extend.jpg';
import top from './images/top.webp';
// need png
import './Slider.css';
const Slider = () => {
  return (
    <div className="slider-wrapper">
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide pink-bg"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1>Starting a New Restaurant?</h1>
                  <p>
                    Let our award-winning team of operators, chefs, and industry
                    experts develop a winning launch plan for your brand.
                  </p>
                  {/* <h1 className="price">$1200</h1> */}
                  <button className="buy-now-button btn btn-danger">
                    Learn more...
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={start} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1>Looking to Improve or Expand?</h1>
                  <p>
                    As no two restaurant concepts are the same, we specialize in
                    creating unique playbooks to drive long-term growth
                  </p>
                  {/* <h1 className="price">$420</h1> */}
                  <button className="buy-now-button btn btn-danger">
                    Learn more...
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={extend} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1>In Search of Top-Level Talent?</h1>
                  <p>
                    We work with the best in the business for all our recruiting
                    needs.
                  </p>
                  {/* <h1 className="price">$600</h1> */}
                  <button className="buy-now-button btn btn-danger">
                    Learn more...
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={top} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
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
            href="#carouselExampleControls"
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

export default Slider;
