import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "./data";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactMarkdown from "react-markdown";
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
                <img src={service.image} alt="Error..." />
                <LazyLoadImage effect={"blur"} src={service.image} />
              </div>
              <div className="main_title">
                <h3>{service.title}</h3>
              </div>
              <div className="descriptions">
                <ReactMarkdown>
                  {service.description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalService;
