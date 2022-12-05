import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SHEENA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://twitter.com/sheenacodes" target="_blank"><FiTwitter /></a>
        <a href="https://www.instagram.com/sheena.io/" target="_blank"><FiInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Produksheenz. All Rights Reserved.</small>
      </div>
    </footer>

    
  )
}

export default Footer