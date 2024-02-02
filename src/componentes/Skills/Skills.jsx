import "./skills.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import BarChartIcon from "@mui/icons-material/BarChart";

export const Skills = () => {
  return (
    <div className="wm-skills">
      <div className="containerSkills">
        <div className="skill-item">
          <Tippy content="HTML">
            <i class="color-hover icon fa-brands fa-html5"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="CSS">
            <i class="color-hover icon fa-brands fa-css3"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="JAVASCRIPT">
            <i class="color-hover icon fa-brands fa-js"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="NODE.JS">
            <i class="color-hover icon fa-brands fa-node-js"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="REACT">
            <i class="color-hover icon fa-brands fa-react"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="GIT">
            <i class="color-hover icon fa-brands fa-git-alt"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="GITHUB">
            <i class="color-hover icon fa-brands fa-github"></i>
          </Tippy>
        </div>
      </div>
      <div className="containerSkills">
        <div className="skill-item">
          <Tippy content="SASS">
            <i class="color-hover icon fa-brands fa-sass"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="WordPress">
            <i class="color-hover icon fa-brands fa-wordpress"></i>
          </Tippy>
        </div>{" "}
        <div className="skill-item">
          <Tippy content="Google Analytics">
            <BarChartIcon className="color-hover icon" />
          </Tippy>
        </div>{" "}
        <div className="skill-item">
          <Tippy content="JAVA">
            <i class="color-hover icon fa-brands fa-java"></i>
          </Tippy>
        </div>{" "}
        <div className="skill-item">
          <Tippy content="PHP">
            <i class="color-hover icon fa-brands fa-php"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="PYTHON">
            <i class="color-hover icon fa-brands fa-python"></i>
          </Tippy>
        </div>
      </div>
    </div>
  );
};
