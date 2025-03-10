import React from 'react';
import './Navbar.css'; // Add this file for styling

const Navbar = () => {
  return (
    <div>
      <nav className="navbar container rounded-top-0 rounded-bottom-5 navbar-expand-lg navbar-dark fixed-top  blur-navbar">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4 text-warning" >E-Recipe</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder fs-4">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-Us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-Us" aria-disabled="true">
                 Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
