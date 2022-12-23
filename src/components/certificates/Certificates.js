import React from 'react';
import './certificates.css';
import CERTIFICATE from '../../assets/certificate.png'
import {HiExternalLink} from 'react-icons/hi'

const certificate = [
  {
      id: 7,
      image: CERTIFICATE,
      title: 'Front-End Web Developer Expert',
      link: 'https://drive.google.com/file/d/1wW3OiPMVz9-8w80HY7salYYS9VNdfNVO/view'
  },
  {
      id: 8,
      image: CERTIFICATE,
      title: 'Fundamental Aplikasi Web dengan React',
      link: 'https://drive.google.com/file/d/1Ex58m6waTBrtledQUh4bidQpml6OXReX/view'
  },
  {
      id: 9,
      image: CERTIFICATE,
      title: 'Aplikasi Web dengan React',
      link: 'https://drive.google.com/file/d/1GDa2u5wWCt8e_DRaB8_L42CIEMIL6YdM/view'
  },
  {
      id: 10,
      image: CERTIFICATE,
      title: 'Meniti Karir sebagai Software Development',
      link: 'https://drive.google.com/file/d/1ggn3znCpi5qq-bhCtIiQbO3El9lbxzTu/view'
  },
  {
      id: 11,
      image: CERTIFICATE,
      title: 'Fundamental Front-End Web Development',
      link: 'https://drive.google.com/file/d/1V7ovA9jMHzdMdKNhKXDcPr8RtHo-dOv5/view'
  },
  {
      id: 12,
      image: CERTIFICATE,
      title: 'Dasar Pemrograman Web',
      link: 'https://drive.google.com/file/d/1tamZB6TfS5yMt_qZPyfDY46f9OCHaIgo/view'
  },
  {
      id: 13,
      image: CERTIFICATE,
      title: 'GIT dengan Github',
      link: 'https://drive.google.com/file/d/1XpZo2LFBYDyO5o8ivVaaZJlm3xKN75_M/view'
  },
  {
      id: 14,
      image: CERTIFICATE,
      title: 'Dasar Pemrograman',
      link: 'https://drive.google.com/file/d/1ss6O-twEsFCsvteM6wAzxXy8wjPBBvUf/view'
  },
  {
      id: 15,
      image: CERTIFICATE,
      title: 'Logika Pemrograman',
      link: 'https://drive.google.com/file/d/1sXKNEPQRUNLDVWJILVqhFSBQjhcIifXL/view'
  },
]

const Certificates = () => {
  return (
    <section id='certificates'>
      <h5>My certificates</h5>
      <h2>Certificate</h2>

      <div className='container certificate__container'>
        {
          certificate.map(({id, image, title, link}) => {
            return (
              <article key={id} className='certificate__item'>
                <div className='certificate__item-cta'>
                  <a href={link} className='btn' target='_blank'><HiExternalLink/></a>
                </div>
                <div className='certificate__item-image'>
                  <img src={image} alt={title} className='avatar__image-certificate' />
                </div>
                <h3>{title}</h3>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Certificates;
