import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo.png';
import './NavBar.css';
const NavBar = (props) => {
  const history = useHistory();
  return (
    <div className="nav-wrapper">
      <nav
        className="navbar navbar-expand-lg navbar-light "
        // style={{ background: '#fff' }}
        style={{ background: '#286A2D', overflow: 'hidden' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="d-block main-logo w-100" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link mx-2" aria-current="page" to="/home">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/calculator">
                  GET QUOTATION
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/contact-us">
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                  style={{ marginLeft: '-50px' }}
                >
                  {/* Patio heating 
Motorized shades
Outdoor lighting
Audio and video 
Outdoor furniture 
Restaurant Patio design */}

                  <li>
                    <p
                      className="dropdown-item"
                      onClick={() => history.push('/services/patio-heating')}
                      style={{ cursor: 'pointer' }}
                    >
                      PATIO HEATING
                    </p>
                    {/* <a className="dropdown-item" href="/services/patio-heating"
                      >PAITON HEATING</a
                    > */}
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="/services/monitorized-shades" 
                      >MONITORIZED SHADES</a
                    > */}
                    <p
                      className="dropdown-item"
                      onClick={() => history.push('/services/motorized-shades')}
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      MOTORIZED SHADES
                    </p>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="/services/outdoor-lighting"
                      >OUTDOOR LIGHTING</a
                    > */}
                    <p
                      className="dropdown-item"
                      onClick={() => history.push('/services/outdoor-lighting')}
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      OUTDOOR LIGHTING
                    </p>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="/services/audio-and-video"
                      >AUDIO AND VIDEO</a
                    > */}
                    <p
                      className="dropdown-item"
                      onClick={() => history.push('/services/audio-and-video')}
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      AUDIO AND VIDEO
                    </p>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="/services/outdoor-furniture"
                      >OUTDOOR FURNITURE</a
                    > */}
                    <p
                      className="dropdown-item"
                      onClick={() =>
                        history.push('/services/outdoor-furniture')
                      }
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      OUTDOOR FURNITURE
                    </p>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="/services/resturant-patio-design"
                      >REDTURANT PATIO DESIGN</a
                    > */}
                    <p
                      className="dropdown-item"
                      onClick={() =>
                        history.push('/services/restaurant-patio-design')
                      }
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      RESTAURANT PATIO DESIGN
                    </p>
                  </li>
                </ul>
              </li>
              {props.showLoginLogout && props.isLoggedIn && (
                <li
                  className="nav-item"
                  onClick={() => {
                    sessionStorage.clear();
                    window.location.reload();
                  }}
                >
                  <button className="btn btn-primary">Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    // <div className="nav-wrapper">
    //   <nav
    //     className="navbar navbar-expand-lg navbar-dark"
    //     style={{ background: '#fffbf0' }}
    //   >
    //     <div className="container-fluid container">
    //         <Link to='/'>
    //          <a className="navbar-brand" href="/">
    //         <img src={logo} className="d-block w-100" alt="" />
    //       </a>
    //         </Link>

    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div
    //         className="collapse navbar-collapse flex-row-reverse"
    //         id="navbarNav"
    //       >
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <Link to="/">
    //               <a className="nav-link mx-1" aria-current="page" href="/">
    //                 HOME
    //               </a>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/calculator">
    //               <a className="nav-link mx-1" aria-current="page" href="/">
    //                 GET <br /> QUOTATION
    //               </a>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/about">
    //               <a className="nav-link mx-1" aria-current="page" href="/">
    //                 ABOUT
    //               </a>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/contact">
    //               <a className="nav-link mx-1" aria-current="page" href="/">
    //                 CONTACT US
    //               </a>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default NavBar;
