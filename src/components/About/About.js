import React, { useEffect, useState } from 'react';
import './About.css';
import profile from './images/profile.png';
import two from './images/two.jpg';
const About = () => {
  const [founderData, setFounderData] = useState({});
  const [coFounderData, setCoFounderData] = useState({});
  const updateFOunderState = () => {
    fetch('https://therestaurantpatio.com/api/founder/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        
        setFounderData(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const updateCoFOunderState = () => {
    fetch('https://therestaurantpatio.com/api/coFounder/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        
        setCoFounderData(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    updateFOunderState();
    updateCoFOunderState();
  }, []);
  return (
    <div className="about-us-wrapper">
      <div style={{ padding: '50px' }}>
        <h1
          className="text-center"
          style={{ paddingTop: '20px', marginBottom: '-60px' }}
        >
          ABOUT US
        </h1>
        <h2 style={{ textAlign: 'center', marginTop: '80px' }}>
          We’re <span style={{ color: '#d61654' }}>therestaurantpatio</span>
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontWeight: '300',
            lineHeight: '25px',
            marginBottom: '25px',
          }}
        >
          We make the property rental journey simple for Landlords, Tenants and
          Vendors, by providing the <br />
          necessary tools and knowledge for them to complete the rental cycle
          seamlessly and efficiently.
        </p>
      </div>
      <div
        className="about-us"
        style={{
          background: 'linear-gradient(90deg, #286A2D, #6EAD40)',
          paddingBottom: '50px',
        }}
      >
        <h2
          style={{
            letterSpacing: '2px',
            textAlign: 'center',
            marginBottom: '-20px',
            paddingTop: '50px',
            color: 'white',
          }}
        >
          Meet Our <span style={{ color: '#d61654' }}>Founder</span>
        </h2>
        <div
          style={{
            backgroundColor: '#6EAD40',
            height: '5px',
            width: '150px',
            borderRadius: '5px',
            margin: '30px auto 50px',
          }}
        ></div>
        <div className="container text-white" style={{ marginTop: '80px' }}>
          <div className="row">
            <div className="col-md-6 text-center">
              {founderData.image?
                <img
                className="profile-image"
                src={`data:image/png;base64,${founderData.image?.img}`}
                alt="profile"
              />
              :
              <img
                className="profile-image"
                src={profile}
                alt="profile"
              />
              }
              <h3>{founderData.name}</h3>
              <p>founder, therestaurantpatio</p>
            </div>
            <div className="col-md-6" style={{ paddingTop: '5rem' }}>
              <p className="text-white">{founderData.description}</p>
            </div>
          </div>
          {/* <div className="row mt-5">
            <div className="col-md-6 mt-5">
              <p className="text-white">{coFounderData.description}</p>
            </div>
            <div className="col-md-6 text-center">
              <img
                className="profile-image"
                src={`data:image/png;base64,${coFounderData.image?.img}`}
                alt="profile"
              />
              <h3>{coFounderData.name}</h3>
              <p>Co Founder, therestaurantpatio</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
