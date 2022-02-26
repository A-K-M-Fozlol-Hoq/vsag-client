import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import ContactUs from '../../components/ContactUs/ContactUs';

const ContactUsPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ContactUs></ContactUs>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default ContactUsPage;
