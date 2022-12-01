import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SlUserFemale} from 'react-icons/sl'
import {BiBook} from 'react-icons/bi'

// import {AiOutlineHome} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><SlUserFemale/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#testimonials"><SlUserFemale/></a>
      <a href="#contact"><SlUserFemale/></a>
   
    </nav>
  )
}

export default Nav