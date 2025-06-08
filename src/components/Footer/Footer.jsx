import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>© 2025 Aroshi Dilshara</div>
        <ul className={styles.nav}>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className={styles.social}>
        <a href="https://github.com/aroshi26" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="www.linkedin.com/in/aroshi-muthumala-1a23b5294" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:aroshimuthumala@gmail.com"><FaEnvelope /></a>
      </div>
    </footer>
  );
};
