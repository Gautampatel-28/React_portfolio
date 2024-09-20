import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_container container">
          <h1 className="footer_title"><img src={logo} alt="logo" /></h1>

          <ul className="footer_list">
            <li>
              <a href="#about" className="footer_link">
                About
              </a>
            </li>

            <li>
              <a href="#project" className="footer_link">
                Projects
              </a>
            </li>

            <li>
              <a href="#services" className="footer_link">
                Services
              </a>
            </li>
          </ul>

          <div className="footer_social">
            <a
              href="https://wa.link/8sexb7"
              className="home_social-icon"
              target="__blank"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/direct/t/107001820728667"
              className="home_social-icon"
              target="__blank"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gautampatel28/"
              className="home_social-icon"
              target="__blank"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </div>
          <span className="footer_copy">&#169; Gautampatel. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
