import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";


import menuIcon from "../assets/nav/menuIcon.png";
import menucloseIcon from "../assets/nav/menucloseIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section tracking with IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.show : styles.hide}`}>
      <a className={styles.title} href="/">Aroshi.</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? menucloseIcon : menuIcon}
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "home" ? styles.active : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "about" ? styles.active : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "experience" ? styles.active : ""}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "projects" ? styles.active : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "contact" ? styles.active : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
