import React from "react";

function a() {
  return (
    <>
      <li className="vimeo">
        <div className="inner">
          <div
            className="entry tokyo_tm_portfolio_animation_wrap"
            data-title="Teresa Butler"
            data-category="Vimeo"
          >
            <a className="popup-vimeo" href="https://vimeo.com/337293658">
              <img src="img/thumbs/1-1.jpg" alt="Error....!!!" />
              <div
                className="abs_image"
                style={{
                  backgroundImage: `url(${`img/portfolio/5.jpg`})`,
                }}
              ></div>
            </a>
          </div>
        </div>
      </li>
      <li className="youtube">
        <div className="inner">
          <div
            className="entry tokyo_tm_portfolio_animation_wrap"
            data-title="Ashley Flores"
            data-category="Youtube"
          >
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img src="img/thumbs/-1.jpg" alt="Error....!!!" />
              <div
                className="abs_image"
                style={{
                  backgroundImage: `url(${`img/portfolio/6.jpg`})`,
                }}
              ></div>
            </a>
          </div>
        </div>
      </li>
      <li className="soundcloud">
        <div className="inner">
          <div
            className="entry tokyo_tm_portfolio_animation_wrap"
            data-title="Derek Smith"
            data-category="Soundcloud"
          >
            <a
              className="soundcloude_link mfp-iframe audio"
              href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
            >
              <img src="img/thumbs/1-1.jpg" alt="Error....!!!" />
              <div
                className="abs_image"
                style={{
                  backgroundImage: `url(${`img/portfolio/4.jpg`})`,
                }}
              ></div>
            </a>
          </div>
        </div>
      </li>
      <li className="image">
        <div className="inner">
          <div
            className="entry tokyo_tm_portfolio_animation_wrap"
            data-title="Gloria Jenkins"
            data-category="Image"
          >
            <a className="zoom" href="img/portfolio/3.jpg">
              <img src="img/thumbs/1-1.jpg" alt="Error....!!!" />
              <div
                className="abs_image"
                style={{
                  backgroundImage: `url(${`img/portfolio/3.jpg`})`,
                }}
              ></div>
            </a>
          </div>
        </div>
      </li>
      <li className="detail">
        <div className="inner">
          <div
            className="entry tokyo_tm_portfolio_animation_wrap"
            data-title="Selena Gomez"
            data-category="Detail"
          >
            <a className="popup_info" href="#">
              <img src="img/thumbs/1-1.jpg" alt="Error....!!!" />
              <div
                className="abs_image"
                style={{
                  backgroundImage: `url(${`img/portfolio/7.jpg`})`,
                }}
              ></div>
            </a>
          </div>
        </div>

        <div className="details_all_wrap">
          <div className="popup_details">
            <div className="main_details">
              <div className="textbox">
                <p>
                  We live in a world where we need to move quickly and iterate
                  on our ideas as flexibly as possible. Building mockups strikes
                  the ideal balance between true-life representation of the end
                  product and ease of modification.
                </p>
                <p>
                  Mockups are useful both for the creative phase of the project
                  - for instance when you're trying to figure out your user
                  flows or the proper visual hierarchy - and the production
                  phase when they will represent the target product. Making
                  mockups a part of your creative and development process allows
                  you to quickly and easily ideate.
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
                          <i className="icon-facebook-squared"></i>
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
                      <img src="img/thumbs/4-2.jpg" alt="Error....!!!" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${`img/portfolio/1.jpg`})`,
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="Error....!!!" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${`img/portfolio/2.jpg`})`,
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="Error....!!!" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${`img/portfolio/3.jpg`})`,
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default a;
