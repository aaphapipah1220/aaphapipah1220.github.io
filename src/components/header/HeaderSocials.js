import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/aap-hapipah-87b3b3179/' target='_blank'>
            <BsLinkedin/>
        </a>
        <a href='https://github.com/aaphapipah1220' target='_blank'>
            <BsGithub/>
        </a>
        <a href='https://www.instagram.com/hpiphap/' target='_blank'>
            <FaInstagramSquare/>
        </a>
        
    </div>
  )
}

export default HeaderSocials