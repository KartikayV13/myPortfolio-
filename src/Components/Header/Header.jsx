import React from 'react'
import CTA from "./CTA"
import Me from "../../assets/Me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
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

        <a href="#contact" className='sceoll_down'>scroll down</a>

      </div>
    </header>
  )
}

export default Header