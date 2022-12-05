import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SlUserFemale} from 'react-icons/sl'
import {BiBook} from 'react-icons/bi'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><SlUserFemale/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineWorkOutline/></a>
    </nav>
  )
}

export default Nav