import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/project1.jpg";
import img2 from "../../assets/project2.jpg";
import img3 from "../../assets/project1.jpg";
import img4 from "../../assets/project2.jpg";
import "./Project.css";

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
        <h2 className="section_title">My Projects</h2>
        <span className="section_subtitle">
          Explore the range of projects I’ve worked on, showcasing my expertise
          in web development.
        </span>

        <Slider {...settings} className="project__slider">
          <div className="project__item">
            <img src={img1} alt="Project 1" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Project One</h3>
              <p className="project__description">
                A modern e-commerce platform built with React and Node.js,
                featuring a secure checkout and real-time order tracking.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img2} alt="Project 2" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Project Two</h3>
              <p className="project__description">
                A personal portfolio website designed to highlight my skills and
                projects, built with Next.js for optimal performance.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img3} alt="Project 3" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Project Three</h3>
              <p className="project__description">
                A social media application developed using the MERN stack, with
                features like real-time messaging and notifications.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img4} alt="Project 4" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Project Four</h3>
              <p className="project__description">
                A task management tool built with Vue.js and Firebase, enabling
                users to track progress and collaborate in real-time.
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
