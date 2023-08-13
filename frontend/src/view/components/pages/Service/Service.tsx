import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Facts from "./Facts";
import Partners from "./Partners";
import Pricing from "./Pricing";
import { services } from "./data";
import { TabTitle } from "../../TabTitle";

function Service() {
  const { pathname } = useLocation();
  TabTitle(pathname?.slice(1).toUpperCase()+' - Diyorbek Xidirov');
  return (
    <>
      <div id="service" className="tokyo_tm_section animate">
        <div className="container">
          <div className="tokyo_tm_services">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Services</span>
                  <h3>What I Do</h3>
                </div>
              </div>
            </div>
            <div className="list">
              <ul>
                {services.map(({ title, subtitle }: any, idx: any) => (
                  <li key={idx}>
                    <div className="list_inner">
                      <span className="number">0{idx + 1}</span>
                      <h3 className="title">{title}</h3>
                      <p className="text">{subtitle}</p>
                      <div className="tokyo_tm_read_more">
                        <Link to={`/service/${title}`}>
                          <span>Read More</span>
                        </Link>
                      </div>
                      <Link
                        className="tokyo_tm_full_link"
                        to={`/service/${title}`}
                      ></Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Partners />
        <Facts />
        {/* <Pricing /> */}
      </div>
      <Outlet />
    </>
  );
}

export default Service;
