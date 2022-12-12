import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProjectSection.css";

import data from "../../assests/data/project";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import LineGradient from "../../hooks/LineGradient";
import { Link } from "react-router-dom";

SwiperCore.use([EffectCoverflow, Pagination]);

const Projects = () => {
  return (
    <section id="projects">
      <div className="main-testimonials-wrapper mt-24 w-5/6 mx-auto">
        <p className="font-playfair font-semibold text-4xl text-center">
          <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center my-5">
          <LineGradient width="w-[120px]" />
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 6,
            slideShadows: true,
          }}
          // pagination={true}
        >
          <div>
            {data.map((item, key) => (
              <SwiperSlide>
                <img src={item.img} alt={item.name} />
                <h3 className="mt-5">{item.name}</h3>
                <p className="my-5">{item.desc}</p>
                {/* <a href="#">Live Site</a> */}
                <div className="swiperLInk">
                  <a href={item.liveLink} target="_blank">
                    Live Site
                  </a>
                  <Link to={`/details/${item.id}`}>Show More</Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <div className="quote-parent">
          <div className="quote n-box1 flex-with-center">
            <h1>Quote?!</h1>
            <div className="quote-content">
              <p>“ Knowledge is power.” </p>
            </div>
          </div>
        </div>
      </div>
      <LineGradient></LineGradient>
    </section>
  );
};

export default Projects;
