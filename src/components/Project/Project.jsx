import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/project1.jpg";
import img2 from "../../assets/project2.jpg";
import img3 from "../../assets/project3.jpg";
import img4 from "../../assets/project4.jpg";
import img5 from "../../assets/project5.jpg";
import img6 from "../../assets/project6.jpg";
import img7 from "../../assets/project7.jpg";
import "./Project.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = () => {
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
          {/* Project 1 */}
          <div className="project__item">
            <Link
              to="https://templates.iqonic.design/streamit-dist/frontend/react/home"
              target="__blank"
            >
              <img src={img1} alt="Project 1" className="project__img" />
              <div className="project__content">
                <h3 className="project__title">
                  <strong>Streamit Lite - Video Streaming Template</strong>
                </h3>
                <p className="project__description">
                  During my internship, I worked on a{" "}
                  <strong>Reactjs/Nextjs</strong> project based on video
                  streaming. I contributed to developing a{" "}
                  <strong>dark-style UI</strong>. This template supports media
                  streaming businesses in launching and managing their services
                  efficiently.
                </p>
              </div>
            </Link>
          </div>

          {/* Project 2 */}
          <div className="project__item">
            <Link
              to="https://templates.iqonic.design/hope-ui/pro/react/dashboard"
              target="__blank"
            >
              <img src={img2} alt="Project 2" className="project__img" />
              <div className="project__content">
                <h3 className="project__title">
                  <strong>Hope UI - Bootstrap Dashboard</strong>
                </h3>
                <div className="project__description">
                  <strong>Hope UI - Bootstrap Admin Dashboard</strong>
                  <br />
                  <strong>ID:</strong> hope-ui-bootstrap-dashboard
                  <br />
                  <strong>Features:</strong>
                  <ul>
                    <strong>Customizable Dashboards</strong>: Drag-and-drop
                    widgets.
                    <strong>UI Components Library</strong>: Pre-built components
                    like buttons and forms.
                    <strong>Real-Time Analytics</strong>: Interactive charts and
                    graphs.
                    <strong>Advanced Forms</strong>: Multiple layouts and
                    validations.
                    <strong>Responsive Design</strong>: Optimized for mobile
                    devices.
                    <strong>Cross-browser Compatibility</strong>: Works on all
                    major browsers.
                    <strong>Dark & Light Modes</strong>: Theme options
                    available.
                  </ul>
                </div>
              </div>
            </Link>
          </div>

          {/* Project 3 */}
          <div className="project__item">
            <Link
              to="https://gautampatel-28.github.io/Real_Estate/"
              target="__blank"
            >
              <img src={img3} alt="Project 3" className="project__img" />
              <div className="project__content">
                <h3 className="project__title">
                  <strong>Real_Estate - React_js</strong>
                </h3>
                <p className="project__description">
                  A comprehensive <strong>Real Estate Management System</strong>{" "}
                  designed to help users manage, browse, and purchase{" "}
                  <strong>real estate properties</strong> online. This system
                  simplifies real estate transactions for both buyers and
                  sellers by providing detailed property listings,{" "}
                  <strong>search functionality</strong>, and an{" "}
                  <strong>admin dashboard</strong> for system management.
                  Additionally, the project includes a static landing page to
                  introduce the platform to users.
                </p>
              </div>
            </Link>
          </div>

          {/* Project 4 */}
          <div className="project__item">
            <img src={img4} alt="Project 4" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">
                <strong>React Ecommerce-Application</strong>
              </h3>
              <p className="project__description">
                A fully functional <strong>Ecommerce web application</strong>{" "}
                built with
                <strong> React.js</strong>, offering a seamless shopping
                experience. Features include <strong>product listing</strong>{" "}
                with filtering, <strong>search functionality</strong>, detailed{" "}
                <strong>product views</strong>, a <strong>shopping cart</strong>
                with quantity management, <strong>
                  user authentication
                </strong>, <strong>payment integration</strong>, and{" "}
                <strong>order tracking</strong>. The app is{" "}
                <strong>responsive</strong>
                and optimized for both desktop and mobile, with{" "}
                <strong>Redux</strong> for state management and{" "}
                <strong>React Router</strong> for navigation.
              </p>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project__item">
            <Link
              to="https://gautampatel-28.github.io/Quiz.hub/"
              target="__blank"
            >
              <img src={img5} alt="Project 5" className="project__img" />
              <div className="project__content">
                <h3 className="project__title">
                  <strong>BrainBash Quiz-Api</strong>
                </h3>
                <p className="project__description">
                  Quiz Hub is an interactive quiz application that allows users
                  to test their knowledge on various topics. Leveraging a{" "}
                  <strong>RESTful API</strong>, it provides{" "}
                  <strong>real-time quiz questions</strong> and answers.
                </p>
                <strong>Features:</strong>
                <div>
                  <ul>
                    <li>
                      <strong>User-Friendly Interface</strong>: Simple and
                      intuitive design for easy navigation.
                    </li>
                    <li>
                      <strong>Diverse Categories</strong>: A wide range of quiz
                      topics available for selection.
                    </li>
                    <li>
                      <strong>Real-Time Data Fetching</strong>: Fetches the
                      latest questions from an external API.
                    </li>
                    <li>
                      <strong>Score Tracking</strong>: Users can see their
                      performance after each quiz.
                    </li>
                    <li>
                      <strong>Responsive Design</strong>: Fully functional on
                      both desktop and mobile devices.
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>

          {/* Project 6 */}
          <div className="project__item">
            <Link to="https://pps-assessment-1-0.vercel.app/" target="__blank">
              <img src={img6} alt="Project 6" className="project__img" />
              <div className="project__content">
                <h3 className="project__title">
                  <strong>
                    PPS-ASSESSMENT-1.0 Student Assessment psychology Panel
                  </strong>
                </h3>
                <p className="project__description">
                  PPS Assessment is a student psychological assessment platform
                  developed from scratch using <strong>React.js</strong>,{" "}
                  <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>{" "}
                  following a <strong>Microservices Architecture</strong>. It
                  enables users to take psychological tests with features like
                  login, payment, MCQ-based assessments, and report generation.
                </p>
                <strong>Features:</strong>
                <div>
                  <ul>
                    <li>
                      <strong>Modern UI</strong>: Built with reusable and
                      responsive React components styled using Tailwind CSS.
                    </li>
                    <li>
                      <strong>Microservices Integration</strong>: Handles
                      authentication, assessment, scoring, reporting, payment,
                      and notifications through separate services.
                    </li>
                    <li>
                      <strong>Secure Login</strong>: User authentication flow
                      using dedicated Auth microservice.
                    </li>
                    <li>
                      <strong>Assessment System</strong>: Real-time MCQ tests
                      with auto-scoring and report generation.
                    </li>
                    <li>
                      <strong>API Gateway</strong>: Unified access to all
                      services through a centralized gateway.
                    </li>
                    <li>
                      <strong>Fully Responsive</strong>: Optimized for both
                      mobile and desktop devices.
                    </li>
                    <li>
                      <strong>Bug Fixing & Documentation</strong>: Thoroughly
                      tested, debugged, and well-documented workflow.
                    </li>
                  </ul>
                </div>
                <p>
                  <strong>Demo Login:</strong> gautam.ollato@gmail.com |{" "}
                  <strong>Password:</strong> 12345678
                </p>
              </div>
            </Link>
          </div>

          {/* Project 7 */}
          <div className="project__item">
            <Link to="https://expert-admin-panel.vercel.app/" target="__blank">
              <img src={img7} alt="Project 7" className="project__img" />
              <div className="project__content">
                <h3 className="project__title">
                  <strong>
                    Expert Admin Panel_1.0 Psychology Admin Dashboard
                  </strong>
                </h3>
                <p className="project__description">
                  PPS Admin Dashboard is a robust administration platform built
                  from scratch using <strong>React.js</strong>,{" "}
                  <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>{" "}
                  following a <strong>Microservices Architecture</strong>. It
                  allows admins to manage doctors, monitor user activity, and
                  handle support tickets efficiently through a scalable and
                  secure system.
                </p>
                <strong>Features:</strong>
                <div>
                  <ul>
                    <li>
                      <strong>Admin Dashboard</strong>: A centralized platform
                      for managing users, doctors, and system activity.
                    </li>
                    <li>
                      <strong>Microservices Integration</strong>: Utilizes
                      independent services for authentication, admin logic, and
                      notifications.
                    </li>
                    <li>
                      <strong>User & Doctor Management</strong>: Activate or
                      deactivate doctor profiles with real-time status updates.
                    </li>
                    <li>
                      <strong>Support Ticket System</strong>: Integrated system
                      for tracking and resolving user issues.
                    </li>
                    <li>
                      <strong>Secured API Consumption</strong>: Communicates
                      securely with multiple backend services for seamless
                      functionality.
                    </li>
                    <li>
                      <strong>Performance Optimized</strong>: Fast load times
                      and efficient state handling across components.
                    </li>
                    <li>
                      <strong>Responsive Design</strong>: Works smoothly on all
                      screen sizes, including mobile and desktop.
                    </li>
                  </ul>
                </div>
                <p>
                  <strong>Demo Login:</strong> gautamp |{" "}
                  <strong>Admin ID:</strong> subadmin01 |{" "}
                  <strong>Password:</strong> 1234
                </p>
              </div>
            </Link>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Project;
