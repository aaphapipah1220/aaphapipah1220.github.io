import React from 'react'
import './header.css'
import CTA from './CTA'
import HAPIPAH from '../../assets/hapipah.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Aap Hapipah</h1>
        <h5 className='text-light'>Keep study, say thanks and don't forget to be happy.</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={HAPIPAH} alt='Aap Hapipah' className='avatarImage' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
