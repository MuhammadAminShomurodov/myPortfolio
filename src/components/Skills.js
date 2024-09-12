import React from "react";
import "react-multi-carousel/lib/styles.css"; // Ensure this package is installed
import colorSharp from "../assets/img/color-sharp.png";
import "../components/Skills.css";

// Import icons
import htmlIcon from "../assets/img/htmlIcon.svg";
import cssIcon from "../assets/img/cssIcon.svg";
import jsIcon from "../assets/img/jsIcon.svg";
import gitIcon from "../assets/img/gitIcon.svg";
import viteIcon from "../assets/img/viteIcon.svg";
import reactIcon from "../assets/img/reactIcon.svg";
import reduxIcon from "../assets/img/reduxIcon.svg";
import typescriptIcon from "../assets/img/typescriptIcon.svg";
import bootstrapIcon from "../assets/img/bootstrapIcon.svg";
import tailwindIcon from "../assets/img/tailwindIcon.svg";
import bashIcon from "../assets/img/bashIcon.svg";
import nextjsIcon from "../assets/img/nextjsIcon.svg";
import nodejsIcon from "../assets/img/nodejsIcon.svg";
import figmaIcon from "../assets/img/figmaIcon.svg";

export const Skills = () => {
  // Responsive settings for the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-row">
          <div className="skills-col-12">
            <div className="skills-box wow zoomIn">
              <h2>Skills</h2>
              <p>
                HTML, CSS, JavaScript, Git, Vite, React, Redux, Zustand, Axios,
                TypeScript, Bootstrap,<br></br> TailwindCSS, MUI, Ant, Shadcn,
                Bash, Next.js, Node.js, Figma
              </p>
              <div className="skills-icons">
                <div className="skills-icon">
                  <img src={htmlIcon} alt="HTML" />
                </div>
                <div className="skills-icon">
                  <img src={cssIcon} alt="CSS" />
                </div>
                <div className="skills-icon">
                  <img src={jsIcon} alt="JavaScript" />
                </div>
                <div className="skills-icon">
                  <img src={gitIcon} alt="Git" />
                </div>
                <div className="skills-icon">
                  <img src={viteIcon} alt="Vite" />
                </div>
                <div className="skills-icon">
                  <img src={reactIcon} alt="React" />
                </div>
                <div className="skills-icon">
                  <img src={reduxIcon} alt="Redux" />
                </div>
                <div className="skills-icon">
                  <img src={typescriptIcon} alt="TypeScript" />
                </div>
                <div className="skills-icon">
                  <img src={bootstrapIcon} alt="Bootstrap" />
                </div>
                <div className="skills-icon">
                  <img src={tailwindIcon} alt="TailwindCSS" />
                </div>
                <div className="skills-icon">
                  <img src={bashIcon} alt="Bash" />
                </div>
                <div className="skills-icon">
                  <img src={nextjsIcon} alt="Next.js" />
                </div>
                <div className="skills-icon">
                  <img src={nodejsIcon} alt="Node.js" />
                </div>
                <div className="skills-icon">
                  <img src={figmaIcon} alt="Figma" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="skills-background-image" src={colorSharp} alt="" />
    </section>
  );
};
