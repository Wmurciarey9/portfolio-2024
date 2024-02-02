import React from "react";
import "./aboutMe.css";

import { CardAnimate } from "../CardAnimate/CardAnimate";

export const AboutMe = () => {
  return (
    <div className="wm-about">
      {/* Background */}
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
      </div>
      <div className="wm-about-left">
        <CardAnimate />
      </div>
      <div className="wm-about-right">
        <p>
          Hello, I'm a dedicated <span> software developer </span> who is
          passionate about creating innovative solutions. With a relentless
          drive for <span>self-improvement</span> , I am always seeking new
          knowledge and continuously honing my skills in the ever-evolving world
          of technology. <span> I thrive on challenges </span> and embrace hard
          work as an opportunity to push the boundaries of what's possible.
        </p>
        <p>
          <span> As a self-learner</span>, I am committed to staying ahead of
          the curve and leveraging cutting-edge tools and techniques to deliver
          high-quality software solutions that exceed expectations. With a
          strong work ethic and a genuine <span> love for coding</span>, I am
          ready to tackle any project and contribute to the success of your team
          or organization.
        </p>
      </div>
    </div>
  );
};
