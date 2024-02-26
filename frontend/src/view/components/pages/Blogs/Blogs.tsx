
import { Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../crud/hook";
import Error from "../../loader/Error";
import LoadingBlog from "./LoadingBlog";
import CardBlog from "./CardBlog";
import { TabTitle } from "../../TabTitle";
function Blogs() {
  const { blogs, loader, error } = useAppSelector((state) => state.blogs);
  const { pathname } = useLocation();
  TabTitle(pathname?.slice(1).toUpperCase()+' - Diyorbek Xidirov');
  return (
    <>
      <div id="news" className="tokyo_tm_section">
        <div className="container">
          <div className="tokyo_tm_news">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Blogs</span>
                  <h3>Latest Blogs</h3>
                </div>
              </div>
            </div>
            {!loader && error ? <Error error={error} height={"50vh"} /> : null}
            <ul>
              {loader && <LoadingBlog cards={10} />}
              {!loader && blogs.length
                ? blogs.map((blg: any, i: any) => <CardBlog blg={blg} i={i} />)
                : null}
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Blogs;
