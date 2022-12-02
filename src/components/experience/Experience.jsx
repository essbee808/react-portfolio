import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend</h3>
        </div>
        <div className="experience_backend">
          <h3>Backend</h3>
        </div>
      </div>
    </section>
  )
}

export default Experience