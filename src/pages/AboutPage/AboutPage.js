import React from 'react';
import NavBar from '../../components/Shared/NavBar/NavBar';
import Footer from '../../components/Shared/Footer/Footer';

const AboutPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default AboutPage;
