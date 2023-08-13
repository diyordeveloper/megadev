import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dior from "./view/Dior";
import Home from "./view/components/pages/Home";
import About from "./view/components/pages/About/About";
import Service from "./view/components/pages/Service/Service";
import Portfolio from "./view/components/pages/Portfolio/Portfolio";
import Blogs from "./view/components/pages/Blogs/Blogs";
import Contact from "./view/components/pages/Contact";
import ModalBlog from "./view/components/pages/Blogs/ModalBlog";
import ModalPortfolio from "./view/components/pages/Portfolio/ModalPortfolio";
import ModalService from "./view/components/pages/Service/ModalService";
import NotFound from "./view/components/loader/NotFound";
//
import Admin from "./view/admin/Admin";
import Login from "./view/admin/pages/login/Login";
import Panel from "./view/admin/Panel";
//
import { useAppDispatch } from "./view/crud/hook";
import { GET_BLOGS } from "./view/crud/reducer/blogs/BlogsReducer";
// phone Number Input style
import "react-phone-number-input/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// icons
import "./view/assets/css/fontawesome-free-6.2.1-web/css/all.min.css";
// image effect style
import "react-lazy-load-image-component/src/effects/blur.css";
// skeleton style
import "react-loading-skeleton/dist/skeleton.css";
// style
import "./view/assets/css/all.css";
import "./view/assets/css/swiper.css";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GET_BLOGS());
  }, []);
  const name = "fuck";
  const pass = "fuck";
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkLogin, setCheckLogin] = useState<any>(
    localStorage.getItem("user")
  );
  const [errorTxt, setErrorTxt] = useState<any>(false);
  function PressLogin() {
    if (userName == name && password == pass) {
      setCheckLogin(userName);
      localStorage.setItem("user", userName);
    } else {
      setErrorTxt(true);
    }
  }
  function LogOut() {
    setCheckLogin("");
    localStorage.removeItem("user");
    setErrorTxt(false);
  }
  return (
    <>
      <Routes>
        {/* Admin panel */}
        <Route path="/admin" element={<Admin />}>
          <Route
            path="/admin"
            element={
              checkLogin ? (
                <Panel LogOut={LogOut} />
              ) : (
                <Login
                  // @ts-ignore
                  setUserName={setUserName}
                  // @ts-ignore
                  setPassword={setPassword}
                  errorTxt={errorTxt}
                  PressLogin={PressLogin}
                />
              )
            }
          >
            <Route
              path="/admin/blogs"
              element={
                <>
                  <h1>blogsssssssssss</h1>
                </>
              }
            />
          </Route>
        </Route>
        {/* Client front */}
        <Route path="/" element={<Dior />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />}>
            <Route path="/service/:title" element={<ModalService />} />
          </Route>
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="/portfolio/:id:title" element={<ModalPortfolio />} />
          </Route>
          <Route path="/blogs" element={<Blogs />}>
            <Route path="/blogs/:id" element={<ModalBlog />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
