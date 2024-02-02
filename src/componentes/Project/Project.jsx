import "./project.css";

export const Project = (props) => {
  return (
    <div className="project" id="project-section">
      <div className="left">
        <h2>{props.title}</h2>
        <div className="skillsUsed">
          <div>{props.techOne}</div>
          <div>{props.techTwo}</div>

          <div>{props.techThree}</div>
          <div>{props.techFour}</div>
        </div>
        <p>{props.description}</p>

        <div className="buttons">
          <button className="whiteBtn">
            <a href={props.liveUrl} target="_blank" rel="noreferrer">
              See Live
            </a>
          </button>
          <button>
            <a href={props.gitHub} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="right">
        <img className={props.className} src={props.img} alt="" />
      </div>
    </div>
  );
};
