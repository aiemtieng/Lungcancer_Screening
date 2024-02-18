import React from "react";
import "./NavBar.css";
import logolungcancer from "../../../assets/image/logolung.png";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    
    const handleLoginButton = () => {
        navigate("/loginpage");
    };

    return (
        <div className="NavBar">
            <div className="logoandtextname">
                <Link to="/homepage">
                    <img
                        className="logohomepage"
                        src={logolungcancer}
                        alt="logolung"
                    />
                </Link>
                <h3 className="textnameproject">AI System for Lung Cancer Screening</h3>
            </div>

            <div className="texthomeandloginbutton">
                <Link to="/homepage">
                    <h3 className="texthome">Home</h3>
                </Link>
                <button className="homeloginbutton" onClick={handleLoginButton}>Login</button>
            </div>
        </div>
    );
}

export default NavBar;
