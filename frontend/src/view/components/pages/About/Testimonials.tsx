import React from "react";
import Testimonial1 from "../../../assets/img/testimonials/1.jpg";
import Testimonial2 from "../../../assets/img/testimonials/2.jpg";
import Testimonial3 from "../../../assets/img/testimonials/3.jpg";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  var users = [
    {
      id: 1,
      title:
        "Beautiful design and great, fast response with support. Highly recommend. Thanks Diyorbek!",
      image: Testimonial1,
      author: "Abdulaziz Sharipov",
      specialist: "Project Manager",
    },
    {
      id: 2,
      title:
        "I recommend, everything is great, I'm happy !",
      image: Testimonial2,
      author: "Abdumutal Abdullayev",
      specialist: "Project Manager",
    },
    {
      id: 3,
      title:
        "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
      image: Testimonial3,
      author: "Sanjar",
      specialist: "Freelancer",
    }
  ];
  return (
    <>
      <div className="tokyo_tm_testimonials">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Testimonials</h3>
          </div>
          <div className="list">
            <ul>
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 3000,disableOnInteraction: false, }}
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="mySwiper"
              >
                {users.map((user: any, i: any) => (
                  <SwiperSlide key={i}>
                    <li>
                      <div className="list_inner">
                        <div className="text">
                          <p>{user.title}</p>
                        </div>
                        <div className="details">
                          <div className="image">
                            <div
                              className="main"
                              style={{ backgroundImage: `url(${user.image})` }}
                            ></div>
                          </div>
                          <div className="info">
                            <h3>{user.author}</h3>
                            <span>{user.specialist}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ul>
          </div>
          <div className="list">
            <ul className="owl-carousel">
              {users.map((user: any, i: any) => (
                <li key={i}>
                  <div className="list_inner">
                    <div className="text">
                      <p>{user.title}</p>
                    </div>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          style={{ backgroundImage: `url(${user.image})` }}
                        ></div>
                      </div>
                      <div className="info">
                        <h3>{user.author}</h3>
                        <span>{user.specialist}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
