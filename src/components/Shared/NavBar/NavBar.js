import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './NavBar.css';
const NavBar = (props) => {
  return (
    <div className="nav-wrapper">
      <nav
        className="navbar navbar-expand-lg navbar-light "
        // style={{ background: '#fff' }}
        style={{ background: '#286A2D' }}
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
              {props.showLoginLogout && (
                <li className="nav-item">
                  <button className="btn btn-primary">Login</button>
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
