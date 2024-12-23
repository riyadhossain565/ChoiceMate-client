import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slideImg1 from "../assets/slide/sliderImg1.jpg";
import slideImg2 from "../assets/slide/sliderImg2.jpg";
import slideImg3 from "../assets/slide/sliderImg3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Slider = () => {
  return (
    <div className="w-11/12 mx-auto px-6 my-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={slideImg1}
            title="Advanced Recommendations"
            subtitle="Using AI to suggest the best products tailored for you."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slideImg2}
            title="Effortless Shopping"
            subtitle="Save time by finding what you need, quickly and easily."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slideImg3}
            title="Built for You"
            subtitle="Personalized experiences to make your life easier."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;