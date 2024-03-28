import React from "react";
import "./NavBarUserPage.css";
import logolungcancer from "../../assets/image/logolung.png";
import { Link, useNavigate } from "react-router-dom";
import userprofile from "../../assets/image/userprofile.png";

function NavBarUserPage() {
  return (
    <div className="NavBar">
      <div className="logoandtextname">
        <Link to="/homepage">
          <img className="logohomepage" src={logolungcancer} alt="logolung" />
        </Link>
        <h3 className="textnameproject">AI System for Lung Cancer Screening</h3>
      </div>

      <div className="texthomeandloginbutton">
        <Link to="/userpage">
          <h3 className="texthome">Home</h3>
        </Link>
        <Link to="/profilepage">
          <img
            className="UserProfile"
            src={userprofile}
            alt="uesrprofile"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default NavBarUserPage;
