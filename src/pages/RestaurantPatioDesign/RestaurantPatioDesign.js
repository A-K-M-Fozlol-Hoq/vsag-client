import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import GoToButton from '../../components/utils/GoToButton/GoToButton';
import image from '../image/5.jpeg';
const RestaurantPatioDesign = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="p-5">
        <div className="container">
          <h1 className="text-center">Restaurant Patio Design</h1>
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
              Outside Patio Enclosures for Restaurants
            </i>
          </b>
          <p>
            {' '}
            To create a great dining experience and keep your tables full rain
            or shine, you need outside patio enclosures for restaurants. We will
            install patio enclosures to protect your guests from rain and wind
            and keep the indoor area warm and cool at all times.
          </p>
          <p>
            {' '}
            Your wait to create a perfect outdoor restaurant patio comes to an
            end at The Restaurant Patio. Whatever your need is, we are ready to
            serve you! Get in touch with us to uplift your restaurant décor.
          </p>
        </div>
        <GoToButton></GoToButton>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RestaurantPatioDesign;
