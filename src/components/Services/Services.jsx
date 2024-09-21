import React, { useState } from "react";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const closeModal = () => {
    setToggleState(0);
  };

  return (
    <>
      <section className="services section" id="services">
        <motion.h2
          className="section_title"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Services
        </motion.h2>
        <span className="section_subtitle">What I offer</span>

        <div className="services_container container grid">
          {/* Service 1 */}
          <div className="services_content">
            <div>
              <i className="uil uil-web-grid services_icon"></i>
              <h3 className="services_title">
                Frontend <br />
                Development
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(1)}>
              View More{" "}
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services_modal active-modal"
                  : "services_modal"
              }
            >
              <div className="service_modal-content">
                <i
                  className="uil uil-times services_modal-close"
                  onClick={closeModal}
                ></i>{" "}
                {/* Close button */}
                <h3 className="services_modal-title">Front-End Development</h3>
                <p className="services_modal-description">
                  Enthusiastic front-end developer skilled in HTML, CSS,
                  JavaScript, React, and Vue. I build responsive, user-friendly
                  interfaces and contribute to product development by
                  integrating plugins and animations to enhance user
                  experiences.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I develop the user interface!
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Webpage Development</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I create UX element interactions.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="services_content">
            <div>
              <i className="uil uil-edit services_icon"></i>
              <h3 className="services_title">
                Deployment <br />
                CI/CD
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services_modal active-modal"
                  : "services_modal"
              }
            >
              <div className="service_modal-content">
                <i
                  className="uil uil-times services_modal-close"
                  onClick={closeModal}
                ></i>
                <h3 className="services_modal-title">Deployment and CI/CD</h3>
                <p className="services_modal-description">
                  Manage web application deployments for seamless updates and
                  minimal downtime. I implement CI/CD pipelines to automate
                  testing and deployment, enhancing code quality and
                  accelerating delivery. This ensures rapid iteration, faster
                  feature releases, and that applications remain up-to-date with
                  user needs.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Automated Testing: Set up automated testing to catch
                      issues early and ensure reliability.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Version Control Integration: Utilize tools like Git for
                      effective version control and collaboration.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Cloud Deployment: Deploy applications to cloud platforms
                      such as AWS, Heroku, or Vercel for scalability and
                      performance.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Monitoring and Rollback: Implement monitoring solutions to
                      track application performance and facilitate quick
                      rollbacks in case of issues.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="services_content">
            <div>
              <i className="uil uil-arrow services_icon"></i>
              <h3 className="services_title">
                Backend <br />
                Developer
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(2)}>
              View More{" "}
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services_modal active-modal"
                  : "services_modal"
              }
            >
              <div className="service_modal-content">
                <i
                  className="uil uil-times services_modal-close"
                  onClick={closeModal}
                ></i>
                <h3 className="services_modal-title">Backend Developer</h3>
                <p className="services_modal-description">
                  Skilled in Node.js, Express, and MongoDB, I build robust and
                  scalable server-side applications. With a focus on performance
                  and security, I design and implement APIs, manage databases,
                  and ensure seamless integration with front-end interfaces.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      API Development & Integration
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Database Management (MongoDB, SQL)
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Secure Authentication & Authorization
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Server-Side Logic & Business Processes
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
