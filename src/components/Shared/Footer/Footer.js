import React from 'react';
import './Footer.css';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGoogleCircle,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="get_email">
        <div
          className="container get_email-bg d-flex justify-content-center align-items-center"
          id="subscribe"
        >
          <div>
            <h3>LET'S STAY IN TOUCH</h3>
            <h6>Get updates on sales, specials and more</h6>
            <div className="footer-button">
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className="btn btn-danger">SUBMIT</button>
          </div>
        </div>
      </div>{' '}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: '#6EAD40' }}
      >
        <section className="">
          <div className="container text-center text-md-start mt-5 pt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Services</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" className="text-white">
                    START-UPS
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    EXISTING
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    RECRUITING
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" className="text-white">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Calculator
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Industry News
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p
                  style={{
                    fontSize: '25px',
                    marginTop: '-10px',
                  }}
                >
                  <span style={{ marginRight: '20px' }}>
                    <AiFillFacebook></AiFillFacebook>
                  </span>
                  <span style={{ marginRight: '20px' }}>
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                  </span>
                  <span style={{ marginRight: '20px' }}>
                    <AiFillInstagram></AiFillInstagram>
                  </span>
                  <span style={{ marginRight: '20px' }}>
                    <AiFillGoogleCircle></AiFillGoogleCircle>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: '#286A2D' }}>
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            domain.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
