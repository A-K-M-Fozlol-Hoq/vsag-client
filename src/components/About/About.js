import React from 'react';
import './About.css';
import one from './images/one.jfif';
import two from './images/two.jpg';
const About = () => {
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
          Meet Our <span style={{ color: '#d61654' }}>Leadership</span>
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
              <img className="profile-image" src={one} alt="profile" />
              <h3>FOunder</h3>
              <p>founder, therestaurantpatio</p>
            </div>
            <div className="col-md-6 mt-5">
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                iusto, ut optio pariatur labore nemo placeat libero! Iure
                architecto ratione nemo dolor corporis quaerat recusandae
                tempore incidunt itaque pariatur libero expedita suscipit
                laborum est dignissimos id ullam iste, labore inventore
                sapiente, totam sequi, repellendus optio! Dolore repudiandae
                nisi perferendis consequuntur autem enim culpa dicta at, dolores
                assumenda corrupti vero? A suscipit asperiores earum quibusdam
                deserunt esse voluptatum incidunt perferendis magni nobis? Illo
                explicabo quasi exercitationem sapiente expedita ab quisquam
                magni deleniti in accusantium dolorem, nam totam odit omnis
                eligendi et cum neque beatae. Eos harum quibusdam cumque,
                pariatur enim velit.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mt-5">
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                iusto, ut optio pariatur labore nemo placeat libero! Iure
                architecto ratione nemo dolor corporis quaerat recusandae
                tempore incidunt itaque pariatur libero expedita suscipit
                laborum est dignissimos id ullam iste, labore inventore
                sapiente, totam sequi, repellendus optio! Dolore repudiandae
                nisi perferendis consequuntur autem enim culpa dicta at, dolores
                assumenda corrupti vero? A suscipit asperiores earum quibusdam
                deserunt esse voluptatum incidunt perferendis magni nobis? Illo
                explicabo quasi exercitationem sapiente expedita ab quisquam
                magni deleniti in accusantium dolorem, nam totam odit omnis
                eligendi et cum neque beatae. Eos harum quibusdam cumque,
                pariatur enim velit.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img className="profile-image" src={two} alt="profile" />
              <h3>CoFOunder name</h3>
              <p>CoFOunder, therestaurantpatio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
