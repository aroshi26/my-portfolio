import styles from "./App.module.css"; 
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar";
import {About} from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import {Projects} from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>

      
      <div className="blurGlow blurTop"></div>
      <div className="blurGlow blurBottom"></div>

      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
