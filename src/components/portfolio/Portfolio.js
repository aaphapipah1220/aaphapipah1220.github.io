import React from "react";
import "./portfolio.css";
import HTMLCSS from "../../assets/htmlcss.png";
import NOTESAPP from "../../assets/notesapp.png";
import RESTAURANT from "../../assets/restaurant.png";
import SMARTFAMILY from "../../assets/smartfamily.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG1 from "../../assets/portfolio1.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: IMG3,
    title: "Antares",
    github: "https://antares.idpay.co.id/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Blog",
    github: "https://github.com/aaphapipah1220/Blog",
  },
  {
    id: 3,
    image: IMG3,
    title: "Restaurant Catalogue",
    github: "https://github.com/aaphapipah1220/KatalogRestaurant",
  },
  {
    id: 4,
    image: IMG3,
    title: "Smart Family",
    github: "https://github.com/faisalalm01/frontend-parentingApp",
  },
  {
    id: 5,
    image: IMG3,
    title: "Aducation",
    github: "https://github.com/aaphapipah1220/AducationApp",
  },
  {
    id: 6,
    image: IMG3,
    title: "Another Project",
    github: "https://github.com/aaphapipah1220?tab=repositories",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work and Study</h5>
      <h2>Portfolio</h2>

      <div
        className="container portfolio__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, github }) => {
          return (
            <div key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  src={image}
                  alt={title}
                  className="avatar__image-portfolio"
                />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Open
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
