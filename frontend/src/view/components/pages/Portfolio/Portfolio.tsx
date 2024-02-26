// @ts-ignore
import { Link, Outlet, useLocation } from "react-router-dom";
import Thumb1 from "../../../assets/img/thumbs/1-1.jpg";
import Portfolio4 from "../../../assets/img/portfolio/irbis1.png";
import Portfolio5 from "../../../assets/img/portfolio/tefal1.png"; 
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component"; 
import { TabTitle } from "../../TabTitle";
function Portfolio() {
  const { pathname } = useLocation();
  TabTitle(pathname?.slice(1).toUpperCase()+' - Diyorbek Xidirov');
  const data = [
    {
      id: 1,
      title: "Ave Simone",
      category: "Detail",
      image: Portfolio4,
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
      image: Portfolio5,
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
  return (
    <>
      <div id="portfolio" className="tokyo_tm_section animate">
        <div className="container">
          <div className="tokyo_tm_portfolio">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Creative Portfolio</h3>
                </div>
                <div className="portfolio_filter">
                  <ul>
                    <li>
                      <a href="#" className="current" data-filter="*">
                        All
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" data-filter=".vimeo">
                        Vimeo
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".youtube">
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".soundcloud">
                        Soundcloud
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".image">
                        Image
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".detail">
                        Detail
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="list_wrapper">
              <ul className="portfolio_list gallery_zoom">
                {data.map((itm: any,i:any) => (
                  <li className="detail" key={i}>
                    <div className="inner">
                      <div
                        className="entry tokyo_tm_portfolio_animation_wrap"
                        data-title={itm.title}
                        data-category={itm.category}
                      >
                        {" "}
                        <Link
                          className="popup_info"
                          to={`/portfolio/${itm.id}`}
                        >
                          <img src={Thumb1} alt="Error....!!!" />
                          <LazyLoadImage effect={"blur"} src={itm.image} />  
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Portfolio;
