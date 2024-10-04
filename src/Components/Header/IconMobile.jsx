import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";


const IconMobile = () => {
  return (
    <div className='header_Mobile_socials'>
    <Link to="" target="blank" className='mobile_Social_icon'><FaLinkedin/></Link>
    <Link to="https://github.com/KartikayV13"  target="blank" className='mobile_Social_icon' ><FaGithub/></Link>
    <Link to="https://www.hackerrank.com/profile/varunkartikay031"  target="blank" className='mobile_Social_icon' ><SiHackerrank/></Link>
    <Link to="https://www.freecodecamp.org/KartikayVarun13"  target="blank" className='mobile_Social_icon' ><FaFreeCodeCamp /></Link>
        </div>
  )
}

export default IconMobile