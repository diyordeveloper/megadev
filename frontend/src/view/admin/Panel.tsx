
import SideBar from "./pages/sidebar/SideBar";
import AdminHome from "./pages/AdminHome/AdminHome";

// style...
import "./static/style/style.css";

function Panel({ LogOut }: any) {
  return (
    <>
      <div className="AdminPanel wrapper">
        <SideBar />
        <AdminHome />
      </div>
    </>
  );
}

export default Panel;
