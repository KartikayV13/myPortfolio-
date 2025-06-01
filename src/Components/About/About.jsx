import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Mine from "../../assets/mine.png"
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { TbBrandPicsart } from "react-icons/tb";

const About = () => {
  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
          <img src={Mine} alt="About_image" />
        </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdOutlineElectricBolt className="about_icon" />
              <h5>Skills</h5>
              <small>Web Development <br/> & <br/> Front-end development</small>
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
            love to take my hands on laptop and software related thigs so i
            tried to switch my self and I have spent the last two years
            self-learning web development in frontend technologies. 
            Driven by
            curiosity and a desire to switch to the IT sector, I have immersed
            myself in <strong><span className="lng"> JAVA+DSA HTML, CSS, SASS, JavaScript, and ReactJS, TailWind CSS, BootStrap, Next.js </span></strong>, building personal
            projects to sharpen my understanding of responsive design, UI/UX
            principles, and frontend development best practices. I am eager to
            leverage my problem-solving abilities, analytical skills, and
            hands-on experience to contribute to innovative projects and grow
            within a dynamic software development environment. With a background
            in engineering, I bring a methodical approach to coding and an
            aptitude for logical thinking, and I am enthusiastic about
            transitioning my knowledge into a frontend developer role.
          </p>

          <Link to="/Contact" className="btn-primary btn ">Let,s Talk</Link>
        </div>
      </div>


      <div className="container section">
        <h5>Things I Learned</h5>
          <h2>Skills</h2>
          <div className="container skills_container">
            <div className="frontend">
              <h3>Frontend Developement</h3>
              <div className="Front_content">
                <article className="front_details">
                <FaHtml5 className="skills-icons" />
                <div><h4>HTML</h4>
                <small className="text-light">Experienced </small></div>
                </article>
                <article className="front_details">
                <FaCss3Alt className="skills-icons" />
                <div><h4>CSS</h4>
                <small className="text-light">Intermediate </small></div>
                </article>
                <article className="front_details">
                <FaJs className="skills-icons" />
                <div><h4>JavaScript</h4>
                <small className="text-light">Experienced </small></div>
                </article>
                <article className="front_details">
                <SiSass  className="skills-icons" />
                <div><h4>SASS</h4>
                <small className="text-light">Experienced </small></div>
                </article>
                <article className="front_details">
                <FaBootstrap className="skills-icons" />
                <div><h4>BootStrap</h4>
                <small className="text-light">Experienced </small></div>
                </article>
                <article className="front_details">
                <RiTailwindCssFill  className="skills-icons" />
                <div><h4>TailWind CSS</h4>
                <small className="text-light">Experienced </small></div>
                </article>
                <article className="front_details">
                <RiReactjsLine  className="skills-icons"/>
              <div><h4>React js</h4>
              <small className="text-light">Experienced </small></div>
                </article>
                <article className="front_details">
                <SiRedux className="skills-icons" />
                <div><h4>React Redux</h4>
                <small clasName="text-light">Experienced </small></div>
                </article>
              </div>

            </div>
{/* -------------------END OF FRONTEND___________________ */}

            <div className="backend_database">
              <h3>BackEnd Developement</h3>
              <div className="Back_content">
                <article className="back_details">
                <RiJavaLine className="skills-icons" />
                <div><h4>Java</h4>
                <small className="text-light">Experienced </small></div>
                </article>
                <article className="back_details">
                <DiMongodb className="skills-icons" />
                <div><h4>MongoDB</h4>
                <small className="text-light">Intermediate </small></div>
                </article>
                <article className="back_details">
                <SiFirebase  className="skills-icons" />
                <div><h4>FireBase</h4>
                <small className="text-light">Experienced </small></div>
                </article>

            </div>
            </div>

            {/* ----------END OF BACKEND_______________ */}
            
            <div className="other">
            <h3>Others</h3>
            <div className="other_content">
            <article className="other_details">
                <FaGithub className="skills-icons" />
               <div> <h4>GitHub</h4>
               <small className="text-light"> Projects Storing</small></div>
                </article>
            <article className="other_details">
                <IoLogoVercel className="skills-icons" />
                <div><h4>Vercel</h4>
                <small className="text-light">Deploying</small></div>
                </article>
            <article className="other_details">
                <SiNetlify className="skills-icons" />
                <div><h4>Netlify</h4>
                <small className="text-light">Deploying </small></div>
                </article>
            <article className="other_details">
                <FaFigma className="skills-icons" />
                <div><h4>Figma</h4>
                <small className="text-light"> UI-UX Designing </small></div>
                </article>
            <article className="other_details">
                <SiCanva  className="skills-icons" />
                <div><h4>Canva</h4>
                <small className="text-light"> UI-UX Designing </small></div>
                </article>
            <article className="other_details">
                <TbBrandPicsart  className="skills-icons" />
                <div><h4>Pics Art</h4>
                <small className="text-light"> UI-UX Designing </small></div>
                </article>
            </div>
            </div>
            
          </div>
      </div>

    </section>
  );
};

export default About;
