import "./footer.css";

import LogoTransparent from "../../assets/images/Logo-White-Transparent.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import WilsonCV from "../../assets/Wilson-CV-2024.pdf";

export const Footer = () => {
  return (
    <div className="wm-footer">
      <div className="wm-footer-logo">
        <a href="#hero">
          <img src={LogoTransparent} alt="" />
        </a>
      </div>
      <div className="wm-footer-icons">
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
      <div className="wm-footer-copyright">
        <p>All rights reserved © | 2023 Wilson Dev</p>
      </div>
    </div>
  );
};
