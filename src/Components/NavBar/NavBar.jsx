import React from 'react'
import { useState } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { RiKakaoTalkLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const NavBar = () => { 

const [activeNav , setActiveNav] = useState('/')

  return (
   <nav>
    <Link className={`nav_icons  ${activeNav==="/"? "active" : ""}`} onClick={() => setActiveNav('/')} to="/"><IoHomeOutline /></Link>
    <a href="#about" className={`nav_icons ${activeNav==="#about"? "active" : ""}`} onClick={() => setActiveNav("#about")}><FaRegCircleUser /></a>
    <Link  className={`nav_icons ${activeNav==="/SkillsandEducation"? "active" : ""}`} onClick={() => setActiveNav('/SkillsandEducation')} to="/SkillsandEducation"><IoSchoolOutline /></Link>
    <Link className={`nav_icons  ${activeNav==="/Projects"? "active" : ""}`} onClick={() => setActiveNav('/Projects')} to="/Projects"><GrProjects /></Link>
    <Link className={`nav_icons  ${activeNav==="/Contact"? "active" : ""}`} onClick={() => setActiveNav('/Contact')} to="/Contact"><RiKakaoTalkLine  /></Link>
   </nav>
  )
}

export default NavBar