import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./view/crud/store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <SkeletonTheme
      baseColor="#c6c6c633"
      highlightColor="#fff"
      // baseColor="#202020"
      // highlightColor="#444"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  </Provider>
);
