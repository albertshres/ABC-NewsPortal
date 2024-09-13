import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container ">
        <div className="row py-5 ">
          {/* Logo and tagline section */}
          <div className="col-md-4">
            <div className="logo-section">
              <Link to="/" className="logo-link d-flex align-items-center mb-3">
                <img
                  src="abcnews-logo.jpg"
                  alt="Logo"
                  className="logo-image my-2"
                  width="40"
                />
                <span className="logo-text h5 mb-0">ABC News®</span>
              </Link>
              <p className="tagline  lead">
                Get the NEWS that fits your groove.
              </p>
              <hr className="border-white" />

              <div className="powered-by d-flex align-items-center">
                <span className="powered-text">Powered by</span>
                <img
                  src="abcnews-logo.jpg"
                  alt="Times Internet"
                  width="100"
                  className="ms-3"
                />
              </div>
            </div>
          </div>

          {/* Quick Links section */}
          <div className="col-md-4">
            <h5 className="section-title">Quick Links</h5>
            <ul className="list-unstyled ">
              <li>
                <Link to="/general" className="footer-link text-white ">
                  General
                </Link>
              </li>
              <li>
                <Link to="/business" className="footer-link text-white ">
                  Business
                </Link>
              </li>

              <li>
                <Link to="/technology" className="footer-link text-white">
                  Tecnology
                </Link>
              </li>
              <li>
                <Link to="#/entertainment" className="footer-link text-white ">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/science" className="footer-link text-white">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/sports" className="footer-link text-white">
                  Sport
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe and Social Media section */}
          <div className="col-md-4">
            <h5 className="section-title ">Subscribe to our Newsletter</h5>
            <form className="subscribe-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  placeholder="xyz@example.com"
                  className="email-input"
                />
                <button type="submit" className="subscribe-button">
                  Subscribe
                </button>
              </div>
            </form>
            <hr className="border-white" />
            <h5 className="section-title mt-3 ">Connect With Us</h5>
            <div className="social-media d-flex text-white ">
              <Link
                to="https://www.facebook.com/"
                className="social-link me-3 "
              >
                <FaFacebookF size={24} color="#fff" />
              </Link>
              <Link to="https://www.x.com/" className="social-link mx-3">
                <FaTwitter size={24} color="#fff" />
              </Link>
              <Link
                to="https://www.instagram.com/"
                className="social-link me-3"
              >
                <FaInstagram size={24} color="#fff" />
              </Link>
              <Link to="https://www.youtube.com/" className="social-link me-3">
                <FaYoutube size={24} color="#fff" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-white" />
        <div className="row mt-4">
          <div className="col-12 text-center">
            <ul className="list-inline text-white">
              <li className="list-inline-item">
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/terms" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <p className="footer-text lead">
              © 2024 ABC News. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
