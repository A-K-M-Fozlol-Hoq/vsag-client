import React, { useState, useEffect } from 'react';
// need png
import './Slider.css';
const Slider = () => {
  // src={`data:image/png;base64,${service.image.img}`}
  const [slides, setSlides] = useState([]);
  const [status, setStatus] = useState('loading');
  const updateLogosState = () => {
    fetch('https://therestaurantpatio.com/api/slide/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus('loaded');
        setSlides(data);
      })
      .catch((error) => {
        setStatus('loaded');
        console.error(error);
      });
  };
  useEffect(() => {
    updateLogosState();
  }, []);
  return (
    <>
      {status === 'loading' ? (
        <>
          <div
            className="spinner-border text-success"
            style={{
              marginLeft: '48%',
              marginTop: '50px',
              marginBottom: '50px',
            }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </>
      ) : (
        <div
          className="slider-wrapper"
          style={{
            display: 'grid',
            gridTemplateColumn: '30px 1fr 30px',
          }}
        >
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
            style={{
              marginTop: '90px',
            }}
          >
            <span
              style={{
                color: 'green',
                backgroundColor: '#6ead40',
                borderRadius: '5px',
                marginTop: '-190px',
              }}
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
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
                        <button
                          className="see-more-button btn btn-danger"
                          onClick={() => window.location.replace('calculator')}
                        >
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
              </div>
            </div>
          </div>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
            style={{
              marginTop: '90px',
            }}
          >
            <span
              style={{
                color: 'green',
                backgroundColor: '#6ead40',
                borderRadius: '5px',
                marginTop: '-190px',
              }}
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      )}
    </>
  );
};

export default Slider;
