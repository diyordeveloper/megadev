import React from "react";
import { Link } from "react-router-dom";
import Thumbs2 from "../../../assets/img/thumbs/40-25.jpg";
import moment from "moment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
function CardBlog({ blg, i }: { blg: any; i: any }) {
  return (
    <li key={i}>
      <div className="list_inner">
        <div className="image">
          <img src={Thumbs2} alt="Error....!!!" />
          <LazyLoadImage effect={"blur"} src={blg.images[0]} />
          <Link
            className="tokyo_tm_full_link"
            to={`/blogs/${blg._id}`}
          ></Link>
        </div>
        <div className="details">
          <div className="extra">
            <div className="short">
              <p className="date">
                By <a href="#">{blg.author} </a>
                <span>{moment(blg.createdAt).format("ll")}</span>
              </p>
            </div>
            <MoreVertIcon style={{ cursor: "pointer" }} />
          </div>
          <h3 className="title">
            <Link to={`/blogs/${blg._id}`}>
              {blg.title.length >= 60 ? (
                <>{blg.title.substring(0, 60)}...</>
              ) : (
                blg.title.substring(0, 100)
              )}
            </Link>
          </h3>
          <strong>{blg.tags.join(" ")} </strong>
          <div className="tokyo_tm_read_more">
            <div className="df__">
              <Link to={`/blogs/${blg._id}`}>
                <span>Read More</span>
              </Link>
              <div className="icons_">
                <RemoveRedEyeIcon className="eye_" />
                <span>{blg.viewCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardBlog;
