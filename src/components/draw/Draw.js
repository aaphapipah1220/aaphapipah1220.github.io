import React from "react";
import "./draw.css";
import ROSE from "../../assets/rose.jpg";
import CAT from "../../assets/cat.jpg";
import WING from "../../assets/wing.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const art = [
  {
    id: 21,
    image: CAT,
    title: "Cat Flowers",
    text: "Cita-cita itu tidak akan mampu menjadi satu kenyataan jika tidak diiringi dengan usaha yang berterusan",
    writer: "-Seorang Penulis-",
  },
  {
    id: 22,
    image: ROSE,
    title: "Rose Blue Red",
    text: "Abaikan saja orang lain yang meremehkan usaha mu. Tetapi, jangan pernah sesekali kamu meremehkan diri mu sendiri",
    writer: "-Seorang Penulis-",
  },
  {
    id: 223,
    image: WING,
    title: "Buterflys wing",
    text: "Tidak ada rahasia untuk berjaya. Ia adalah hasil dari persediaan, kerja keras, dan belajar dari kegagalan.",
    writer: "-Seorang Penulis-",
  },
];

const Draw = () => {
  return (
    <section id="draw">
      <h5>My Art</h5>
      <h2>Drawing</h2>

      <Swiper
        className="container draw__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {art.map(({ id, image, title, text, writer }) => {
          return (
            <SwiperSlide key={id} className="draw">
              <div className="draw__avatar">
                <img src={image} alt={title} className="avatar__image-draw" />
              </div>
              <h3>{title}</h3>
              <h5 className="text">{text}</h5>
              <small className="writer">{writer}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Draw;
