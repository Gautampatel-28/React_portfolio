import React, { useState } from "react";
import "./Qualification.css";
import { motion } from "framer-motion";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="qualification section">
        <motion.h2
          className="section_title"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Qualification
        </motion.h2>
        <span className="section_subtitle">My Personal Journey</span>

        <div className="qualification_container container">
          <motion.div className="qualification_tabs">
            <motion.div
              className={
                toggleState === 1
                  ? "qualification_button qualification_active"
                  : "qualification_button button--flex"
              }
              onClick={() => toggleTab(1)}
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
            >
              <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
              Education
            </motion.div>

            <motion.div
              className={
                toggleState === 2
                  ? "qualification_button qualification_active"
                  : "qualification_button button--flex"
              }
              onClick={() => toggleTab(2)}
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
            >
              <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
              Experience
            </motion.div>
          </motion.div>

          {/* Qualification Sections */}
          <div className="qualification_sections">
            {/* Education Section */}
            <div
              className={
                toggleState === 1
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              {/* Qualification Item */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Web Design</h3>
                  <span className="qualification_subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">Art Director</h3>
                  <span className="qualification_subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Web Development</h3>
                  <span className="qualification_subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">UX Expert</h3>
                  <span className="qualification_subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2021
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div
              className={
                toggleState === 2
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Product Designer</h3>
                  <span className="qualification_subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">UX Designer</h3>
                  <span className="qualification_subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Web Designer</h3>
                  <span className="qualification_subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">UX Expert</h3>
                  <span className="qualification_subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
