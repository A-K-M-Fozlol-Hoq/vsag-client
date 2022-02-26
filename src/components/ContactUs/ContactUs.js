import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGoogleCircle,
} from 'react-icons/ai';
import './ContactUs.css';
const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div style={{ padding: '50px' }}>
        <h1
          className="text-center"
          style={{ paddingTop: '20px', marginBottom: '-60px' }}
        >
          GET IN TOUCH
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
      <div className="form">
        <form action="">
          <h1 className="text-center">Contact Us</h1>
          <div
            style={{
              backgroundColor: '#6EAD40',
              height: '5px',
              width: '150px',
              borderRadius: '5px',
              margin: '0 auto 50px',
            }}
          ></div>
          <div
            style={{
              height: '5px',
              width: '100%',
              borderRadius: '5px',
              backgroundColor: '000',
              margin: '0 auto 0',
            }}
          ></div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
          />
          <p>Email</p>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <p>Details</p>
          <input
            type="text"
            name="textarea"
            id="details"
            placeholder="Enter your project details"
          />
          <div
            style={{
              background: '#fff',
              color: '#000',
              padding: '5px 10px',
              width: '150px',
              textAlign: 'center',
              cursor: 'pointer',
              marginTop: '30px',
            }}
            id="submit"
            className="submit-form"
          >
            SEND MESSAGE
          </div>
          <div
            className="font-awesome-icons"
            style={{
              width: '100px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gridGap: '10px',
              marginTop: '30px',
            }}
          >
            <span className="icon">
              <AiFillFacebook />
            </span>
            <span className="icon">
              <AiFillTwitterCircle />
            </span>
            <span className="icon">
              <AiFillInstagram />
            </span>
            <span className="icon">
              <AiFillGoogleCircle />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
