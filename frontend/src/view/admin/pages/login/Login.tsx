import   { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./style.css";
interface Props {
  setUserName: () => void;
  setPassword: () => void;
  PressLogin: () => void;
  errorTxt: any;
  errorLength: any;
}
function Login({ setUserName, setPassword, errorTxt, PressLogin }: Props) {
  const [toggleEye, setToggleEye] = useState<any>(false);
  function Toggle() {
    setToggleEye((p: any) => !p);
  }
  return (
    <>
      <div className="login__">
        <div className="form__">
          <h3>Login</h3>
          {/* <strong>fuck && fuck</strong> */}
          {errorTxt && <strong className="error__">Error</strong>}
          <input
            type={"text"}
            className={"username__"}
            placeholder="Username..."
            autoComplete={"off"}
            // @ts-ignore
            onChange={(e: any) => setUserName(e.target.value)}
          />
          <div className="box__">
            <input
              type={toggleEye ? "text" : "password"}
              autoComplete={"off"}
              className={"password__"}
              placeholder={toggleEye ? "Password..." : "******"}
              // @ts-ignore
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <div className="secret">
              {toggleEye ? (
                <RemoveRedEyeOutlinedIcon onClick={Toggle} className="eye" />
              ) : (
                <VisibilityOffOutlinedIcon onClick={Toggle} className="eye" />
              )}
            </div>
          </div>
          <a onClick={PressLogin} href="#" className="btn__">
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
