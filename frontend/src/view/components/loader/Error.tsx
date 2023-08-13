import React from "react";
import "./style.css";
import RefreshIcon from "@mui/icons-material/Refresh";
function Error({ error, height }: { error: any; height: any }) {
  function RefreshPage() {
    // @ts-ignore
    window.location.reload(true);
  }
  return (
    <div className="center__" style={{ height: `${height}` }}>
      <h3>{error}</h3>
      <h3>Check your internet</h3>
      <div className="tokyo_tm_button" style={{ marginTop: "20px" }}>
        <a href="#" onClick={RefreshPage}>
          <div className="df__">
            Refresh <RefreshIcon />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Error;
