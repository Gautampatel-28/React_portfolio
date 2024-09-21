import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";
import { motion } from "framer-motion";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav-container">
        <motion.a href="index.html" className="nav__logo">
  <motion.img
    src={logo}
    alt="logo"
    className="logoimg"
    initial={{ y: -10, scale: 1 }}
    animate={{
      y: [2, -2], 
      scale: [1, 1.05, 1], 
      transition: {
        duration: 1, 
        ease: "linear", 
        repeat: Infinity,
        repeatType: "reverse",
      },
    }}
  />
</motion.a>

          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#project" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => setToggle(false)}
            ></i>
          </div>

          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
