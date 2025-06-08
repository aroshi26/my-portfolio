import React from "react";
import styles from "./Projects.module.css";
import { motion as Motion } from "framer-motion";
import proj1 from "../../assets/projects/project 1.png";
import proj2 from "../../assets/projects/project 2.png";
import proj3 from "../../assets/projects/project 3.png";
import proj4 from "../../assets/projects/project 4.png";
import proj5 from "../../assets/projects/project 5.png";

const projects = [
  {
    title: "Plane Ticket Booking System",
    image: proj1,
    description: "A console-based Java application simulating an airline ticket booking system. Includes seat selection, passenger record management, fare calculation, and multi-user support with synchronization and data validation.",
    tech: ["Java"],
    live: "",
    github: ""
  },
  {
    title: "Health & Wellness Company website",
    image: proj2,
    description: " The website is designed to provide comprehensive and accessible information on various aspects of health.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "",
    github: ""
  },
  {
    title: "PitchMate - Marketing website",
    image: proj3,
    description: "A professional landing page for a cricket club management platform. Highlights include smooth scroll navigation, animated sections, player management features, and call-to-action prompts for clubs.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "",
    github: ""
  },
  {
    title: "Glamour – E-commerce Platform",
    image: proj4,
    description: "A full-featured MERN stack e-commerce application for clothing and accessories. Includes user authentication (JWT), shopping cart, admin dashboard, product filtering, and secure payment handling.",
    tech: ["React", "Node.js", "MongoDB","Express.js"],
    live: "",
    github: ""
  },
  {
    title: "Event ticket management system",
    image: proj5,
    description: "Java-based ticket reservation system that allows vendors to allocate and track event ticket sales. Features include concurrency management, quota enforcement, and command-line user operations.",
    tech: ["Java"],
    live: "",
    github: ""
  }
];

export const Projects = () => {
  return (
    <Motion.section
    className={styles.projectsSection}
    id="projects"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <div className={styles.projectCard} key={i}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.techList}>
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <div className={styles.links}>
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Motion.section>
  );
};
