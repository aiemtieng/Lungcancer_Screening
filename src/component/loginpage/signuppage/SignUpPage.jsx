import React from "react";
import "./SignUpPage.css";
import logolungcancer from "../../../assets/image/logolung.png";
import backgroundlungcancer from "../../../assets/image/backgroundlung.png";
import GoogleIcon from "../../../assets/image/google.png";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="SignUpPage">
      <div className="SignUpBackground">
        <img
          className="backgroundsignup"
          src={backgroundlungcancer}
          alt="backgroundsignup"
        ></img>
      </div>

      <div className="SignUpLogo">
        <Link to="/">
          <img className="logosignup" src={logolungcancer} alt="logosignup"></img>
        </Link>
      </div>

      <div className="InputEmailandPassword">
        <h3 className="textsignup">SIGN UP</h3>
        <svg className="lineundersignuptext" width="740" height="10">
          <line
            x1="0"
            y1="5"
            x2="740"
            y2="5"
            style={{ stroke: "white", strokeWidth: "3" }}
          />
        </svg>

        <form className="SignUpTextInput">
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
        <button className="buttonsignup">Sign Up</button>

        <div className="TextandLinkToLogin">
          <p className="textnoaccount">Don't have an account ?</p>
          <Link to="/loginpage" className="linktologin">
            Login Now
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

export default SignUpPage;
