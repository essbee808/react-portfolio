import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TfiCalendar} from 'react-icons/tfi'
import { useRef } from 'react'; 
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8b8o06q', 'template_nup1hny', form.current, '-Fyq1bupIBAfjxLqM')
  
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <a href="mailto:sheena.myb@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <TfiCalendar className="contact_option-icon"/>
            <h4>Calendly</h4>
            <a href="https://calendly.com/sheena-bonilla" target="_blank">Schedule a call</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact