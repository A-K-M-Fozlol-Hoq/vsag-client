import React from 'react';
import ConsultingServices from '../../components/Home/ConsultingServices/ConsultingServices';
import OurClients from '../../components/Home/OurClients/OurClients';
import Services from '../../components/Home/Services/Services';
import Slider from '../../components/Home/Slider/Slider';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';

const Home = () => {
  // style={{ backgroundImage: 'linear-gradient(45deg,#286A2D,#6EAD40)' }}
  return (
    <div>
      <NavBar></NavBar>
      <Slider></Slider>
      <div
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: '35px',
          padding: '30px 0',
          background: '#6EAD40',
        }}
      >
        We Are Restaurant and Hospitality Consulting Experts.
        <div className="learn-more">Learn more.</div>
      </div>
      <Services></Services>
      <ConsultingServices></ConsultingServices>
      <OurClients></OurClients>
      <Footer></Footer>
    </div>
  );
};

export default Home;
