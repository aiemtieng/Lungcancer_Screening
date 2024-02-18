import React from 'react'
import './ForgotPasswordPage.css'
import logolungcancer from "../../../assets/image/logolung.png";
import backgroundlungcancer from "../../../assets/image/backgroundlung.png";
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  return (
    <div className='ForgotPasswordPage'>
        <div className="ForgotPasswordBackground">
        <img
          className="backgroundlogin"
          src={backgroundlungcancer}
          alt="backgroundlogin"
        ></img>
      </div>

      <div className="ForgotPasswordLogo">
        <Link to="/">
          <img className="logologin" src={logolungcancer} alt="logologin"></img>
        </Link>
      </div>

      <div className="InputEmailandPassword">
        <h3 className="textforgot">FORGOT PASSWORD</h3>
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
        </form>
      </div>

      <div className="LinkToPageandButtonLink">
        <button className="buttonsend">Send</button>

        <div className="TextandLinkToLogin">
          <Link to="/loginpage" className="linktologin">
            back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage