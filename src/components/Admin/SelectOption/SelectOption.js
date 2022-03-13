import React from 'react';
import './SelectOption.css';
const SelectOption = (props) => {
  const { setShowCompo } = props;
  return (
    <div className="select-option-wrapper">
      <div className="select-menu">
        <button
          onClick={() => {
            setShowCompo('slider');
          }}
        >
          Slider
        </button>
        <button
          onClick={() => {
            setShowCompo('services');
          }}
        >
          Services
        </button>
        <button
          onClick={() => {
            setShowCompo('clients');
          }}
        >
          Clients
        </button>
        <button
          onClick={() => {
            setShowCompo('products');
          }}
        >
          Products
        </button>
        <button
          onClick={() => {
            setShowCompo('admins');
          }}
        >
          Admins
        </button>
        <button
          onClick={() => {
            setShowCompo('inbox');
          }}
        >
          Inbox
        </button>
        <button
          onClick={() => {
            setShowCompo('aboutUs');
          }}
        >
          ABOUT US
        </button>
      </div>
    </div>
  );
};

export default SelectOption;
