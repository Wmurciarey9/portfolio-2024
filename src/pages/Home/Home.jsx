import "./home.css";
import { Hero } from "../../componentes/Hero/Hero.jsx";
import { AboutMe } from "../../componentes/About/AboutMe.jsx";
import { Skills } from "../../componentes/Skills/Skills.jsx";
import { Projects } from "../../componentes/Projects/Projects.jsx";
import Contact from "../../componentes/Contact/Contact.jsx";
import { Footer } from "../../componentes/Footer/Footer.jsx";
import { Navbar } from "../../componentes/Navbar/Navbar.jsx";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
