import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Deva Surve",
    role: "Office Administrator",
    image: "https://images.unsplash.com/photo-1773332585861-72cf1558a6fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "A huge selling point for us was that we were going to be able to move quickly and in one place."
  },
  {
    id: 2,
    name: "Jessica Brown",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1752652015263-526e33534635?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Edumates truly helped us streamline our workflow and improved our team productivity."
  },
  {
    id: 3,
    name: "Sarah Khan",
    role: "HR Manager",
    image: "https://images.unsplash.com/photo-1758522483965-54af5d922b7c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "An amazing platform with great features. Highly recommended for growing teams."
  },
  {
    id: 4,
    name: "Anita Verma",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1758522487122-ed417686cf2e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "We were able to collaborate seamlessly and improve efficiency across departments."
  }
];

 export const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Swiper
        slidesPerView={1.2} // 🔥 1.5 card feel
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">

              <img
                src={item.image}
                alt={item.name}
                className="user-img"
              />

              <div className="card-content">
                <p>“{item.text}”</p>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};