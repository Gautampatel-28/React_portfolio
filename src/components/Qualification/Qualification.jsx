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

          
          <div className="qualification_sections">
            
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
                  <h3 className="qualification_title">St.Francis School</h3>
                  <span className="qualification_subtitle">
                    Mumbai-India
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-graduation-cap"></i> 2007-2017
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
                  <h3 className="qualification_title">RR.International College</h3>
                  <span className="qualification_subtitle">
                    Mumbai-India
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-graduation-cap"></i> 2018-2020
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Bachelor in Computer Application</h3>
                  <span className="qualification_subtitle">
                  Tilak Maharasthra Vidyapeeth, Pune
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-graduation-cap"></i> 2020 - 2023
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
                  <h3 className="qualification_title">Master in Computer Application</h3>
                  <span className="qualification_subtitle">
                  Tilak Maharasthra Vidyapeeth, Pune
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-graduation-cap"></i> 2023 - 2025
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
                  <h3 className="qualification_title">Goldenmace IT Solutions</h3>
                  <span className="qualification_subtitle">
                    Reactjs/Nextjs Developer Intern
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-briefcase-alt"></i> 10/2023 - 05/2024
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
                  
                  <span className="qualification_subtitle">
                    <br /><br /><br />
                  </span>
                  <div className="qualification_calender">
                    
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  
                  <span className="qualification_subtitle">
                  <br /><br /><br />
                  </span>
                  <div className="qualification_calender">
                    
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
                  
                  <span className="qualification_subtitle">
                  <br /><br /><br />
                  </span>
                  <div className="qualification_calender">
                    
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
