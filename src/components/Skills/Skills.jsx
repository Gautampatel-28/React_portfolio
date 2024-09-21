import { BsBootstrap, BsGithub } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
  <>
    <motion.section className="skills-container" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="skills-title"
      >
        Technologies
      </motion.h2>
      <motion.div className="skills-icons">
        {[
          { icon: <RiReactjsLine className="react" />, duration: 2.5 },
          { icon: <TbBrandNextjs className="nextjs" />, duration: 3 },
          { icon: <SiMongodb className="mongodb" />, duration: 5 },
          { icon: <BsGithub className="github" />, duration: 2 },
          { icon: <FaNodeJs className="node" />, duration: 6 },
          { icon: <BsBootstrap className="bootstrap" />, duration: 4 },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: -10 }}
            animate={{
              y: [10, -10],
              transition: {
                duration: item.duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="skill-icon"
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    </>
  );
};

export default Skills;
