import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sheena Bonilla</h1>
        <h5 className="text-light">Fullstack Software Developer</h5>
        <CTA />
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header> 
  )
}

export default Header