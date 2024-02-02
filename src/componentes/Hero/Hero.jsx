import React from "react";
import "./hero.css";
import wilson from "../../assets/images/Wilson.png";

export const Hero = () => {
  return (
    <div className="wm-hero">
      <div className="wm-hero-left">
        <p>Hello, I'm</p>
        <h1>
          Wilson <span className="coloredText"> Murcia</span>
        </h1>
        <p>A software developer</p>
        <div className="buttons">
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="wm-hero-right">
        <img src={wilson} alt="" />
      </div>
    </div>
  );
};
