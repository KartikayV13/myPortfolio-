import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Mee from "../../assets/Mee.png";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
          <img src={Mee} alt="About_image" />
        </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdOutlineElectricBolt className="about_icon" />
              <h5>Skills</h5>
              <small>Web Development</small>
            </article>
            <article className="about_card">
              <FaNetworkWired className="about_icon" />
              <h5>projects</h5>
              <small>20+ Projects</small>
            </article>
            <article className="about_card">
              <MdConnectWithoutContact className="about_icon" />
              <h5>Contact</h5>
              <small>+91 8887894226</small>
            </article>
          </div>
          <p>
            As a Mechanical Engineering graduate with a strong passion for
            technology, <br /> After completing my graduation i tried work in mechanical
            engineering field but it didn't attracts me much, since childhood i
            love to take my hands on laptop and software related thigs to i
            tried to switch my self and I have spent the last two years
            self-learning web development in frontend technologies. 
            Driven by
            curiosity and a desire to switch to the IT sector, I have immersed
            myself in <span className="lng"> HTML, CSS, JavaScript, and React </span>, building personal
            projects to sharpen my understanding of responsive design, UI/UX
            principles, and frontend development best practices. I am eager to
            leverage my problem-solving abilities, analytical skills, and
            hands-on experience to contribute to innovative projects and grow
            within a dynamic software development environment. With a background
            in engineering, I bring a methodical approach to coding and an
            aptitude for logical thinking, and I am enthusiastic about
            transitioning my knowledge into a frontend developer role.
          </p>

          <Link className="btn-primary btn ">Let,s Talk</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
