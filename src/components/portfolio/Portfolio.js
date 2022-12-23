import React from 'react'
import './portfolio.css'
import HTMLCSS from '../../assets/htmlcss.png'
import NOTESAPP from '../../assets/notesapp.png'
import RESTAURANT from '../../assets/restaurant.png'
import SMARTFAMILY from '../../assets/smartfamily.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG1 from '../../assets/portfolio1.jpg'

const data = [
  {
      id: 1,
      image: HTMLCSS,
      title: 'Website Basic (HTML & CSS)',
      github: 'https://github.com/aaphapipah1220/submission1'
  },
  {
      id: 2,
      image: NOTESAPP,
      title: 'NotesApp Website',
      github: 'https://github.com/aaphapipah1220/notesApps'
  },
  {
      id: 3,
      image: RESTAURANT,
      title: 'Restaurant Catalogue Website',
      github: 'https://github.com/aaphapipah1220/KatalogRestaurant'
  },
  {
      id: 4,
      image: SMARTFAMILY,
      title: 'Smart Family Website',
      github: 'https://github.com/faisalalm01/frontend-parentingApp'
  },
  {
      id: 5,
      image: IMG3,
      title: 'Football Players Website',
      github: 'https://github.com/aaphapipah1220/playersApps'
  },
  {
      id: 6,
      image: IMG1,
      title: 'Another Project/Website',
      github: 'https://github.com/aaphapipah1220?tab=repositories'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work and Study</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} className='avatar__image-portfolio' />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio