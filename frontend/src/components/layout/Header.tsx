import React from "react";
import Logo from "../../assets/images/logo/logo.png";
function Header() {
  return (
    <>
      <header id="header_main" className="header">
        <div className="container big">
          <div className="row">
            <div className="col-12">
              <div className="header__body">
                <div className="header__logo">
                  <a href="index-2.html">
                    <img
                      id="site-logo"
                      src={Logo}
                      alt="Peson"
                      width="160"
                      height="38"
                      data-retina="assets/images/logo/logo@2x.png"
                      data-width="160"
                      data-height="38"
                    />
                  </a>
                </div>

                <div className="header__right">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item menu-item-has-children menu-current-item">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li className="menu-item current-item">
                            <a href="index-2.html">Home v1</a>
                          </li>
                          <li className="menu-item">
                            <a href="home-v2.html">Home v2</a>
                          </li>
                          <li className="menu-item">
                            <a href="home-v3.html">Home v3</a>
                          </li>
                          <li className="menu-item">
                            <a href="cardcarousel.html">Card Carousel</a>
                          </li>
                          <li className="menu-item">
                            <a href="zigzagcarousel.html">Zigzag Carousel</a>
                          </li>
                          <li className="menu-item">
                            <a href="coverflowcarousel.html">
                              Coverflow Carousel
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="itemcarousel.html">Item Carousel</a>
                          </li>
                          <li className="menu-item">
                            <a href="3dcarousel.html">3D Carousel</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="#">Explore</a>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="nft.html">NFTs</a>
                          </li>
                          <li className="menu-item">
                            <a href="blog.html">Blog List</a>
                          </li>
                          <li className="menu-item">
                            <a href="blog-details.html">Blog Details</a>
                          </li>

                          <li className="menu-item">
                            <a href="vision-mission.html">Visions & Mission</a>
                          </li>
                          <li className="menu-item">
                            <a href="help-center.html">Help Center</a>
                          </li>
                          <li className="menu-item">
                            <a href="parti-asset.html">Participants & Assets</a>
                          </li>
                          <li className="menu-item">
                            <a href="advisor.html">Advisors & Backers</a>
                          </li>
                          <li className="menu-item">
                            <a href="partner.html">Partners & Investors</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="about.html">About</a>
                      </li>
                      <li className="menu-item">
                        <a href="roadmap.html">RoadMap</a>
                      </li>
                      <li className="menu-item">
                        <a href="team.html">Team</a>
                      </li>
                      <li className="menu-item">
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="mobile-button">
                    <span></span>
                  </div>
                </div>

                <div className="header__action">
                  <a href="#" className="search-btn">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.7659"
                        cy="9.76639"
                        r="8.98856"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.0176 16.4849L19.5416 19.9997"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="contact.html" className="action-btn">
                    <span>Join Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
