import React from 'react'
import './about.css'
import ME from '../../assets/sydney.jpg'
import {FaAward} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>Software Development</small>
            </article>

            <article className="about_card">
              <MdSchool className="about_icon"/>
              <h5>Education</h5>
              <small>Flatiron School</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Technical Projects</h5>
              <small>Looking For</small><br/>
              <small>CaliGolf</small>
            </article>
            {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
          </div>
          <p>
            Aloha! I'm Sheena, a full-stack software developer based out of Los Angeles, CA. 
            
          </p>
          <a href="https://calendly.com/sheena-bonilla/" target="_blank">I'd love to meet you!</a>
        </div>
        
      </div>
    </section>
  )
}

export default About