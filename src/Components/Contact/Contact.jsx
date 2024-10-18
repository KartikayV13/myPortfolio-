import React, { useRef, useState } from 'react';
import "./Contact.css"
import Professional from './Professional'
import Social from './Social'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com"


const Contact = () => {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_boyyo1l', 'template_w7rf9rt', form.current, 'CUB040N3sdQVjW2Ik')
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};


const [pmedia , setPMedia] = useState(false)
const [smedia , setSMedia] = useState(false)


  return (
   <section id="contact" className='section_contact'>
   <h1>Kartikay varun</h1>
        <br />
        <h2 className='conatct_heading'>--CONTACT--</h2>

        <div className="container contact_container">

<div className='media  hide-on-mobile'>
  <div className="professional">
    <Professional/>
  </div>
  <div className="social hide-on-mobile">
    <Social/>
  </div>
</div>



{/*----------Mobile------------------*/}

<div className='only-mobile hide-on-pc-tablet'>
<div onClick={() => setPMedia(!pmedia)}  className="professional-mobile">
  <div  className='prof-heading'>
  <h3>Professional Media</h3>
  <span> {pmedia? "-" : "+"} </span>
  </div>

  <div>
    {pmedia && <Professional/>}
  </div>
</div>

<div onClick={() => {setSMedia(!smedia)}} className="social-mobile">
  <div className="social-heading">
  <h3>Social Media</h3>
  <span >{smedia ? "-" : "+"}</span>
  </div>

  <div>
    {smedia && <Social/>}
    </div>
</div>
</div>

<div className='contact_form'>

  <div className='contact_box'>
<article className='contact_option'>
<MdOutlineMailOutline className="contact_icons" />
<h4>Email</h4>
<a href="mailto:varunkartikay0325@gmail.com" target='_blank'>Send a message</a>
</article>

<article className='contact_option'>
<FaWhatsapp  className="contact_icons"/>
<h4>WhatsApp</h4>
<a href="https://api.whatsapp.com/send?phone=+918887894226" target='_blank'>Send a message</a>
</article>
  </div>

  <form ref={form}  onSubmit={sendEmail} className='lets_talk'>
    <input type="text" name='name' placeholder='Your Full Name' required />
    <input type="email" name='email' placeholder='Email' required />
    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
    <button type='submit' className=' btn btn-primary talk-btn'>Send Message</button>
  </form>
</div>


        </div>
   </section>


  )
}

export default Contact