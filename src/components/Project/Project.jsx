import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/project1.jpg";
import img2 from "../../assets/project2.jpg";
import img3 from "../../assets/project3.jpg";
import img4 from "../../assets/project4.jpg";
import "./Project.css";
import { motion } from "framer-motion";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="project container section" id="project">
        <motion.h2
          className="section_title"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          My Projects
        </motion.h2>
        <span className="section_subtitle">
          Explore the range of projects I’ve worked on, showcasing my expertise
          in web development.
        </span>

        <Slider {...settings} className="project__slider">
          <div className="project__item">
            <img src={img1} alt="Project 1" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">
                Streamit Lite - Video Streaming Template
              </h3>
              <p className="project__description">
                During my internship, I worked on Reactjs/Nextjs project based
                on video streaming. I contributed to developing dark-style UI.
                This template supports media streaming businesses in launching
                and managing their services efficiently.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img2} alt="Project 2" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Hope UI - Bootstrap Dashboard</h3>
              <p className="project__description">
                During my internship, I actively contributed to the development
                of the Hope UI project, a professional-grade Bootstrap Admin
                Dashboard Template and UI Components Library. My primary
                responsibility involved building and optimizing production-ready
                components aimed at improving the efficiency and scalability of
                enterprise-level applications. By focusing on reusable,
                high-quality UI elements, I helped streamline development
                workflows and ensure faster, more consistent implementation of
                user interface elements across various projects.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img3} alt="Project 3" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Real_Estate - React_js</h3>
              <p className="project__description">
                Real Estate Management System A comprehensive Real Estate
                Management System designed to help users manage, browse, and
                purchase real estate properties online. This system simplifies
                real estate transactions for both buyers and sellers by
                providing detailed property listings, search functionality, and
                an admin dashboard for system management. Additionally, the
                project includes a static landing page to introduce the platform
                to users.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img4} alt="Project 4" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">React Ecommerce Application</h3>
              <p className="project__description">
                A fully functional **Ecommerce web application** built with
                **React.js**, offering a seamless shopping experience. Features
                include **product listing** with filtering, **search
                functionality**, detailed **product views**, a **shopping cart**
                with quantity management, **user authentication**, **payment
                integration**, and **order tracking**. The app is **responsive**
                and optimized for both desktop and mobile, with **Redux** for
                state management and **React Router** for navigation.
              </p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next`}
      style={{
        ...style,
        display: "block",
        right: "-20px",
        backgroundColor: "black",
      }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev`}
      style={{
        ...style,
        display: "block",
        left: "-20px",
        backgroundColor: "black",
      }}
      onClick={onClick}
    />
  );
};

export default Project;
