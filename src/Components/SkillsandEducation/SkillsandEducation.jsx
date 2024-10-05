import React from "react";
import "./SkillsandEducation.css";
import Capsule from "./Capsule";

const SkillsandEducation = () => {
  return (
    <section id="skill_education" className="skillEducation">
      <div className="name">
        <h1> Kartikay varun</h1>
        <h5>
          Skills, Education <br /> Certificates
        </h5>
      </div>

      <div className="content">
        <div className="skills">
          <Capsule />
        </div>
        <div className="education">hii</div>
      </div>


      <div className="certificates">Certificates</div>
    </section>
  );
};

export default SkillsandEducation;
