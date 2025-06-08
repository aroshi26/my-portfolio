import React from "react";
import heroImg from "../../assets/heronew.png";
import styles from "./Hero.module.css";
import { TypeAnimation } from "react-type-animation";
import { motion as Motion } from "framer-motion";

export const Hero = () => {
    return (
        <section
        className={styles.container}
        id="home"
        
        >
            <Motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <h1 className={styles.title}>Hi, I'm Aroshi Dilshara</h1>
                <TypeAnimation
                    sequence={[
                        "I'm a Full-stack Developer", 2000,
                        "I'm a UI/UX Designer", 2000,
                        "I'm a Software Engineer", 2000,
                        "I'm a Tech Enthusiast", 2000,
                    ]}
                    wrapper="p"
                    speed={50}
                    repeat={Infinity}
                    className={styles.description}
                />
                <div className={styles.buttonGroup}>
                    <a href="mailto:aroshimuthumala@gmail.com" className={styles.contactBtn}>Contact Me</a>
                    <a href="/public/SEIntern.pdf" download className={styles.cvBtn}>Download CV</a>
                </div>
            </Motion.div>

            <img src={heroImg} alt="HeroImg" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
