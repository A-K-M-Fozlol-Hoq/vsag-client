import React from 'react';
import './SelectOption.css';
const SelectOption = (props) => {
  const { setShowCompo } = props;
  return (
    <div className="select-option-wrapper">
      <div className="select-menu">
        <p
          onClick={() => {
            setShowCompo('slider');
          }}
        >
          Slider
        </p>
        <p
          onClick={() => {
            setShowCompo('services');
          }}
        >
          Services
        </p>
        <p
          onClick={() => {
            setShowCompo('clients');
          }}
        >
          Clients
        </p>
        <p
          onClick={() => {
            setShowCompo('products');
          }}
        >
          Products
        </p>
        <p
          onClick={() => {
            setShowCompo('admins');
          }}
        >
          Admins
        </p>
      </div>
    </div>
  );
};

export default SelectOption;
