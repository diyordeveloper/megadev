// @ts-ignore
import Spinner from "./spinner.gif";
import "./style.css";
function Loading({ height }: { height: any }) {
  return (
    <div className="center__" style={{ height: `${height}` }}>
      <img src={Spinner} alt="Error..." />
      {/* <h3>Loading...</h3> */}
    </div>
  );
}

export default Loading;
