import React, { useRef } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion as Motion } from "framer-motion";

export const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bx3kwzl",    
        "template_qg4cjgn",   
        formRef.current,
        "ugjMiYZRxYnd3SfMD"     
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset(); //  clear form
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Motion.section
    className={styles.contactSection}
    id="contact"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>GET IN TOUCH</h2>
          <p>Let’s make something great...</p>
          <ul className={styles.contactInfo}>
            <li><FaEnvelope /> aroshimuthumala@gmail.com</li>
            <li><FaPhone /> +94 77 805 9521</li>
            <li><FaMapMarkerAlt /> Colombo, Sri Lanka</li>
          </ul>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={styles.right}>
          <label>
            Name
            <input type="text" name="from_name" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" name="reply_to" placeholder="Your Email" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Write your message..." required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </Motion.section>
  );
};