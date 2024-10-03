import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>

        <a href="https://github.com/KartikayV13" target='blank'><FaLinkedin/></a> {/*add my linkedin profile  */}
        <a href="https://github.com/KartikayV13" target='blank'><FaGithub/></a> {/*add my github profile  */}
        <a href="https://github.com/KartikayV13" target='blank'><SiHackerrank/></a> {/*add my HackerRank profile  */}
        <a href="https://github.com/KartikayV13" target='blank'><FaFreeCodeCamp/></a> {/*add my FreeCodeCamp profile  */}
    </div>
  )
}

export default HeaderSocials