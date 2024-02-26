
import Thumbs2 from "../../../assets/img/thumbs/40-25.jpg";
import Skeleton from "react-loading-skeleton";
function LoadingBlog({ cards }: { cards: any }) {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <li key={i}>
            <div className="list_inner">
              <div className="image">
                <img src={Thumbs2} alt="Error....!!!" />
                <Skeleton />
              </div>
              <div className="details">
                <div className="extra">
                  <span>
                    <Skeleton width={200} />
                  </span>
                  <span>
                    <Skeleton width={50} />
                  </span>
                </div>
                <h4 className="title">
                  <Skeleton />
                </h4>
                <div className="tokyo_tm_read_more">
                  <div className="df__">
                    <Skeleton width={150} />
                    <Skeleton width={30} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
    </>
  );
}

export default LoadingBlog;
