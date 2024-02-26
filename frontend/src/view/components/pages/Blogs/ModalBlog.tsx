import  { useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import Thumbs3 from "../../../assets/img/thumbs/1-1.jpg";
import { GET_BLOGS_ID } from "../../../crud/reducer/blogs/BlogsReducer";
import { useAppDispatch, useAppSelector } from "../../../crud/hook";
// @ts-ignore
import moment from "moment";
import Loading from "../../loader/Loading";
import Error from "../../loader/Error";
import ReactMarkdown from "react-markdown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import { TabTitle } from "../../TabTitle";
function ModalBlog() {
  // const { pathname } = useLocation();

  const { id } = useParams();
  console.log(id);

  const dispatch = useAppDispatch();
  const { blog, loader_id, error_id } = useAppSelector((state) => state.blogs);
  // @ts-ignore
  TabTitle(`Blog | ${blog.map((i => i.title))}` + ' - Diyorbek Xidirov');

  useEffect(() => {
    dispatch(GET_BLOGS_ID(id));
  }, [id]);
  console.log("blog-----------");
  console.log(blog);
  return (
    <>
      <div className="tokyo_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <Link to="/blogs">
              <i className="icon-cancel"></i>
            </Link>
          </div>
          {loader_id && <Loading height={"100%"} />}
          {!loader_id && error_id ? (
            <Error error={error_id} height={"100%"} />
          ) : null}
          {!loader_id && blog.length
            ? blog.map((_: any, i: any) => (
              <div className="description_wrap" key={i}>
                <div className="image">
                  <img src={Thumbs3} alt="Error....!!!" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${_.images[0]})`,
                    }}
                  ></div>

                  <a className="tokyo_tm_full_link" href="#"></a>
                </div>
                <div className="details">
                  <div className="extra">
                    <div className="short">
                      <p className="date">
                        By <a href="#">{_.author} </a>
                        <span>{moment(_.createdAt).format("ll")}</span>
                      </p>
                    </div>
                    <div className="icons_">
                      <RemoveRedEyeIcon className="eye_" />
                      <span> {_.viewCount} </span>
                      <IconButton>
                        <ShareIcon style={{ cursor: "pointer" }} />
                      </IconButton>
                    </div>
                  </div>
                  <h3 className="title">{_.title}</h3>
                  <strong>{_.tags.join(" ")} </strong>
                </div>
                <div className="main_content">
                  <div className="descriptions">
                    <ReactMarkdown>{_.description}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))
            : null}
        </div>
      </div>
    </>
  );
}

export default ModalBlog;
