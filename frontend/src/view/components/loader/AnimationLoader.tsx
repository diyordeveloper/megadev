import React, { useState } from "react";

function AnimationLoader() {
  const [removeId, setRemoveId] = useState(true);
  const [loadClass, setLoadClass] = useState(false);
  function tokyo_tm_preloader() {
    // var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    //   navigator.userAgent
    // )
    //   ? true
    //   : false;
    setTimeout(function () {
      setLoadClass(true);
    }, 800);
  }
  setTimeout(function () {
    setRemoveId(false);
  }, 2000);
  tokyo_tm_preloader();

  return (
    <>
      <div
        id={removeId ? `preloader` : ""}
        className={`${loadClass && "preloaded"}`}
      >
        <div className="loader_line"></div>
      </div>
    </>
  );
}

export default AnimationLoader;
