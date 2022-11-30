import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/sydney.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sheena Bonilla</h1>
        <h5 className="text-light">Fullstack Software Developer</h5>
        <CTA />
      </div>

      <div className="me">
        <img src={ME} alt="me" />
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header> 
  )
}

export default Header