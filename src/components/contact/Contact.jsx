import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TfiCalendar} from 'react-icons/tfi'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>sheena.myb@gmail.com</h5>
            <a href="mailto:sheena.myb@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <TfiCalendar />
            <h4>Calendly</h4>
            <h5>sheena.myb@gmail.com</h5>
            <a href="https://calendly.com/sheena-bonilla" target="_blank">Schedule a call</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='name' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact