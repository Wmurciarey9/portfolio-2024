import Car from "../../assets/images/Car-Rental-v2.png";
import Connectify from "../../assets/images/Connectify-FullPage.png";
import Ecommerce from "../../assets/images/eCom-fullPage.png";
import Netflix from "../../assets/images/netflix-singIn.png";
import { Project } from "../Project/Project.jsx";
import "./projects.css";

export const Projects = () => {
  return (
    <div className="wm-main-projects" id="projects">
      <div className="section-title">
        <span>PROJECTS</span>
      </div>
      <div className="projects">
        <Project
          title="Car Rental"
          img={Car}
          liveUrl="https://car-rental-wilreym.netlify.app/"
          gitHub="https://github.com/Wmurciarey9/car-rental-v2"
          description="Car rental. Fully functional and market ready. Personal or business needs, search and reserve your cars."
          techOne={<i class="color-hover iconSmall fa-brands fa-react"></i>}
          techTwo={<i class="color-hover iconSmall fa-brands fa-sass"></i>}
          techThree={<i class="color-hover iconSmall fa-brands fa-html5"></i>}
          techFour={<i class="color-hover iconSmall fa-brands fa-css3"></i>}
          className="image car-rental-project"
        />

        <Project
          title="Ecommerce Store"
          img={Ecommerce}
          liveUrl="https://wilreym-ecom.netlify.app/"
          gitHub="https://github.com/Wmurciarey9/eCommerce-store"
          description="Completely functional eCommerce store website. In this case I set up a wallet store. New items can be added throught the admin site if you are registered as an admin. It also manages cart updates and processes payments."
          techOne={<i class="color-hover iconSmall fa-brands fa-react"></i>}
          techTwo={<i class="color-hover iconSmall fa-brands fa-sass"></i>}
          techThree={<i class="color-hover iconSmall fa-brands fa-html5"></i>}
          techFour={<i class="color-hover iconSmall fa-brands fa-css3"></i>}
          className="image ecom-project"
        />
        <Project
          title="Connectify - A meetup inspired clone"
          img={Connectify}
          liveUrl="https://wilreym-connectify.netlify.app/"
          gitHub="https://github.com/Wmurciarey9/connectify"
          description="Meetup inspired / clone. An app to connect people for diverse events. Implementing this in my country since we don't have meetup "
          techOne={<i class="color-hover iconSmall fa-brands fa-react"></i>}
          techTwo={<i class="color-hover iconSmall fa-brands fa-sass"></i>}
          techThree={<i class="color-hover iconSmall fa-brands fa-html5"></i>}
          techFour={<i class="color-hover iconSmall fa-brands fa-css3"></i>}
          className="image connectify-project"
        />
        {/* <Project
        title="Booking App"
        img=""
        liveUrl=""
        gitHub=""
        description="I am building a clone for meetup. My intent is that in the future it can be it's own app with it's own features but similar workflow as meetup, since in Colombia we don't have something like that. I intend to create and deploy in stores eventually. "
        techOne="React"
        techTwo="Saas"
        techThree="Strapi"
        techFour="MySQL"
      /> */}
        <Project
          title="Netflix Clone"
          img={Netflix}
          liveUrl="https://wilsonmrey-netflix-clone.netlify.app/"
          gitHub="https://github.com/Wmurciarey9/clone-netflix-react"
          description="Cloned latest version UI of netflix. Added a navigation overlay to access all available pages (Login, Home, Profiles, Watch). This is only the front end site. Movie app with Netflix UI"
          techOne={<i class="color-hover iconSmall fa-brands fa-react"></i>}
          techTwo={<i class="color-hover iconSmall fa-brands fa-sass"></i>}
          techThree={<i class="color-hover iconSmall fa-brands fa-html5"></i>}
          techFour={<i class="color-hover iconSmall fa-brands fa-css3"></i>}
          className="image netflix-project"
        />
      </div>
    </div>
  );
};
