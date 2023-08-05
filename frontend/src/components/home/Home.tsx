import React from "react";
import MiniHome from "./MiniHome";
import Preloader from "../detal/preloader";
import ScrollTop from "../detal/scroll-top";
import MiniAbout from "../about/MiniAbout";
import Speciality from "../speciality/Speciality";
import Portfolio from "../portfolio/Portfolio";
import "./home.css";
import RoadMap from "../roadmap/RoadMap";
import Team from "../team/Team";
import Testimonials from "../testimonials/Testimonials";
import FAQs from "../faqs/FAQs";
import Create from "../create/Create";
function Home() {
  return (
    <div className="home-main header-fixed">
      <div className="wrapper">
        {/* <Preloader /> */}
        {/* <!-- Banner --> */}
        <MiniHome />
        {/* <!-- About --> */}
        <MiniAbout />
        <Speciality />
        <Portfolio />
        <RoadMap />
        <Team />
        <Testimonials />
        <FAQs />
        <Create />

        <ScrollTop />
      </div>
    </div>
  );
}

export default Home;
