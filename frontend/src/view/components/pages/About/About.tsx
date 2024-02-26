import React, { useEffect } from "react";
import MySkills from "./MySkills";
import Education from "./Education";
import Testimonials from "./Testimonials";
import Aboutbg from "../../../assets/img/slider/Banner.png";
import Thumbs1 from "../../../assets/img/slider/Banner.png";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from "react-router-dom";
import { TabTitle } from "../../TabTitle";
function About() {
  const { pathname } = useLocation();
  TabTitle(pathname?.slice(1).toUpperCase() + ' - Diyorbek Xidirov');
  var aboutme = [
    {
      title: "Xidirov Diyorbek",
      subtitle: "Web/Backend/Android Developer",
      image: Aboutbg,
      address: "Tashkent and Samarkand, UZB",
      freelance: "Available",
      age: "18",
      birthday: "02.14.2006",
      degree: "Master",
      description:
        "Hello, my name is Xidirov Diyorbek and I am a FullStack developer. I have 3+ years of experience and I spend most of my time working on myself. During my work, my goal is to do quality work. Contact me for quality results.",
      interest: "Write code...",
      nationality: "UZB",
      study: "PDP IT ACADEMY",
      email: "xidirovdiyorbek6@gmail.com",
      phone: "+998 99 026 07 46",
    },
  ];
  return (
    <>
      <div id="about" className="tokyo_tm_section animate">
        <div className="container">
          {aboutme.map((about: any, i) => (
            <div className="tokyo_tm_about" key={i}>
              <div className="tokyo_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>About</span>
                    <h3>About Me</h3>
                  </div>
                </div>
              </div>
              <div className="top_author_image">
                <img src={Thumbs1} className={"thumbs_"} alt="Error..." />
                <LazyLoadImage
                  alt={about.alt}
                  effect={"blur"}
                  src={about.image}
                />
              </div>
              <div className="about_title">
                <h3>{about.title}</h3>
                <span>{about.subtitle}</span>
              </div>
              <div className="about_text">
                <p>{about.description}</p>
              </div>
              <div className="tokyo_tm_short_info">
                <div className="left">
                  <div className="tokyo_tm_info">
                    <ul>
                      <li>
                        <span>Birthday:</span>
                        <span>{about.birthday}</span>
                      </li>
                      <li>
                        <span>Age:</span>
                        <span>{about.age}</span>
                      </li>
                      <li>
                        <span>Address:</span>
                        <span>{about.address}</span>
                      </li>
                      <li>
                        <span>Email:</span>
                        <span>
                          <a href="email:xidirovdiyorbek6@gmail.com">
                            {about.email}
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>Phone:</span>
                        <span>
                          <a href={`tel:${about.phone}`}>{about.phone}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right">
                  <div className="tokyo_tm_info">
                    <ul>
                      <li>
                        <span>Nationality:</span>
                        <span>{about.nationality}</span>
                      </li>
                      <li>
                        <span>Study:</span>
                        <span>{about.study}</span>
                      </li>
                      <li>
                        <span>Degree:</span>
                        <span>{about.degree}</span>
                      </li>
                      <li>
                        <span>Interest:</span>
                        <span>{about.interest}</span>
                      </li>
                      <li>
                        <span>Freelance:</span>
                        <span>{about.freelance}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tokyo_tm_button" data-position="left">
                <a href="img/cv/XidirovDiyorbekResume.pdf" download>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <MySkills />
        <Education />
        <Testimonials />
      </div>
    </>
  );
}

export default About;
