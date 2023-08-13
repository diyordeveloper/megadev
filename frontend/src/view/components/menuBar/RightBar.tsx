import React from "react";
import { Outlet } from "react-router-dom";

function RightBar() {
  return (
    <>
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_portfolio_titles"></div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RightBar;
