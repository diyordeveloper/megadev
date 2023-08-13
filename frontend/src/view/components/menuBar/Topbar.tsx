import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Topbar() {
  const [activeBar, setActiveBar] = useState<any>(false);
  function ToggleHamburger() {
    setActiveBar((p: any) => !p);
  }
  return (
    <>
      <div className="tokyo_tm_topbar">
        <div className="topbar_inner">
          <div className="logo">
            <Link to="/">
              {/* <img src={"img/logo/dark.png"} alt="Error..." /> */}
              <h4 style={{ fontWeight: "700" }}>MegaDev</h4>
            </Link>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                activeBar && "is-active"
              }`}
              onClick={ToggleHamburger}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`tokyo_tm_mobile_menu ${activeBar && "opened"}`}>
        <div className="menu_list">
          <ul className="transition_link">
            <li onClick={ToggleHamburger}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={ToggleHamburger}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={ToggleHamburger}>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li onClick={ToggleHamburger}>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li onClick={ToggleHamburger}>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li onClick={ToggleHamburger}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Topbar;
