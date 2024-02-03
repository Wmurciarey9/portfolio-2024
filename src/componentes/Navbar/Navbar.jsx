import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Logo from "../../assets/images/Logo-nav.png";
import WilsonCV from "../../assets/Wilson-CV-2024.pdf";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    // Attempt new navbar
    <nav
      className={
        isScrolled
          ? "wm-navbar-main navbar navbar-expand-lg scrolled"
          : "wm-navbar-main navbar navbar-expand-lg"
      }
    >
      <div className="container-fluid">
        <Link to={`/`}>
          <img className="wm-navbar-logo navbar-brand" src={Logo} alt="logo" />
        </Link>
        {/* Icons Placement */}
        <div className="wm-navbar-right-icons">
          <div className="iconItem">
            <a href="https://github.com/Wmurciarey9">
              <GitHubIcon className="icon" />
            </a>
          </div>
          <div className="iconItem">
            <a href="https://www.linkedin.com/in/wmurciarey">
              <LinkedInIcon className="icon" />
            </a>
          </div>
          <div className="iconItem">
            <a href={WilsonCV} download="Wilson-CV.pdf">
              <InsertDriveFileIcon className="icon" />
            </a>
          </div>
        </div>
        {/* Hamburgues Menu + Regular Menu*/}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
