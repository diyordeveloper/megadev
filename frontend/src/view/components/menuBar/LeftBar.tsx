import React from "react";
import { NavLink, Link } from "react-router-dom";

function LeftBar() {
  return (
    <>
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Link to="/">
              {/* <img src={"img/logo/dark.png"} alt="Error....!!!" /> */}
              <h4 style={{ fontWeight: "800" }}>MegaDev</h4>
            </Link>
          </div>
          <div className="menu">
            <ul className="transition_link">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>
              2022 ©
              <a href="#" target="_blank">
                {" "}
                megadev.uz.
              </a>
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
