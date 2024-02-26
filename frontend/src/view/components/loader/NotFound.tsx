 
import { Link } from "react-router-dom";
import "./style.css";
function NotFound() {
  return (
    <div className="center__">
      <h3>404</h3>
      <h3>Page Not Found</h3>
      <h3>
        <Link to={`/`}>Back</Link>
      </h3>
    </div>
  );
}

export default NotFound;
