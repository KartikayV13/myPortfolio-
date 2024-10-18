import React from "react";
import github from "../../assets/media/github.png";
import fcc from "../../assets/media/fcc.jpeg";
import hr from "../../assets//media/HR.jpeg";

const Professional = () => {
  return (
    <left>
      <div className="social_heading hide-on-mobile">
        <h3>Professional Media</h3>
      </div>

      <div className="social_icons">
        <div className="social_div" >
          <a href="https://github.com/KartikayV13" target="_blank">
            <img src={github} alt="GitHub" id="GitHub" className="social_img" />
            <label htmlFor="GitHub">Git Hub</label>
          </a>
        </div>

        <div className="social_div ">
          <a href="https://www.freecodecamp.org/KartikayVarun13" target="_blank">
            <img
              src={fcc}
              alt="FreeCode Camp"
              id="FreeCode Camp"
              className="social_img"
            />
            <label htmlFor="FreeCode Camp">FreeCode Camp</label>
          </a>
        </div>

        <div className="social_div ">
          <a href="https://www.hackerrank.com/profile/varunkartikay031" target="_blank">
            <img
              src={hr}
              alt="HackerRank"
              id="HackerRank"
              className="social_img"
            />
            <label htmlFor="HackerRank">HackerRank</label>
          </a>
        </div>
      </div>
    </left>
  );
};

export default Professional;
