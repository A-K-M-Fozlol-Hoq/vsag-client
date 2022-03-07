import React, { useState, useEffect } from 'react';
import start from './images/start.jpg';
import extend from './images/extend.jpg';
import top from './images/top.webp';
// need png
import './Slider.css';
const Slider = () => {
  // src={`data:image/png;base64,${service.image.img}`}
  const [slides, setSlides] = useState([]);
  const updateLogosState = () => {
    fetch('http://localhost:4000/slide/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSlides(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    updateLogosState();
  }, []);
  return (
    <div className="slider-wrapper">
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide pink-bg"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, i) => (
              <div
                className={`carousel-item ${i === 0 ? 'active' : ''} `}
                key={slide._id}
              >
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <button className="buy-now-button btn btn-danger">
                      Learn more...
                    </button>
                  </div>
                  <div className="col-md-5">
                    <img
                      src={`data:image/png;base64,${slide.image.img}`}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1>Starting a New Restaurant?</h1>
                  <p>
                    Let our award-winning team of operators, chefs, and industry
                    experts develop a winning launch plan for your brand.
                  </p>
                  <button className="buy-now-button btn btn-danger">
                    Learn more...
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={start} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div> */}
            {/* <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1>Looking to Improve or Expand?</h1>
                  <p>
                    As no two restaurant concepts are the same, we specialize in
                    creating unique playbooks to drive long-term growth
                  </p>
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
                  <button className="buy-now-button btn btn-danger">
                    Learn more...
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={top} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div> */}
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
