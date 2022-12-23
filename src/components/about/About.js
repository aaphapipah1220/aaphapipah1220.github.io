import React from 'react'
import './about.css'
import AAP from '../../assets/aap.jpg'
import {SiFuturelearn} from 'react-icons/si'
import {SiCodeproject} from 'react-icons/si'
import {TbMoodHappy} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={AAP} alt='Aap Hapipah about image' className='avatarImage' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card one'>
              <SiFuturelearn className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Studing Web Programming</small>
            </article>

            <article className='about__card two'>
              <SiCodeproject className='about__icon'/>
              <h5>Projects</h5>
              <small>I have Completed Projects Website</small>
            </article>

            <article className='about__card tree'>
              <TbMoodHappy className='about__icon'/>
              <h5>Hobby</h5>
              <small>Make a Website and Drawing</small>
            </article>
          </div>

          <p>
            Hallo, I'm Aap Hapipah. I'm a student of Information System in Universitas Bina Sarana Informatika. I ever studied Program Front End Web and React in Dicoding Indonesia.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
