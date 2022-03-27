import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import GoToButton from '../../components/utils/GoToButton/GoToButton';
import image from '../image/2.jpeg';
const OutdoorFurniture = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="p-5">
        <div className="container">
          <h1 className="text-center">Outdoor Furniture</h1>
          <div
            style={{
              height: '5px',
              width: '150px',
              borderRadius: '5px',
              margin: '0 auto 0',
              background: 'green',
            }}
          ></div>
          <img
            className="my-5"
            style={{ width: '100%', borderRadius: '20px' }}
            src={image}
            alt="PatioHeating"
          />
          <b className="text-center mb-3">
            <i className="text-center">
              Outdoor Furniture for Restaurants in Denver Colorado
            </i>
          </b>
          <p>
            Choose attractive and durable outdoor patio furniture for your
            restaurant to turn your outdoor space into a designer oasis. We will
            install high-quality outdoor furniture that will withstand harsh
            weather conditions like rain, snow, and wind. So, what are you
            waiting for! Let’s spruce up your unused outdoor area by installing
            designer outdoor furniture into your restaurant décor.
          </p>
        </div>
        <GoToButton></GoToButton>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OutdoorFurniture;
