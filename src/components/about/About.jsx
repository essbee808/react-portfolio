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
              <small>10+ years of professional work experience</small>
            </article>

            <article className="about_card">
              <MdSchool className="about_icon"/>
              <h5>Education</h5>
              <small>Relevant courses</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Technical Projects</h5>
              <small>3 passion projects</small>
            </article>
            {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste doloribus expedita, exercitationem porro repudiandae dolorem facilis magni labore libero architecto quasi voluptates nostrum veniam. Dolore iure nobis quia dolores sunt nemo eaque autem quas rerum, atque eligendi ex dolorem cum voluptatibus voluptas rem a similique maxime sit voluptatem nostrum officiis?
          </p>
          <a href="https://calendly.com/sheena-bonilla/" target="_blank">I'd love to meet you!</a>
        </div>
        
      </div>
    </section>
  )
}

export default About