import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "./Testimonial.css";
import { NavLink } from "react-router-dom";

// const testimonials = [
//   {
//     id: 1,
//     name: "Deva Surve",
//     role: "Office Administrator",
//     image: "https://images.unsplash.com/photo-1773332585861-72cf1558a6fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "A huge selling point for us was that we were going to be able to move quickly and in one place."
//   },
//   {
//     id: 2,
//     name: "Jessica Brown",
//     role: "Marketing Manager",
//     image: "https://images.unsplash.com/photo-1752652015263-526e33534635?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Edumates truly helped us streamline our workflow and improved our team productivity."
//   },
//   {
//     id: 3,
//     name: "Sarah Khan",
//     role: "HR Manager",
//     image: "https://images.unsplash.com/photo-1758522483965-54af5d922b7c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "An amazing platform with great features. Highly recommended for growing teams."
//   },
//   {
//     id: 4,
//     name: "Anita Verma",
//     role: "Project Manager",
//     image: "https://images.unsplash.com/photo-1758522487122-ed417686cf2e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "We were able to collaborate seamlessly and improve efficiency across departments."
//   }
// ];
const testimonials = [
  {
    id: 1,
    title: "Big Fashion Sale",
    subtitle: "Up to 50% Off",
    description: "Discover the latest trends in men's and women's fashion.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    buttonText: "Shop Now",
    link: "/products/mens",
    bgColor: "#f5f5f5"
  },
  {
    id: 2,
    title: "Electronics Deals",
    subtitle: "Save Big on Gadgets",
    description: "Grab the best deals on headphones, watches & more.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    buttonText: "Explore",
    link: "/products/electronics",
    bgColor: "#eef7ff"
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Latest Collection 2026",
    description: "Fresh styles just dropped. Upgrade your wardrobe now.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    buttonText: "View Collection",
    link: "/products/womens",
    bgColor: "#fff3e6"
  },
  {
    id: 4,
    title: "Footwear Collection",
    subtitle: "Comfort Meets Style",
    description: "Step into comfort with our latest shoes collection.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    buttonText: "Shop Shoes",
    link: "/products/shoes",
    bgColor: "#f0fff4"
  }
];
export const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Swiper
        slidesPerView={1}
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
            slidesPerView: 1,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="testimonial-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="card-content">
                {/* <p>“{item.title}”</p>
                <h4>{item.name}</h4>
                <span>{item.role}</span> */}
                <h2>{item.title}</h2>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>

                <NavLink to={item.link} className="btn">
                  {item.buttonText}
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};