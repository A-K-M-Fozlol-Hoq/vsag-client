import React from 'react';
import one from './images/one.jpg';
import two from './images/two.jpg';
import three from './images/three.jpg';
import './Service.css';
const Services = () => {
  return (
    <div className="service-wrapper">
      <div className="container" id="backpack">
        <div className="card-group">
          <div className="card">
            <img src={one} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Red Laltu</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={two} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Blur Niltu</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={three} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Black Kaltue</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
