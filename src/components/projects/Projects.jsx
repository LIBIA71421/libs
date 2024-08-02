import React from 'react'
import "./projects.css"
import { Data } from './Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <section className="project container section" id='projects'>
        <h2 className="section_title">My Projects</h2>
        <span className="section_subtitle">Take a look</span>
        
        <Swiper className="project_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="project_card" key={id}>
                        <img src={image} alt="" className='project_img' />
                        <h3 className="project_name">{title}</h3>
                        <p className="project_description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Projects
