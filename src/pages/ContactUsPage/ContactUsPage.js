import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import ContactUs from '../../components/ContactUs/ContactUs';
import Helmet from 'react-helmet';

const ContactUsPage = () => {
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
      <ContactUs></ContactUs>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default ContactUsPage;
