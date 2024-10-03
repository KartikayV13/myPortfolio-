import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
<Link to="" target="blank"><FaLinkedin/></Link>
<Link to="https://github.com/KartikayV13"  target="blank"><FaGithub/></Link>
<Link to="https://www.hackerrank.com/profile/varunkartikay031"  target="blank"><SiHackerrank/></Link>
<Link to="https://www.freecodecamp.org/KartikayVarun13"  target="blank"><FaFreeCodeCamp /></Link>

    </div>
  )
}

export default HeaderSocials