import React from 'react';
import './Calculator.css';
import SelectProduct from './SelectProduct';
import one from './images/start.jpg';
import CalculatorModal from './CalculatorModal';
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
      {false ? (
        <SelectProduct></SelectProduct>
      ) : (
        <>
          <img className="selected-image" src={one} alt="" />
          <p className="text-center">
            You know how much it was worth when you bought it. How much is it
            worth now?
          </p>
          <hr />
          <div className="all-options">
            <div className="single-option">
              <span>Select your preferred material</span>{' '}
              <select class="form-select" aria-label="Default select example">
                <option value="wood">wood</option>
                <option value="plastic">plastic</option>
                <option value="glass">glass</option>
                <option value="plywood">plywood</option>
              </select>
            </div>
            <div className="single-option">
              <span>Select your preferred color</span>{' '}
              <select class="form-select" aria-label="Default select example">
                <option value="black">black</option>
                <option value="brows">brows</option>
                <option value="white">white</option>
              </select>
            </div>
            <div className="single-option">
              <span>Select your preferred shade type</span>{' '}
              <select class="form-select" aria-label="Default select example">
                <option value="roller">Roller Shades</option>
                <option value="solar">Solar Shades</option>
                <option value="cellular">Cellular Shades</option>
              </select>
            </div>
            <button
              className="btn btn-primary search-button"
              style={{ height: '50px', width: '150px' }}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Next
            </button>
          </div>
          <CalculatorModal></CalculatorModal>
        </>
      )}
    </div>
  );
};

export default Calculator;
