import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/project1.jpg";
import img2 from "../../assets/project2.jpg";
import img3 from "../../assets/project3.jpg";
import img4 from "../../assets/project4.jpg";
import img5 from "../../assets/project5.jpg";
import "./Project.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <strong>Customizable Dashboards</strong>: Drag-and-drop widgets.
    <strong>UI Components Library</strong>: Pre-built components like buttons and forms.
    <strong>Real-Time Analytics</strong>: Interactive charts and graphs.
    <strong>Advanced Forms</strong>: Multiple layouts and validations.
    <strong>Responsive Design</strong>: Optimized for mobile devices.
    <strong>Cross-browser Compatibility</strong>: Works on all major browsers.
    <strong>Dark & Light Modes</strong>: Theme options available.
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
