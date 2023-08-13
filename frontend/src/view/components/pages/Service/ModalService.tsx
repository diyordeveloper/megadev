import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Thumbs3 from "../../../assets/img/thumbs/40-25.jpg";
import { services } from "./data";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component"; 
function ModalService() {
  const { title } = useParams();
  var sort = services.filter((f: any) => f.title == title);
  var service = sort[0];

  return (
    <>
      <div className="tokyo_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <Link to="/service">
              <i className="icon-cancel"></i>
            </Link>
          </div>
          <div className="description_wrap">
            <div className="service_popup_informations">
              <div className="image">
                <img src={Thumbs3} alt="Error..." />
                <LazyLoadImage effect={"blur"} src={service.image} />
              </div>
              <div className="main_title">
                <h3>{service.title}</h3>
              </div>
              <div className="descriptions">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalService;
