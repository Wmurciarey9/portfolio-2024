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
          Hey there, I'm a passionate <span>software developer </span>with over
          three years in the game, specializing in the exciting world of web
          development and project management. I thrive on
          <span>finding innovative solutions </span>that push the boundaries of
          what tech can do. Whether it's programming slick
          <span> websites / webapps </span>or tackling client issues with speed
          and precision, I'm all about delivering top-notch results.
          <br />
          <br />
          I'm not just a coder; <span>I'm a problem-solver</span> who's always
          upping my game with the latest tools and techniques.
          <span> I'm not afraid of hard work</span>, and I genuinely love
          getting my hands dirty with code. Ready to dive into any project,
          <span> bring fresh ideas to the table</span>, and be the tech-savvy
          asset your team needs for success. Let's build something awesome
          together!
        </p>
      </div>
    </div>
  );
};
