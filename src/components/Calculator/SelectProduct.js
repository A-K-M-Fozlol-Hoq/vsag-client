import React from 'react';
import one from './images/start.jpg';
import two from './images/extend.jpg';
import three from './images/top.webp';
import './SelectProduct.css';
const SelectProduct = () => {
  return (
    <div className="select-product-wrapper">
      {/* <img src={one} alt="" />
      <img src={two} alt="" />
      <img src={three} alt="" /> */}
      <div className="container">
        <div className="card-group">
          <div className="card">
            <p className="text-center pt-1 product-name">Product name</p>
            <img src={one} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="btn btn-select">Select</div>
            </div>
          </div>
          <div className="card">
            <p className="text-center pt-1 product-name">Product name</p>
            <img src={two} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="btn btn-select">Select</div>
            </div>
          </div>
          <div className="card">
            <p className="text-center pt-1 product-name">Product name</p>
            <img src={three} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="btn btn-select">Select</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProduct;
