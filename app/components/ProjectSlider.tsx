"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ProjectSlide from "./ProjectSlide";
import { projects } from "../data/projects";


export default function ProjectSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="w-full"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectSlide {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
