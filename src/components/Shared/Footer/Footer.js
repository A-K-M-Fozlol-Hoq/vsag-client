import React from 'react';
import './Footer.css';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGoogleCircle,
} from 'react-icons/ai';
import {useHistory} from "react-router-dom"
const Footer = (props) => {
  const history = useHistory();
  const { showLetsStayInTouch } = props;
  return (
    <div className="footer-wrapper">
      {showLetsStayInTouch && (
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
        </div>
      )}

      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: '#6EAD40' }}
      >
        <section className="">
          <div className="container text-center text-md-start mt-5 pt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-services">
                <h6 className="text-uppercase fw-bold">Services</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="/services/patio-heating" className="text-white">
                  PATIO HEATING
                  </a>
                </p>
                <p>
                  <a href="/services/audio-and-video" className="text-white">
                  AUDIO AND VIDEO
                  </a>
                </p>
                <p>
                  <a href="/services/outdoor-lighting" className="text-white">
                  OUTDOOR FURNITURE
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 useful-links">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="/about" className="text-white">
                    About
                  </a>
                </p>
                <p>
                  <a href="/services/patio-heating" className="text-white">
                    Services
                  </a>
                </p>
                <p>
                  <a href="/calculator" className="text-white">
                    Get Quotation
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
                  <i className="fas fa-home mr-3"></i> 5155 Central Park Blvd, Denver, CO. 80238
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> <a href="mailto:rob@primedb.co" className="text-white text-decoration-none">rob@primedb.co</a>
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> <a href="tel:720-226-2926" className="text-white text-decoration-none">720-226-2926</a>
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
          <a className="text-white text-decoration-none" href="https://primedb.co">
          Made with️ ❤️ © 2022 PrimeDB
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
