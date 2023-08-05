import React from "react";
import { Routes, Route } from "react-router-dom";

// components...
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";

// style...
import "./assets/style/swiper-bundle.min.css";
import "./assets/style/aos.css";
import "./assets/style/animate.css";
import "./assets/style/global.css";
import "./assets/style/app.css";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
