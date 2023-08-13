import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <Link className="sidebar-brand" to="/admin">
            <span className="align-middle">MegaDevAdmin</span>
          </Link>
          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>

            <li className="sidebar-item active">
              <Link className="sidebar-link" to="/admin">
                <i className="align-middle" data-feather="sliders"></i>{" "}
                <span className="align-middle">Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
