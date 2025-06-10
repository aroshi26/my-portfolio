import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../assets/nav/menuIcon.png";
import menucloseIcon from "../assets/nav/menucloseIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // If scrolling down and passed 100px, hide
      if (currentY > lastScrollY.current && currentY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section logic
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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.show : styles.hide}`}>
      <a className={styles.title} href="#home">Aroshi.</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? menucloseIcon : menuIcon}
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          {["home", "about", "experience", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={activeSection === section ? styles.active : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
