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
    <div className={isScrolled ? "wm-navbar-main scrolled" : "wm-navbar-main"}>
      <div className="wm-navbar-left">
        <Link to={`/`}>
          <img className="wm-navbar-logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="wm-navbar-right">
        <div className="wm-navbar-right-menu">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
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
            <a href=""></a>
            <a href={WilsonCV} download="Wilson-CV.pdf">
              <InsertDriveFileIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
