import React from "react";
import styles from "./Experience.module.css";
import { motion as Motion } from "framer-motion";



// Replace these with your actual logo image imports
import htmlLogo from "../../assets/htmlIcon.png";
import cssLogo from "../../assets/cssIcon.png";
import jsLogo from "../../assets/javascriptIcon.png";
import reactLogo from "../../assets/reactIcon.png";
import pythonLogo from "../../assets/pythonIcon.png";
import angularLogo from "../../assets/angularIcon.png";
import javaLogo from "../../assets/javaIcon.png";
import mongoLogo from "../../assets/mongoIcon.png";
import mysqlLogo from "../../assets/mysqlIcon.png";
import nodeLogo from "../../assets/nodeIcon.png";
import graphLogo from "../../assets/graphsqlIcon.png";
import githubLogo from "../../assets/githubIcon.png";
import gitLogo from "../../assets/gitIcon.png";
import figmaLogo from "../../assets/figmaIcon.png";




export const Experience = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Angular", logo: angularLogo },
    { name: "NodeJs", logo: nodeLogo},
    { name: "Python", logo: pythonLogo },
    { name: "Java", logo: javaLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "GraphSQL", logo: graphLogo },
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Figma", logo: figmaLogo },
    // add more as needed
  ];


  return (
    <Motion.section
    className={styles.experienceSection}
    id="experience"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <img src={skill.logo} alt={skill.name} className={styles.logo} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </Motion.section>
  );
};
