import React from "react";
import Cursor from "./components/Cursor";
import AnimationLoader from "./components/loader/AnimationLoader";
import LeftBar from "./components/menuBar/LeftBar";
import RightBar from "./components/menuBar/RightBar";
import Topbar from "./components/menuBar/Topbar";
// style
import "./assets/css/plugins.css";
import "./assets/css/dark.css";
import "./assets/css/style.css";
function Dior() {
  return (
    <>
      <AnimationLoader />
      <div className="tokyo_tm_all_wrap" data-magic-cursor="show">
        <Topbar />
        <LeftBar />
        <RightBar />
        <Cursor />
      </div>
    </>
  );
}

export default Dior;
