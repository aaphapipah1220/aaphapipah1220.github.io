import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FaUserAstronaut} from 'react-icons/fa'
import {FaSwatchbook} from 'react-icons/fa'
import {RiServiceFill} from 'react-icons/ri'
import {RiContactsFill} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <BiHome/>
      </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} >
        <FaUserAstronaut/>
      </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <FaSwatchbook/>
      </a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceFill/>
      </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <RiContactsFill/>
      </a>
    </nav>
  )
}

export default Nav