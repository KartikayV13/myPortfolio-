import React from 'react'
import "./Contact.css"
import Professional from '../Projects/Professional'
import Social from '../Projects/Social'


const Contact = () => {
  return (
   <section id="contact" className='section_contact'>
   <h1>Kartikay varun</h1>
        <br />
        <h2 className='conatct_heading'>--CONTACT--</h2>

        <div className="container contact_container">

<div className='media'>
  <div className="professional">
    <Professional/>
  </div>
  <div className="social">
    <Social/>
  </div>
</div>

        </div>
   </section>


  )
}

export default Contact