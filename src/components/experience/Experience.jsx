import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill /> 
              <div>
                <h4>HTML</h4>
              </div>
              
            </article>

            <article className="experience_details">
              <BsPatchCheckFill /> 
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill /> 
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill /> 
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill /> 
              <h4>React.js</h4>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill /> 
              <h4>Redux.js</h4>
            </article>
        </div>
      {/* END OF FRONTEND */}
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill /> 
              <div>
                <h4>Ruby</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill /> 
              <div>
                <h4>Ruby on Rails</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill /> 
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 