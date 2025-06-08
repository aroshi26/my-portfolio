import React from "react";
import { motion as Motion } from "framer-motion";
import aboutImg from "../../assets/about/aboutImg.jpg";
import frontImg from "../../assets/about/cursor.png";
import backImg from "../../assets/about/server.png";
import figmaImg from "../../assets/about/figma.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <Motion.section
      id="about"
      className={styles.container}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg} src={aboutImg} alt="" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={frontImg} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I am a frontend developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={backImg} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I am a backend developer with experience in creating scalable and secure APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={figmaImg} alt="" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>I design clean and intuitive interfaces using tools like Figma and Adobe XD</p>
            </div>
          </li>
        </ul>
      </div>
    </Motion.section>
  );
};
