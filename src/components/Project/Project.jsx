
import React from "react";
import Slider from "react-slick";
import "./Project.css";
import img1 from "../../assets/project1.jpg";
import img2 from "../../assets/project2.jpg";
import img3 from "../../assets/project1.jpg";
import img4 from "../../assets/project2.jpg";

const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Number of slides shown on larger screens
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Slide change interval
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">
          I have contributed to several projects where I have showcased my
          expertise and skills in Reactjs, Nextjs, Vuejs, Node.js
        </span>

        <Slider {...settings} className="project__slider">
          <div className="project__item">
            <img src={img1} alt="Project 1" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Project One</h3>
              <p className="project__description">
                A brief description of the project goes here. Highlighting the
                technologies used and the objectives achieved.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img2} alt="Project 2" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Project Two</h3>
              <p className="project__description">
                Another project description with unique challenges and solutions
                provided through cutting-edge technologies.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img3} alt="Project 3" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Project Three</h3>
              <p className="project__description">
                Description about the project including its purpose, the tools
                used, and the impact it had.
              </p>
            </div>
          </div>

          <div className="project__item">
            <img src={img4} alt="Project 4" className="project__img" />
            <div className="project__content">
              <h3 className="project__title">Project Four</h3>
              <p className="project__description">
                This project involved several innovative approaches and
                demonstrated advanced proficiency in tech stacks.
              </p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Project;
