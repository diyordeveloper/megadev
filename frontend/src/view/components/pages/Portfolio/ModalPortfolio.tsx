// import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Thumbs1 from "../../../assets/img/thumbs/4-2.jpg";
import Thumbs3 from "../../../assets/img/thumbs/40-25.jpg";
import irbis1 from "../../../assets/img/portfolio/irbis1.png";
import irbis2 from "../../../assets/img/portfolio/irbis2.png";
import irbis3 from "../../../assets/img/portfolio/irbis3.png";
import irbis4 from "../../../assets/img/portfolio/irbis4.png";
import tefal1 from "../../../assets/img/portfolio/tefal1.png";
import tefal2 from "../../../assets/img/portfolio/tefal2.png";
import tefal3 from "../../../assets/img/portfolio/tefal3.png";
import tefal4 from "../../../assets/img/portfolio/tefal4.png";
// import Portfolio2 from "../../../assets/img/portfolio/2.jpg";
// import Portfolio3 from "../../../assets/img/portfolio/3.jpg";
// import Portfolio4 from "../../../assets/img/portfolio/4.jpg";
// import Portfolio5 from "../../../assets/img/portfolio/5.jpg";
// import Portfolio6 from "../../../assets/img/portfolio/6.jpg";
// import Portfolio7 from "../../../assets/img/portfolio/7.jpg";
// import Portfolio8 from "../../../assets/img/portfolio/8.jpg";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
function ModalPortfolio() {
  const data = [
    {
      id: 1,
      title: "Ave Simone",
      category: "Detail",
      image: irbis1,
      images: [irbis2, irbis3, irbis4],
      description: `We live in a world where we need to move quickly and iterate on
      our ideas as flexibly as possible. Building mockups strikes the
      ideal balance between true-life representation of the end
      product and ease of modification.`,
      description2: `Mockups are useful both for the creative phase of the project -
      for instance when you're trying to figure out your user flows or
      the proper visual hierarchy - and the production phase when they
      will represent the target product. Making mockups a part of your
      creative and development process allows you to quickly and
      easily ideate.`,
    },
    {
      id: 2,
      title: "Eshmat Toshmat",
      category: "Telegram",
      image: tefal1,
      images: [tefal2, tefal3, tefal4],
      description: `We live in a world where we need to move quickly and iterate on
      our ideas as flexibly as possible. Building mockups strikes the
      ideal balance between true-life representation of the end
      product and ease of modification.`,
      description2: `Mockups are useful both for the creative phase of the project -
      for instance when you're trying to figure out your user flows or
      the proper visual hierarchy - and the production phase when they
      will represent the target product. Making mockups a part of your
      creative and development process allows you to quickly and
      easily ideate.`,
    },
  ];
  const { id } = useParams();
  console.log(id);
  var sort = data.filter((f: any) => f.id == id);
  var item = sort[0];
  console.log(item);

  return (
    <>
      <div className="tokyo_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <Link to="/portfolio">
              <i className="icon-cancel"></i>
            </Link>
          </div>
          <div className="description_wrap">
            <div className="details_all_wrap">
              <div className="popup_details">
                <div className="top_image">
                  <img src={Thumbs1} alt="Error..." />
                  <LazyLoadImage effect={"blur"} src={item.image} />
                </div>
                <div className="portfolio_main_title">
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      We live in a world where we need to move quickly and
                      iterate on our ideas as flexibly as possible. Building
                      mockups strikes the ideal balance between true-life
                      representation of the end product and ease of
                      modification.
                    </p>
                    <p>
                      Mockups are useful both for the creative phase of the
                      project - for instance when you're trying to figure out
                      your user flows or the proper visual hierarchy - and the
                      production phase when they will represent the target
                      product. Making mockups a part of your creative and
                      development process allows you to quickly and easily
                      ideate.
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Client</span>
                        <span>Alvaro Morata</span>
                      </li>
                      <li>
                        <span className="first">Category</span>
                        <span>
                          <a href="#">Detail</a>
                        </span>
                      </li>
                      <li>
                        <span className="first">Date</span>
                        <span>October 22, 2022</span>
                      </li>
                      <li>
                        <span className="first">Share</span>
                        <ul className="share">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-twitter-squared"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-behance-squared"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-linkedin-squared"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="additional_images">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src={Thumbs3} alt="Error....!!!" />
                          <div
                            className="main"
                            style={{
                              // @ts-ignore
                              backgroundImage: `url(${item.images[0]})`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src={Thumbs3} alt="Error....!!!" />
                          <div
                            className="main"
                            style={{
                              // @ts-ignore
                              backgroundImage: `url(${item.images[0]})`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src={Thumbs3} alt="Error....!!!" />
                          <div
                            className="main"
                            style={{
                              // @ts-ignore
                              backgroundImage: `url(${item.images[0]})`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalPortfolio;
