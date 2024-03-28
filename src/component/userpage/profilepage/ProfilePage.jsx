import React from "react";
import './ProfilePage.css'
import NavBarUserPage from "../NavBarUserPage";
import backgroundlungcancer from "../../../assets/image/backgroundlung.png";
import userprofile from "../../../assets/image/userprofile.png";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const {logOut,user} = useUserAuth();
    
    const navigate = useNavigate();

    const handleLogout = async()=>{
        try{
            await logOut();
            navigate("/loginpage")
        } catch(err){
            console.log(err.message)
        }
    }
  return (
    <div className="ProfilePage">
      <div className="HomePageBackground">
        <img
          className="backgroundhomepage"
          src={backgroundlungcancer}
          alt="backgroundhomepage"
        ></img>
      </div>
      <NavBarUserPage />

      <img className="ProfileUser" src={userprofile} alt="userprofile"></img>
      <p className="Nameuser">{user.email}</p>
      <buttom className="LogoutButton" onClick={handleLogout}>LogOut</buttom>
    </div>
  );
}

export default ProfilePage;
