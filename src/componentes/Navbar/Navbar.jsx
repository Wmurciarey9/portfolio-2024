import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Logo from "../../assets/images/Logo-nav.png";
import WilsonCV from "../../assets/Wilson-CV-2024.pdf";

export const Navbar = () => {
  return (
    <div className="wm-navbar-main">
      <div className="wm-navbar-left">
        <img className="wm-navbar-logo" src={Logo} alt="logo" />
      </div>
      <div className="wm-navbar-right">
        <div className="wm-navbar-right-menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
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
