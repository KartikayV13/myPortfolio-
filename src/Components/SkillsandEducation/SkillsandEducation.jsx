import React, { useState } from "react";
import "./SkillsandEducation.css";
import Capsule from "./Capsule";
import ProgreeBar from "./ProgressBar"
import Education from "./Education";
import HackerRank from "./HackerRank";
import Freecodecamp from "./Freecodecamp";

const SkillsandEducation = () => {

  const [activeButton, setActiveButton] = useState("skills");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section id="skill_education" className="skill_section">
     <h1>Kartikay varun</h1>
     <h5 className="S-E-C">
         Skills, Education, <br /> & <br /> Certificates
        </h5>
        <h2 className="skills-heading"> --SKILLS <span className="and">&</span>  EDUCATION--</h2>

<div className="container skillEducation">

       <div className="hidden-on-pc-tablet">
       <div className="buttons">
      <button
           className={`skill-btn ${activeButton === "skills" ? "active" : ""}`}
          onClick={() => handleButtonClick("skills")}
         >
           Skills
        </button>
        <button
         className={`educ-btn ${activeButton === "education" ? "active" : ""}`}
           onClick={() => handleButtonClick("education")}
          >
      Education
        </button>
      </div>

     {activeButton === "skills" && <Capsule />}
      {activeButton === "education" && <Education />}
          </div>
  
<div className="content hidden-on-mobile">
        <div className="skills">
          <Capsule />
        </div>
        <div className="skills">
        <ProgreeBar/>
        </div>
        <div className="education">
          <Education/>
        </div>
      </div>

      <div className="certificates">
       <div className="name_Certif">
      <h2 className="certificates_heading">--CERTIFICATES--</h2>
       </div>
       <div className="certificates_content">
         <div className="hackerank">
           <HackerRank/>
         </div>
         <div className="other">
           <Freecodecamp/>
         </div>
       </div>
     </div>

</div>

    </section>
  );
};

export default SkillsandEducation;
