import React from 'react';
import './Calculator.css';
import SelectProduct from './SelectProduct';
const Calculator = () => {
  return (
    <div className="calculator-wrapper">
      <h1 className="text-center">Price Calculator</h1>
      <div
        style={{
          backgroundColor: '#6EAD40',
          height: '5px',
          width: '150px',
          borderRadius: '5px',
          margin: '10px auto 20px',
        }}
      ></div>
      <SelectProduct></SelectProduct>
      <p className="text-center">
        You know how much it was worth when you bought it. How much is it worth
        now?
      </p>
      <hr />
      <div className="single-option">
        <span>How much did you pay for this item?</span>{' '}
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default Calculator;
