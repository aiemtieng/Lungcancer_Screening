import React from "react";
import "./LoginPage.css";
import logolungcancer from "../../assets/image/logolung.png";
import backgroundlungcancer from "../../assets/image/backgroundlung.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/image/google.png";

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="LoginBackground">
        <img
          className="backgroundlogin"
          src={backgroundlungcancer}
          alt="backgroundlogin"
        ></img>
      </div>

      <div className="LoginLogo">
        <Link to="/">
          <img className="logologin" src={logolungcancer} alt="logologin"></img>
        </Link>
      </div>

      <div className="InputEmailandPassword">
        <h3 className="textlogin">LOGIN</h3>
        <svg className="lineUnderLoginText" width="740" height="10">
          <line
            x1="0"
            y1="5"
            x2="740"
            y2="5"
            style={{ stroke: "white", strokeWidth: "3" }}
          />
        </svg>

        <form className="LoginTextInput">
          <h3 className="textemail">Email</h3>
          <input
            className="textemailinput"
            id="emailinput"
            type="email"
            placeholder="( Enter your email )"
          ></input>
          <svg className="lineunderemailtext" width="740" height="10">
            <line
              x1="0"
              y1="5"
              x2="740"
              y2="5"
              style={{ stroke: "white", strokeWidth: "1.5" }}
            />
          </svg>

          <h3 className="textpassword">Password</h3>
          <input
            className="textpasswordinput"
            id="passwordinput"
            type="password"
            placeholder="( Enter your password )"
          ></input>
          <svg className="lineunderemailtext" width="740" height="10">
            <line
              x1="0"
              y1="5"
              x2="740"
              y2="5"
              style={{ stroke: "white", strokeWidth: "1.5" }}
            />
          </svg>
        </form>
      </div>

      <div className="LinkToPageandButtonLink">
        <Link to="/forgotpasswordpage" className="textforgotpassword">
          forgot password
        </Link>
        <button className="buttonlogin">Login</button>

        <div className="TextandLinkToSignUp">
          <p className="textnoaccount">Don't have an account ?</p>
          <Link to="/signuppage" className="linktosignup">
            Sign Up
          </Link>
        </div>

        <p className="textor">or</p>
        <button className="buttonlogigwithgoogle">
          <img src={GoogleIcon} alt="GoogleIcon"></img>
          <p className="textloginwithgoogle">Login with Google</p>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
