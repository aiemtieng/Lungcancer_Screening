import React, { useState } from "react";
import "./LoginPage.css";
import logolungcancer from "../../assets/image/logolung.png";
import backgroundlungcancer from "../../assets/image/backgroundlung.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/image/google.png";
import { useUserAuth } from "../../context/UserAuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/userpage");
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <div className="LoginPage">
      <div className="LoginBackground">
        <img
          className="backgroundlogin"
          src={backgroundlungcancer}
          alt="backgroundlogin"
        />
      </div>

      <div className="LoginLogo">
        <Link to="/">
          <img className="logologin" src={logolungcancer} alt="logologin" />
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

        <form className="LoginTextInput" onSubmit={handleSubmit}>
          <h3 className="textemail">Email</h3>
          <input
            className="textemailinput"
            id="emailinput"
            type="email"
            placeholder="( Enter your email )"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <svg className="lineunderemailtext" width="740" height="10">
            <line
              x1="0"
              y1="5"
              x2="740"
              y2="5"
              style={{ stroke: "white", strokeWidth: "1.5" }}
            />
          </svg>

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

            <button className="buttonloginwithgoogle">
              <img src={GoogleIcon} alt="GoogleIcon" />
              <p className="textloginwithgoogle">Login with Google</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
