import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./componentes/Navbar/Navbar.jsx";
import "./index.css";
import { Hero } from "./componentes/Hero/Hero.jsx";
import { AboutMe } from "./componentes/About/AboutMe.jsx";
import { Skills } from "./componentes/Skills/Skills.jsx";
import { Projects } from "./componentes/Projects/Projects.jsx";
import Contact from "./componentes/Contact/Contact.jsx";
import { Footer } from "./componentes/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);
