import React from 'react'
import './services.css'
import {CgCheck} from 'react-icons/cg'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <CgCheck className='service__list-icon' />
              <p>HTML & CSS Website</p>
            </li>
            <li>
              <CgCheck className='service__list-icon' />
              <p>Smart Family Website</p>
            </li>
            <li>
              <CgCheck className='service__list-icon' />
              <p>NotesApp Website</p>
            </li>
            <li>
              <CgCheck className='service__list-icon' />
              <p>Restaurant Catalogue Website</p>
            </li>
            <li>
              <CgCheck className='service__list-icon' />
              <p>Football Players Website</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services