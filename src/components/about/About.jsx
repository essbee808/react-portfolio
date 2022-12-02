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
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <MdSchool className="about_icon"/>
              <h5>Education</h5>
              <small>Flatiron School</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>Project Title</small>
            </article>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sequi nostrum deleniti aspernatur iure atque doloremque, beatae soluta aperiam culpa aliquam perspiciatis facere inventore, explicabo vel voluptate esse ut? At.
            </p>

            {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About