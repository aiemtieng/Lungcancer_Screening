import React from "react";
import "./HomePage.css";
import backgroundlungcancer from "../../assets/image/backgroundlung.png";
import NavBar from "./navbar/NavBar";
import MainPage from "./mainpage/MainPage";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePageBackground">
        <img
          className="backgroundhomepage"
          src={backgroundlungcancer}
          alt="backgroundhomepage"
        ></img>
      </div>
      <NavBar />
      <MainPage/>
    </div>
  );
}

export default HomePage;
