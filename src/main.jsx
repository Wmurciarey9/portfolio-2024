import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./componentes/Navbar/Navbar.jsx";
import "./index.css";
import { Hero } from "./componentes/Hero/Hero.jsx";
import { AboutMe } from "./componentes/About/AboutMe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <AboutMe />
  </React.StrictMode>
);
