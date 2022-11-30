import React from 'react'
import Resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>CTA
        <a href={Resume} download>Download CV</a>
        <a href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA