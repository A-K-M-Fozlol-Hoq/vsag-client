import React from 'react';
import NavBar from '../../components/Shared/NavBar/NavBar';
import Footer from '../../components/Shared/Footer/Footer';
import About from '../../components/About/About';
import Helmet from 'react-helmet';
const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>therestaurantpatio</title>
        <meta
          name="description"
          content="We make the property rental journey simple for Landlords, Tenants and Vendors, by providing the
necessary tools and knowledge for them to complete the rental cycle seamlessly and efficiently."
        />
        <meta
          name="keywords"
          content="therestaurantpatio, restaurantpatio, restaurant patio, the restaurant patio"
        />
      </Helmet>
      <NavBar></NavBar>
      <About></About>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default AboutPage;
