import React from 'react';
import NavBar from '../../components/Shared/NavBar/NavBar';
import Footer from '../../components/Shared/Footer/Footer';
import About from '../../components/About/About';
const AboutPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <About></About>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default AboutPage;
