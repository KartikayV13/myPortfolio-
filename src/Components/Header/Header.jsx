import React from 'react'
import "./header.css"
import CTA from "./CTA"
import Me from "../../assets/Me.png"
import HeaderSocials from './HeaderSocials'
import About from "../About/About"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Kartikay varun</h1>
        <h5 className='text-light'>Frontend Develper</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        
        <Link to="/Contact"> <span className='scroll_down'>Scroll Down</span></Link>
        
      </div>
    </header>
    <About/>
    </>
  )
}

export default Header