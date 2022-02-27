import React from 'react';
import Calculator from '../../components/Calculator/Calculator';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';

const CalculatorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Calculator></Calculator>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default CalculatorPage;
