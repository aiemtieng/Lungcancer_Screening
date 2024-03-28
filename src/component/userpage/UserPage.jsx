import React from "react";
import backgroundlungcancer from "../../assets/image/backgroundlung.png";
import MainPage from "../homepage/mainpage/MainPage";
import NavBarUserPage from "./NavBarUserPage";

function UserPage() {
  return (
    <div className="UserPage">
      <div className="HomePageBackground">
        <img
          className="backgroundhomepage"
          src={backgroundlungcancer}
          alt="backgroundhomepage"
        ></img>
      </div>
      <NavBarUserPage />
      <MainPage />
    </div>
  );
}

export default UserPage;
